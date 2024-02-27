const { deckDictionary, deckNameMap, families } = require('./deckDictionary.js');
const { playerNameMap, properNames } = require('./playerDictionary.js');

const ARCHETYPES = new Set(['midrange', 'combo', 'aggro', 'tempo', 'control', 'stax']);

const HYBRID_ARCHETYPES = new Set(['aggro-midrange', 'aggro-combo', 'combo-midrange', 'combo-control', 'combo-tempo', 'combo-stax', 'control-midrange', 'midrange-stax']);

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
    topCuts: 'Top Cuts',
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
    activePlayerStreak: 'Positive Streaks (Weeks)',
    W: 'White',
    U: 'Blue',
    B: 'Black',
    R: 'Red',
    G: 'Green',
    nonMirrorWinrate: 'Non-Mirror No Byes Winrate',
    properName: 'Name',
    mono: 'Mono',
    dual: 'Two',
    tri: 'Three',
    four: 'Four',
    five: 'Five',
    hybridArchetypes: 'Exact Archetypes',
    subarchetypes: 'Subarchetypes',
    numColors: 'Number of Colors',
    colorCombos: 'Color Combinations',
    date: 'Date',
    players: 'Players',
    uniqueDecks: 'Unique Decks',
    winner: 'Winner',
    winningDeck: 'Winning Deck'
};

