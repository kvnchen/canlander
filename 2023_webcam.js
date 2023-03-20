const { Series, parseDecklists, formatCSV, formatEventMisc } = require('./eventData.js');
const fs = require('fs');

const webcam = new Series();


const jan7Decks = parseDecklists(`
    impulse27 - Jeskai Midrange
    genghisPrawn - Jund pyromancer
    Yannic - wurg Omnath
    Cyclopes8 - Rakdos Midrange
    Tr33vs - Death and Taxes
    funkyzeit - Boros Death and Taxes
    Sam - Pattern Rector
    Vaaste - Temur Control
    hyunkim87 - wurg Seeker Walk
    Harju - Jeskai Midrange
    calhove - Naya Pod
    WonkyWombat - Lotusless Breach Storm
    TicTaco - Pattern Rector
    Yeti - Death and Taxes
    cymbalman - wurg Seeker Walk
    kelvin - Boros Tokens
    Rick - Dimir High Tide
    Axelia - 5c Superfriends
`);

const jan7Players = [
    ['impulse27', [4,0], 1],
    ['genghisprawn', [3,1]],
    ['yannic', [2,1]],
    ['cyclopes8', [2,1]],
    ['tr33vs', [2,1]],
    ['funkyzeit', [2,1]],
    ['sam', [2,1]],
    ['vaaste', [2,1]],
    ['hyunkim87', [1,1,1]],
    ['harju', [1,2]],
    ['calhove', [1,2]],
    ['wonkywombat', [1,2]],
    ['tictaco', [1,2]],
    ['yeti', [1,2]],
    ['cymbalman', [1,2]],
    ['kelvin', [1,2]],
    ['rick', [0,2,1]],
    ['axelia', [0,3]]
];

webcam.processWeek(jan7Players, jan7Decks, 'jan7');


const jan14Decks = parseDecklists(`Impulse27 - Jeskai midrange
Axelia - 5c superfriends
Cyclopes8 - sultai Midrange
genghisPrawn - Jund pyromancer
Harju - Jeskai painter Vault
Hal - Mono Black Aggro
TicTaco - Pattern Rector
Gerrimeister - Blue Moon
Vaaste - Jeskai Midrange
Fry Guy - Esper Vault
Yannic - Mono Blue Control
kelvin - Lotusless Breach Storm
cymbalman - wurg Seeker Walk`);

const jan14Players = [
    ['Impulse27', [4,0], 1],
    ['axelia', [3,1]],
    ['genghisPrawn', [2, 1]],
    ['cyclopes8', [2,1]],
    ['harju', [2,1]],
    ['tictaco', [2,1]],
    ['hal', [2,1]],
    ['gerrimeister', [1,2]],
    ['vaaste', [1,2]],
    ['fry guy', [1,2]],
    ['yannic', [1,2]],
    ['kelvin', [1,2]],
    ['cymbalman', [0,3]]
];

webcam.processWeek(jan14Players, jan14Decks, 'jan14');

// console.log(webcam.players['kelvin'.toLowerCase()]);


const jan21Decks = parseDecklists(`
GenghisPrawn - Jund initiative
Impulse27 - Flash Oath
hyunkim87 - wurg Seeker Walk
Cyclopes8 - sultai Midrange
Rick - DoomsDragon
Paul Pilz - Eggs
cymbalman - Naya Winota
Axelia - 5c superfriends
JazzE - wubg Midrange
pickleplop - Abzan Lands
Fry Guy - Zombies
Vaaste - Pattern Rector
JadedTrekkie - Medium Red
Purukogi - Jeskai welder Vault
Yannic - wurg Omnath
Ashtoreth - Esper Control
sir nikheizen - Simic Merfolk`);

const jan21Players = [
    ['impulse27', [4,0], 1],
    ['genghisprawn', [3,1]],
    ['hyunkim87', [2,1,1]],
    ['cyclopes8', [2,1]],
    ['rick', [2,1]],
    ['paul pilz', [2,1]],
    ['cymbalman', [2,1]],
    ['axelia', [2,1]],
    ['jazze', [1,1,1]],
    ['pickleplop', [1,2]],
    ['fry guy', [1,2]],
    ['vaaste', [1,2]],
    ['jadedtrekkie', [1,2]],
    ['purukogi', [1,2]],
    ['yannic', [1,2]],
    ['ashtoreth', [0,3]],
    ['sir nikheizen', [0,3]]
];

