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
            const score = line.match(scoreReg)[0].split('-');
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

// console.log(vacaville.events[vacaville.lastEvent].players);
// console.log(vacaville.events[vacaville.lastEvent].decks);
// console.log(vacaville.players);
console.log(vacaville.decks['deathAndTaxes']);

