const { deckDictionary, nameMap, families } = require('./deckDictionary.js');

const ARCHETYPES = new Set(['midrange', 'combo', 'aggro', 'tempo', 'control', 'stax']);

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

class Player {
    constructor(name, events, total, deck, trophies, record) {
        name = name.toLowerCase();
        deck = deck ? deck.toLowerCase() : undefined;
        this.name = name;
        this.events = events;
        this.totalPoints = total;
        this.decks = deck ? {[deck]: 1} : {};
        this.deckCount = Object.keys(this.decks).length;
        this.average = events > 0 ? ((total / events).toFixed(2)) : 0;
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
            this.winrate = (this.wins / (this.wins + this.losses + this.draws)).toFixed(2);
        }
    }

    update(points, deck, trophy, record) {
        deck = deck ? deck.toLowerCase() : undefined;
        
        this.events++;
        this.totalPoints += points;
        this.average = this.events > 0 ? ((this.totalPoints / this.events).toFixed(2)) : 0;
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
            this.winrate = (this.wins / (this.wins + this.losses + this.draws)).toFixed(2);
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
        this.average = played > 0 ? (totalPoints / played).toFixed(2) : 0;
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
            this.winrate = (this.wins / (this.wins + this.losses + this.draws)).toFixed(2);
        }

        this.colors = colors || new Set();
        this.archetypes = archetypes || new Set();
    }

    update(pilot, points, trophy, record) {
        this.played++;
        this.uniquePilots.add(pilot);
        this.totalPoints += points;
        this.trophies += trophy || 0;
        this.average = (this.totalPoints / this.played).toFixed(2);

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
            this.winrate = (this.wins / (this.wins + this.losses + this.draws)).toFixed(2);
        }
    }
}

class Series {
    constructor() {
        this.players = {};
        this.decks = {};
        this.events = 0;
    }

    addPlayer(player) {
        const lower = player.name.toLowerCase();
        if (this.players[lower] === undefined) {
            this.players[lower] = player;
        } else {
            throw new Error(`Player ${lower} already exists!`);
        }
    }

    update(name, points, deck, trophy, record) {
        name = name.toLowerCase();
        const deckName = deck ? deck.name : undefined;
        if (this.players[name] !== undefined) {
            this.players[name].update(points, deckName, trophy, record);
        } else {
            this.addPlayer(new Player(name, 1, points, deckName, trophy, record));
        }

        if (this.decks[deckName] !== undefined) {
            this.decks[deckName].update(name, points, trophy, record);
        } else {
            const pilots = new Set();
            pilots.add(name);
            this.decks[deckName] = new Deck(deckName, 1, points, trophy, pilots, record, deck.colors, deck.archetypes);
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
            
            let deckObj = { name: deckName };
            if (nameMap[deckName] && deckDictionary[nameMap[deckName]]) {
                deckObj = deckDictionary[nameMap[deckName]];
            }
            this.update(name.toLowerCase(), processRecord(record), deckObj, trophy, record);
        }
        this.events++;
    }

    generateArchetypeData() {
        const archetypeMap = {};
        let totalPlayed = 0;

        for (const a of ARCHETYPES) {
            archetypeMap[a] = {
                name: a,
                decks: 0,
                played: 0,
                metagameShare: 0,
                totalPoints: 0,
                average: 0,
                trophies: 0,
                '2-XBetter': 0
            };
        }

        for (const deck of Object.values(this.decks)) {
            if (typeof deck.archetypes === 'object' && deck.archetypes.size > 0) {
                for (const type of deck.archetypes) {
                    archetypeMap[type].decks++;
                    archetypeMap[type].played += deck.played;
                    archetypeMap[type].totalPoints += deck.totalPoints;
                    archetypeMap[type].average = (archetypeMap[type].totalPoints / archetypeMap[type].played).toFixed(2);
                    archetypeMap[type].trophies += deck.trophies;
                    archetypeMap[type]['2-XBetter'] += Object.keys(deck.pointsBreakdown).reduce((accumulator, current) => {
                        return (Number(current) >= 6 ? (accumulator + deck.pointsBreakdown[current]) : accumulator);
                    }, 0);
                }
            }
            totalPlayed += deck.played;
        }

        for (const a of ARCHETYPES) {
            archetypeMap[a].metagameShare = archetypeMap[a].played > 0 ? (archetypeMap[a].played / totalPlayed).toFixed(2) : 0;
        }

        return archetypeMap;
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
            deck = line.match(/(?<=\()[\w\s-]+/)[0];
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
    series.events++;
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

const headerNameMap = {
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

};

/**
 * series: series object
 * subject: primary object type from which header data is pulled
 * headers: an array of property names of the subject, representing CSV columns
 * 
 * note: is there a more flexible way to do this?
 */
const formatCSV = function(series, subject, headers, preSort, postSort) {
    let blob = [];
    let collection;

    if (series.hasOwnProperty(subject)) {
        collection = series[subject]
    }

    if (subject === 'archetypes') {
        collection = series.generateArchetypeData();
    }

    const headerMap = {
        'uniquePilots': (s) => { return s.size },
        'colors': (s) => { return [...s].join('') },
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
        firstLine.push(headerNameMap[h] ? headerNameMap[h] : h);
    }
    // blob.push(firstLine.join(', '));

    for (const item of values) {
        const line = [];
        for (const header of headers) {
            const property = item[header];
            if (property && (typeof property !== 'object')) {
                line.push(property);
            } else {
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