webcam.processWeek(jan21Players, jan21Decks, 'jan21');
// console.log(webcam.players['cymbalman'.toLowerCase()]);


const jan28Decks = parseDecklists(`
hyunkim87 (naya Winota)
Impulse27 (Jeskai Midrange)
raicune (Czech Bears)
Tr33vs (Death and taxes)
Yannic (wurg Omnath)
kelvin (Lotusless Breach storm)
Yeti (Death and taxes)
sir nikheizen (simic Merfolk)
Gabe Sorci (4c Pod)
Purukogi (Jeskai welder Vault)
Fry Guy (azorius Control)
johann (lotus breach Storm)
Harju (Grixis Tinker Painter)
WonkyWombat (Esper Thoracle)
JadedTrekkie (Medium Red)
Ashtoreth (Esper Blink Initiative)
Axelia (5C superfriends)
GenghisPrawn (Jund Initiative)
Dynethor (Bant Enchantress)
JazzE (wubg midrange)
Deggers (Blue Moon)
TicTaco (4C Welder)
funkyzeit (boros death and Taxes)
Cyclopes8 (sultai Midrange)
Andrew and Drew (unknown)`);

const jan28Players = [
    ['impulse27', [5,0], 1],
    ['yannic', [3,2]],
    ['hyunkim87', [3,1]],
    ['raicune', [3,1]],
    ['tr33vs', [2,1]],
    ['kelvin', [2,1]],
    ['yeti', [2,1]],
    ['sir nikheizen', [2,1]],
    ['gabe sorci', [2,1]],
    ['purukogi', [2,1]],
    ['fry guy', [2,1]],
    ['johann', [2,1]],
    ['harju', [2,1]],
    ['wonkywombat', [1,2]],
    ['jadedtrekkie', [1,2]],
    ['ashtoreth', [1,2]],
    ['axelia', [1,2]],
    ['genghisprawn', [1,2]],
    ['dynethor', [1,2]],
    ['jazze', [1,2]],
    ['deggers', [1,2]],
    ['tictaco', [1,2]],
    ['funkyzeit', [0,3]],
    ['cyclopes8', [0,3]],
    ['andrew and drew', [0,3]],
];

webcam.processWeek(jan28Players, jan28Decks, 'jan28');
// console.log(webcam.players['hyunkim87'.toLowerCase()]);


const feb4Decks = parseDecklists(`
Violet Eventide - Jeskai Control
Impulse27 - Jeskai midrange
hyunkim87 - Naya Winota
Delaelle - lotusless Breach Storm
kelvin - sultai doomsday
JazzE - wubg Midrange
WonkyWombat - Esper thoracle
Cyclopes8 - Naya Initiative
Fry Guy - Red Deck Bins
Therealemt - 5c Seeker Walk
Vaaste - Bant midrange
GenghisPrawn - Jund initiative
Axelia - 5c Superfriends
Harju - Grixis Tinker Painter
mehall - Jeskai vault twin
TicTaco - unknown
Andrew and Drew - unknown
Rick - Dead Guy Dragons
Purukogi - Jeskai Welder
`);

const feb4Players = [
    ['impulse27', [4,0], 1],
    ['violet eventide', [3,1]],
    ['hyunkim87', [2,1]],
    ['delaelle', [2,1]],
    ['kelvin', [2,1]],
    ['jazze', [2,1]],
    ['wonkywombat', [2,1]],
    ['cyclopes8', [2,1]],
    ['fry guy', [2,1]],
    ['therealemt', [1,2]],
    ['vaaste', [1,2]],
    ['genghisprawn', [1,2]],
    ['axelia', [1,2]],
    ['harju', [1,2]],
    ['mehall', [1,2]],
    ['tictaco', [1,2]],
    ['andrew and drew', [0,3]],
    ['rick', [0,3]],
    ['purukogi', [0,3]],
];

webcam.processWeek(feb4Players, feb4Decks, 'feb4');
// console.log(webcam.players['hyunkim87'.toLowerCase()]);


