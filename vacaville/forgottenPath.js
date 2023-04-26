const { Series } = require('../eventData.js');

const vacaville = new Series();

// convert blob to deckmap and playerArr
function parseCustom(blob, week) {
    const deckMap = {};
    const playerArr = [];

    const scoreReg = /^\d-\d-?\d?/;
    const deckReg = /(?<!\d-\d-?\d?)[A-Za-z\s-&]+(?=\s\(.+\))/;
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
1-2 Mardu Aristocrats (Jason B. // @HeyItsJay!#4570)
1-2 Jeskai Welder (Timothy R. // @DLBTibbin#3862)
`;

parseCustom(jan15, 'jan15');


const feb18 = `
3-0 WB D&T (Timothy R. // @DLBTibbin#3862)
2-1 WB D&T (Matthew P.)
2-1 MonoB Aggro (Jason B. // @HeyItsJay!#4570)
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
1-3 Rakdos Pyromancer (Jason B. // @HeyItsJay!#4570)
1-3 Abzan Pattern Rector (Lars T. // @Hefnerflufflecup#0998)
0-4 UW Flash (Phillip D. // @thebearded_chef#1127)
`;

parseCustom(mar19, 'mar19');


// console.log(vacaville.events[vacaville.lastEvent].players);
// console.log(vacaville.events[vacaville.lastEvent].decks);

// console.log(vacaville.players['randy c.']);
// console.log(vacaville.decks['golgariElves']);