const archetypeNameMap = {
    midrange: 'Midrange',
    control: 'Control',
    combo: 'Combo',
    aggro: 'Aggro',
    tempo: 'Tempo',
    stax: 'Stax',

    'aggro-midrange': 'Aggro-Midrange',
    'aggro-combo': 'Aggro-Combo',
    'combo-midrange': 'Combo-Midrange',
    'combo-control': 'Combo-Control',
    'combo-tempo': 'Combo-Tempo',
    'combo-stax': 'Combo-Stax',
    'control-midrange': 'Control-Midrange',
    'midrange-stax': 'Midrange-Stax'
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
function calcPoints(record) {
    const [wins, , draws] = record;
    return (wins * 3) + (draws || 0);
}

function processRecord(obj, record) {
    const [wins, losses, draws] = record;
    obj.wins += wins || 0;
    obj.losses += losses || 0;
    obj.draws += draws || 0;
    obj.winrate = calcWinrate(obj.wins, obj.losses, obj.draws);
    
    if (((wins + losses + (draws || 0)) > 3) || (wins === 3)) { // assumption of top cut after 3 rounds
        obj.topCuts++;
    }

    if (obj.hasOwnProperty('activeStreak') && obj.hasOwnProperty('longestStreak')) {
        if (wins >= 2) {
            obj.activeStreak++;
            if (obj.activeStreak > obj.longestStreak)
                obj.longestStreak = obj.activeStreak;
        } else {
            obj.activeStreak = 0;
        }
    }
}

function getProperName(name) {
    function capitalize(str) {
        return str.split(' ').map((s) => { return s[0].toUpperCase() + s.substring(1) }).join(' ');
    }
    const abbReg = /\w+\s\w\./;

    if (!!properNames[name]) {
        return properNames[name];
    } else if (name.match(abbReg)) {
        return capitalize(name);
    } else {
        return name[0].toUpperCase() + name.substring(1);
    }
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
    item.topCuts += deck.topCuts;

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
        '2-XBetter': 0,
        topCuts: 0
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

function generateNumColorsData(decks) {
    const countArr = ['mono', 'dual', 'tri', 'four', 'five'];

    function modify(entry, key) {
        entry.name = csvNameMap[key];
        return entry;
    }

    function process(map, deck) {
        if (!!deck && !!deck.colors) {
            processItem(map[countArr[deck.colors.length - 1]], deck);
        }
    }

    return generateDataTemplate(countArr, decks, modify, process);
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

// gets pure and hybrid archetype data
function generateHybridArchetypeData(decks) {
    function modify(entry, key) {
        entry.name = archetypeNameMap[key];
        return entry;
    }

    function process(map, deck) {
        if (!!deck && !!deck.archetypes) {
            const archetypes = Array.from(deck.archetypes).join('-');
            if (!!map[archetypes]) {
                processItem(map[archetypes], deck);
            }
        }
    }

    return generateDataTemplate(Array.from(HYBRID_ARCHETYPES).concat(Array.from(ARCHETYPES)), decks, modify, process, true);
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
            topCuts: 0,
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

// date, players, unique decks, winner, runner up
function generateEventData(collection) {
    const map = {};

    function toProperDate(date) {
        const months = {
            jan: 'January',
            feb: 'February',
            mar: 'March',
            apr: 'April',
            may: 'May',
            jun: 'June',
            jul: 'July',
            aug: 'August',
            sep: 'September',
            oct: 'October',
            nov: 'November',
            dec: 'December'
        };

        return `${months[date.substring(0,3)]} ${date.substring(3)}`;
    }

    for (const key in collection) {
        const event = collection[key];
        map[key] = {
            date: toProperDate(event.name),
            players: Object.keys(event.players).length,
            uniqueDecks: Object.keys(event.decks).length,
            winner: getProperName(event.winner),
            winningDeck: deckDictionary[deckNameMap[event.winningDeck]].name
        };
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

// maps various spellings to a normalized name key
function getPlayerName(str) {
    str = str.toLowerCase();
    if (playerNameMap[str]) {
        return playerNameMap[str];
    } else return str;
}

function getProperDate(name) {
    const monthMap = {
        jan: 'January',
        feb: 'February',
        mar: 'March',
        apr: 'April',
        may: 'May',
        jun: 'June',
        jul: 'July',
        aug: 'August',
        sep: 'September',
        oct: 'October',
        nov: 'November',
        dec: 'December'
    };

    return `${monthMap[name.match(/[a-z]{3}/)[0]]} ${name.match(/\d+/)[0]}`;
}

// property comparator
function byProperty(obj, p) {
    if (obj.hasOwnProperty(p)) {
        return (a, b) => {
            if (a[p] < b[p])
                return 1;
            if (a[p] > b[p])
                return -1;
            return 0;
        }
    } else {
        throw Error(`Object ${obj} doesn't have property ${p}!`);
    }
};

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
        this.properName = getProperName(this.name);
        this.topCuts = 0;
        this.elo = 1500;
        this.peakElo = 1500;

        if (Array.isArray(record)) {
            processRecord(this, record);
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
            processRecord(this, record);
        }
    }

    // return a sorted array of the n most played deck names in descending order
    mostPlayedDecks(n = 3) {
        const sorted = Object.keys(this.decks).sort((a, b) => { return this.decks[b] - this.decks[a]; });
        return sorted.slice(0, n).map((str) => { return deckDictionary[str] ? deckDictionary[str].name : str; });
    }
}

class Deck {
    constructor({ name, played, totalPoints, trophies, uniquePilots, record, colors, archetypes, nicknames, key }) {
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
        this.topCuts = 0;
        this.key = key;

        if (Array.isArray(record)) {
            processRecord(this, record);
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
            processRecord(this, record);
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

    getNonmirrorWinrate() {
        let wins = 0,
            losses = 0,
            draws = 0;

        for (const d in this.matchups) {
            const deck = this.matchups[d];
            wins += deck.wins;
            losses += deck.losses;
            draws += deck.draws;
        }

        return calcWinrate(wins, losses, draws);
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
        this.hybridArchetypes = {};
        this.newPlayers = new Set();
        this.newDecks = new Set();
        this.playerPersonalBests = {};
        this.deckNewBest = {};
        this.playerStreaks = {};
        this.winner = '';
        this.winningDeck = '';

        for (const p of players) {
            let [playerName, record, trophy] = p;
            playerName = playerName.toLowerCase();
            const points = calcPoints(record);
            this.players[playerName] = {
                name: playerName,
                record: record,
                trophy: trophy || 0,
                deck: decks[playerName]
            };
            if (trophy) {
                this.winner = playerName;
                this.winningDeck = decks[playerName];
            }
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
                    uniquePilots: new Set([playerName]), 
                    record, 
                    colors, 
                    archetypes,
                    nicknames,
                    key: deckKey
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
        this.hybridArchetypes = generateHybridArchetypeData(this.decks);
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
            .map((player) => { return `${getProperName(player)} (${series.players[player].activeStreak})` });
    }

    getDecksByStanding() {
        const output = {};

        for (const player of Object.values(this.players)) {
            const record = player.record.join(' - ');
            const properDeckName = deckDictionary[deckNameMap[player.deck]].name;
            if (output[record]) {
                output[record].push(properDeckName);
            } else {
                output[record] = [properDeckName];
            }
        }

        return output;
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
                nicknames: deckObj.nicknames,
                key: deckKey
            });
        }
    }

    // entrants: [playerName (lowercase), record[], trophy]
    // deckMap: { playerName: deckName (lower case, space separated) }
    // reporting: [ [player1, player2], [p1gameWins, p2gameWins] ]
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
            this.update(name, calcPoints(record), deckObj, trophy, record);
        }
        this.events[week].processStreaks(this);
        this.eventCount++;

        if (reporting) {
            if (!Array.isArray(reporting)) {
                reporting = parseReporting(reporting);
            }
            this.processMatchups(reporting, deckMap);
        }
    }
    
    processMatchups(pairings, deckMap) {
        for (const match of pairings) {
            if (match[0][1] !== 'BYE' && match[0][0] !== 'BYE') {
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

                this.processElo(match[0][0], match[0][1], record);
            }
        }
    }

    generateMatchupGrid() {
        const output = [];
        const decks = Object.values(this.decks);
        decks.sort(byProperty(decks[0], 'played'));
        const sortedNames = decks.map((d) => { return d.key; });

        for (const deck of decks) {
            const row = [];
            for (const deckName of sortedNames) {
                if (deck.matchups[deckName]) {
                    row.push(deck.matchups[deckName].winrate);
                } else {
                    row.push(null);
                }
            }
            output.push(row);
        }

        return output;
    }

    getLastEvent() {
        return this.events[this.lastEvent];
    }

    processElo(pa, pb, record) {
        // console.log(pa, pb, record);
    
        const playerA = this.players[pa];
        const playerB = this.players[pb];
        // console.log(playerA);

        const ratingA = playerA.elo;
        const ratingB = playerB.elo;

        function expectedScore(rA, rB) {
            return (1 / (1 + Math.pow(10, (rB - rA)/400)));
        }

        function kFactor(player) {
            // unsure about event count floor
            if (player.eventCount < 10) {
                return 40;
            } else if (player.peakElo < 2400) { // 2400 seems too high
                return 20;
            } else {
                return 10;
            }
        }

        function scoreRecord(record) {
            if (record[0] > record[1]) {
                return 1;
            } else if (record[0] < record[1]) {
                return 0;
            } else return 0.5;
        }

        const newScores = [];
        const kFactors = [kFactor(playerA), kFactor(playerB)];
        const expected = [expectedScore(ratingA, ratingB), expectedScore(ratingB, ratingA)];
        const actualScores = [scoreRecord(record), 1 - scoreRecord(record)];

        newScores.push(Number((ratingA + kFactors[0] * (actualScores[0] - expected[0])).toPrecision(4)));
        newScores.push(Number((ratingB + kFactors[1] * (actualScores[1] - expected[1])).toPrecision(4)));

        function updateElo(player, rating) {
            player.elo = rating;

            if (player.peakElo < rating) {
                player.peakElo = rating;
            }
        }

        updateElo(playerA, newScores[0]);
        updateElo(playerB, newScores[1]);
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

function sortPlayers(series, comparator, properties) {
    const players = Object.values(series.players).sort(comparator);

    const extract = [];
    for (const player of players) {
        const item = [];
        for (const p of properties) {
            item.push(player[p]);
        }
        extract.push(item);
        // extract.push([player.name, player.trophies, player.totalPoints]);
    }
    // extract.sort(comparator);
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

const pairingsToStandings = function(pairings) {
    const playerMap = {};
    const output = [];

    for (const pair of pairings) {
        const [p1, p2] = pair[0];
        const record = pair[1];

        for (const p of [p1, p2]) {
            if (!playerMap[p] && (p !== 'BYE')) {
                playerMap[p] = [0,0];
            }
        }

        if (p2 === 'BYE') {
            playerMap[p1][0]++;
        } else if (p1 === 'BYE') {
            playerMap[p2][0]++;
        } else if (record[0] === 2) {
            playerMap[p1][0]++;
            playerMap[p2][1]++;
        } else if (record[1] === 2) {
            playerMap[p1][1]++;
            playerMap[p2][0]++;
        } else if (record[0] === record[1]) {
            playerMap[p1][2] ? playerMap[p1][2]++ : playerMap[p1][2] = 1;
            playerMap[p2][2] ? playerMap[p2][2]++ : playerMap[p2][2] = 1;
        }
    }

    for (const name of Object.keys(playerMap)) {
        const totalGamesPlayed = playerMap[name].reduce((prev, cur) => { return prev + cur });
        if (totalGamesPlayed < 3) {
            playerMap[name][1] += 3 - totalGamesPlayed; // append losses to players who drop
        }

        output.push([name, playerMap[name]]);
    }


    output.sort((a, b) => { 
        return calcPoints(b[1]) - calcPoints(a[1]);
    });

    output[0].push(1);

    return output;
};

/**
 * series: series object
 * subject: primary object type from which header data is pulled
 * headers: an array of property names of the subject, representing CSV columns
 * 
 * note: is there a more flexible way to do this?
 * solved this in processItems, need to go back and fix for decks/players
 */
const formatCSV = function(series, subject, headers, preSort, postSort, skipHeaders = false, title) {
    let blob = [];
    let collection;

    if (series.hasOwnProperty(subject)) {
        collection = series[subject]
    }

    // specifies what the collection is
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
            collection = series.getLastEvent().archetypes;
            break;
        case 'lastEventHybridArchetypes':
            collection = series.getLastEvent().hybridArchetypes;
            break;
        case 'lastEventColors':
            collection = series.getLastEvent().colors;
            break;
        case 'wubrg':
            collection = generateWUBRGData(series.decks);
            break;
        case 'lastEventWUBRG':
            collection = generateWUBRGData(series.getLastEvent().decks);
            break;
        case 'numColors':
            collection = generateNumColorsData(series.decks);
            break;
        case 'hybridArchetypes':
            collection = generateHybridArchetypeData(series.decks);
            break;
        case 'events':
            collection = generateEventData(series.events);
    }

    // headers that are properties on the object, that require custom processing
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
    
    // headers that require the entire object to process
    const altMap = {
        'mostPlayed': (p) => { return `"${p.mostPlayedDecks().join(', ')}"` },
        'nonMirrorWinrate': (p) => { return p.getNonmirrorWinrate() }
    };

    if (typeof collection !== 'object' || !Array.isArray(headers))
        return '';

    let values = Object.values(collection);
    if (preSort) {
        values = values.sort(preSort);
    }

    const headerLine = [];
    if (!skipHeaders) {
        for (const h of headers) {
            headerLine.push(csvNameMap[h] ? csvNameMap[h] : h);
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
        blob.unshift(headerLine.join(', '));
    }

    if (title) {
        blob.unshift(csvNameMap[title]);
    }

    return blob.join('\n');
};

const formatEventMisc = function(event) {
    const blob = [];

    blob.push(getProperDate(event.name) + '\n');

    const properDeckNames = [...event.newDecks].map((key) => { return deckDictionary[key].name });

    blob.push(`${csvNameMap.newPlayers}, ` + `"${[...event.newPlayers].map((name) => { return getProperName(name) }).join(', ')}"`);
    blob.push(`${csvNameMap.newDecks}, ` + `"${properDeckNames.join(', ')}"`);
    
    const playerPersonalBests = [];
    for (const player of Object.keys(event.playerPersonalBests)) {
        playerPersonalBests.push(`${getProperName(player)} ${event.playerPersonalBests[player].join('-')}`);
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

const formatEventDecks = function(event) {
    const blob = [];

    blob.push(`${Object.keys(event.players).length} Players\n`);

    blob.push(`Decks`);
    const decksByStanding = event.getDecksByStanding();
    for (const record of Object.keys(decksByStanding)) {
        blob.push(`\n${record}, ${decksByStanding[record][0]}`);
        if (decksByStanding[record].length > 1) {
            for (let i = 1; i < decksByStanding[record].length; i++) {
                blob.push(`, ${decksByStanding[record][i]}`);
            }
        }
    }

    return blob.join('\n');
};
 
const formatMatchups = function(series) {
    const data = series.generateMatchupGrid();
    const blob = [];

    const legend = [
        'Explanation',
        'Cell: rows winrate vs column',
        'Example: C7: row 7 vs column C',
        'Green: winrate >= .65',
        'Yellow: winrate <= .35'
    ];
    const columnLine = ['']; // gap in corner

    let i = 0;
    const decks = Object.values(series.decks);
    decks.sort(byProperty(decks[0], 'played'));
    const sortedNames = decks.map((d) => { return d.key; });

    for (const deckName of sortedNames) {
        columnLine.push(deckDictionary[deckName].name);

        const line = [];
        line.push(deckDictionary[deckName].name);

        for (const m of data[i]) {
            line.push(m);
        }
        blob.push(line.join(','));
        i++;
    }
    blob.unshift(columnLine.join(','));
    blob.unshift(legend.join('\n'));

    return blob.join('\n');
};

/**
 * Merge two .csv files horizontally, such that there is a one column gap between the widest row
 * on the left and the right .csv.
 */
const mergeCSVHorizontally = function(left, right) {
    let longestLeftRow = 0;

    const leftArr = left.split('\n');
    const rightArr = right.split('\n');

    for (const line of leftArr) {
        const len = line.split(',').length;
        if (len > longestLeftRow) {
            longestLeftRow = len;
        }
    }

    function mergeLines(leftLine, rightLine) {
        const spacing = !!leftLine ? (longestLeftRow - leftLine.split(/,(?![^"]*"\B)/).length) : longestLeftRow; // ignore commas in quotations
        const commas = [];

        for (let i = 0; i < spacing; i++) {
            commas.push(',');
        }

        if (!leftLine) {
            return [commas.join(''), rightLine].join();
        }

        return [leftLine, commas.join(''), rightLine].join();
    }

    const blob = [];
    const leftLength = leftArr.length;
    const rightLength = rightArr.length;

    for (let i = 0; i < Math.max(leftLength, rightLength); i++) {
        if (i < leftLength && i < rightLength) {
            blob.push(mergeLines(leftArr[i], rightArr[i]));
        } else if (i >= rightLength) {
            blob.push(leftArr[i]);
        } else {
            blob.push(mergeLines(null, rightArr[i]));
        }
    }

    return blob.join('\n');
};

exports.Player = Player;
exports.Series = Series;
exports.Deck = Deck;
exports.parseDecklists = parseDecklists;
exports.parseReporting = parseReporting;
exports.formatCSV = formatCSV;
exports.formatEventMisc = formatEventMisc;
exports.formatMatchups = formatMatchups;
exports.formatEventDecks = formatEventDecks;
exports.pairingsToStandings = pairingsToStandings;
exports.mergeCSVHorizontally = mergeCSVHorizontally;
exports.sortPlayers = sortPlayers;

exports.generateEventData = generateEventData;