const feb11Decks = parseDecklists(`
Delaelle - Lotusless Breach storm
TicTaco - Naya Initiative
Yeti - Medium Red
impulse27 - Jeskai midrange
funkyzeit - boros death and taxes
JWyatt - Grixis Thoracle
kelvin - Lotusless Breach storm
cymbalman - Naya Winota
TherealEMT - 5c Seeker walk
GenghisPrawn - Jund Initiative
Violet Eventide - Jeskai Control
yucca - Death and taxes
pickleplop - Jeskai Welder
WonkyWombat - Esper Thoracle
Cyclopes8 - Rakdos Pyromancer
Rick - Jund Goblins
Purukogi - Lotus Breach storm
Axelia - 5c superfriends`);

const feb11Players = [
    ['impulse27', [4,0], 1],
    ['tictaco', [3,1]],
    ['yeti', [2,1]],
    ['violet eventide', [2,1]],
    ['therealemt', [2,1]],
    ['delaelle', [2,1]],
    ['jwyatt', [2,1]],
    ['wonkywombat', [2,1]],
    ['funkyzeit', [2,1]],
    ['cymbalman', [2,1]],
    ['kelvin', [1,2]],
    ['cyclopes8', [1,2]],
    ['yucca', [1,2]],
    ['genghisprawn', [1,2]],
    ['axelia', [1,2]],
    ['purukogi', [0,3]],
    ['pickleplop', [0,3]],
    ['rick', [0,3]],
];

webcam.processWeek(feb11Players, feb11Decks, 'feb11');
// console.log(webcam.players['kelvin'.toLowerCase()]);


const feb18Decks = parseDecklists(`funkyzeit - Boros Death and taxes
Harju - Jeskai Midrange
kelvin - death and taxes
Fry Guy - grixis Tinker Reanimator
shakashaka - Naya Pod
Rick - Death and Goblins
genghisPrawn - ubrg Thoracle
Jamesses - Flash Oath
WonkyWombat - Red deck wins
JWyatt - Grixis Thoracle
JazzE - wubg Midrange
Vaaste - wurg Seeker Walk
Axelia - 5c superfriends
Thunder_Farts - Jeskai midrange
Purukogi - Lotus Breach storm
Cyclopes8 - Naya Initiative
mehall - Jeskai Vault Twin
Impulse27 - Jeskai Midrange`);

const feb18Players = [
    ['harju', [3,0], 1],
    ['impulse27', [2,1]],
    ['funkyzeit', [2,1]],
    ['vaaste', [2,1]],
    ['fry guy', [2,1]],
    ['shakashaka', [2,1]],
    ['jwyatt', [2,1]],
    ['kelvin', [2,1]],
    ['axelia', [2,1]],
    ['genghisprawn', [2,1]],
    ['rick', [1,2]],
    ['mehall', [1,2]],
    ['wonkywombat', [1,2]],
    ['jamesses', [1,2]],
    ['cyclopes8', [1,2]],
    ['jazze', [1,2]],
    ['purukogi', [0,3]],
    ['thunder_farts', [0,3]],
];

webcam.processWeek(feb18Players, feb18Decks, 'feb18');
// console.log(webcam.players['kelvin'.toLowerCase()]);


const feb25Decks = parseDecklists(`
GenghisPrawn (Blood Initiative)
WonkyWombat (RDW)
Purukogi (Lotus Breach)
Axelia (5c Superfriends)
KannNicks (Flash Oath)
Hal (Mono Black Aggro)
Jamesses (Jeskai Welder)
Harju (Jeskai midrange)
dorbird (Black Mold)
Fry Guy (Temur midrange)
JWyatt (Grixis Thoracle)
TherealEMT (Jeskai midrange)
shakashaka (RUG Moon)
hyunkim87 (UB Ninjas)
Cyclopes8 (Naya Turbo Initiative)
kelvin (Lotusless Breach)
Yeti (D&T)
Vaaste (Jund goblins)
JazzE (Jeskai midrange)
TicTaco (Pattern Rector)
Impulse27 (Jeskai midrange)
Dentro (Gruul Hoof)
Robin Sorensen (Lotus Breach)
Sam (Pattern Rector)
sir nikheizen (UG Merfolk)
mehall (GW Legends)
`);

