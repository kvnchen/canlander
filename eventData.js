const { deckDictionary, deckNameMap, families } = require('./deckDictionary.js');
const { playerNameMap } = require('./playerDictionary.js');

const ARCHETYPES = new Set(['midrange', 'combo', 'aggro', 'tempo', 'control', 'stax']);

const csvNameMap = {
    name: 'Name',
    played: 'Played Count',
    uniquePilots: 'Unique Pilots',
    totalPoints: 'Total Points',
    average: 'Average Points',
    winrate: 'Winrate',
    trophies: 'Trophies',
    colors: 'Colors',
    archetypes: 'Archetypes',
    pointsBreakdown: '2-X or better Count',
    '2-XBetter': '2-X or better Count',
    eventCount: 'Events',
    deckCount: 'Unique Decks',
    decks: 'Unique Decks',
    metagameShare: 'Metagame Share',
    newPlayers: 'New Players',
    newDecks: 'New Decks',
    playerPersonalBests: 'Player Personal Best',
    deckNewBest: 'Deck New Best',
    nicknames: 'Nicknames',
    members: 'Members',
    mostPlayed: 'Most Played Decks',
    longestStreak: 'Longest Positive Record Streak',
    activePlayerStreak: 'Player Positive Record Streak (Weeks)',
    W: 'White',
    U: 'Blue',
    B: 'Black',
    R: 'Red',
    G: 'Green'
};

const archetypeNameMap = {
    midrange: 'Midrange',
    control: 'Control',
    combo: 'Combo',
    aggro: 'Aggro',
    tempo: 'Tempo',
    stax: 'Stax',
};

const colorToNameMap = {
    W: 'Mono White',
    U: 'Mono Blue',
    B: 'Mono Black',
    R: 'Mono Red',
    G: 'Mono Green',

    WU: 'Azorius',
    UB: 'Dimir',
    BR: 'Rakdos',
    RG: 'Gruul',
    WG: 'Selesnya',

    WB: 'Orzhov',
    WR: 'Boros',
    BG: 'Golgari',
    UR: 'Izzet',
    UG: 'Simic',

    WUB: 'Esper',
    UBR: 'Grixis',
    BRG: 'Jund',
    WRG: 'Naya',
    WUG: 'Bant',

    WUR: 'Jeskai',
    WBR: 'Mardu',
    URG: 'Temur',
    WBG: 'Abzan',
    UBG: 'Sultai',

    WUBR: 'WUBR',
    WUBG: 'WUBG',
    WURG: 'WURG',
    WBRG: 'WBRG',
    UBRG: 'UBRG',

    WUBRG: '5 Color'
};

// MTG Tournaments score draws as 1 point, and wins as 3 points
// hence counting draws as 1/3 of a win
function calcWinrate(wins, losses, draws) {
    if ((wins + losses + draws) > 0) {
        return ((wins + (draws / 3)) / (wins + losses + draws)).toFixed(2);
    } else return 0;
}

function calcAverage(score, count) {
    if (count > 0) {
        return (score / count).toFixed(2);
    } else return 0;
}

// calculates points based on record
function processRecord(record) {
    const [wins, , draws] = record;
    return (wins * 3) + (draws || 0);
}

function processItem(item, deck) {
    item.decks++;
    item.played += deck.played;
    item.totalPoints += deck.totalPoints;
    item.wins += deck.wins;
    item.losses += deck.losses;
    item.draws += deck.draws;
    item.trophies += deck.trophies;
    item['2-XBetter'] += Object.keys(deck.pointsBreakdown).reduce((accumulator, current) => {
        return (Number(current) >= 6 ? (accumulator + deck.pointsBreakdown[current]) : accumulator);
    }, 0);

    if (item.hasOwnProperty('members')) {
        item.members.add(deck.name);
    }
}

