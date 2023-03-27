const { deckDictionary, deckNameMap, families } = require('./deckDictionary.js');

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
    members: 'Members'
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

function generateArchetypeData(collection, nameMap, property, decks, filterUnplayed = false) {
    const map = {};
    let totalPlayed = 0;

    for (const key of collection) {
        map[key] = {
            name: nameMap[key],
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
    }

    for (const deck of Object.values(decks)) {
        if (!!deck[property]) {
            if (typeof deck[property] === 'object' && deck[property].size > 0) {
                for (const entry of deck[property]) {
                    processItem(map[entry], deck);
                }
            } else if (typeof deck[property] === 'string') {
                processItem(map[deck[property]], deck);
            }
        }
        totalPlayed += deck.played;
    }

    for (const a of collection) {
        map[a].average = calcAverage(map[a].totalPoints, map[a].played);
        map[a].winrate = calcWinrate(map[a].wins, map[a].losses, map[a].draws);
        map[a].metagameShare = calcAverage(map[a].played, totalPlayed);
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

// very similar to generateArchetypeData
function generateFamilyData(collection, decks, totalPlayed, filterUnplayed = false) {
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
        map[key].metagameShare = calcAverage(map[key].played, totalPlayed);
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

        if (Array.isArray(record)) {
            const [wins, losses, draws] = record;
            this.wins = wins;
            this.losses = losses;
            this.draws = draws || 0;
            this.winrate = calcWinrate(this.wins, this.losses, this.draws);
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
        }
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
        this.deckStreaks = {}; // TODO

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
        this.families = generateFamilyData(families, this.decks, countTotalGames(this.decks), true);
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
    processWeek(entrants, deckMap, week) {
        if (entrants.length !== Object.keys(deckMap).length) {
            console.log('Record count discrepancy detected!', week);
        }

        this.events[week] = new Event(week, entrants, deckMap, this);
        this.lastEvent = week;

        for (const player of entrants) {
            let [name, record, trophy] = player;
            name = name.toLowerCase();
            let deckName = deckMap[name];
            
            if (!deckName) {
                console.log(`Missing deck for ${name} on ${week}!`);
                deckName = 'unknown';
            }
            
            let deckObj = { name: deckName, key: deckName };
            if (deckNameMap[deckName] && deckDictionary[deckNameMap[deckName]]) {
                deckObj = deckDictionary[deckNameMap[deckName]];
                deckObj.key = deckNameMap[deckName];
            } else {
                console.log(`Missing deck dictionary entry for ${deckName} on ${week}!`);
            }
            this.update(name, processRecord(record), deckObj, trophy, record);
        }
        this.eventCount++;
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
        if (name !== undefined)
            dict[name] = deck;
    });
    return dict;
}

// used in 2022 archive, 2023 uses Series.processWeek()
function processWeek(entrants, deckMap) {
    for (const player of entrants) {
        let [name, points, trophy] = player;
        name = name.toLowerCase();
        series.update(name, points, deckMap[name], trophy);
    }
    series.eventCount++;
}

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
            collection = generateFamilyData(families, series.decks, countTotalGames(series.decks));
            break;
        case 'lastEventArchetypes':
            collection = series.events[series.lastEvent].archetypes;
            break;
        case 'lastEventColors':
            collection = series.events[series.lastEvent].colors;
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

    return blob.join('\n');
};

exports.Player = Player;
exports.Series = Series;
exports.Deck = Deck;
exports.parseDecklists = parseDecklists;
exports.processWeek = processWeek;
exports.formatCSV = formatCSV;
exports.formatEventMisc = formatEventMisc;