const feb25Players = [
    ['purukogi', [5,0], 1],
    ['kannnicks', [3,2]],
    ['genghisprawn', [3,1]],
    ['wonkywombat', [3,1]],
    ['axelia', [2,1]],
    ['hal', [2,1]],
    ['jamesses', [2,1]],
    ['harju', [2,1]],
    ['dorbird', [2,1]],
    ['fry guy', [2,1]],
    ['jwyatt', [2,1]],
    ['therealemt', [2,1]],
    ['shakashaka', [2,1]],
    ['hyunkim87', [1,2]],
    ['cyclopes8', [1,2]],
    ['kelvin', [1,2]],
    ['yeti', [1,2]],
    ['vaaste', [1,2]],
    ['jazze', [1,2]],
    ['tictaco', [1,2]],
    ['impulse27', [1,2]],
    ['dentro', [1,2]],
    ['robin sorensen', [0,3]],
    ['sam', [0,3]],
    ['sir nikheizen', [0,3]],
    ['mehall', [0,3]]
];

webcam.processWeek(feb25Players, feb25Decks, 'feb25');
// console.log(webcam.players['kelvin']);


const mar4Decks = parseDecklists(`
Cyclopes8 (RG Aggro)
Tr33vs (RDW)
Impulse27 (Spearmint)
Axelia (5C Walkers)
GenghisPrawn (Blood Initiative)
JWyatt (Grixis Thoracle)
kelvin (BUG Thoracle)
WonkyWombat (RDW)
shakashaka (Temur Moon)
Violet Eventide (wurg Lands midrange)
JadedTrekkie (Lotus Breach)
JazzE (Spearmint)
Purukogi (Grixis Tempo Doomsday)
Rick (esper Doomsday)
raicune (Sans B Seeker walk)
Fry Guy (Grixis Tinker Reanimator)
Delaelle (Sans B Seeker walk)
Vaaste (D&T)
`);

const mar4Players = [
    ['tr33vs', [5,0], 1],
    ['axelia', [3,2]],
    ['impulse27', [3,1]],
    ['cyclopes8', [3,1]],
    ['genghisprawn', [2,1]],
    ['jwyatt', [2,1]],
    ['kelvin', [2,1]],
    ['wonkywombat', [2,1]],
    ['shakashaka', [2,1]],
    ['violet eventide', [1,2]],
    ['jadedtrekkie', [1,2]],
    ['jazze', [1,2]],
    ['purukogi', [1,2]],
    ['rick', [1,2]],
    ['raicune', [1,2]],
    ['fry guy', [0,3]],
    ['delaelle', [0,3]],
    ['vaaste', [0,3]],
];

webcam.processWeek(mar4Players, mar4Decks, 'mar4');


const mar11Decks = parseDecklists(`
WonkyWombat (RDW)
JadedTrekkie (Yawgmoth Jacuzzi)
Impulse27 (Jeskai midrange)
JeTheWeary (Aluren)
JazzE (wurg Initiative)
Bailite (Abzan Delirium)
hyunkim87 (Naya Winota)
BIRD | Jonas (Black Mold)
mehall (GW Legends)
shakashaka (RB Goblins)
Tr33vs (rdw)
Axelia (5C Superfriends)
Cat_Island (RG Hoof)
Yeti (D&T)
Violet Eventide (Esper Control)
Vaaste (Abzan Hatebears)
Purukogi (BUg Doomsday)
yucca (D&T)
calhove (GR Stompy)
Harju (Jeskai Slushie)
Cyclopes8 (Czech Pyromancer)
`);

const mar11Players = [
    ['impulse27', [5,0], 1],
    ['jetheweary', [3,2]],
    ['jadedtrekkie', [3,1]],
    ['wonkywombat', [3,1]],
    ['jazze', [2,1]],
    ['bailite', [2,1]],
    ['hyunkim87', [2,1]],
    ['bird | jonas', [2,1]],
    ['mehall', [2,1]],
    ['shakashaka', [2,1]],
    ['tr33vs', [1,2]],
    ['axelia', [1,2]],
    ['cat_island', [1,2]],
    ['yeti', [1,2]],
    ['violet eventide', [1,2]],
    ['vaaste', [1,2]],
    ['purukogi', [1,2]],
    ['yucca', [1,2]],
    ['calhove', [0,3]],
    ['harju', [0,3]],
    ['cyclopes8', [0,3]],
];