function generateDataTemplate(collection, decks, modifyEntry, processMapFunc, filterUnplayed = false) {
    const map = {};
    const defaultEntry = {
        name: '',
        decks: 0,
        played: 0,
        metagameShare: 0,
        totalPoints: 0,
        average: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        winrate: 0,
        trophies: 0,
        '2-XBetter': 0
    };

    for (const key of collection) {
        map[key] = modifyEntry(Object.assign({}, defaultEntry), key, collection);
    }

    for (const deck of Object.values(decks)) {
        processMapFunc(map, deck);
    }

    for (const a of collection) {
        map[a].average = calcAverage(map[a].totalPoints, map[a].played);
        map[a].winrate = calcWinrate(map[a].wins, map[a].losses, map[a].draws);
        map[a].metagameShare = calcAverage(map[a].played, countTotalGames(decks));
    }

    if (filterUnplayed) {
        for (const key of Object.keys(map)) {
            if (map[key].played === 0) {
                delete map[key];
            }
        }
    }

    return map;
}

function generateWUBRGData(decks) {
    function modify(entry, key) {
        entry.name = csvNameMap[key];
        return entry;
    }

    function process(map, deck) {
        if (!!deck && !!deck.colors) {
            for (const c of deck.colors) {
                processItem(map[c], deck);
            }
        }
    }

    return generateDataTemplate(['W', 'U', 'B', 'R', 'G'], decks, modify, process);
}

function generateArchetypeData(collection, nameMap, property, decks, filterUnplayed = false) {
    function modify(entry, key) {
        entry.name = nameMap[key];
        return entry;
    }

    function process(map, deck) {
        if (!!deck[property]) {
            if (typeof deck[property] === 'object' && deck[property].size > 0) {
                for (const entry of deck[property]) {
                    processItem(map[entry], deck);
                }
            } else if (typeof deck[property] === 'string') {
                processItem(map[deck[property]], deck);
            }
        }
    }

    return generateDataTemplate(collection, decks, modify, process, filterUnplayed);
}

// different iteration structure from generateArchetypeData
// a deck can be a part of many families, and doesn't by default track which families it belongs to. Though this can be changed
function generateFamilyData(collection, decks, filterUnplayed = false) {
    const map = {};

    for (const key of Object.keys(collection)) {
        map[key] = {
            name: collection[key].name,
            decks: 0,
            played: 0,
            metagameShare: 0,
            totalPoints: 0,
            average: 0,
            wins: 0,
            losses: 0,
            draws: 0,
            winrate: 0,
            trophies: 0,
            '2-XBetter': 0,
            members: new Set()
        };

        for (const deckName of collection[key].variants) {
            const deck = decks[deckName];
            if (!!deck) {
                processItem(map[key], deck);
            }
        }
        map[key].average = calcAverage(map[key].totalPoints, map[key].played);
        map[key].winrate = calcWinrate(map[key].wins, map[key].losses, map[key].draws);
        map[key].metagameShare = calcAverage(map[key].played, countTotalGames(decks));
    }

    if (filterUnplayed) {
        for (const key of Object.keys(map)) {
            if (map[key].played === 0) {
                delete map[key];
            }
        }
    }

    return map;
}

function countTotalGames(decks) {
    let count = 0;
    for (const deck of Object.values(decks)) {
        count += deck.played;
    }
    return count;
}

function isNewRecord(points, pointsBreakdown) {
    const bestSoFar = Object.keys(pointsBreakdown).reduce((prev, current) => { return Math.max(Number(prev), Number(current)) });
    return points > bestSoFar;
}

function getPlayerName(str) {
    str = str.toLowerCase();
    if (playerNameMap[str]) {
        return playerNameMap[str];
    } else return str;
}

class Player {
    constructor(name, events, total, deck, trophies, record) {
        this.name = name;
        this.eventCount = events;
        this.totalPoints = total;
        this.decks = deck ? {[deck]: 1} : {};
        this.deckCount = Object.keys(this.decks).length;
        this.average = calcAverage(total, events);
        this.trophies = trophies || 0;
        this.pointsBreakdown = {[total]: 1};
        this.wins = 0;
        this.losses = 0;
        this.draws = 0;
        this.winrate = 0;
        this.activeStreak = 0; // number of consecutive weeks (including the latest event) with a positive record
        this.longestStreak = 0;

        if (Array.isArray(record)) {
            const [wins, losses, draws] = record;
            this.wins = wins;
            this.losses = losses;
            this.draws = draws || 0;
            this.winrate = calcWinrate(this.wins, this.losses, this.draws);

            if (wins >= 2) {
                this.activeStreak = 1;
                this.longestStreak = 1;
            }
        }
    }

