const { Series, formatCSV, formatEventMisc, formatEventDecks, mergeCSVHorizontally } = require('../eventData.js');
const fs = require('fs');

const vacaville = new Series();

// convert blob to deckmap and playerArr
function parseCustom(blob, week) {
    const deckMap = {};
    const playerArr = [];

    const scoreReg = /^\d-\d-?\d?/;
    const deckReg = /(?<!\d-\d-?\d?)[A-Za-z\s-&“”"]+(?=\s\(.+\))/;
    const nameReg = /(?<=\()[\w\s\.]+(?=(\s\/\/.+)?\))/;

    for (const line of blob.split('\n')) {
        if (line !== '') {
            const score = line.match(scoreReg)[0].split('-').map((n) => { return Number(n) });
            const deckName = line.match(deckReg)[0].toLowerCase();
            const playerName = line.match(nameReg)[0].toLowerCase();
    
            deckMap[playerName] = deckName;
            
            if (playerArr.length === 0) {
                playerArr.push([playerName, score, 1]);
            } else {
                playerArr.push([playerName, score]);
            }
        }
    }

    // console.log(playerArr);
    // console.log(deckMap);
    vacaville.processWeek(playerArr, deckMap, week);
}

const nov6Raw = `
3-0 Medium Red (Timothy R.)
2-1 Abzan RecSur (Matthew P.)
2-1 RB midrange (Jay B.)
2-1 Paradox Academy (Scott W.)
1-2 wurg Tokens (Joshua L.)
1-2 RUG Tempo (Thomas)
1-2 Jund Midrange (Adam C.)
0-3 Mono Green Elves (unknown)
`;

parseCustom(nov6Raw, 'nov6');


const dec11 = `
3-0 Abzan Rec-Sur (Matthew P.)
2-1 GB Elves (Joshua L. // @JoshLaquian#8221)
2-1 Naya Winota (Randy C. // @cymbalman#4276)
2-1 W Death & Taxes (Timothy R. // @DLBTibbin#3862)
1-2 Abzan Sanctum Stompy (Sarah W.)
1-2 W Death & Taxes (EJ D.)
1-2 Paradox Academy (Scott W. // @Skew1109 (Kalixas)#0612)
`;

parseCustom(dec11, 'dec11');


const jan15 = `
3-0 Naya Winota (Randy C. // @cymbalman#4276)
2-1 Esper Control (Lilith M. // @Ashtoreth#5152)
2-1 BUG Lands (Leiuph D. // @leiuph#6198)
2-1 WURG Pool Party Tokens (Joshua L. // @JoshLaquian#8221)
1-2 Abzan Rec-Sur (Matthew P.)
1-2 Mardu Aristocrats (Jay B. // @HeyItsJay!#4570)
1-2 Jeskai Welder (Timothy R. // @DLBTibbin#3862)
`;

parseCustom(jan15, 'jan15');


const feb18 = `
3-0 WB D&T (Timothy R. // @DLBTibbin#3862)
2-1 WB D&T (Matthew P.)
2-1 MonoB Aggro (Jay B. // @HeyItsJay!#4570)
2-1 RUG Moon (Randy C. // @cymbalman#4276)
1-2 GB Elves (Joshua L. // @JoshLaquian#8221)
1-2 RUGb Midrange (Phillip D. // @thebearded_chef#1127)
1-2 Esper Blink Initiative (Lilith M. // @Ashtoreth#5152)
0-3 Abzan Pattern Rector (Lars T. // @Hefnerflufflecup#0998)
`;

parseCustom(feb18, 'feb18');


const mar19 = `
4-0 RW Taxes (Randy C. // @cymbalman#4276)
3-1 sultai Doomsday (Kelvin C. // @kelvin#1466)
3-1 Jund Infect (Timothy R. // @DLBTibbin#3862)
2-1-1 Esper Blink Initiative (Lilith M. // @Ashtoreth#5152)
2-2 RW Equipment (Russell O. // @Cat_Island#2692)
2-2 Dark Bant Reanimator (Matthew P.)
2-2 WURG Pool Party Tokens (Joshua L. // @JoshLaquian#8221)
2-2 Jund Midrange (Adam C.)
1-2-1 BR Goblins (Brian C. // @Kelver#9625)
1-3 Rakdos Pyromancer (Jay B. // @HeyItsJay!#4570)
1-3 Abzan Pattern Rector (Lars T. // @Hefnerflufflecup#0998)
0-4 UW Flash (Phillip D. // @thebearded_chef#1127)
`;

parseCustom(mar19, 'mar19');


const apr23 = `
3-0 UR Moon (Phillip D. // @thebearded_chef#1127)
2-1 Mardu Pyromancer (Matthew P.)
2-1 “Naya” Winota (Randy C. // @cymbalman#4276)
2-1 RDW (Kelvin C. // @kelvin#1466)
2-1 Esper Blink Initiative (Lilith M. // @Ashtoreth#5152)
2-1 Abzan Lands Midrange (Timothy R. // @DLBTibbin#3862)
1-2 Abzan Pattern Rector (Lars T. // @Hefnerflufflecup#0998)
1-2 Abzan Lands Midrange (Leiuph D. // @leiuph#6198)
1-2 Grixis Welder (Russell O. // @Cat_Island#2692)
1-2 sultai Doomsday (Scott W. // @Skew1109 (Kalixas)#0612)
0-3 BR Goblins (Brian C. // @Kelver#9625)
`;

parseCustom(apr23, 'apr23');


const may21 = `
3-0 Medium Red (Joshua L.)
2-0-1 Abzan RecSur (matthew p.)
2-1 Wet Naya Initiative (kyle)
2-1 Creamur Tempo (Timothy R.)
2-1 Esper Blink Initiative (Lilith M.)
1-1-1 Naya Winota (randy c.)
1-2 RW Equipment (Russell O.)
1-2 Blue Moon (Cruz)
1-2 Naya Initiative (justin)
1-2 Blue Moon (Phillip D.)
1-2 Mardu Pyromancer (unknown)
`;

parseCustom(may21, 'may21');


const jun25 = `
3-0 mono-W D&T (Brandon)
2-1 Mardu pyromancer (matthew p.)
2-1 Abzan Midrange (Phillip d.)
2-1 WB D&T (Timothy r.)
2-1 food pile (Joshua L.)
2-1 Medium Red (Jason)
1-2 Pattern Rector (Lars t.)
1-2 RB Goblins (Brian c.)
0-3 Unknown (Thomas)
0-3 Mono-U stax (Frank)
`;

parseCustom(jun25, 'jun25');

// console.log(vacaville.events[vacaville.lastEvent].players);
// console.log(vacaville.events[vacaville.lastEvent].decks);

// console.log(vacaville.players['kelvin c.']);
// console.log(vacaville.decks['golgariElves']);


const makeComparator = (criteria) => {
    return function(a, b) {
        if (a[criteria] < b[criteria])
            return 1;
        if (a[criteria] > b[criteria])
            return -1;
        return 0;
    };
};

const deckCsv = formatCSV(vacaville, 'decks', ['name', 'played', 'uniquePilots', 'totalPoints', 'average', 'winrate', 'nonMirrorWinrate', 'trophies', 'pointsBreakdown', 'colors', 'archetypes', 'nicknames'], null, makeComparator(8)); // index of 2-x or better

const playerCsv = formatCSV(vacaville, 'players', ['properName', 'eventCount', 'deckCount', 'totalPoints', 'average', 'winrate', 'trophies', 'pointsBreakdown', 'longestStreak', 'mostPlayed'], null, makeComparator(7));


const archetypeDisclaimer = `note: archetype metagame share percentages don't add up to 100% because some decks span multiple archetypes`;

const archetypeCsv = [formatCSV(vacaville, 'archetypes', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'), null, false, 'archetypes'), archetypeDisclaimer].join('\n\n');

const familyCsv = formatCSV(vacaville, 'families', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter', 'members'], makeComparator('2-XBetter'), null, false, 'subarchetypes');

const hybridArchetypeCsv = formatCSV(vacaville, 'hybridArchetypes', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'), null, false, 'hybridArchetypes');

const allArchetypesCsv = mergeCSVHorizontally(archetypeCsv, [familyCsv, hybridArchetypeCsv].join('\n\n\n'));

// all color combinations (jeskai, dimir, ...)
const colorCsv = formatCSV(vacaville, 'colors', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'), null, false, 'colorCombos');

// data for each of the five colors
const wubrgCsv = formatCSV(vacaville, 'wubrg', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], null, null, false, 'colors');

// data by number of colors (mono, dual...)
const numColorsCsv = formatCSV(vacaville, 'numColors', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], null, null, false, 'numColors');

const colorAggregateCsv = mergeCSVHorizontally([wubrgCsv, numColorsCsv].join('\n\n\n'), colorCsv);


const lastEventArchetypesCsv = formatCSV(vacaville, 'lastEventHybridArchetypes', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('played'));

const lastEventColorsCsv = formatCSV(vacaville, 'lastEventColors', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('played'));

const lastEventWUBRGCsv = formatCSV(vacaville, 'lastEventWUBRG', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter']);

const lastEventMisc = formatEventMisc(vacaville.getLastEvent());

const lastEventDecks = formatEventDecks(vacaville.getLastEvent());

const lastEventAll = mergeCSVHorizontally([lastEventMisc, lastEventArchetypesCsv, lastEventColorsCsv, lastEventWUBRGCsv].join('\n\n'), lastEventDecks);


// const matchupCsv = formatMatchups(vacaville);

function writeAll(texts, files) {
    for (let i = 0; i < texts.length; i++) {
        fs.writeFile(files[i], texts[i], err => {
            if (err) {
                console.error(err);
            }
        });
    }
}

writeAll([deckCsv, playerCsv, allArchetypesCsv, colorAggregateCsv, lastEventAll], ['vacaville/decks.csv', 'vacaville/players.csv', 'vacaville/archetypes.csv', 'vacaville/colors.csv', 'vacaville/lastEvent.csv']);