webcam.processWeek(mar11Players, mar11Decks, 'mar11');


const mar18Decks = parseDecklists(`
Shakashaka - Rakdos Goblins
Jamesses - Boros D&T
Harju - lotus Breach Storm
Bailite - Abzan Midrange
Hyunkim87 - Sans B Seeker walk
JadedTrekkie - Paradox Academy
Purukogi - BUg Doomsday
Mehall - GW legends
sir Nikheizen - Jund aristocrats
JazzE - Spearmint Midrange
Cyclopes8 - Gruul Aggro
Cat_Island - Gruul Hoof
Axelia - 5c superfriends
Fry Guy - Jeskai Breach
Praenomen - D&T
kelvin - RDW
calhove - Naya Initiative
Rick - Academy Prison
cymbalman - Blood and Taxes
JWyatt - Grixis Thoracle
Impulse27 - Jeskai Midrange
Yannic - Mono Blue Control
vaaste - jeskai midrange
`);

const mar18Players = [
    ['impulse27', [5,0], 1],
    ['calhove', [4,1]],
    ['jazze', [3,1]],
    ['yannic', [2,2]],
    ['jadedtrekkie', [2,1]],
    ['cymbalman', [2,1]],
    ['rick', [2,1]],
    ['axelia', [2,1]],
    ['jamesses', [2,1]],
    ['praenomen', [2,1]],
    ['purukogi', [2,1]],
    ['sir nikheizen', [2,1]],
    ['vaaste', [1,2]],
    ['jwyatt', [1,2]],
    ['shakashaka', [1,2]],
    ['cyclopes8', [1,2]],
    ['mehall', [1,2]],
    ['fry guy', [1,2]],
    ['harju', [1,2]],
    ['hyunkim87', [1,2]],
    ['kelvin', [1,2]],
    ['bailite', [0,3]],
    ['cat_island', [0,3]]
];

webcam.processWeek(mar18Players, mar18Decks, 'mar18');


const allDecks = Object.keys(webcam.decks).filter((name) => {
    return Array.isArray(name.match(/lotusBreach.+/g))
}).sort();
allDecks.forEach((deck) => {
    // console.log(webcam.decks[deck]);
});

const makeComparator = (criteria) => {
    return function(a, b) {
        if (a[criteria] < b[criteria])
            return 1;
        if (a[criteria] > b[criteria])
            return -1;
        return 0;
    };
};
// Object.keys(webcam.decks).sort(makeComparator('winrate')).forEach((deck) => {
//     const { name, uniquePilots, played, totalPoints, average, winrate, trophies } = webcam.decks[deck];
//     console.log(`${name}, ${uniquePilots}, ${played}, ${totalPoints}, ${average}, ${winrate}, ${trophies}`);
// });


const deckCsv = formatCSV(webcam, 'decks', ['name', 'played', 'uniquePilots', 'totalPoints', 'average', 'winrate', 'trophies', 'pointsBreakdown', 'colors', 'archetypes'], null, makeComparator(7)); // index of 2-x or better

const playerCsv = formatCSV(webcam, 'players', ['name', 'eventCount', 'deckCount', 'totalPoints', 'average', 'winrate', 'trophies', 'pointsBreakdown'], null, makeComparator(7));

const archetypeCSV = formatCSV(webcam, 'archetypes', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'));

const colorCsv = formatCSV(webcam, 'colors', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'));

const familyCsv = formatCSV(webcam, 'families', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'));

const mergedAggregates = [archetypeCSV, colorCsv, familyCsv].join('\n\n');

const lastEventArchetypesCsv = formatCSV(webcam, 'lastEvent', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'));

const lastEventMisc = formatEventMisc(webcam);

const lastEventAll = [lastEventArchetypesCsv, lastEventMisc].join('\n\n');

// console.log(webcam.players);
// console.log(webcam.decks);
// console.log(webcam.events['mar18']);
// console.log(formatEventMisc(webcam));

function writeAll(texts, files) {
    for (let i = 0; i < texts.length; i++) {
        fs.writeFile(files[i], texts[i], err => {
            if (err) {
                console.error(err);
            }
        });
    }
}

writeAll([deckCsv, playerCsv, mergedAggregates, lastEventAll], ['./decks.csv', './players.csv', './aggregate.csv', './lastEvent.csv']);