    update(points, deck, trophy, record) {
        this.eventCount++;
        this.totalPoints += points;
        this.average = calcAverage(this.totalPoints, this.eventCount);
        if (this.pointsBreakdown[points]) {
            this.pointsBreakdown[points]++;
        } else {
            this.pointsBreakdown[points] = 1;
        }
        if (deck) {
            if (this.decks[deck] !== undefined) {
                this.decks[deck]++;
            } else {
                this.decks[deck] = 1;
            }
            this.deckCount = Object.keys(this.decks).length;
        }
        if (trophy) {
            this.trophies++;
        }

        if (Array.isArray(record)) {
            const [wins, losses, draws] = record;
            this.wins += wins || 0;
            this.losses += losses || 0;
            this.draws += draws || 0;
            this.winrate = calcWinrate(this.wins, this.losses, this.draws);

            if (wins >= 2) {
                this.activeStreak++;
                if (this.activeStreak > this.longestStreak)
                    this.longestStreak = this.activeStreak;
            } else {
                this.activeStreak = 0;
            }
        }
    }

    // return a sorted array of the three most played deck names in descending order
    mostPlayedDecks() {
        const sorted = Object.keys(this.decks).sort((a, b) => { return this.decks[b] - this.decks[a]; });
        return sorted.slice(0, 3).map((str) => { return deckDictionary[str] ? deckDictionary[str].name : str; });
    }
}

class Deck {
    constructor({ name, played, totalPoints, trophies, uniquePilots, record, colors, archetypes, nicknames }) {
        this.name = name; // proper capitalized name
        this.played = played || 0;
        this.totalPoints = totalPoints || 0;
        this.trophies = trophies || 0;
        this.uniquePilots = uniquePilots || new Set();
        this.average = calcAverage(totalPoints, played);
        this.pointsBreakdown = {[totalPoints]: 1};
        this.nicknames = nicknames || new Set();

        this.wins = 0;
        this.losses = 0;
        this.draws = 0;
        this.winrate = 0;

        if (Array.isArray(record)) {
            const [wins, losses, draws] = record;
            this.wins = wins || this.wins;
            this.losses = losses || this.losses;
            this.draws = draws || this.draws;
            this.winrate = calcWinrate(this.wins, this.losses, this.draws);
        }

        this.colors = colors || null;
        this.archetypes = archetypes || new Set();
        this.matchups = {};
    }

    update(pilot, points, trophy, record) {
        this.played++;
        this.uniquePilots.add(pilot);
        this.totalPoints += points;
        this.trophies += trophy || 0;
        this.average = calcAverage(this.totalPoints, this.played);

        if (this.pointsBreakdown[points]) {
            this.pointsBreakdown[points]++;
        } else {
            this.pointsBreakdown[points] = 1;
        }
        
        if (Array.isArray(record)) {
            const [wins, losses, draws] = record;
            this.wins += wins;
            this.losses += losses;
            this.losses += draws || 0;
            this.winrate = calcWinrate(this.wins, this.losses, this.draws);
        }
    }

    updateMatchup(deckName, record) {
        const wins = record[0] > record[1] ? 1 : 0;
        const losses = record[0] < record[1] ? 1 : 0;
        const draws = record[0] === record[1] ? 1 : 0;

        if (this.matchups[deckName] === undefined) {
            this.matchups[deckName] = {
                played: 0,
                wins: 0,
                losses: 0,
                draws: 0,
                winrate: 0
            };
        }
        this.matchups[deckName].played++;
        this.matchups[deckName].wins += wins;
        this.matchups[deckName].losses += losses;
        this.matchups[deckName].draws += draws;
        this.matchups[deckName].winrate = calcWinrate(this.matchups[deckName].wins, this.matchups[deckName].losses, this.matchups[deckName].draws);
    }
}

