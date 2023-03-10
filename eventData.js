const { deckDictionary, deckNameMap, families } = require('./deckDictionary.js');

const ARCHETYPES = new Set(['midrange', 'combo', 'aggro', 'tempo', 'control', 'stax']);

const csvNameMap = {
    'name': 'Name',
    'played': 'Played Count',
    'uniquePilots': 'Unique Pilots',
    'totalPoints': 'Total Points',
    'average': 'Average Points',
    'winrate': 'Winrate',
    'trophies': 'Trophies',
    'colors': 'Colors',
    'archetypes': 'Archetypes',
    'pointsBreakdown': '2-X or better Count',
    '2-XBetter': '2-X or better Count',
    'eventCount': 'Events',
    'deckCount': 'Unique Decks',
    'decks': 'Unique Decks',
    'metagameShare': 'Metagame Share',
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

function toLower(arr) {
    const convert = [];
    for (const str of arr) {
        convert.push(str.toLowerCase());
    }
    return convert;
}

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
}

class Player {
    constructor(name, events, total, deck, trophies, record) {
        name = name.toLowerCase();
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
            this.wins += record[0] || 0;
            this.losses += record[1] || 0;
            this.draws += record[2] || 0;
            this.winrate = calcWinrate(this.wins, this.losses, this.draws);
        }
    }
}

class Deck {
    constructor(name, played, totalPoints, trophies, uniquePilots, record, colors, archetypes) {
        this.name = name;
        this.played = played || 0;
        this.totalPoints = totalPoints || 0;
        this.trophies = trophies || 0;
        this.uniquePilots = uniquePilots || new Set();
        this.average = calcAverage(totalPoints, played);
        this.pointsBreakdown = {[totalPoints]: 1};

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
    constructor(players, decks) {
        this.players =  players || {};
        this.decks = decks || {};
        this.archetypes = {};
    }
}

class Series {
    constructor() {
        this.players = {};
        this.decks = {};
        this.eventCount = 0;
    }

    addPlayer(player) {
        const lower = player.name.toLowerCase();
        if (this.players[lower] === undefined) {
            this.players[lower] = player;
        } else {
            throw new Error(`Player ${lower} already exists!`);
        }
    }

    update(playerName, points, deck, trophy, record) {
        playerName = playerName.toLowerCase();
        const deckKey = deck ? deck.key : undefined;
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
            this.decks[deckKey] = new Deck(deck.name, 1, points, trophy, pilots, record, deck.colors, deck.archetypes);
        }
    }

    processWeek(entrants, deckMap, week) {
        if (entrants.length !== Object.keys(deckMap).length) {
            console.log('record count discrepancy detected!', week);
        }
        for (const player of entrants) {
            const [name, record, trophy] = player;
            let deckName = deckMap[name.toLowerCase()];
            
            if (!deckName) {
                console.log(`name discrepancy detected! ${week}, ${name}`);
                deckName = 'unknown';
            }
            
            let deckObj = { name: deckName, key: deckName };
            if (deckNameMap[deckName] && deckDictionary[deckNameMap[deckName]]) {
                deckObj = deckDictionary[deckNameMap[deckName]];
                deckObj.key = deckNameMap[deckName];
            }
            this.update(name.toLowerCase(), processRecord(record), deckObj, trophy, record);
        }
        this.eventCount++;
    }

    generateArchetypeData(collection, nameMap, property) {
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

        for (const deck of Object.values(this.decks)) {
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

        return map;
    }

    // should probably just track this
    countTotalGames() {
        let count = 0;
        for (const deck of Object.values(this.decks)) {
            count += deck.played;
        }
        return count;
    }

    generateFamilyData(collection) {
        const map = {};
        let totalPlayed = this.countTotalGames();
        const allDecks = this.decks;

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
                '2-XBetter': 0
            };

            for (const deckName of collection[key].variants) {
                const deck = allDecks[deckName];
                processItem(map[key], deck);
            }
            map[key].average = calcAverage(map[key].totalPoints, totalPlayed);
            map[key].winrate = calcWinrate(map[key].wins, map[key].losses, map[key].draws);
            map[key].metagameShare = calcAverage(map[key].played, totalPlayed);
        }

        return map;
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

function processWeek(entrants, deckMap) {
    for (const player of entrants) {
        const [name, points, trophy] = player;
        series.update(name.toLowerCase(), points, deckMap[name.toLowerCase()], trophy);
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
const formatCSV = function(series, subject, headers, preSort, postSort) {
    let blob = [];
    let collection;

    if (series.hasOwnProperty(subject)) {
        collection = series[subject]
    }

    switch (subject) {
        case 'archetypes':
            collection = series.generateArchetypeData(ARCHETYPES, archetypeNameMap, 'archetypes');
            break;
        case 'colors':
            collection = series.generateArchetypeData(Object.keys(colorToNameMap), colorToNameMap, 'colors');
            break;
        case 'families':
            collection = series.generateFamilyData(families);
            break;
    }

    const headerMap = {
        'uniquePilots': (s) => { return s.size },
        'archetypes': (s) => { return [...s].join(' ') },
        'pointsBreakdown': (breakdown) => {
            return Object.keys(breakdown).reduce((accumulator, current) => {
                return (Number(current) >= 6 ? (accumulator + breakdown[current]) : accumulator);
            }, 0);
        }
    };

    if (typeof collection !== 'object' || !Array.isArray(headers))
        return '';

    let values = Object.values(collection);
    if (preSort) {
        values = values.sort(preSort);
    }

    const firstLine = [];
    for (const h of headers) {
        firstLine.push(csvNameMap[h] ? csvNameMap[h] : h);
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
    blob.unshift(firstLine.join(', '));

    return blob.join('\n');
};

exports.Player = Player;
exports.Series = Series;
exports.Deck = Deck;
exports.parseDecklists = parseDecklists;
exports.processWeek = processWeek;
exports.formatCSV = formatCSV;