class Event {
    // players: <Array> [name, [record], trophy]
    // decks: <Object> { playerName: deckName }
    constructor(name, players, decks, series) {
        this.name = name;
        this.players = {}; // storing name, deck, record should be sufficient here
        this.decks = {};
        this.archetypes = {};
        this.colors = {};
        this.families = {};
        this.newPlayers = new Set();
        this.newDecks = new Set();
        this.playerPersonalBests = {};
        this.deckNewBest = {};
        this.playerStreaks = {}; // TODO - 2-x streaks

        for (const p of players) {
            let [playerName, record, trophy] = p;
            playerName = playerName.toLowerCase();
            const points = processRecord(record);
            this.players[playerName] = {
                name: playerName,
                record: record,
                trophy: trophy,
                deck: decks[playerName]
            };
            if (series.players[playerName] === undefined) {
                this.newPlayers.add(playerName);
            } else if (isNewRecord(points, series.players[playerName].pointsBreakdown)) {
                this.playerPersonalBests[playerName] = record;
            }

            

            const deckName = decks[playerName]; // raw deck name from parser
            const deckKey = deckNameMap[deckName] || deckName;

            if (this.decks[deckKey] === undefined) {
                let deckObj, colors, archetypes, nicknames, properName = deckName;

                // careful with unknown
                if (!!deckKey && !!deckDictionary[deckKey]) {
                    deckObj = deckDictionary[deckKey];
                    colors = deckObj.colors;
                    archetypes = deckObj.archetypes;
                    properName = deckObj.name;
                    nicknames = deckObj.nicknames;
                }
                this.decks[deckKey] = new Deck({
                    name: properName, 
                    played: 1, 
                    totalPoints: points, 
                    trophies: trophy, 
                    uniquePilots: new Set(playerName), 
                    record, 
                    colors, 
                    archetypes,
                    nicknames
                }); // is this overkill?
            } else {
                this.decks[deckKey].update(playerName, points, trophy, record);
            }
            
            if (series.decks[deckKey] === undefined) {
                this.newDecks.add(deckKey);
            } else if (isNewRecord(points, series.decks[deckKey].pointsBreakdown)) {
                this.deckNewBest[deckKey] = record;
            }
        }

        this.archetypes = generateArchetypeData(ARCHETYPES, archetypeNameMap, 'archetypes', this.decks, true);
        this.colors = generateArchetypeData(Object.keys(colorToNameMap), colorToNameMap, 'colors', this.decks, true);
        this.families = generateFamilyData(families, this.decks, true);
    }

    // this needs to be called after all series updates are processed
    processStreaks(series) {
        const streaks = {};

        for (const p of Object.values(this.players)) {
            const playerName = p.name;
            if (!!series.players[playerName] && series.players[playerName].activeStreak >= 2) {
                streaks[playerName] = series.players[playerName].activeStreak;
            }
        }

        this.playerStreaks = Object.keys(streaks)
            .sort((a, b) => { return streaks[b] - streaks[a] })
            .map((player) => { return `${player} (${series.players[player].activeStreak})` });
    }
}

class Series {
    constructor() {
        this.players = {};
        this.decks = {};
        this.events = {};
        this.eventCount = 0;
        this.lastEvent = null;
    }

    addPlayer(player) {
        const lower = player.name.toLowerCase();
        if (this.players[lower] === undefined) {
            this.players[lower] = player;
        } else {
            throw new Error(`Player ${lower} already exists!`);
        }
    }

    update(playerName, points, deckObj, trophy, record) {
        const deckKey = deckObj.key;
        if (this.players[playerName] !== undefined) {
            this.players[playerName].update(points, deckKey, trophy, record);
        } else {
            this.addPlayer(new Player(playerName, 1, points, deckKey, trophy, record));
        }

        if (this.decks[deckKey] !== undefined) {
            this.decks[deckKey].update(playerName, points, trophy, record);
        } else {
            const pilots = new Set();
            pilots.add(playerName);
            this.decks[deckKey] = new Deck({
                name: deckObj.name, 
                played: 1, 
                totalPoints: points, 
                trophies: trophy, 
                uniquePilots: pilots, 
                record, 
                colors: deckObj.colors, 
                archetypes: deckObj.archetypes,
                nicknames: deckObj.nicknames
            });
        }
    }

    // entrants: [playerName (lowercase), record[], trophy]
    // deckMap: { playerName: deckName (lower case, space separated) }
    processWeek(entrants, deckMap, week, reporting) {
        if (entrants.length !== Object.keys(deckMap).length) {
            console.log('Record count discrepancy detected!', week);
        }

        this.events[week] = new Event(week, entrants, deckMap, this);
        this.lastEvent = week;

        for (const player of entrants) {
            let [name, record, trophy] = player;
            name = getPlayerName(name);
            let deckName = deckMap[name];
            
            if (!deckName) {
                console.log(`Missing deck for ${name} on ${week}!`);
                deckName = 'unknown';
            }
            
            let deckObj = { name: deckName, key: deckName };
            if (deckNameMap[deckName] && deckDictionary[deckNameMap[deckName]]) {
                deckObj = deckDictionary[deckNameMap[deckName]];
                deckObj.key = deckNameMap[deckName];
                deckMap[name] = deckNameMap[deckName];
            } else {
                console.log(`Missing deck dictionary entry for ${deckName} on ${week}!`);
            }
            this.update(name, processRecord(record), deckObj, trophy, record);
        }
        this.events[week].processStreaks(this);
        this.eventCount++;

        if (reporting) {
            if (!Array.isArray(reporting)) {
                reporting = parseReporting(reporting);
            }
            if (week === 'feb18') {
                console.log(reporting);
            }
            this.processMatchups(reporting, deckMap);
        }
    }
    
    processMatchups(pairings, deckMap) {
        for (const match of pairings) {
            const deckA = deckMap[match[0][0]];
            const deckB = deckMap[match[0][1]];
            const record = match[1];

            if (!deckA) {
                console.log(`Missing deck for ${match[0][0]}!`);
            }
            if (!deckB) {
                console.log(`Missing deck for ${match[0][1]}!`);
            }

            if (!!this.decks[deckA] && !!this.decks[deckB] && (deckA !== deckB)) {
                this.decks[deckA].updateMatchup(deckB, record);
                this.decks[deckB].updateMatchup(deckA, [record[1], record[0]]);
            }
        }
    }
}

function parseDecklists(dump) {
    const dict = {};
    dump.split('\n').forEach((line) => {
        // goddamnit rick
        let name, deck;

        line = line.trim().toLowerCase();
        if (line.includes(' - ')) {
            [name, deck] = line.split(' - ');
        } else if (line.includes('(')) {
            name = line.match(/.+(?=\s\()/)[0];
            deck = line.match(/(?<=\()[\w\s-&]+/)[0];
        }

        // sometimes missing reporting data
        if (name !== undefined) {
            name = getPlayerName(name); // transform happens here, and in processWeek() on entrants side, for consistency
            dict[name] = deck;
        }
    });
    return dict;
}

/**
 * only need one entry per pair, per round
 * will convert this data to deck matchup data
 * 
 * [
 *   [ [player1, player2], [record]],
 * ]
 */
function parseReporting(blob) {
    const output = [];

    blob.match(/.+\s\d\s?-\s?\d\s.+/g).forEach((line) => {
        const r = /\s+\d\s?-\s?\d\s/g;
        const players = line.split(r).map((str) => { return getPlayerName(str.split(/\s?\(.+/)[0].trim()) });
        const record = line.match(r)[0].trim().split(/\s?-\s?/).map((s) => { return Number(s) });

        output.push([players, record]);
    });

    return output;
}

/**
 * Should not be missing data like reportings often do.
 * backtracking makes this more complicated
 * 
 * problem: need to compare points to previous round's points to determine match result
 * 
 * I think this is doomed to be way too complicated and error prone
 * 
 * yea... abort
 */
// function parsePairings(pairings) {
//     // map of player name to an array of indicies of pairing locations within results arrays
//     const nameMap = {};

//     const r1Results = [];
//     const r2Results = [];
//     const r3Results = [];

//     const r1Split = pairings[0].split('\n');
//     for (let i = 0; i < r1Split.length; i++) {
//         const line = r1Split[i];
//         const [player1, player2] = line.split(/\svs\s/).map((str) => { return getPlayerName(str) });
//         r1Results.push([[player1, player2], null]);
//         nameMap[player1] = {
//             points: [],
//             indicies: [i]
//         };
//         nameMap[player2] = {
//             points: [],
//             indicies: [i]
//         };
//     }

//     const r2Split = pairings[1].split('\n');
//     for (let j = 0; j < r2Split.length; j++) {
//         const line = r2Split[j];
//         let [p1, p2] = line.split(/\svs\s/);
//         const p1Name = getPlayerName(p1.match(/.+(?=\s\(\d\spts\))/g)[0]);
//         const p1Points = Number(p1.match(/\d(?=\spts\))/g)[0]);

//         const p2Name = getPlayerName(p2.match(/.+(?=\s\(\d\spts\))/g)[0]);
//         const p2Points = Number(p2.match(/\d(?=\spts\))/g)[0]);

//         if (!nameMap[p1Name]) {
//             throw new Error(`Name mismatch for ${p1Name}!`);
//         } else if (!nameMap[p2Name]) {
//             throw new Error(`Name mismatch for ${p2Name}!`);
//         } else {
//             r2Results.push([p1Name, p2Name], null);

//             // this is a disaster
//             if (nameMap[p1Name].points.length === 0 && nameMap[p1Name].indicies.length === 1) {
//                 nameMap[p1Name].points.push(p1Points);
//                 nameMap[p1Name].indicies.push(j);
//             }

//             if (nameMap[p2Name].points.length === 0 && nameMap[p2Name].indicies.length === 1) {
//                 nameMap[p2Name].points.push(p2Points);
//                 nameMap[p2Name].indicies.push(j);
//             }

//             // oh god
//             let resultIndex = nameMap[p1Name].indicies[0];
//             if (r1Results[resultIndex][1] === null) {
//                 let record;
//                 if (p1Points === 3) {
//                     record = [2,0]; // we don't care about actual game score
//                 } else if (p1Points === 1) {
//                     record = [1,1];
//                 } else {
//                     record = [0,2];
//                 }
    
//                 r1Results[resultIndex][1] = record;
//             }
//         }
//     }

//     console.log(r1Results);
//     console.log(r2Results);
// }

function sortPlayers(series, comparator) {
    const extract = [];
    for (const player of Object.values(series.players)) {
        extract.push([player.name, player.trophies, player.totalPoints]);
    }
    extract.sort(comparator);
    return extract;
}

const byWins = (a, b) => {
    if (a[1] < b[1])
        return 1;
    if (a[1] > b[1])
        return -1;
    return 0;
};
const byPoints = (a, b) => {
    if (a[2] < b[2])
        return 1;
    if (a[2] > b[2])
        return -1;
    return 0;
};

/**
 * series: series object
 * subject: primary object type from which header data is pulled
 * headers: an array of property names of the subject, representing CSV columns
 * 
 * note: is there a more flexible way to do this?
 * solved this in processItems, need to go back and fix for decks/players
 */
const formatCSV = function(series, subject, headers, preSort, postSort, skipHeaders = false) {
    let blob = [];
    let collection;

    if (series.hasOwnProperty(subject)) {
        collection = series[subject]
    }

    switch (subject) {
        case 'archetypes':
            collection = generateArchetypeData(ARCHETYPES, archetypeNameMap, 'archetypes', series.decks);
            break;
        case 'colors':
            collection = generateArchetypeData(Object.keys(colorToNameMap), colorToNameMap, 'colors', series.decks);
            break;
        case 'families':
            collection = generateFamilyData(families, series.decks);
            break;
        case 'lastEventArchetypes':
            collection = series.events[series.lastEvent].archetypes;
            break;
        case 'lastEventColors':
            collection = series.events[series.lastEvent].colors;
            break;
        case 'wubrg':
            collection = generateWUBRGData(series.decks);
            break;
        case 'lastEventWUBRG':
            collection = generateWUBRGData(series.events[series.lastEvent].decks);
            break;
    }

    const headerMap = {
        'uniquePilots': (s) => { return s.size },
        'archetypes': (s) => { return `"${[...s].join(', ')}"` },
        'pointsBreakdown': (breakdown) => {
            return Object.keys(breakdown).reduce((accumulator, current) => {
                return (Number(current) >= 6 ? (accumulator + breakdown[current]) : accumulator);
            }, 0);
        },
        'nicknames': (s) => { return `"${[...s].join(', ')}"` },
        'members': (s) => { return `"${[...s].join(', ')}"` },
    };

    const altMap = {
        'mostPlayed': (p) => { return `"${p.mostPlayedDecks().join(', ')}"` }
    };

    if (typeof collection !== 'object' || !Array.isArray(headers))
        return '';

    let values = Object.values(collection);
    if (preSort) {
        values = values.sort(preSort);
    }

    const firstLine = [];
    if (!skipHeaders) {
        for (const h of headers) {
            firstLine.push(csvNameMap[h] ? csvNameMap[h] : h);
        }
    }

    for (const item of values) {
        const line = [];
        for (const header of headers) {
            const property = item[header];
            if (!!property && (typeof property === 'object')) {
                if (headerMap[header]) {
                    line.push(headerMap[header](property));
                }
                else if (Array.isArray(property)) {
                    line.push(property.length);
                } else if (property.size) {
                    line.push(property.size);
                } else {
                    line.push(Object.keys(property).length);
                }
            } else if (altMap[header]) {
                line.push(altMap[header](item));
            } else {
                line.push(property);
            }
        }
        blob.push(line);
    }

    // postSort makes this very ugly
    if (postSort) {
        blob = blob.sort(postSort);
    }
    blob = blob.map((line) => { return line.join(', ') });

    if (!skipHeaders) {
        blob.unshift(firstLine.join(', '));
    }

    return blob.join('\n');
};

const formatEventMisc = function(series) {
    const event = series.events[series.lastEvent];

    const blob = [];

    const properDeckNames = [...event.newDecks].map((key) => { return deckDictionary[key].name });

    blob.push(`${csvNameMap.newPlayers}, ` + `"${[...event.newPlayers].join(', ')}"`);
    blob.push(`${csvNameMap.newDecks}, ` + `"${properDeckNames.join(', ')}"`);
    
    const playerPersonalBests = [];
    for (const player of Object.keys(event.playerPersonalBests)) {
        playerPersonalBests.push(`${player} ${event.playerPersonalBests[player].join('-')}`);
    }
    blob.push(`${csvNameMap.playerPersonalBests}, ` + `"${playerPersonalBests.join(', ')}"`);

    const deckNewBest = [];
    for (const deck of Object.keys(event.deckNewBest)) {
        deckNewBest.push(`${deckDictionary[deck].name} ${event.deckNewBest[deck].join('-')}`);
    }
    blob.push(`${csvNameMap.deckNewBest}, ` + `"${deckNewBest.join(', ')}"`);

    blob.push(`${csvNameMap.activePlayerStreak}, "${event.playerStreaks.join(', ')}"`);

    return blob.join('\n');
};

exports.Player = Player;
exports.Series = Series;
exports.Deck = Deck;
exports.parseDecklists = parseDecklists;
exports.parseReporting = parseReporting;
exports.formatCSV = formatCSV;
exports.formatEventMisc = formatEventMisc;
