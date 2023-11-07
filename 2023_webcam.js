const { Series, parseDecklists, parseReporting, pairingsToStandings, formatCSV, formatEventMisc, formatMatchups, formatEventDecks, mergeCSVHorizontally, sortPlayers } = require('./eventData.js');
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
    Yeti - humans and Taxes
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

const jan7Parsed = [
[ [ 'yeti', 'impulse27' ], [ 0, 2 ] ],
[ [ 'cyclopes8', 'axelia' ], [ 2, 0 ] ],
[ [ 'harju', 'funkyzeit' ], [ 2, 0 ] ],
[ [ 'calhove', 'vaaste' ], [ 2, 1 ] ],
[ [ 'tictaco', 'sam' ], [ 2, 1 ] ],
[ [ 'genghisprawn', 'wonkywombat' ], [ 2, 1 ] ],
[ [ 'tr33vs', 'cymbalman' ], [ 2, 1 ] ],
[ [ 'yannic', 'kelvin' ], [ 2, 0 ] ],
[ [ 'rick', 'hyunkim87' ], [ 1, 1] ],


[ [ 'impulse27', 'cyclopes8' ], [ 2, 0 ] ],
[ [ 'calhove', 'yannic' ], [ 0, 2 ] ],
[ [ 'yeti', 'axelia' ], [ 2, 0 ] ],
[ [ 'genghisprawn', 'harju' ], [ 2, 0 ] ],
[ [ 'tr33vs', 'tictaco' ], [ 2, 1 ] ],
[ [ 'cymbalman', 'hyunkim87' ], [ 2, 1 ] ],
[ [ 'sam', 'kelvin' ], [ 2, 0 ] ],
[ [ 'vaaste', 'rick' ], [ 2, 1 ] ],
[ [ 'funkyzeit', 'wonkywombat' ], [ 2, 0 ] ],

[ [ 'impulse27', 'yannic' ], [ 2, 0 ] ],
[ [ 'genghisprawn', 'tr33vs' ], [ 2, 0 ] ],
[ [ 'cyclopes8', 'calhove' ], [ 2, 1 ] ],
[ [ 'sam', 'cymbalman' ], [ 2, 1 ] ],
[ [ 'yeti', 'vaaste' ], [ 0, 2 ] ],
[ [ 'tictaco', 'funkyzeit' ], [ 0, 2 ] ],
[ [ 'harju', 'hyunkim87' ], [ 1, 2 ] ],
[ [ 'wonkywombat', 'rick' ], [ 2, 0 ] ],
[ [ 'kelvin', 'axelia' ], [ 2, 1 ] ],

[ [ 'impulse27', 'genghisprawn' ], [ 2, 0 ] ],
];

webcam.processWeek(jan7Players, jan7Decks, 'jan7', jan7Parsed);


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

const jan14Parsed = [
[ [ 'fry guy', 'harju' ], [ 0, 2 ] ],
[ [ 'vaaste', 'tictaco' ], [ 0, 2 ] ],
[ [ 'axelia', 'genghisprawn' ], [ 2, 1 ] ],
[ [ 'impulse27', 'hal' ], [ 2, 1 ] ],
[ [ 'cyclopes8', 'kelvin' ], [ 2, 0 ] ],
[ [ 'yannic', 'cymbalman' ], [ 2, 1 ] ],

[ [ 'fry guy', 'kelvin' ], [ 2, 0 ] ],
[ [ 'cymbalman', 'hal' ], [ 0, 2 ] ],
[ [ 'axelia', 'tictaco' ], [ 2, 0 ] ],
[ [ 'harju', 'yannic' ], [ 2, 0 ] ],
[ [ 'cyclopes8', 'vaaste' ], [ 2, 0 ] ],
[ [ 'impulse27', 'gerrimeister' ], [ 2, 0 ] ],

[ [ 'kelvin', 'cymbalman' ], [ 2, 1 ] ],
[ [ 'hal', 'fry guy' ], [ 2, 1 ] ],
[ [ 'impulse27', 'harju' ], [ 2, 0 ] ],
[ [ 'tictaco', 'gerrimeister' ], [ 2, 0 ] ],
[ [ 'axelia', 'cyclopes8' ], [ 2, 1 ] ],
[ [ 'genghisprawn', 'yannic' ], [ 2, 1 ] ],

[['impulse27', 'axelia'], [2,0]]
];

webcam.processWeek(jan14Players, jan14Decks, 'jan14', jan14Parsed);

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

const jan21Parsed = [
[ [ 'cymbalman', 'vaaste' ], [ 2, 0 ] ],
[ [ 'rick', 'purukogi' ], [ 2, 1 ] ],
[ [ 'genghisprawn', 'fry guy' ], [ 2, 0 ] ],
[ [ 'paul pilz', 'sir nikheizen' ], [ 2, 0 ] ],
[ [ 'jadedtrekkie', 'yannic' ], [ 2, 0 ] ],
[ [ 'pickleplop', 'axelia' ], [ 2, 1 ] ],
[ [ 'impulse27', 'ashtoreth' ], [ 2, 1 ] ],
[['jazze', 'hyunkim87'], [1,1]],

[ [ 'impulse27', 'pickleplop' ], [ 2, 0 ] ],
[ [ 'rick', 'cymbalman' ], [ 2, 1 ] ],
[ [ 'paul pilz', 'jadedtrekkie' ], [ 2, 1 ] ],
[ [ 'axelia', 'fry guy' ], [ 2, 0 ] ],
[ [ 'jazze', 'sir nikheizen' ], [ 2, 1 ] ],
[ [ 'hyunkim87', 'yannic' ], [ 2, 1 ] ],
[ [ 'genghisprawn', 'cymbalman' ], [ 2, 1 ] ],
[ [ 'purukogi', 'ashtoreth' ], [ 2, 1 ] ],

[ [ 'genghisprawn', 'rick' ], [ 2, 1 ] ],
[ [ 'pickleplop', 'hyunkim87' ], [ 0, 2 ] ],
[ [ 'axelia', 'jazze' ], [ 2, 1 ] ],
[ [ 'purukogi', 'cyclopes8' ], [ 0, 2 ] ],
[ [ 'yannic', 'sir nikheizen' ], [ 2, 1 ] ],
[ [ 'jadedtrekkie', 'cymbalman' ], [ 1, 2 ] ],
[ [ 'fry guy', 'ashtoreth' ], [ 2, 0 ] ],
[ [ 'impulse27', 'paul pilz' ], [ 2, 0 ] ],

[['impulse27', 'genghisprawn'], [2,0]]
];

webcam.processWeek(jan21Players, jan21Decks, 'jan21', jan21Parsed);
// console.log(webcam.players['cymbalman'.toLowerCase()]);


const jan28Decks = parseDecklists(`
hyunkim87 (naya Winota)
Impulse27 (Jeskai Midrange)
raicune (Czech Bears)
Tr33vs (Death and taxes)
Yannic (wurg Omnath)
kelvin (Lotusless Breach storm)
Yeti (humans and taxes)
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

const jan28Parsed = [
[ [ 'genghisprawn', 'fry guy' ], [ 0, 2 ] ],
[ [ 'kelvin', 'hyunkim87' ], [ 0, 2 ] ],
[ [ 'dynethor', 'johann' ], [ 1, 2 ] ],
[ [ 'sir nikheizen', 'ashtoreth' ], [ 2, 0 ] ],
[ [ 'yeti', 'tictaco' ], [ 2, 1 ] ],
[ [ 'jadedtrekkie', 'deggers' ], [ 2, 1 ] ],
[ [ 'impulse27', 'axelia' ], [ 2, 0 ] ],
[ [ 'purukogi', 'funkyzeit' ], [ 2, 1 ] ],
[ [ 'harju', 'yannic' ], [ 0, 2 ] ],
[ [ 'jazze', 'andrew and drew' ], [ 2, 1 ] ],
[ [ 'gabe sorci', 'cyclopes8' ], [ 2, 1 ] ],
[ [ 'raicune', 'wonkywombat' ], [ 2, 1 ] ],

[ [ 'gabe sorci', 'hyunkim87' ], [ 0, 2 ] ],
[ [ 'yeti', 'jazze' ], [ 2, 0 ] ],
[ [ 'purukogi', 'johann' ], [ 2, 1 ] ],
[ [ 'impulse27', 'jadedtrekkie' ], [ 2, 0 ] ],
[ [ 'raicune', 'ashtoreth' ], [ 2, 0 ] ],
[ [ 'dynethor', 'funkyzeit' ], [ 2, 1 ] ],
[ [ 'axelia', 'cyclopes8' ], [ 2, 0 ] ],
[ [ 'tr33vs', 'fry guy' ], [ 2, 0 ] ],
[ [ 'harju', 'wonkywombat' ], [ 2, 1 ] ],
[ [ 'genghisprawn', 'andrew and drew' ], [ 2, 1 ] ],
[ [ 'deggers', 'tictaco' ], [ 2, 1 ] ],
[['sir nikheizen', 'yannic'], [0,2]],

[ [ 'yeti', 'hyunkim87' ], [ 1, 2 ] ],
[ [ 'harju', 'genghisprawn' ], [ 2, 1 ] ],
[ [ 'kelvin', 'dynethor' ], [ 2, 0 ] ],
[ [ 'impulse27', 'tr33vs' ], [ 2, 1 ] ],
[ [ 'johann', 'funkyzeit' ], [ 2, 1 ] ],
[ [ 'raicune', 'yannic' ], [ 2, 0 ] ],
[ [ 'deggers', 'fry guy' ], [ 0, 2 ] ],
[ [ 'tictaco', 'cyclopes8' ], [ 2, 1 ] ],
[['purukogi', 'sir nikheizen'], [0,2]],
[['gabe sorci', 'axelia'], [2,0]],
[['ashtoreth', 'andrew and drew'], [2,0]],

[ [ 'impulse27', 'raicune' ], [ 2, 1 ] ],
[['yannic', 'hyunkim87'], [2,0]],
[['impulse27', 'yannic'], [2,1]],
];

webcam.processWeek(jan28Players, jan28Decks, 'jan28', jan28Parsed);
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

const feb4Parsed = [
[ [ 'delaelle', 'fry guy' ], [ 2, 0 ] ],
[ [ 'cyclopes8', 'hyunkim87' ], [ 1, 2 ] ],
[ [ 'tictaco', 'andrew and drew' ], [ 2, 0 ] ],
[ [ 'purukogi', 'jazze' ], [ 1, 2 ] ],
[ [ 'impulse27', 'vaaste' ], [ 2, 0 ] ],
[ [ 'wonkywombat', 'violet eventide' ], [ 1, 2 ] ],
[ [ 'genghisprawn', 'mehall' ], [ 2, 1 ] ],
[['harju', 'axelia'], [0,2]],
[['kelvin', 'rick'], [2,0]],

[ [ 'andrew and drew', 'fry guy' ], [ 0, 2 ] ],
[ [ 'wonkywombat', 'harju' ], [ 2, 1 ] ],
[ [ 'axelia', 'hyunkim87' ], [ 0, 2 ] ],
[ [ 'jazze', 'genghisprawn' ], [ 2, 1 ] ],
[ [ 'violet eventide', 'delaelle' ], [ 2, 0 ] ],
[ [ 'mehall', 'rick' ], [ 2, 1 ] ],
[ [ 'impulse27', 'kelvin' ], [ 2, 1 ] ],
[ [ 'vaaste', 'purukogi' ], [ 2, 1 ] ],

[ [ 'fry guy', 'axelia' ], [ 2, 0 ] ],
[ [ 'cyclopes8', 'rick' ], [ 2, 0 ] ],
[ [ 'wonkywombat', 'vaaste' ], [ 2, 1 ] ],
[ [ 'kelvin', 'mehall' ], [ 2, 0 ] ],
[ [ 'delaelle', 'genghisprawn' ], [ 2, 1 ] ],
[ [ 'jazze', 'violet eventide' ], [ 1, 2 ] ],
[ [ 'impulse27', 'hyunkim87' ], [ 2, 1 ] ],

[['impulse27', 'violet eventide'], [2,1]]
];

webcam.processWeek(feb4Players, feb4Decks, 'feb4', feb4Parsed);
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

const feb11Parsed = [
[ [ 'yeti', 'wonkywombat' ], [ 2, 1 ] ],
[ [ 'funkyzeit', 'genghisprawn' ], [ 2, 0 ] ],
[ [ 'tictaco', 'purukogi' ], [ 2, 0 ] ],
[ [ 'cymbalman', 'therealemt' ], [ 0, 2 ] ],
[ [ 'violet eventide', 'jwyatt' ], [ 2, 0 ] ],
[ [ 'rick', 'kelvin' ], [ 0, 2 ] ],
[ [ 'delaelle', 'pickleplop' ], [ 2, 0 ] ],
[ [ 'impulse27', 'cyclopes8' ], [ 2, 1 ] ],
[ [ 'yucca', 'axelia' ], [ 2, 1 ] ],

[ [ 'funkyzeit', 'purukogi' ], [ 2, 0 ] ],
[ [ 'cymbalman', 'cyclopes8' ], [ 2, 0 ] ],
[ [ 'wonkywombat', 'axelia' ], [ 2, 0 ] ],
[ [ 'jwyatt', 'pickleplop' ], [ 2, 0 ] ],
[ [ 'yeti', 'therealemt' ], [ 2, 1 ] ],
[ [ 'tictaco', 'violet eventide' ], [ 2, 0 ] ],
[ [ 'impulse27', 'kelvin' ], [ 2, 0 ] ],
[ [ 'delaelle', 'yucca' ], [ 2, 0 ] ],
[ [ 'genghisprawn', 'rick' ], [ 2, 1 ] ],

[ [ 'therealemt', 'genghisprawn' ], [ 2, 0 ] ],
[ [ 'tictaco', 'delaelle' ], [ 2, 0 ] ],
[ [ 'yeti', 'impulse27' ], [ 1, 2 ] ],
[ [ 'wonkywombat', 'pickleplop' ], [ 2, 0 ] ],
[ [ 'jwyatt', 'funkyzeit' ], [ 2, 1 ] ],
[ [ 'cyclopes8', 'rick' ], [ 2, 1 ] ],
[ [ 'purukogi', 'axelia' ], [ 1, 2 ] ],
[ [ 'cymbalman', 'kelvin' ], [ 2, 1 ] ],
[ [ 'violet eventide', 'yucca' ], [ 1, 0 ] ],

[ [ 'impulse27', 'tictaco' ], [ 2, 1 ] ]
];

webcam.processWeek(feb11Players, feb11Decks, 'feb11', feb11Parsed);
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

const feb18Parsed = [
[ [ 'kelvin', 'thunder_farts' ], [ 2, 0 ] ],
[ [ 'wonkywombat', 'cyclopes8' ], [ 2, 1 ] ],
[ [ 'funkyzeit', 'purukogi' ], [ 2, 1 ] ],
[ [ 'harju', 'shakashaka' ], [ 2, 1 ] ],
[ [ 'fry guy', 'mehall' ], [ 2, 0 ] ],
[ [ 'vaaste', 'axelia' ], [ 2, 1 ] ],
[ [ 'impulse27', 'jwyatt' ], [ 2, 0 ] ],
[ [ 'jamesses', 'jazze' ], [ 2, 0 ] ],
[ [ 'rick', 'genghisprawn' ], [ 2, 1 ] ],

[ [ 'kelvin', 'wonkywombat' ], [ 2, 1 ] ],
[ [ 'jwyatt', 'purukogi' ], [ 2, 1 ] ],
[ [ 'impulse27', 'vaaste' ], [ 2, 0 ] ],
[ [ 'genghisprawn', 'mehall' ], [ 2, 0 ] ],
[ [ 'shakashaka', 'jamesses' ], [ 2, 1 ] ],
[ [ 'harju', 'rick' ], [ 2, 1 ] ],
[ [ 'funkyzeit', 'fry guy' ], [ 2, 1 ] ],
[ [ 'axelia', 'cyclopes8' ], [ 2, 1 ] ],
[ [ 'jazze', 'thunder_farts' ], [ 2, 1 ] ],

[ [ 'rick', 'shakashaka' ], [ 1, 2 ] ],
[ [ 'cyclopes8', 'purukogi' ], [ 2, 1 ] ],
[ [ 'kelvin', 'fry guy' ], [ 1, 2 ] ],
[ [ 'genghisprawn', 'jamesses' ], [ 2, 0 ] ],
[ [ 'axelia', 'thunder_farts' ], [ 2, 1 ] ],
[ [ 'vaaste', 'jazze' ], [ 2, 1 ] ],
[ [ 'harju', 'funkyzeit' ], [ 2, 1 ] ],
[ ['wonkywombat', 'jwyatt'], [0,2]],
];

webcam.processWeek(feb18Players, feb18Decks, 'feb18', feb18Parsed);
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
bird | jonas (Black Mold)
Fry Guy (Temur midrange)
JWyatt (Grixis Thoracle)
TherealEMT (Jeskai midrange)
shakashaka (RUG Moon)
hyunkim87 (UB Ninjas)
Cyclopes8 (Naya Turbo Initiative)
kelvin (Lotusless Breach)
Yeti (humans and taxes)
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
    ['bird | jonas', [2,1]],
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

const feb25Parsed = [
[ [ 'wonkywombat', 'vaaste' ], [ 2, 0 ] ],
[ [ 'axelia', 'therealemt' ], [ 2, 0 ] ],
[ [ 'mehall', 'kannnicks' ], [ 0, 2 ] ],
[ [ 'yeti', 'jwyatt' ], [ 1, 2 ] ],
[ [ 'cyclopes8', 'dentro' ], [ 2, 0 ] ],
[ [ 'jamesses', 'sir nikheizen' ], [ 2, 0 ] ],
[ [ 'shakashaka', 'hyunkim87' ], [ 0, 2 ] ],
[ [ 'kelvin', 'tictaco' ], [ 2, 1 ] ],
[ [ 'genghisprawn', 'bird | jonas' ], [ 2, 1 ] ],
[ [ 'harju', 'sam' ], [ 2, 0 ] ],
[ [ 'jazze', 'impulse27' ], [ 2, 1 ] ],
[ [ 'hal', 'fry guy' ], [ 2, 1 ] ],
[['purukogi', 'robin sorensen'], [2,1]],

[ [ 'shakashaka', 'sir nikheizen' ], [ 2, 0 ] ],
[ [ 'jamesses', 'jazze' ], [ 2, 0 ] ],
[ [ 'therealemt', 'tictaco' ], [ 2, 0 ] ],
[ [ 'harju', 'mehall' ], [ 2, 0 ] ],
[ [ 'hal', 'jwyatt' ], [ 2, 1 ] ],
[ [ 'wonkywombat', 'cyclopes8' ], [ 2, 1 ] ],
[ [ 'yeti', 'impulse27' ], [ 2, 1 ] ],
[ [ 'genghisprawn', 'hyunkim87' ], [ 2, 1 ] ],
[ [ 'bird | jonas', 'robin sorensen' ], [ 2, 1 ] ],
[ [ 'dentro', 'vaaste' ], [ 2, 1 ] ],
[['purukogi', 'kelvin'], [2,1]],
[['kannnicks', 'axelia'], [2,0]],

[ [ 'yeti', 'bird | jonas' ], [ 0, 2 ] ],
[ [ 'genghisprawn', 'harju' ], [ 2, 0 ] ],
[ [ 'wonkywombat', 'jamesses' ], [ 2, 0 ] ],
[ [ 'axelia', 'hal' ], [ 2, 1 ] ],
[ [ 'dentro', 'impulse27' ], [ 1, 2 ] ],
[ [ 'jwyatt', 'jazze' ], [ 2, 0 ] ],
[ [ 'fry guy', 'cyclopes8' ], [ 2, 1 ] ],
[ [ 'vaaste', 'mehall' ], [ 2, 1 ] ],
[ [ 'shakashaka', 'kelvin' ], [ 2, 1 ] ],
[ [ 'therealemt', 'hyunkim87' ], [ 2, 1 ] ],
[['purukogi', 'kannnicks'], [2,0]],

[ [ 'kannnicks', 'genghisprawn' ], [ 2, 0 ] ],
[ [ 'purukogi', 'wonkywombat' ], [ 2, 1 ] ],
[ [ 'purukogi', 'kannnicks' ], [ 2, 1 ] ]
];

webcam.processWeek(feb25Players, feb25Decks, 'feb25', feb25Parsed);
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

const mar4Parsed = [
[ [ 'jwyatt', 'delaelle' ], [ 2, 0 ] ],
[ [ 'tr33vs', 'violet eventide' ], [ 2, 0 ] ],
[ [ 'jadedtrekkie', 'vaaste' ], [ 2, 0 ] ],
[ [ 'cyclopes8', 'genghisprawn' ], [ 2, 1 ] ],
[ [ 'raicune', 'jazze' ], [ 1, 2 ] ],
[ [ 'fry guy', 'impulse27' ], [ 1, 2 ] ],
[ [ 'axelia', 'shakashaka' ], [ 2, 0 ] ],
[ [ 'kelvin', 'rick' ], [ 2, 1 ] ],
[ ['wonkywombat', 'purukogi'], [2,0]],

[ [ 'cyclopes8', 'jwyatt' ], [ 2, 0 ] ],
[ [ 'genghisprawn', 'raicune' ], [ 2, 0 ] ],
[ [ 'axelia', 'wonkywombat' ], [ 2, 1 ] ],
[ [ 'rick', 'delaelle' ], [ 2, 1 ] ],
[ [ 'jadedtrekkie', 'tr33vs' ], [ 1, 2 ] ],
[ [ 'fry guy', 'kelvin' ], [ 0, 2 ] ],
[ [ 'impulse27', 'jazze' ], [ 2, 1 ] ],
[ [ 'vaaste', 'violet eventide' ], [ 0, 2 ] ],
[ ['shakashaka', 'purukogi'], [2, 0]],

[ [ 'genghisprawn', 'jazze' ], [ 2, 0 ] ],
[ [ 'wonkywombat', 'fry guy' ], [ 2, 0 ] ],
[ [ 'shakashaka', 'jadedtrekkie' ], [ 2, 0 ] ],
[ [ 'tr33vs', 'axelia' ], [ 2, 0 ] ],
[ [ 'jwyatt', 'rick' ], [ 2, 0 ] ],
[ [ 'raicune', 'vaaste' ], [ 2, 0 ] ],
[ [ 'cyclopes8', 'violet eventide' ], [ 2, 0 ] ],
[ [ 'kelvin', 'impulse27' ], [ 0, 2 ] ],

[ [ 'tr33vs', 'impulse27' ], [ 2, 0 ] ],
[ [ 'axelia', 'cyclopes8' ], [ 2, 0 ] ],
[ [ 'tr33vs', 'axelia' ], [ 2, 1 ] ]
];

webcam.processWeek(mar4Players, mar4Decks, 'mar4', mar4Parsed);


const mar11Decks = parseDecklists(`
WonkyWombat (RDW)
JadedTrekkie (Yawgmoths Jacuzzi)
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
Yeti (humans and taxes)
Violet Eventide (jeskai Control)
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

const mar11Parsed = [
[ [ 'yeti', 'wonkywombat' ], [ 1, 2 ] ],
[ [ 'vaaste', 'violet eventide' ], [ 0, 2 ] ],
[ [ 'harju', 'bird | jonas' ], [ 0, 2 ] ],
[ [ 'axelia', 'yucca' ], [ 2, 0 ] ],
[ [ 'jetheweary', 'calhove' ], [ 2, 1 ] ],
[ [ 'impulse27', 'cat_island' ], [ 2, 0 ] ],
[ [ 'jazze', 'shakashaka' ], [ 2, 0 ] ],
[ [ 'jadedtrekkie', 'bailite' ], [ 2, 1 ] ],
[ [ 'mehall', 'cyclopes8' ], [ 2, 1 ] ],
[ ['purukogi', 'hyunkim87'], [0,2]],


[ [ 'yeti', 'cyclopes8' ], [ 2, 1 ] ],
[ [ 'impulse27', 'hyunkim87' ], [ 2, 0 ] ],
[ [ 'wonkywombat', 'bird | jonas' ], [ 2, 0 ] ],
[ [ 'cat_island', 'harju' ], [ 2, 0 ] ],
[ [ 'shakashaka', 'vaaste' ], [ 2, 1 ] ],
[ [ 'bailite', 'calhove' ], [ 2, 1 ] ],
[ [ 'mehall', 'violet eventide' ], [ 2, 1 ] ],
[ [ 'jadedtrekkie', 'axelia' ], [ 2, 1 ] ],
[ [ 'jetheweary', 'jazze' ], [ 2, 1 ] ],
[ ['purukogi', 'yucca'], [0,2]],

[ [ 'yeti', 'bailite' ], [ 0, 2 ] ],
[ [ 'impulse27', 'axelia' ], [ 2, 0 ] ],
[ [ 'wonkywombat', 'mehall' ], [ 2, 1 ] ],
[ [ 'jazze', 'calhove' ], [ 2, 1 ] ],
[ [ 'jadedtrekkie', 'jetheweary' ], [ 2, 1 ] ],
[ [ 'shakashaka', 'yucca' ], [ 2, 1 ] ],
[ [ 'cat_island', 'hyunkim87' ], [ 1, 2 ] ],
[ [ 'violet eventide', 'bird | jonas' ], [ 1, 2 ] ],
[ ['purukogi', 'cyclopes8'], [2,0]],

[ [ 'jadedtrekkie', 'impulse27' ], [ 0, 2 ] ],
[ [ 'jetheweary', 'wonkywombat' ], [ 2, 1 ] ],
[ [ 'impulse27', 'jetheweary' ], [ 2, 0 ] ],
];

webcam.processWeek(mar11Players, mar11Decks, 'mar11', mar11Parsed);


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

const mar18Parsed = [
[ [ 'jwyatt', 'kelvin' ], [ 2, 0 ] ],
[ [ 'jazze', 'vaaste' ], [ 2, 0 ] ],
[ [ 'mehall', 'harju' ], [ 2, 1 ] ],
[ [ 'rick', 'cyclopes8' ], [ 2, 1 ] ],       
[ [ 'yannic', 'praenomen' ], [ 2, 0 ] ],     
[ [ 'jadedtrekkie', 'purukogi' ], [ 2, 1 ] ],
[ [ 'calhove', 'axelia' ], [ 2, 0 ] ],  
[ [ 'impulse27', 'shakashaka' ], [ 2, 0 ] ], 
[ [ 'fry guy', 'hyunkim87' ], [ 2, 1 ] ],    
[ [ 'jamesses', 'cat_island' ], [ 2, 1 ] ],  
[ [ 'sir nikheizen', 'bailite' ], [ 2, 1 ] ],

[ [ 'calhove', 'jwyatt' ], [ 2, 0 ] ],       
[ [ 'harju', 'shakashaka' ], [ 2, 0 ] ],     
[ [ 'praenomen', 'cyclopes8' ], [ 2, 0 ] ],  
[ [ 'rick', 'mehall' ], [ 2, 0 ] ],
[ [ 'purukogi', 'bailite' ], [ 2, 0 ] ],     
[ [ 'jazze', 'cymbalman' ], [ 2, 0 ] ],      
[ [ 'kelvin', 'cat_island' ], [ 2, 0 ] ],    
[ [ 'impulse27', 'jamesses' ], [ 2, 1 ] ],   
[ [ 'jadedtrekkie', 'fry guy' ], [ 2, 0 ] ], 
[ [ 'yannic', 'sir nikheizen' ], [ 2, 0 ] ], 
[ ['hyunkim87', 'axelia'], [0,2]],

[ [ 'jamesses', 'harju' ], [ 2, 1 ] ],      
[ [ 'bailite', 'hyunkim87' ], [ 1, 2 ] ],    
[ [ 'jazze', 'jadedtrekkie' ], [ 2, 1 ] ],   
[ [ 'purukogi', 'mehall' ], [ 2, 1 ] ],
[ [ 'sir nikheizen', 'vaaste' ], [ 2, 1 ] ],
[ [ 'cyclopes8', 'cat_island' ], [ 2, 0 ] ],
[ [ 'axelia', 'fry guy' ], [ 2, 1 ] ],
[ [ 'praenomen', 'kelvin' ], [ 2, 0 ] ],
[ [ 'calhove', 'rick' ], [ 2, 0 ] ],
[ [ 'cymbalman', 'jwyatt' ], [ 2, 1 ] ],
[ [ 'impulse27', 'yannic' ], [ 2, 0 ] ],

[ [ 'impulse27', 'jazze' ], [ 2, 0 ] ],
[ [ 'calhove', 'yannic' ], [ 2, 1 ] ],
[ [ 'impulse27', 'calhove' ], [ 2, 0 ] ]
];

webcam.processWeek(mar18Players, mar18Decks, 'mar18', mar18Parsed);


const mar25Decks = parseDecklists(`
JazzE (Jeskai Midrange)
Axelia (5C Walkers)
JWyatt (Grixis Thoracle)
calhove (Naya Initiative)
mehall (Jeskai Welder Vault)
Impulse27 (Jeskai midrange)
Harju (Grixis Reanimator)
Delaelle (Hot Bant)
kelvin (RDW)
Cyclopes8 (BR Midrange)
Purukogi (RUg Moon)
Praenomen (D&T)
WonkyWombat (RDW)
Cat_Island (RW Equipment)
cymbalman (Naya Winota)
Kaleb Gloriouswolfman (BW Tokens)
Hal (The Rock)
GenghisPrawn (Jeskai midrange)
Vaaste (UW Control)
Odin (4C Winota)
`);

const mar25Players = [
    ['jazze', [4,0], 1],
    ['axelia', [3,1]],
    ['jwyatt', [2,1]],
    ['calhove', [2,1]],
    ['mehall', [2,1]],
    ['impulse27', [2,1]],
    ['harju', [2,1]],
    ['delaelle', [2,1]],
    ['kelvin', [2,1]],
    ['cyclopes8', [2,1]],
    ['purukogi', [1,2]],
    ['praenomen', [1,2]],
    ['wonkywombat', [1,2]],
    ['cat_island', [1,2]],
    ['cymbalman', [1,2]],
    ['kaleb gloriouswolfman', [1,2]],
    ['hal', [1,2]],
    ['genghisprawn', [1,2]],
    ['vaaste', [0,3]],
    ['odin', [0,3]],
];

const mar25Parsed = [
[ [ 'harju', 'odin' ], [ 2, 0 ] ],
[ [ 'axelia', 'kaleb gloriouswolfman' ], [ 2, 0 ] ],
[ [ 'jwyatt', 'cyclopes8' ], [ 2, 0 ] ],
[ [ 'jazze', 'wonkywombat' ], [ 2, 0 ] ],
[ [ 'cymbalman', 'hal' ], [ 2, 0 ] ],
[ [ 'delaelle', 'praenomen' ], [ 2, 1 ] ],
[ [ 'calhove', 'cat_island' ], [ 2, 1 ] ],
[ [ 'mehall', 'genghisprawn' ], [ 2, 1 ] ],
[ [ 'impulse27', 'kelvin' ], [ 2, 0 ] ],
[['purukogi', 'vaaste'], [2,0]],

[ [ 'calhove', 'harju' ], [ 2, 0 ] ],
[ [ 'kelvin', 'hal' ], [ 2, 1 ] ],
[ [ 'cymbalman', 'impulse27' ], [ 0, 2 ] ],
[ [ 'axelia', 'purukogi' ], [ 2, 0 ] ],
[ [ 'praenomen', 'odin' ], [ 2, 1 ] ],
[ [ 'genghisprawn', 'wonkywombat' ], [ 2, 1 ] ],
[ [ 'mehall', 'delaelle' ], [ 2, 1 ] ],
[ [ 'jazze', 'jwyatt' ], [ 2, 1 ] ],
[ [ 'cat_island', 'kaleb gloriouswolfman' ], [ 2, 0 ] ],
[ [ 'cyclopes8', 'vaaste' ], [ 2, 1 ] ],

[ [ 'harju', 'cymbalman' ], [ 2, 0 ] ],
[ [ 'wonkywombat', 'vaaste' ], [ 2, 0 ] ],
[ [ 'kaleb gloriouswolfman', 'genghisprawn' ], [ 2, 0 ] ],
[ [ 'axelia', 'calhove' ], [ 2, 0 ] ],
[ [ 'jwyatt', 'impulse27' ], [ 2, 1 ] ],
[ [ 'hal', 'odin' ], [ 2, 0 ] ],
[ [ 'jazze', 'mehall' ], [ 2, 0 ] ],
[ [ 'cyclopes8', 'praenomen' ], [ 2, 1 ] ],
[ [ 'delaelle', 'cat_island' ], [ 2, 0 ] ],
[ [ 'kelvin', 'purukogi'], [2,0]],

[ [ 'jazze', 'axelia' ], [ 2, 0 ] ]
];

webcam.processWeek(mar25Players, mar25Decks, 'mar25', mar25Parsed);


const apr1Decks = parseDecklists(`
impulse27 (Jeskai midrange)
WonkyWombat (RDW) 
Yeti (humans and taxes) 
Kelvin (grixis reanimator)
JazzE (Jeskai Midrange)
Cyclopes8 (BR Midrange)
Harju (Jeskai Welder Vault)
hyunkim87 (Naya Winota) 
calhove (Naya Initiative)
GenghisPrawn (Jeskai Midrange) 
Jwyatt (Grixis Thoracle)
Delaelle (Spearmint jeskai)
macintose (4C initiative)
Deggers (Jeskai Control) 
Axelia (5c superfriends)
Fry Guy (Boros equipment)
Andrew And Drew (4C Artifacts)
yucca (DNT)
Purukogi (RUG Moon)
Rick (Mardu Dead Guy Ale)
`);

const apr1Players = [
    ['impulse27', [4,0], 1],
    ['Harju', [3,1]],
    ['wonkywombat', [2,1]],
    ['hyunkim87', [2,1]],
    ['axelia', [2,1]],
    ['yeti', [2,1]],
    ['deggers', [2,1]],
    ['macintose', [2,1]],
    ['jwyatt', [2,1]],
    ['calhove', [2,1]],
    ['genghisprawn', [1,2]],
    ['rick', [1,2]],
    ['jazze', [1,2]],
    ['Delaelle', [1,2]],
    ['kelvin', [1,2]],
    ['fry guy', [1,2]],
    ['andrew and drew', [1,2]],
    ['cyclopes8', [1,2]],
    ['purukogi', [0,3]],
    ['yucca', [0,3]],
];

const apr1Pairings = [
[ [ 'harju', 'genghisprawn' ], [ 2, 0 ] ], // welder v jeskai
[ [ 'fry guy', 'delaelle' ], [ 1, 2 ] ],
[ [ 'wonkywombat', 'purukogi' ], [ 2, 1 ] ],
[ [ 'deggers', 'calhove' ], [ 2, 1 ] ],
[ [ 'impulse27', 'jazze' ], [ 2, 0 ] ], // jeskai mirror
[ [ 'jwyatt', 'hyunkim87' ], [ 1, 2 ] ],
[ [ 'yeti', 'yucca' ], [ 2, 1 ] ], // dnt mirror
[ [ 'kelvin', 'cyclopes8' ], [ 2, 1 ] ],
[ [ 'axelia', 'andrew and drew' ], [ 2, 0 ] ],
[ [ 'rick', 'macintose' ], [ 1, 2 ] ],

[ [ 'yeti', 'impulse27' ], [ 0, 2 ] ], // dnt v jeskai
[ [ 'wonkywombat', 'macintose' ], [ 2, 0 ] ],
[ [ 'hyunkim87', 'kelvin' ], [ 2, 0 ] ],
[ [ 'jwyatt', 'rick' ], [ 2, 0 ] ],
[ [ 'purukogi', 'calhove' ], [ 0, 2 ] ],
[ [ 'harju', 'axelia' ], [ 2, 1 ] ], // welder v superfriends
[ [ 'cyclopes8', 'andrew and drew' ], [ 2, 0 ] ],
[ [ 'deggers', 'delaelle' ], [ 2, 0 ] ],
[ [ 'fry guy', 'yucca' ], [ 2, 0 ] ], // boros equip v dnt
[ ['jazze', 'genghisprawn'], [0,2]], // jeskai mirror

[ [ 'impulse27', 'wonkywombat' ], [ 2, 0 ] ],
[ [ 'yeti', 'kelvin' ], [ 2, 0 ] ], // dnt v reanimator
[ [ 'jazze', 'cyclopes8' ], [ 2, 0 ] ],
[ [ 'harju', 'hyunkim87' ], [ 2, 0 ] ], // welder v naya
[ [ 'calhove', 'genghisprawn' ], [ 2, 1 ] ],
[ [ 'jwyatt', 'delaelle' ], [ 2, 1 ] ],
[ [ 'macintose', 'deggers' ], [ 2, 0 ] ],
[ [ 'axelia', 'fry guy' ], [ 2, 0 ] ],
[ [ 'andrew and drew', 'yucca' ], [ 2, 1 ] ], // 4c artifacts v dnt

[ [ 'impulse27', 'harju' ], [ 2, 1 ] ] // jeskai v welder
];


webcam.processWeek(apr1Players, apr1Decks, 'apr1', apr1Pairings);


const apr8Decks = parseDecklists(`
axelia (5c walkers omnitell)
wonkywombat (rdw)
kelvin (grixis reanimator)
jwyatt (grixis thoracle)
impulse27 (wurg tempo)
cyclopes8 (rg aggro)
purukogi (rug moon)
hyunkim87 (black moon)
fry guy (flash hulk)
tictaco (grixis welder)
rick (wbrg aristocrats)
genghisprawn (spearmint jeskai)
therealemt (azorius control)
violetblight (jeskai welder)
bird | jonas (black mold)
jazze (jeskai control)
cymbalman (rug moon)
calhove (wurg lands midrange)
notfreduardo (esper initiative)
jadedtrekkie (yawgmoths jacuzzi)
`);

const apr8Parsed = [
[ [ 'cyclopes8', 'therealemt' ], [ 2, 0 ] ],     
[ [ 'genghisprawn', 'axelia' ], [ 2, 0 ] ],      
[ [ 'calhove', 'hyunkim87' ], [ 0, 2 ] ],        
[ [ 'jazze', 'wonkywombat' ], [ 2, 1 ] ],        
[ [ 'impulse27', 'tictaco' ], [ 2, 1 ] ],        
[ [ 'bird | jonas', 'jwyatt' ], [ 2, 1 ] ],
[ [ 'kelvin', 'notfreduardo' ], [ 2, 1 ] ],      
[ [ 'cymbalman', 'fry guy' ], [ 1, 2 ] ],        
[ [ 'jadedtrekkie', 'violetblight' ], [ 1, 2 ] ],
[ [ 'rick', 'purukogi' ], [ 1, 2 ] ],

[ [ 'cyclopes8', 'bird | jonas' ], [ 2, 1 ] ],
[ [ 'violetblight', 'kelvin' ], [ 1, 1 ] ],
[ [ 'genghisprawn', 'hyunkim87' ], [ 1, 2 ] ],   
[ [ 'purukogi', 'fry guy' ], [ 2, 0 ] ],
[ [ 'impulse27', 'jazze' ], [ 2, 0 ] ],
[ [ 'jwyatt', 'calhove' ], [ 2, 0 ] ],
[ [ 'cymbalman', 'notfreduardo' ], [ 2, 1 ] ],
[ [ 'therealemt', 'axelia' ], [ 2, 1 ] ],
[ [ 'tictaco', 'wonkywombat' ], [ 2, 1 ] ],      

[ [ 'impulse27', 'cyclopes8' ], [ 2, 1 ] ],
[ [ 'purukogi', 'hyunkim87' ], [ 2, 0 ] ],
[ [ 'therealemt', 'violetblight' ], [ 1, 2 ] ],
[ [ 'kelvin', 'jwyatt' ], [ 2, 0 ] ],
[ [ 'bird | jonas', 'jazze' ], [ 2, 1 ] ],
[ [ 'fry guy', 'tictaco' ], [ 2, 1 ] ],
[ [ 'rick', 'genghisprawn' ], [ 0, 2 ] ],
[ [ 'cymbalman', 'calhove' ], [ 2, 1 ] ],
[ [ 'axelia', 'wonkywombat' ], [ 2, 1 ] ],

[ [ 'impulse27', 'purukogi' ], [ 2, 0 ] ]
];

const apr8Players = [
    ['impulse27', [4,0], 1],
    ['purukogi', [3,1]],
    ['kelvin', [2,0,1]],
    ['violetblight', [2,0,1]],
    ['cyclopes8', [2,1]],
    ['hyunkim87', [2,1]],
    ['fry guy', [2,1]],
    ['genghisprawn', [2,1]],
    ['bird | jonas', [2,1]],
    ['cymbalman', [2,1]],
    ['rick', [1,2]],
    ['tictaco', [1,2]],
    ['jazze', [1,2]],
    ['jwyatt', [1,2]],
    ['therealemt', [1,2]],
    ['axelia', [1,2]],
    ['notfreduardo', [0,3]],
    ['calhove', [0,3]],
    ['wonkywombat', [0,3]],
    ['jadedtrekkie', [0,3]],
];

// console.log(apr8Players.map((line) => {
//     return `${line[0]} ${line[1].join('-')}`;
// }).join('\n'));

// console.log(parseReporting(apr8Raw));
webcam.processWeek(apr8Players, apr8Decks, 'apr8', apr8Parsed);


const apr22Parsed = [
    [ [ 'axelia', 'fry guy' ], [ 1, 2 ] ],
    [ [ 'purukogi', 'cyclopes8' ], [ 2, 1 ] ],
    [ [ 'jwyatt', 'hal' ], [ 2, 1 ] ],
    [ [ 'yeti', 'dentro' ], [ 2, 1 ] ],
    [ [ 'oogablast', 'solemn_storm' ], [ 2, 1 ] ],
    [ [ 'wonkywombat', 'shakashaka' ], [ 2, 0 ] ],
[ [ 'kelvin', 'hyunkim87' ], [ 2, 0 ] ],
[ [ 'impulse27', 'rick' ], [ 2, 0 ] ],
[ [ 'swinters', 'calhove' ], [ 2, 0 ] ],

[ [ 'fry guy', 'kelvin' ], [ 2, 1 ] ],
[ [ 'yeti', 'oogablast' ], [ 1, 2 ] ],
[ [ 'impulse27', 'wonkywombat' ], [ 1, 1 ] ],
[ [ 'swinters', 'purukogi' ], [ 2, 1 ] ],
[ [ 'axelia', 'jwyatt' ], [ 2, 1 ] ],
[ [ 'rick', 'solemn_storm' ], [ 2, 0 ] ],
[ [ 'dentro', 'hyunkim87' ], [ 1, 2 ] ],
[ [ 'cyclopes8', 'calhove' ], [ 2, 1 ] ],
[ [ 'shakashaka', 'hal' ], [ 2, 1 ] ],

[ [ 'swinters', 'oogablast' ], [ 2, 1 ] ],
[ [ 'fry guy', 'wonkywombat' ], [ 2, 0 ] ],
[ [ 'impulse27', 'axelia' ], [ 2, 0 ] ],
[ [ 'jwyatt', 'rick' ], [ 2, 0 ] ],
[ [ 'kelvin', 'purukogi' ], [ 2, 0 ] ],
[ [ 'shakashaka', 'hyunkim87' ], [ 2, 1 ] ],
[ [ 'yeti', 'cyclopes8' ], [ 2, 0 ] ],
[ [ 'solemn_storm', 'calhove' ], [ 2, 1 ] ],
[ [ 'dentro', 'hal' ], [ 2, 0 ] ],

[ [ 'fry guy', 'swinters' ], [ 2, 1 ] ]
];

const apr22Decks = parseDecklists(`
Fry Guy (Gruul Monsters)
WonkyWombat (Esper Thoracle)
Yeti (humans and taxes)
Cyclopes8 (Gruul Aggro) 
kelvin (RDW)
Purukogi (Esper Dreadnaught Prison) 
Dentro (Gruul Hoof)
Hal (Orzhov PW control)
Impulse27 (Atraxa and taxes)
Axelia (5c walkers)
JWyatt (UBRG Thoracle)
Rick (Abzan Aristocrats) 
solemn_storm (gruul aggro)
calhove (5c lands combo)
Swinters (Naya Pod)
oogablast (Grixis Midrange)
shakashaka (wurg seeker walk)
hyunkim87 (Black Moon`);

const apr22Players = pairingsToStandings(apr22Parsed);

webcam.processWeek(apr22Players, apr22Decks, 'apr22', apr22Parsed);


const apr29Raw = [
    [ [ 'funkyzeit', 'axelia' ], [ 2, 0 ] ],
    [ [ 'jwyatt', 'fry guy' ], [ 0, 2 ] ],
    [ [ 'kelvin', 'bird | jonas' ], [ 2, 0 ] ],
    [ [ 'jazze', 'therealemt' ], [ 2, 1 ] ],
    [ [ 'purukogi', 'hyunkim87' ], [ 0, 2 ] ],
    [ [ 'yeti', 'harju' ], [ 2, 1 ] ],
    [ [ 'impulse27', 'codypsizzle' ], [ 2, 0 ] ],        
    [ [ 'genghisprawn', 'calhove' ], [ 2, 1 ] ],
    [ [ 'shakashaka', 'dentro' ], [ 0, 2 ] ],
    
    [ [ 'impulse27', 'funkyzeit' ], [ 2, 0 ] ],
    [ [ 'hyunkim87', 'kelvin' ], [ 2, 1 ] ],
    [ [ 'yeti', 'fry guy' ], [ 2, 1 ] ],
    [ [ 'genghisprawn', 'jazze' ], [ 2, 0 ] ],
    [ [ 'bird | jonas', 'purukogi' ], [ 0, 2 ] ],
    [ [ 'therealemt', 'calhove' ], [ 2, 0 ] ],
    [ [ 'jwyatt', 'shakashaka' ], [ 2, 0 ] ],
    [ [ 'axelia', 'codypsizzle' ], [ 2, 0 ] ],
    
    [ [ 'yeti', 'hyunkim87' ], [ 2, 0 ] ],
    [ [ 'impulse27', 'genghisprawn' ], [ 2, 1 ] ],       
    [ [ 'axelia', 'fry guy' ], [ 0, 2 ] ],
    [ [ 'kelvin', 'funkyzeit' ], [ 2, 1 ] ],
    [ [ 'jwyatt', 'jazze' ], [ 2, 0 ] ],
    [ [ 'bird | jonas', 'calhove' ], [ 0, 2 ] ],
    [ [ 'therealemt', 'purukogi' ], [ 0, 2 ] ],
    
    [ [ 'yeti', 'impulse27' ], [ 1, 2 ] ],
  ];

const apr29Players = pairingsToStandings(apr29Raw);

const apr29Decks = parseDecklists(`Yeti (humans and Taxes)
Impulse27 (Jeskai midrange)
hyunkim87 (Gruul Hoof)
Fry Guy (Gruul Monsters)
GenghisPrawn (Jund pyromancer)
JWyatt (4C Kess Thoracle)
Purukogi (Esper Dreadnought Tezzerator)
kelvin (sultai Doomsday)
funkyzeit (RW Taxes)
JazzE (Atraxa and Taxes)
TherealEMT (Jeskai midrange)
calhove3141 (Naya Initiative)
Axelia (5C Superfriends)
Dentro (Grixis Tempo)
Harju (jeskai Vault)
shakashaka (Grixis Reanimator)
codypizzle (Naya Initiative)
BIRD | Jonas (Medium Green)`);

webcam.processWeek(apr29Players, apr29Decks, 'apr29', apr29Raw);


const may6Pairings = [
    [ [ 'minstrel', 'fry guy' ], [ 1, 1, 1 ] ],
    [ [ 'jazze', 'hyunkim87' ], [ 2, 1 ] ],
    [ [ 'funkyzeit', 'cyclopes8' ], [ 2, 1 ] ],     
    [ [ 'jwyatt', 'robin sorensen' ], [ 0, 2 ] ],
    [ [ 'kelvin', 'dentro' ], [ 2, 0 ] ],
    [ [ 'genghisprawn', 'purukogi' ], [ 2, 0 ] ],     
    [ [ 'tictaco', 'cat_island' ], [ 2, 0 ] ],        
    [ [ 'harju', 'cpt_camel' ], [ 2, 0 ] ],
    [ [ 'yeti', 'vaaste' ], [ 2, 0 ] ],
    [ [ 'impulse27', 'raicune' ], [ 2, 1 ] ],
    [ [ 'axelia', 'bailite' ], [ 2, 0 ] ],
    [ [ 'oogablast', 'solemn_storm' ], [ 2, 1 ] ],
    [['cymbalman', 'BYE'], [2,0]],
    
    [ [ 'yeti', 'jazze' ], [ 2, 0 ] ],
    [ [ 'cymbalman', 'harju' ], [ 2, 1 ] ],
    [ [ 'impulse27', 'tictaco' ], [ 2, 0 ] ],
    [ [ 'robin sorensen', 'kelvin' ], [ 2, 0 ] ],     
    [ [ 'axelia', 'oogablast' ], [ 2, 0 ] ],
    [ [ 'genghisprawn', 'funkyzeit' ], [ 2, 1 ] ],    
    [ [ 'jwyatt', 'fry guy' ], [ 2, 0 ] ],
    [ [ 'cpt_camel', 'minstrel'], [ 1, 1 ] ],
    [ [ 'cat_island', 'raicune' ], [ 2, 0 ] ],        
    [ [ 'hyunkim87', 'dentro' ], [ 2, 1 ] ],
    [ [ 'vaaste', 'purukogi' ], [ 1, 1 ] ],     
    [ [ 'solemn_storm', 'cyclopes8' ], [ 2, 1 ] ],
    [['bailite', 'BYE'], [2,0]],
    
[ [ 'genghisprawn', 'robin sorensen' ], [ 2, 1 ] ],        
[ [ 'cymbalman', 'axelia' ], [ 2, 1 ] ],
[ [ 'impulse27', 'hyunkim87' ], [ 2, 1 ] ],
[ [ 'solemn_storm', 'kelvin' ], [ 2, 0 ] ],
[ [ 'jwyatt', 'funkyzeit' ], [ 2, 1 ] ],
[ [ 'jazze', 'harju' ], [ 2, 0 ] ],
[ [ 'oogablast', 'cat_island' ], [ 2, 1 ] ],
[ [ 'bailite', 'tictaco' ], [ 2, 0 ] ],
[ [ 'vaaste', 'minstrel' ], [ 2, 1 ] ],
[ [ 'fry guy', 'cpt_camel' ], [ 2, 0 ] ],
[ [ 'cyclopes8', 'purukogi' ], [ 2, 1 ] ],
[ [ 'dentro', 'raicune' ], [ 2, 1 ] ],

[ [ 'cymbalman', 'impulse27' ], [ 0, 2 ] ],
[ [ 'axelia', 'genghisprawn' ], [ 2, 1 ] ],
[ [ 'impulse27', 'axelia' ], [ 2, 1 ] ]
];

const may6Decks = parseDecklists(`
cymbalman (Naya Winota)
GenghisPrawn (jund pyromancer)
Impulse27 (Jeskai CONTROL)
Axelia (5C Superfriends)
Robin Sorensen (wubg seeker initiative)
Yeti (Humans and Taxes)
JazzE (Spearmint)
oogablast (Grixis Midrange)
Bailite (Abzan Delirium)
JWyatt (RUG Moon)
solemn_storm (Jeskai Midrange)
Vaaste (atraxa and taxes)
Fry Guy (Azorius Breach)
funkyzeit (Jund Initiative)
hyunkim87 (UB Ninjas)
Harju (Jeskai Midrange)
TicTaco (Grixis Welder)
kelvin (Sultai Midrange)
Cyclopes8 (wubg Oath Control)
Cat_Island (Boros Equipment)
Dentro (Gruul ramp)
Minstrel (wubg oath Control)
Purukogi (Esper Dreadnought)
Cpt_Camel (Grixis Reanimator)
raicune (Esper Initiative)`);

webcam.processWeek(pairingsToStandings(may6Pairings), may6Decks, 'may6', may6Pairings);


const may13Pairings = [
    [ [ 'minstrel', 'fry guy' ], [ 1, 2 ] ],
    [ [ 'vaaste', 'rick' ], [ 2, 0 ] ],
    [ [ 'dentro', 'deggers' ], [ 2, 1 ] ],
    [ [ 'chirurgeon', 'andrew and drew' ], [ 2, 0 ] ],
    [ [ 'jadedtrekkie', 'kelvin' ], [ 1, 2 ] ],       
    [ [ 'adonalsium', 'hal' ], [ 2, 1 ] ],
    [ [ 'purukogi', 'axelia' ], [ 2, 1 ] ],
    [ [ 'genghisprawn', 'bird | jonas' ], [ 2, 0 ] ],   
    [ [ 'yeti', 'impulse27' ], [ 1, 2 ] ],
    
    [ [ 'purukogi', 'fry guy' ], [ 0, 2 ] ],
    [ [ 'dentro', 'genghisprawn' ], [ 2, 1 ] ],       
    [ [ 'adonalsium', 'vaaste' ], [ 2, 0 ] ],
    [ [ 'impulse27', 'chirurgeon' ], [ 2, 0 ] ],      
    [ [ 'kelvin', 'deggers' ], [ 2, 0 ] ],
    [ [ 'axelia', 'hal' ], [ 2, 1 ] ],
    [ [ 'yeti', 'jadedtrekkie' ], [ 2, 0 ] ],
    [ [ 'andrew and drew', 'rick' ], [ 2, 0 ] ],
    [ [ 'minstrel', 'bird | jonas' ], [ 2, 0 ] ],       
    
    [ [ 'dentro', 'adonalsium' ], [ 2, 1 ] ],
    [ [ 'kelvin', 'impulse27' ], [ 1, 1, 1 ] ],
    [ [ 'andrew and drew', 'fry guy' ], [ 2, 1 ] ],
    [ [ 'vaaste', 'chirurgeon' ], [ 0, 2 ] ],
    [ [ 'yeti', 'purukogi' ], [ 2, 0 ] ],
    [ [ 'genghisprawn', 'axelia' ], [ 2, 0 ] ],
    [ [ 'minstrel', 'rick' ], [ 0, 2 ] ],       
    [ [ 'deggers', 'jadedtrekkie' ], [ 0, 2 ] ],
    [ [ 'bird | jonas', 'BYE' ], [ 2, 0 ] ],
];

const may13Decks = parseDecklists(`
yeti (Humans and Taxes)
Purukogi (Channel Mirror)
Vaaste (Abzan Atraxa)
Chirurgeon (Medium Boros) 
Prawn (Jund pyromancer) 
Axelia (5c superfriends) 
Andrew and Drew (4c Artifact Midrange)
Fry Guy (Gruul Monsters)
Dentro (MonoR Goblins)
adonalsium (Medium Red)
Deggers (wurg Control)
JadedTrekkie (Blue Moon)
Impulse (Jeskai Control)
Kelvin (Sultai Midrange)
Rick (bant Enchantress)
Minstrel (sans white Welder)
BIRD Jonas (Medium Green)
Hal (Mono Black Aggro)`);

webcam.processWeek(pairingsToStandings(may13Pairings), may13Decks, 'may13', may13Pairings);


const may20Pairings = [
    [ [ 'jingoistical', 'adonalsium' ], [ 1, 1, 1 ] ],
    [ [ 'jwyatt', 'axelia' ], [ 2, 0 ] ],
    [ [ 'kelvin', 'chirurgeon' ], [ 2, 1 ] ],
    [ [ 'paul pilz', 'cyclopes8' ], [ 2, 1 ] ],
    [ [ 'sir nikheizen', 'sean barry' ], [ 2, 1 ] ],
    [ [ 'swinters', 'fry guy' ], [ 2, 1 ] ],
    [ [ 'harju', 'therealemt' ], [ 2, 0 ] ],
    [ [ 'vaaste', 'hyunkim87' ], [ 2, 1 ] ],
    [ [ 'impulse27', 'wilbur' ], [ 2, 0 ] ],
    [ [ 'jadedtrekkie', 'genghisprawn' ], [ 1, 2 ] ],
    
    [ [ 'kelvin', 'sir nikheizen' ], [ 2, 1 ] ],
    [ [ 'impulse27', 'jwyatt' ], [ 2, 0 ] ],
    [ [ 'genghisprawn', 'swinters' ], [ 2, 0 ] ],
    [ [ 'paul pilz', 'harju' ], [ 2, 1 ] ],
    [ [ 'vaaste', 'jingoistical' ], [ 2, 0 ] ],
    [ [ 'jadedtrekkie', 'adonalsium' ], [ 0, 2 ] ],
    [ [ 'cyclopes8', 'hyunkim87' ], [ 1, 2 ] ],
    [ [ 'therealemt', 'axelia' ], [ 2, 1 ] ],
    [ [ 'chirurgeon', 'sean barry' ], [ 2, 0 ] ],
    [ [ 'fry guy', 'wilbur' ], [ 1, 2 ] ],
    
    [ [ 'genghisprawn', 'kelvin' ], [ 2, 1 ] ],
    [ [ 'impulse27', 'vaaste' ], [ 2, 1 ] ],
    [ [ 'adonalsium', 'paul pilz' ], [ 2, 1 ] ],
    [ [ 'chirurgeon', 'wilbur' ], [ 2, 0 ] ],
    [ [ 'swinters', 'hyunkim87' ], [ 2, 0 ] ],
    [ [ 'jwyatt', 'harju' ], [ 2, 1 ] ],
    [ [ 'therealemt', 'jingoistical' ], [ 2, 1 ] ],
    [ [ 'fry guy', 'sean barry' ], [ 2, 0 ] ],
    [ [ 'jadedtrekkie', 'axelia' ], [ 2, 1 ] ],
    
    [ [ 'impulse27', 'genghisprawn' ], [ 2, 0 ] ],
  ];

const may20Decks = parseDecklists(`
Impulse27 (Czech scapeshift)
genghisprawn (jund pyro)
Adonalsium (Medium Red)
Kelvin (humans and taxes)
JWyatt (Rug Midrange)
Vaaste (Abzan Atraxa) 
Swinters (Naya Pod)
Paul Pilz (UW Moon)
Chirurgeon (Medium Boros) 
therealemt (Bant Seeker)
JadedTrekkie (medium red)
Harju (Esper Vault)
Wilbur (Esper Reanimator) 
Hyunkim (Sans B Seeker)
Nikheizen (Jund Aristocrats)
Cyclopes (BR Midrange)
Fry Guy (Flash Hulk) 
Sean Barry (UB Discard)
Jingoistical (Eggs)
Axelia (5c walkers)`);

webcam.processWeek(pairingsToStandings(may20Pairings), may20Decks, 'may20', may20Pairings);


const may27Pairings = [
    [ [ 'fry guy', 'jingoistical' ], [ 2, 0 ] ],
    [ [ 'harju', 'kelvin' ], [ 2, 0 ] ],        
    [ [ 'yeti', 'yannic' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'purukogi' ], [ 2, 0 ] ],  
    [ [ 'jwyatt', 'forceofwill' ], [ 2, 0 ] ],  
    [ [ 'paul pilz', 'jamesses' ], [ 2, 0 ] ],  
    [ [ 'impulse27', 'wilbur' ], [ 2, 0 ] ],    
    [ [ 'genghisprawn', 'vaaste' ], [ 2, 1 ] ], 
    
    [ [ 'yeti', 'cyclopes8' ], [ 2, 0 ] ],      
    [ [ 'impulse27', 'jwyatt' ], [ 2, 0 ] ],    
    [ [ 'paul pilz', 'harju' ], [ 2, 0 ] ],     
    [ [ 'fry guy', 'genghisprawn' ], [ 2, 0 ] ],
    [ [ 'wilbur', 'jingoistical' ], [ 2, 0 ] ], 
    [ [ 'kelvin', 'jamesses' ], [ 2, 1 ] ],     
    [ [ 'purukogi', 'forceofwill' ], [ 2, 0 ] ],
    [ [ 'yannic', 'vaaste' ], [ 2, 0 ] ],       
    
    [ [ 'yeti', 'paul pilz' ], [ 2, 0 ] ],      
    [ [ 'impulse27', 'fry guy' ], [ 1, 2 ] ],   
    [ [ 'yannic', 'genghisprawn' ], [ 2, 0 ] ],
    [ [ 'purukogi', 'wilbur' ], [ 2, 0 ] ],
    [ [ 'harju', 'cyclopes8' ], [ 2, 1 ] ],     
    [ [ 'jwyatt', 'kelvin' ], [ 2, 0 ] ],       
    [ [ 'jingoistical', 'vaaste' ], [ 2, 1 ] ], 
    [ [ 'jamesses', 'forceofwill' ], [ 2, 1 ] ],

    [ [ 'yeti', 'fry guy' ], [ 2, 0 ] ]
];

const may27Decks = parseDecklists(`
Yeti (Humans & Taxes)
Fry Guy (Gruul Monsters)
Impulse27 (Czech Scapeshift)
Paul Pilz (paradox Academy)
Yannic (4C Flicker Pod)
JWyatt (Czech Scapeshift)
Harju (jeskai Welder Vault)
Purukogi (Eggs)
Cyclopes8 (Atraxa Oath Control)
GenghisPrawn (Jund Pyromancer)
Wilbur (Esper Reanimator Thoracle)
kelvin (Grixis Reanimator)
Jingoistical (BR Goblins)
Jamesses (Dredge)
ForceOfWill (5C Legends)
Vaaste (Atraxa and Taxes)
`);

const may27Players = pairingsToStandings(may27Pairings);

webcam.processWeek(may27Players, may27Decks, 'may27', may27Pairings);


const jun3Pairings = [
    [ [ 'violetblight', 'cyclopes8' ], [ 2, 1 ] ],
    [ [ 'vaaste', 'purukogi' ], [ 2, 1 ] ],
    [ [ 'yeti', 'broken myth' ], [ 2, 0 ] ],
    [ [ 'adonalsium', 'hyunkim87' ], [ 2, 1 ] ],
    [ [ 'jadedtrekkie', 'wonkywombat' ], [ 2, 1 ] ],
    [ [ 'genghisprawn', 'jamesses' ], [ 2, 1 ] ],
    [ [ 'fry guy', 'chirurgeon' ], [ 2, 0 ] ],
    [ [ 'impulse27', 'oogablast' ], [ 2, 1 ] ],
    [ [ 'jwyatt', 'kelvin' ], [ 2, 0 ] ],
    [ ['wilbur', 'BYE'], [2,0]],
    
    [ [ 'yeti', 'jadedtrekkie' ], [ 2, 1 ] ],
    [ [ 'violetblight', 'fry guy' ], [ 0, 2 ] ],
    [ [ 'jwyatt', 'genghisprawn' ], [ 2, 0 ] ],
    [ [ 'impulse27', 'vaaste' ], [ 2, 0 ] ],
    [ [ 'wilbur', 'adonalsium' ], [ 2, 0 ] ],
    [ [ 'kelvin', 'cyclopes8' ], [ 2, 0 ] ],
    [ [ 'wonkywombat', 'purukogi' ], [ 0, 2 ] ],
    [ [ 'oogablast', 'hyunkim87' ], [ 1, 2 ] ],
    [ [ 'broken myth', 'jamesses' ], [ 2, 0 ] ],
    [ ['chirurgeon', 'BYE'], [2,0]],
    
    [ [ 'wilbur', 'jwyatt' ], [ 2, 0 ] ],
    [ [ 'yeti', 'fry guy' ], [ 2, 1 ] ],
    [ [ 'impulse27', 'genghisprawn' ], [ 2, 0 ] ],
    [ [ 'kelvin', 'jadedtrekkie' ], [ 2, 0 ] ],
    [ [ 'vaaste', 'hyunkim87' ], [ 1, 2 ] ],
    [ [ 'violetblight', 'adonalsium' ], [ 2, 0 ] ],
    [ [ 'broken myth', 'chirurgeon' ], [ 2, 0 ] ],
    [ [ 'cyclopes8', 'purukogi' ], [ 2, 0 ] ],
    [ [ 'jamesses', 'wonkywombat' ], [ 2, 1 ] ],
    [ ['oogablast', 'BYE'], [2,0]],
    
    [ [ 'yeti', 'fry guy' ], [ 2, 0 ] ],
    [ [ 'impulse27', 'wilbur' ], [ 2, 1 ] ],
    [ [ 'yeti', 'impulse27' ], [ 1, 2 ] ]
  ];

const jun3Decks = parseDecklists(`
Yeti (Humans and Taxes)
Wilbur (Esper thoracle Reanimator)
Impulse27 (Jeskai control)
Fry Guy (Gruul Monsters)
JWyatt (UBRG Scapeshift)
Broken Myth (D&T)
kelvin (UB Doomsday)
violetblight (Grixis Midrange)
hyunkim87 (Gruul Monsters)
Oogablast (Jeskai Welder Vault)
adonalsium (Medium Red)
Vaaste (Gruul Monsters)
JaddedTrekkie (Paradox Academy)
GenghisPrawn (Jund pyromancer)
chirurgeon (Medium Boros)
Cyclopes8 (5C Legends)
Jamesses (Dredge)
Purukogi (Eggs)
WonkyWombat (Esper Thoracle)
`);

webcam.processWeek(pairingsToStandings(jun3Pairings), jun3Decks, 'jun3', jun3Pairings);


const jun10Pairings = [
    [ [ 'impulse27', 'violet eventide' ], [ 2, 0 ] ],
    [ [ 'minstrel', 'dentro' ], [ 2, 1 ] ],
    [ [ 'jwyatt', 'purukogi' ], [ 2, 1 ] ],
    [ [ 'violetblight', 'johann' ], [ 2, 0 ] ],
    [ [ 'yeti', 'tr33vs' ], [ 2, 0 ] ],
    [ [ 'wilbur', 'kelvin' ], [ 2, 0 ] ],
    [ [ 'jadedtrekkie', 'demonic tutor' ], [ 2, 0 ] ],
    [ [ 'genghisprawn', 'rick' ], [ 2, 0 ] ],
    [ [ 'cyclopes8', 'BYE' ], [ 2, 0 ] ],
    
    [ [ 'wilbur', 'cyclopes8' ], [ 2, 0 ] ],
    [ [ 'yeti', 'impulse27' ], [ 2, 1 ] ],
    [ [ 'minstrel', 'violetblight' ], [ 2, 0 ] ],
    [ [ 'jwyatt', 'jadedtrekkie' ], [ 2, 1 ] ],
    [ [ 'dentro', 'rick' ], [ 2, 1 ] ],
    [ [ 'tr33vs', 'violet eventide' ], [ 2, 1 ] ],
    [ [ 'kelvin', 'johann' ], [ 2, 0 ] ],
    [ [ 'purukogi', 'BYE' ], [ 2, 0 ] ],
    
    [ [ 'yeti', 'wilbur' ], [ 2, 0 ] ],
    [ [ 'minstrel', 'jwyatt' ], [ 2, 1 ] ],
    [ [ 'impulse27', 'dentro' ], [ 2, 0 ] ],
    [ [ 'cyclopes8', 'tr33vs' ], [ 2, 0 ] ],
    [ [ 'purukogi', 'kelvin' ], [ 2, 1 ] ],
    [ [ 'violetblight', 'jadedtrekkie' ], [ 2, 0 ] ],
    [ [ 'violet eventide', 'johann' ], [ 2, 0 ] ],
    [ [ 'rick', 'BYE' ], [ 2, 0 ] ],

    [ [ 'yeti', 'minstrel' ], [ 2, 1 ] ]
  ];

const jun10Decks = parseDecklists(`
Yeti (humans and taxes)
Wilbur (Esper reanimator) 
Violet Eventide (jeskai control)
Johann (temur blitz)
Cyclopes8 (5c Legends)
tr33vs (Death and Taxes)
violetblight (RUG Walks)
JadedTrekkie (Blue Moon)
Impulse (Jeskai Control)
Dentro (Grixis Tempo)
Minstrel (Sans-white welder)
JWyatt (Czechshift)
Purukogi (Eggs)
kelvin (Flash Hulk)
Rick (Naya Enchantress)
Demonic Tutor (unknown)
GenghisPrawn (Jund pyro)
`);

webcam.processWeek(pairingsToStandings(jun10Pairings), jun10Decks, 'jun10', jun10Pairings);


const jun17Pairings = [
    [ [ 'wilbur', 'purukogi' ], [ 2, 1 ] ],
    [ [ 'axelia', 'bird | jonas' ], [ 2, 1 ] ],
    [ [ 'jwyatt', 'zoy' ], [ 2, 1 ] ],
    [ [ 'kelvin', 'hyunkim87' ], [ 1, 2 ] ],
    [ [ 'rick', 'genghisprawn' ], [ 0, 2 ] ],
    [ [ 'cyclopes8', 'swinters' ], [ 2, 1 ] ],
    [ [ 'fry guy', 'vaaste' ], [ 2, 0 ] ],
    
    [ [ 'genghisprawn', 'jwyatt' ], [ 2, 1 ] ],
    [ [ 'fry guy', 'hyunkim87' ], [ 0, 2 ] ],
    [ [ 'wilbur', 'cyclopes8' ], [ 2, 1 ] ],
    [ [ 'axelia', 'swinters' ], [ 2, 0 ] ],
    [ [ 'purukogi', 'bird | jonas' ], [ 2, 0 ] ],
    [ [ 'vaaste', 'rick' ], [ 2, 0 ] ],
    [ [ 'zoy', 'kelvin' ], [ 2, 1 ] ],
    
    [ [ 'wilbur', 'axelia' ], [ 2, 0 ] ],
    [ [ 'hyunkim87', 'genghisprawn' ], [ 2, 0 ] ],
    [ [ 'vaaste', 'zoy' ], [ 2, 1 ] ],
    [ [ 'fry guy', 'cyclopes8' ], [ 2, 0 ] ],
    [ [ 'jwyatt', 'purukogi' ], [ 2, 1 ] ],
    [ [ 'rick', 'swinters' ], [ 2, 0 ] ],
    [ [ 'kelvin', 'BYE' ], [ 2, 1 ] ],

    [ [ 'wilbur', 'hyunkim87' ], [ 2, 1 ] ],
];

const jun17Decks = parseDecklists(`
Wilbur (Esper Reanimator)
hyunkim87 (Gruul Monsters)
Fry Guy (Gruul Monsters)
GenghisPrawn (Jund pyro)
Axelia (5c Planeswalkers)
Vaaste (Czech Pile)
JWyatt (CzechShift)
Purukogi (Eggs)
Cyclopes8 (5c Legends)
kelvin (Flash Hulk)
Zoy (Eggs)
Rick (Sultai Tide)
Jonas (Black green aggro)
SWinters (Naya Pod`);

webcam.processWeek(pairingsToStandings(jun17Pairings), jun17Decks, 'jun17', jun17Pairings);


const jun24Pairings = [
    [ [ 'unusualthunder', 'kelvin' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'lance larsen' ], [ 2, 0 ] ],
    [ [ 'impulse27', 'axelia' ], [ 2, 0 ] ],
    [ [ 'bailite', 'hyunkim87' ], [ 2, 1 ] ],
    [ [ 'genghisprawn', 'elijah' ], [ 2, 0 ] ],
    [ [ 'bird | jonas', 'that guy' ], [ 2, 0 ] ],
    [ [ 'yeti', 'purukogi' ], [ 2, 1 ] ],
    [ ['fry guy', 'BYE'], [2,0]],
    
    [ [ 'impulse27', 'cyclopes8' ], [ 2, 0 ] ],
    [ [ 'unusualthunder', 'fry guy' ], [ 2, 0 ] ],
    [ [ 'genghisprawn', 'bird | jonas' ], [ 2, 0 ] ],
    [ [ 'yeti', 'bailite' ], [ 2, 1 ] ],
    [ [ 'kelvin', 'that guy' ], [ 2, 0 ] ],
    [ [ 'axelia', 'purukogi' ], [ 2, 0 ] ],
    [ [ 'hyunkim87', 'lance larsen' ], [ 2, 1 ] ],

    [ [ 'impulse27', 'genghisprawn' ], [ 2, 1 ] ],
    [ [ 'yeti', 'unusualthunder' ], [ 2, 1 ] ],
    [ [ 'axelia', 'bird | jonas' ], [ 2, 0 ] ],
    [ [ 'kelvin', 'bailite' ], [ 2, 1 ] ],
    [ [ 'fry guy', 'hyunkim87' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'purukogi' ], [ 2, 0 ] ],
    [ [ 'that guy', 'lance larsen' ], [ 2, 1 ] ],

    [ [ 'impulse27', 'yeti' ], [ 2, 0 ] ]
  ];

const jun24Decks = parseDecklists(`
Impulse27 (Jeskai control)
GenghisPrawn (Jund pyromancer)
UnusualThunder (wubg Food)
Yeti (Humans D&T)
BIRD | Jonas (Abzan Angels)
Axelia (5C Superfriends)
Bailite (Abzan Lands Midrange)
kelvin (Flash Hulk)
Fry Guy (bg hoof)
hyunkim87 (Gruul Monsters)
Cyclopes8 (Jund midrange)
Purukogi (Eggs)
Lance Larsen (Paradox Academy)
that guy (WURG Pod)
elijah (wubr welder)`);

webcam.processWeek(pairingsToStandings(jun24Pairings), jun24Decks, 'jun24', jun24Pairings);


const jul1Pairings = [
    [ [ 'vaaste', 'fry guy' ], [ 0, 2 ] ],
    [ [ 'kelvin', 'jwyatt' ], [ 2, 1 ] ],
    [ [ 'yeti', 'genghisprawn' ], [ 2, 1 ] ],
    [ [ 'zoy', 'cyclopes8' ], [ 2, 0 ] ],
    [ [ 'lance larsen', 'sir nikheizen' ], [ 2, 0 ] ],
    [ [ 'unusualthunder', 'wilbur' ], [ 2, 0 ] ],
    [ [ 'impulse27', 'tr33vs' ], [ 2, 1 ] ],
    [ [ 'purukogi', 'bird | jonas' ], [ 2, 0 ] ],
    
    [ [ 'sir nikheizen', 'vaaste' ], [ 2, 0 ] ],
    [ [ 'jwyatt', 'cyclopes8' ], [ 2, 1 ] ],
    [ [ 'yeti', 'fry guy' ], [ 2, 1 ] ],
    [ [ 'unusualthunder', 'lance larsen' ], [ 2, 0 ] ],
    [ [ 'tr33vs', 'bird | jonas' ], [ 2, 0 ] ],
    [ [ 'purukogi', 'impulse27' ], [ 2, 1 ] ],
    [ [ 'kelvin', 'zoy' ], [ 2, 1 ] ],
    [ [ 'BYE', 'genghisprawn' ], [ 0, 2 ] ],
    
    [ [ 'yeti', 'unusualthunder' ], [ 2, 1 ] ],
    [ [ 'purukogi', 'kelvin' ], [ 2, 1 ] ],
    [ [ 'genghisprawn', 'sir nikheizen' ], [ 2, 1 ] ],
    [ [ 'tr33vs', 'fry guy' ], [ 1, 2 ] ],
    [ [ 'lance larsen', 'zoy' ], [ 2, 0 ] ],
    [ [ 'impulse27', 'jwyatt' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'bird | jonas' ], [ 2, 1 ] ],
    [ [ 'vaaste', 'BYE' ], [ 2, 0 ] ],
    
    [ [ 'purukogi', 'yeti' ], [ 2, 1 ] ]
  ];

const jul1Decks = parseDecklists(`
Purukogi (sans g welder)
Yeti (humans and taxes)
Unusual Thunder (wubg food)
Fry Guy (Selesnya Angels)
Genghisprawn (Jund pyro)
Impulse27 (Jeskai control)
Kelvin (Rakdos Goblins)
Lance Larsen (Boros Midrange)
Tr33vs (Gruul Monsters) 
Jwyatt (RUG moon)
Extremely Grey Nikheizen (Bug Lands Control)
Zoy (wubg Seeker walk)
Vaaste (abzan atraxa)
Cyclopes8 (Naya Turbo Initiative)
Wilbur (esper recurring nightmare)
Bird Jonas (Abzan Angels)
`);

webcam.processWeek(pairingsToStandings(jul1Pairings), jul1Decks, 'jul1', jul1Pairings);


const jul8Pairings = [
    [ [ 'jwyatt', 'cyclopes8' ], [ 2, 1 ] ],
    [ [ 'sam', 'idiotic avocado' ], [ 2, 0 ] ],
    [ [ 'fry guy', 'hyunkim87' ], [ 2, 1 ] ],
    [ [ 'kelvin', 'zoy' ], [ 2, 0 ] ],
    [ [ 'rick', 'genghisprawn' ], [ 2, 1 ] ],
    [ [ 'harju', 'purukogi' ], [ 2, 0 ] ],
    [ [ 'axelia', 'BYE' ], [ 2, 0 ] ],

    [ [ 'fry guy', 'rick' ], [ 2, 1 ] ],
    [ [ 'axelia', 'sam' ], [ 2, 0 ] ],
    [ [ 'kelvin', 'harju' ], [ 2, 1 ] ],
    [ [ 'jwyatt', 'zoy' ], [ 2, 0 ] ],
    [ [ 'hyunkim87', 'cyclopes8' ], [ 2, 1 ] ],
    [ [ 'genghisprawn', 'purukogi' ], [ 2, 1 ] ],

    [ [ 'jwyatt', 'axelia' ], [ 2, 0 ] ],
    [ [ 'kelvin', 'fry guy' ], [ 2, 1 ] ],
    [ [ 'harju', 'rick' ], [ 2, 1 ] ],
    [ [ 'genghisprawn', 'hyunkim87' ], [ 1, 2 ] ],
    [ [ 'cyclopes8', 'zoy' ], [ 2, 0 ] ],
    [ [ 'purukogi', 'BYE' ], [ 2, 0 ] ],

    [ [ 'kelvin', 'jwyatt' ], [ 2, 0 ] ]
  ];

const jul8Decks = parseDecklists(`kelvin (flash hulk)
Fry Guy (Selesnya Angels) 
GenghisPrawn (Jund pyro)
Hyunkim87 (Naya Winota) 
Jwyatt (Czech Shift)
Axelia (5 Colour walkers)
Cyclopes8 (Blue Shops)
Zoy (4c Sans R Seekerwalk)
Harju (Jeskai Control)
Rick (RBg Goblins)  
Purukogi (Jeskai Welder Vault)
Sam (Pattern Rector)
Idiotic Avocado (unknown)`);

webcam.processWeek(pairingsToStandings(jul8Pairings), jul8Decks, 'jul8', jul8Pairings);


const jul15Pairings = [
    [ [ 'harju', 'nanderg' ], [ 2, 0 ] ],
    [ [ 'axelia', 'zoy' ], [ 2, 1 ] ],
    [ [ 'rick', 'vaaste' ], [ 2, 1 ] ],
    [ [ 'jwyatt', 'violet eventide' ], [ 2, 0 ] ],
    [ [ 'wilbur', 'kelvin' ], [ 2, 1 ] ],
    [ [ 'oogablast', 'cyclopes8' ], [ 2, 1 ] ],
    [ [ 'yeti', 'dentro' ], [ 2, 1 ] ],

    [ [ 'jwyatt', 'rick' ], [ 2, 0 ] ],
    [ [ 'yeti', 'oogablast' ], [ 2, 1 ] ],
    [ [ 'wilbur', 'axelia' ], [ 2, 0 ] ],
    [ [ 'harju', 'zoy' ], [ 2, 1 ] ],
    [ [ 'dentro', 'cyclopes8' ], [ 0, 2 ] ],
    [ [ 'nanderg', 'kelvin' ], [ 2, 1 ] ],
    [ [ 'vaaste', 'violet eventide' ], [ 2, 1 ] ],

    [ [ 'yeti', 'jwyatt' ], [ 2, 1 ] ],
    [ [ 'wilbur', 'harju' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'axelia' ], [ 2, 0 ] ],
    [ [ 'rick', 'oogablast' ], [ 2, 1 ] ],
    [ [ 'vaaste', 'nanderg' ], [ 2, 0 ] ],
    [ [ 'dentro', 'kelvin' ], [ 2, 1 ] ],

    [ [ 'yeti', 'wilbur' ], [ 0, 2 ] ]
  ];

const jul15Decks = parseDecklists(`Cyclopes8 (BUGw Natural Order)
Axelia (5c Superfriends)
Yeti (Humans Taxes)
Jwyatt (Grixis Thoracle)
Vaaste (BW Humans and Taxes)
NanderG (5c Cascade)
Dentro (Gruul Hoof)
kelvin (flash hulk)
Rick (Martyr Grace)
Oogablast (Grixis Midrange) 
Wilbur (Esper Reanimator)
Harju (Jeskai Control)
violet eventide (5c lands combo)
Zoy (4c No R Seekerwalk)`);

webcam.processWeek(pairingsToStandings(jul15Pairings), jul15Decks, 'jul15', jul15Pairings);


const jul22Pairings = [
    [ [ 'axelia', 'hyunkim87' ], [ 2, 1 ] ],
    [ [ 'impulse27', 'dentro' ], [ 2, 1 ] ],
    [ [ 'cat_island', 'jamesses' ], [ 2, 1 ] ],
    [ [ 'jwyatt', 'cyclopes8' ], [ 2, 0 ] ],
    [ [ 'kelvin', 'falseblu' ], [ 2, 0 ] ],
    [ [ 'sam', 'fry guy' ], [ 2, 1 ] ],
    [ [ 'genghisprawn', 'wilbur' ], [ 2, 0 ] ],
    
    [ [ 'impulse27', 'sam' ], [ 2, 1 ] ],
    [ [ 'axelia', 'cat_island' ], [ 2, 0 ] ],
    [ [ 'kelvin', 'jwyatt' ], [ 2, 0 ] ],
    [ [ 'jamesses', 'genghisprawn' ], [ 2, 0 ] ],
    [ [ 'hyunkim87', 'cyclopes8' ], [ 2, 1 ] ],
    [ [ 'dentro', 'fry guy' ], [ 1, 2 ] ],
    [ [ 'wilbur', 'BYE' ], [ 2, 0 ] ],
    
    [ [ 'axelia', 'impulse27' ], [ 2, 1 ] ],
    [ [ 'hyunkim87', 'kelvin' ], [ 2, 0 ] ],
    [ [ 'cat_island', 'wilbur' ], [ 2, 1 ] ],
    [ [ 'jamesses', 'fry guy' ], [ 2, 0 ] ],
    [ [ 'jwyatt', 'genghisprawn' ], [ 2, 0 ] ],
    [ [ 'dentro', 'cyclopes8' ], [ 2, 1 ] ],
  ];

const jul22Decks = parseDecklists(`
jamesses (czechshift)
fry guy (blue moon)
jwyatt (jeskai black)
genghisprawn (czech midrange)
axelia (5c walker omnitell)
impulse27 (5c blue midrange)
dentro (grixis tempo)
cyclopes8 (bw rector control)
cat_island (rw equipment)
wilbur (esper reanimator)
falseblu (wurg seeker walk)
sam (pattern rector)
hyunkim87 (ub ninjas)
kelvin (flash hulk)
`);

webcam.processWeek(pairingsToStandings(jul22Pairings), jul22Decks, 'jul22', jul22Pairings);


const jul29Pairings = [
    [ [ 'hal', 'nanderg' ], [ 2, 0 ] ],
    [ [ 'harju', 'fry guy' ], [ 1, 2 ] ],
    [ [ 'dentro', 'jwyatt' ], [ 2, 1 ] ],
    [ [ 'swinters', 'wilbur' ], [ 2, 0 ] ],
    [ [ 'axelia', 'lance larsen' ], [ 2, 0 ] ],
    [ [ 'kelvin', 'hyunkim87' ], [ 2, 0 ] ],
    [ [ 'cyclopes8', 'mehall' ], [ 2, 1 ] ],
    [ [ 'yeti', 'genghisprawn' ], [ 2, 0 ] ],
    
    [ [ 'yeti', 'kelvin' ], [ 2, 1 ] ],
    [ [ 'dentro', 'hal' ], [ 1, 2 ] ],
    [ [ 'cyclopes8', 'axelia' ], [ 2, 1 ] ],
    [ [ 'fry guy', 'swinters' ], [ 2, 0 ] ],
    [ [ 'genghisprawn', 'jwyatt' ], [ 2, 1 ] ],
    [ [ 'harju', 'wilbur' ], [ 1, 1, 1 ] ],
    [ [ 'hyunkim87', 'mehall' ], [ 2, 1 ] ],
    [ [ 'lance larsen', 'BYE' ], [ 2, 0 ] ],
    
    [ [ 'genghisprawn', 'lance larsen' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'fry guy' ], [ 2, 0 ] ],
    [ [ 'yeti', 'swinters' ], [ 2, 0 ] ],
    [ [ 'hyunkim87', 'axelia' ], [ 2, 1 ] ],
    [ [ 'dentro', 'wilbur' ], [ 1, 2 ] ],
    [ [ 'harju', 'kelvin' ], [ 2, 1 ] ],
    [ [ 'yeti', 'cyclopes8' ], [ 2, 1 ] ]
  ];

const jul29Decks = parseDecklists(`Yeti (Flash Hulk)
Cyclopes8 (BUGw Natural Order)
Fry Guy (Mono U Control)
GenghisPrawn (czech midrange)
Hal (Mono Black Aggro)
hyunkim87 (Gruul Hoof)
Harju (UWr Vault)
Wilbur (Grixis Reanimator)
SWinters (4c Blood)
kelvin (Flash Hulk)
Axelia (5c Walkers Omnitell)
Dentro (Grixis Tempo)
Lance Larsen (RW Midrange)
NanderG (unknown)
mehall (Pattern Rector)
JWyatt (Jeskai Black)`);

webcam.processWeek(pairingsToStandings(jul29Pairings), jul29Decks, 'jul29', jul29Pairings);


const aug5Pairings = [
    [ [ 'hyunkim87', 'nanderg' ], [ 2, 1 ] ],
    [ [ 'calhove', 'cyclopes8' ], [ 2, 1 ] ],
    [ [ 'impulse27', 'wilbur' ], [ 2, 0 ] ],
    [ [ 'axelia', 'fry guy' ], [ 0, 2 ] ],
    [ [ 'kelvin', 'genghisprawn' ], [ 2, 1 ] ],
    [ [ 'jwyatt', 'BYE' ], [ 2, 0 ] ],

    [ [ 'impulse27', 'kelvin' ], [ 2, 1 ] ],
    [ [ 'jwyatt', 'fry guy' ], [ 2, 1 ] ],
    [ [ 'hyunkim87', 'calhove' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'nanderg' ], [ 2, 0 ] ],
    [ [ 'wilbur', 'axelia' ], [ 2, 0 ] ],
    [ [ 'genghisprawn', 'BYE' ], [ 2, 0 ] ],

    [ [ 'hyunkim87', 'fry guy' ], [ 1, 2 ] ],
    [ [ 'kelvin', 'nanderg' ], [ 2, 0 ] ],
    [ [ 'cyclopes8', 'genghisprawn' ], [ 2, 1 ] ],
    [ [ 'impulse27', 'jwyatt' ], [ 2, 0 ] ],
    [ [ 'wilbur', 'calhove' ], [ 2, 1 ] ]
  ];

const aug5Decks = parseDecklists(`
Impulse (Jeskai control)
JWyatt (Jeskai Black)
kelvin (Flash Hulk)
Fry Guy (Gruul Monsters)
Wilbur (Grixis Reanimator)
hyunkim87 (sans black Seeker walk)
Cyclopes8 (BUGw Natural Order)
calhove (Esper Reanimator Control)
GenghisPrawn (czech midrange)
NanderG (wubg Food Chain)
Axelia (5c Walkers Omnitell)
`);

webcam.processWeek(pairingsToStandings(aug5Pairings), aug5Decks, 'aug5', aug5Pairings);


const aug12Pairings = [
    [ [ 'qzzyozzy', 'calhove' ], [ 2, 0 ] ],
    [ [ 'yeti', 'morganwyrd' ], [ 2, 0 ] ],
    [ [ 'xeaji', 'vaaste' ], [ 2, 1 ] ],
    [ [ 'impulse27', 'cyclopes8' ], [ 2, 1 ] ],

    [ [ 'yeti', 'impulse27' ], [ 2, 0 ] ],
    [ [ 'xeaji', 'qzzyozzy' ], [ 2, 0 ] ],
    [ [ 'cyclopes8', 'morganwyrd' ], [ 2, 1 ] ],
    [ [ 'vaaste', 'calhove' ], [ 2, 1 ] ],

    [ [ 'cyclopes8', 'vaaste' ], [ 2, 0 ] ],
    [ [ 'yeti', 'xeaji' ], [ 0, 2 ] ],
    [ [ 'morganwyrd', 'qzzyozzy' ], [ 2, 0 ] ],
  ];

const aug12Decks = parseDecklists(`xeaji (Mono Black Midrange)
Yeti (Humans and Taxes)
Cyclopes8 (Schmedium Red)
Impulse27 (Jeskai control)
Vaaste (Dark Jeskai Tempo)
MorganWyrd (RUg Moon)
QzzyOzzy (Martyr Proc)
calhove3141 (Naya Turbo Initiative)`);

webcam.processWeek(pairingsToStandings(aug12Pairings), aug12Decks, 'aug12', aug12Pairings);


const aug19Pairings = [

    [ [ 'kelvin', 'purukogi' ], [ 2, 0 ] ],
    [ [ 'impulse27', 'nanderg' ], [ 2, 0 ] ],
    [ [ 'cyclopes8', 'axelia' ], [ 2, 0 ] ],
    [ [ 'demonic tutor', 'hyunkim87' ], [ 0, 2 ] ],

    [ [ 'impulse27', 'hyunkim87' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'kelvin' ], [ 2, 1 ] ],
    [ [ 'axelia', 'purukogi' ], [ 2, 0 ] ],
    [ [ 'demonic tutor', 'BYE' ], [ 2, 0 ] ],
    
    [ [ 'demonic tutor', 'axelia' ], [ 2, 0 ] ],
    [ [ 'impulse27', 'cyclopes8' ], [ 2, 1 ] ],
    [ [ 'hyunkim87', 'kelvin' ], [ 2, 0 ] ],
    [ [ 'purukogi', 'BYE' ], [ 2, 0 ] ],
  ];

const aug19Decks = parseDecklists(`Impulse27 (Jeskai control)
hyunkim87 (Flying Men)
Cyclopes8 (Schmedium Red)
Demonic Tutor (Abzan Lands Reanimator)
kelvin (UB Lotus Doomsday)
Axelia (5c Walker Omnitell)
Purukogi (Jeskai Welder Vault)
NanderG (wubg Food Chain)`);

webcam.processWeek(pairingsToStandings(aug19Pairings), aug19Decks, 'aug19', aug19Pairings);


const aug26Pairings = [
    [ [ 'calhove', 'broken myth' ], [ 2, 0 ] ],
    [ [ 'some user', 'vaaste' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'jdizl' ], [ 2, 0 ] ],
    [ [ 'jwyatt', 'hyunkim87' ], [ 2, 0 ] ],
    [ [ 'axelia', 'purukogi' ], [ 0, 2 ] ],
    [ [ 'qzzyozzy', 'genghisprawn' ], [ 2, 1 ] ],

    [ [ 'jwyatt', 'calhove' ], [ 2, 0 ] ],
    [ [ 'cyclopes8', 'purukogi' ], [ 2, 0 ] ],
    [ [ 'some user', 'qzzyozzy' ], [ 2, 1 ] ],
    [ [ 'broken myth', 'jdizl' ], [ 2, 0 ] ],
    [ [ 'vaaste', 'hyunkim87' ], [ 0, 2 ] ],
    [ [ 'axelia', 'genghisprawn' ], [ 2, 1 ] ],
    
    [ [ 'cyclopes8', 'jwyatt' ], [ 2, 0 ] ],
    [ [ 'broken myth', 'some user' ], [ 2, 1 ] ],
    [ [ 'calhove', 'purukogi' ], [ 2, 0 ] ],
    [ [ 'hyunkim87', 'qzzyozzy' ], [ 2, 1 ] ],
    [ [ 'jdizl', 'axelia' ], [ 2, 1 ] ],
    [ [ 'genghisprawn', 'BYE' ], [ 2, 0 ] ],
];

const aug26Decks = parseDecklists(`
JWyatt (Jeskai Black)
Cyclopes8 (Schmedium Red)
Broken Myth (D&T)
some user (Atraxa and Taxes)
calhove (Mardu Initiative)
Purukogi (Bg Pox)
hyunkim87 (Temur Timeshift)
QzzyOzzy (Mono White Martyr Proc)
jDIZL (Big Red)
Axelia (5C Superfriends)
GenghisPrawn (czech midrange)
Vaaste (Dark Jeskai Tempo)`);

webcam.processWeek(pairingsToStandings(aug26Pairings), aug26Decks, 'aug26', aug26Pairings);


const sep2Pairings = [
    [ [ 'minstrel', 'axelia' ], [ 2, 0 ] ],
    [ [ 'impulse27', 'hyunkim87' ], [ 2, 0 ] ],
    [ [ 'nanderg', 'rick' ], [ 2, 1 ] ],
    [ ['kelvin', 'uberlegen'], [2,1]],
    [ [ 'genghisprawn', 'purukogi' ], [ 2, 1 ] ],
    [ [ 'harju', 'cyclopes8' ], [ 2, 0 ] ],

    [ [ 'kelvin', 'nanderg' ], [ 2, 0 ] ],
    [ [ 'genghisprawn', 'harju' ], [ 2, 1 ] ],
    [ [ 'impulse27', 'minstrel' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'uberlegen' ], [ 2, 0 ] ],
    [ [ 'purukogi', 'hyunkim87' ], [ 2, 1 ] ],
    [ [ 'axelia', 'rick' ], [ 2, 0 ] ],

    [ [ 'impulse27', 'genghisprawn' ], [ 2, 1 ] ],
    [ [ 'kelvin', 'harju' ], [ 2, 1 ] ],
    [ [ 'minstrel', 'nanderg' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'axelia' ], [ 2, 1 ] ],
    [ [ 'purukogi', 'rick' ], [ 2, 1 ] ],
    [ [ 'uberlegen', 'hyunkim87' ], [ 2, 0 ] ],

    [ [ 'impulse27', 'kelvin' ], [ 2, 1 ] ]
];

const sep2Decks = parseDecklists(`
Purukogi (Golgari Pox)
Rick (Abzan Enchantress RecSur)
Cyclopes8 (Tinker Lotus Doomsday)
Axelia (5c Walker Omnitell)
uberlegen (Paradox Academy)
Hyunkim87 (Temur Time-Shift)
kelvin (grixis reanimator)
Harju (Jeskai Midrange) 
Minstrel (BUG Control)
NanderG (Aluren Food Chain)
Impulse (Jeskai control)
genghisprawn (czech midrange)`);

webcam.processWeek(pairingsToStandings(sep2Pairings), sep2Decks, 'sep2', sep2Pairings);


const sep9Pairings = [
    [ [ 'vaaste', 'calhove' ], [ 2, 0 ] ],
    [ [ 'impulse27', 'hyunkim87' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'gerrimeister' ], [ 2, 1 ] ],
    [ [ 'genghisprawn', 'harju' ], [ 2, 0 ] ],
    [ [ 'jwyatt', 'purukogi' ], [ 2, 0 ] ],
    [ [ 'axelia', 'nanderg' ], [ 2, 1 ] ],
    [ [ 'yeti', 'a_shadybadger' ], [ 2, 1 ] ],
    [ [ 'minstrel', 'uberlegen' ], [ 2, 1 ] ],

    [ [ 'impulse27', 'genghisprawn' ], [ 2, 0 ] ],
    [ [ 'axelia', 'cyclopes8' ], [ 2, 0 ] ],
    [ [ 'yeti', 'jwyatt' ], [ 0, 2 ] ],
    [ [ 'minstrel', 'vaaste' ], [ 2, 0 ] ],
    [ [ 'uberlegen', 'calhove' ], [ 2, 0 ] ],
    [ [ 'a_shadybadger', 'hyunkim87' ], [ 0, 2 ] ],
    [ [ 'harju', 'nanderg' ], [ 2, 0 ] ],
    [ [ 'purukogi', 'gerrimeister' ], [ 2, 1 ] ],

    [ [ 'axelia', 'minstrel' ], [ 2, 0 ] ],
    [ [ 'jwyatt', 'impulse27' ], [ 2, 1 ] ],
    [ [ 'vaaste', 'purukogi' ], [ 2, 0 ] ],
    [ [ 'cyclopes8', 'uberlegen' ], [ 2, 0 ] ],
    [ [ 'yeti', 'harju' ], [ 2, 1 ] ],
    [ [ 'genghisprawn', 'hyunkim87' ], [ 0, 2 ] ],
    [ [ 'gerrimeister', 'nanderg' ], [ 2, 0 ] ],
    [ [ 'a_shadybadger', 'calhove' ], [ 1, 2 ] ],

    [ [ 'jwyatt', 'axelia' ], [ 2, 0 ] ]
];

const sep9Decks = parseDecklists(`
Axelia (5c Walker Omnitell)
JWyatt (Esper Red)
Impulse27 (Jeskai control)
Minstrel (wubg Oath)
Cyclopes8 (Tinker Lotus Doomsday)
Yeti (Mono W Humans & Taxes)
hyunkim87 (Temur Time-Shift)
Vaaste (5c Walker Omnitell)
Purukogi (BG Pox)
uberlegen (Paradox Academy)
GenghisPrawn (czech midrange)
Gerrimeister (Medium Red)
Harju (UWr Welder Vault)
calhove3141 (Mardu Initiative)
A_ShadyBadger (Grixis Reanimator)
NanderG (Aluren Food Chain)
`);

webcam.processWeek(pairingsToStandings(sep9Pairings), sep9Decks, 'sep9', sep9Pairings);


const sep16Pairings = [
    [ [ 'axelia', 'rick' ], [ 2, 0 ] ],
    [ [ 'jwyatt', 'mehall' ], [ 2, 0 ] ],
    [ [ 'cyclopes8', 'praenomen' ], [ 2, 0 ] ],     
    [ [ 'genghisprawn', 'vaaste' ], [ 2, 0 ] ],     
    [ [ 'yeti', 'hyunkim87' ], [ 2, 1 ] ],
    [ [ 'impulse27', 'calhove' ], [ 2, 1 ] ],       
    [ [ 'qzzyozzy', 'purukogi' ], [ 2, 1 ] ],       
    [ [ 'oogablast', 'kelvin' ], [ 2, 1 ] ],        
    [ [ 'minstrel', 'theonewhoknocks' ], [ 2, 0 ] ],
    [ [ 'nanderg', 'BYE' ], [ 2, 0 ] ],
    
    [ [ 'nanderg', 'oogablast' ], [ 2, 1 ] ],
    [ [ 'jwyatt', 'axelia' ], [ 2, 1 ] ],
    [ [ 'qzzyozzy', 'minstrel' ], [ 2, 0 ] ],
    [ [ 'impulse27', 'cyclopes8' ], [ 2, 0 ] ],
    [ [ 'yeti', 'genghisprawn' ], [ 1, 2 ] ],
    [ [ 'hyunkim87', 'rick' ], [ 2, 0 ] ],
    [ [ 'calhove', 'praenomen' ], [ 2, 1 ] ],
    [ [ 'theonewhoknocks', 'mehall' ], [ 2, 1 ] ],
    [ [ 'purukogi', 'kelvin' ], [ 2, 0 ] ],
    [ [ 'vaaste', 'BYE' ], [ 2, 0 ] ],
    
    [ [ 'qzzyozzy', 'nanderg' ], [ 2, 1 ] ],
    [ [ 'genghisprawn', 'impulse27' ], [ 2, 1 ] ],
    [ [ 'jwyatt', 'oogablast' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'purukogi' ], [ 2, 0 ] ],
    [ [ 'hyunkim87', 'minstrel' ], [ 2, 0 ] ],
    [ [ 'yeti', 'axelia' ], [ 2, 1 ] ],
    [ [ 'calhove', 'theonewhoknocks' ], [ 1, 2 ] ],
    [ [ 'praenomen', 'kelvin' ], [ 2, 1 ] ],

    [ [ 'jwyatt', 'qzzyozzy' ], [ 2, 1 ] ],
    [ [ 'genghisprawn', 'impulse27' ], [ 2, 1 ] ],
    [ [ 'genghisprawn', 'jwyatt' ], [ 2, 1 ] ]
  ];

const sep16Decks = parseDecklists(`
GenghisPrawn (czech midrange)
QzzyOzzy (Mono W Martyr Proc)
JWyatt (Esper red)
Impulse27 (jeskai green)
Yeti (Mono W D&T)
NanderG (4C Aluren Food Chain)
hyunkim87 (Gruul Monsters)
Cyclopes8 (Esper Tinker Lotus Doomsday)
theOneWhoKnocks (Dark Jeskai)
Vaaste (5C Walkers OmniTell)
Minstrel (BUG Control)
Axelia (5C walkers omnitell)
Oogablast (wubg Initiative)
Purukogi (5C Will Storm)
calhove3141 (wbrg Initiative)
Praenomen (Mono W D&T)
mehall (Pattern Rector Food)
Rick (wubg Enchantress)
kelvin (RDW)
`);

webcam.processWeek(pairingsToStandings(sep16Pairings), sep16Decks, 'sep16', sep16Pairings);


const sep23Pairings = [
    [ [ 'minstrel', 'jwyatt' ], [ 2, 1 ] ],
    [ [ 'oogablast', 'cyclopes8' ], [ 2, 1 ] ],
    [ [ 'rosa', 'hyunkim87' ], [ 1, 2 ] ],
    [ [ 'genghisprawn', 'xeaji' ], [ 2, 0 ] ],
    [ [ 'axelia', 'uberlegen' ], [ 2, 1 ] ],
    [ [ 'purukogi', 'ketzol' ], [ 2, 0 ] ],
    [ [ 'harju', 'impulse27' ], [ 2, 0 ] ],
    [ [ 'rick', 'BYE' ], [ 2, 0 ] ],
    
    [ [ 'oogablast', 'minstrel' ], [ 0, 2 ] ],
    [ [ 'purukogi', 'axelia' ], [ 2, 1 ] ],
    [ [ 'harju', 'hyunkim87' ], [ 0, 2 ] ],
    [ [ 'genghisprawn', 'rick' ], [ 2, 0 ] ],
    [ [ 'rosa', 'impulse27' ], [ 2, 0 ] ],
    [ [ 'jwyatt', 'cyclopes8' ], [ 2, 0 ] ],
    [ [ 'xeaji', 'ketzol' ], [ 2, 0 ] ],
    [ [ 'uberlegen', 'BYE' ], [ 2, 0 ] ],
    
    [ [ 'minstrel', 'hyunkim87' ], [ 1, 2 ] ],
    [ [ 'genghisprawn', 'purukogi' ], [ 2, 0 ] ],
    [ [ 'jwyatt', 'axelia' ], [ 2, 1 ] ],
    [ [ 'rosa', 'uberlegen' ], [ 2, 1 ] ],
    [ [ 'oogablast', 'rick' ], [ 2, 0 ] ],
    [ [ 'harju', 'xeaji' ], [ 2, 0 ] ],
    [ [ 'cyclopes8', 'ketzol' ], [ 2, 0 ] ],
    
    [ [ 'genghisprawn', 'hyunkim87' ], [ 2, 0 ] ],
];

const sep23Decks = parseDecklists(`
hyunkim87 (Gruul Monsters)
GenghisPrawn (czech midrange)
Minstrel (Temur Turns)
Harju (UWr Welder Vault)
Rosa (Jund midrange)
Purukogi (5C Will Storm)
JWyatt (Esper Lingas)
Oogablast (4C no Red Initiative)
Rick (5C Thoracle Landchantress)
xeaji (Flying Men)
Axelia (5C Walkers)
Cyclopes8 (Grixis Green Thiefs)
uberlegen (Paradox Academy)
Impulse27 (jeskai green)
Ketzol (UW Control) 
`);

webcam.processWeek(pairingsToStandings(sep23Pairings), sep23Decks, 'sep23', sep23Pairings);

const sep30Pairings = [
    [ [ 'xeaji', 'axelia' ], [ 2, 1 ] ],
    [ [ 'yeti', 'jamesses' ], [ 2, 0 ] ],        
    [ [ 'swinters', 'impulse27' ], [ 2, 1 ] ],   
    [ [ 'cyclopes8', 'minstrel' ], [ 2, 0 ] ],   
    [ [ 'purukogi', 'genghisprawn' ], [ 2, 0 ] ],
    [ [ 'hyunkim87', 'uberlegen' ], [ 2, 1 ] ],  

    [ [ 'yeti', 'purukogi' ], [ 2, 1 ] ],        
    [ [ 'cyclopes8', 'xeaji' ], [ 2, 0 ] ],      
    [ [ 'hyunkim87', 'swinters' ], [ 2, 1 ] ],   
    [ [ 'minstrel', 'uberlegen' ], [ 2, 0 ] ],   
    [ [ 'jamesses', 'axelia' ], [ 2, 0 ] ],      

    [ [ 'minstrel', 'swinters' ], [ 2, 0 ] ],    
    [ [ 'yeti', 'hyunkim87' ], [ 2, 1 ] ],       
    [ [ 'cyclopes8', 'purukogi' ], [ 2, 0 ] ],   
    [ [ 'jamesses', 'xeaji' ], [ 2, 0 ] ],       
    [ [ 'uberlegen', 'axelia' ], [ 2, 0 ] ],

    [ [ 'cyclopes8', 'yeti' ], [ 2, 0 ] ],       
  ];

const sep30Decks = parseDecklists(`
Yeti (D&T)
Cyclopes8 (Grixis Green Thieves)
Minstrel (wubg Gifts Control)
Jamesses (Doomsday Breach)
hyunkim87 (temur Turns)
Purukogi (Will Storm)
xeaji (Flying Men)
uberlegen (Academy)
SWinters (unknown)
Axelia (5C Superfriends)
Impulse27 (Jeskai Green)
GenghisPrawn (czech midrange)
`);

webcam.processWeek(pairingsToStandings(sep30Pairings), sep30Decks, 'sep30', sep30Pairings);


const oct7Pairings = [
[ [ 'purukogi', 'kelvin' ], [ 2, 1 ] ],
[ [ 'minstrel', 'nanderg' ], [ 2, 0 ] ],
[ [ 'jwyatt', 'yeti' ], [ 2, 1 ] ],
[ [ 'rick', 'hyunkim87' ], [ 0, 2 ] ],
[ [ 'harju', 'notgene' ], [ 2, 0 ] ],
[ [ 'raicune', 'genghisprawn' ], [ 2, 0 ] ],
[ [ 'xeaji', 'cymbalman' ], [ 0, 2 ] ],
[ [ 'axelia', 'impulse27' ], [ 0, 2 ] ],
[ [ 'machineman10k', 'uberlegen' ], [ 2, 1 ] ],

[ [ 'raicune', 'jwyatt' ], [ 2, 1 ] ],
[ [ 'hyunkim87', 'impulse27' ], [ 1, 2 ] ],
[ [ 'minstrel', 'purukogi' ], [ 2, 1 ] ],
[ [ 'cymbalman', 'harju' ], [ 2, 0 ] ],
[ [ 'kelvin', 'machineman10k' ], [ 2, 1 ] ],
[ [ 'rick', 'xeaji' ], [ 2, 1 ] ],
[ [ 'uberlegen', 'nanderg' ], [ 2, 1 ] ],
[ [ 'axelia', 'notgene' ], [ 2, 1 ] ],
[ [ 'yeti', 'genghisprawn' ], [ 2, 1 ] ],

[ [ 'cymbalman', 'impulse27' ], [ 1, 2 ] ],
[ [ 'raicune', 'minstrel' ], [ 2, 1 ] ],
[ [ 'jwyatt', 'axelia' ], [ 2, 0 ] ],
[ [ 'yeti', 'harju' ], [ 2, 0 ] ],
[ [ 'purukogi', 'hyunkim87' ], [ 2, 1 ] ],
[ [ 'kelvin', 'uberlegen' ], [ 1, 2 ] ],
[ [ 'machineman10k', 'rick' ], [ 2, 1 ] ],
[ [ 'genghisprawn', 'nanderg' ], [ 2, 1 ] ],
[ [ 'notgene', 'xeaji' ], [ 2, 1 ] ],

[ [ 'raicune', 'impulse27' ], [0, 2]],
];

const oct7Decks = parseDecklists(`
raicune (Mardu Midrange)
Impulse27 (Jeskai Control)
JWyatt (Bant control)
Minstrel (UB Tempo)
cymbalman (naya winota)
Yeti (D&T)
Purukogi (Gruul Monsters)
MachineMan10K (Izzet Tempo)
uberlegen (Paradox Academy)
hyunkim87 (Temur Turns)
kelvin (Eggs)
GenghisPrawn (Jund midrange)
Axelia (5C Walkers)
Harju (Jeskai Welder Vault)
Rick (Hermit Pattern Aluren)
NotGene (Doomsday Breach)
NanderG (Food Chain Aluren)
xeaji (Gruul Monsters)
`);

webcam.processWeek(pairingsToStandings(oct7Pairings), oct7Decks, 'oct7', oct7Pairings);


const oct14Pairings = [
    [ [ 'gearhem', 'ketzol' ], [ 2, 1 ] ],
    [ [ 'axelia', 'brogatsby' ], [ 1, 1 ] ],
    [ [ 'jwyatt', 'bailite' ], [ 2, 0 ] ],
    [ [ 'zfrougle', 'hyunkim87' ], [ 0, 2 ] ],
    [ [ 'cymbalman', 'purukogi' ], [ 2, 0 ] ],
    [ [ 'jadedtrekkie', 'vaaste' ], [ 2, 0 ] ],
    [ [ 'harju', 'cyclopes8' ], [ 2, 0 ] ],
    [ [ 'genghisprawn', 'uberlegen' ], [ 2, 1 ] ],
    
    [ [ 'jwyatt', 'jadedtrekkie' ], [ 2, 0 ] ],
    [ [ 'genghisprawn', 'hyunkim87' ], [ 2, 1 ] ],
    [ [ 'cymbalman', 'gearhem' ], [ 2, 0 ] ],
    [ [ 'harju', 'brogatsby' ], [ 2, 0 ] ],
    [ [ 'axelia', 'cyclopes8' ], [ 2, 1 ] ],
    [ [ 'uberlegen', 'zfrougle' ], [ 2, 0 ] ],
    [ [ 'purukogi', 'bailite' ], [ 2, 1 ] ],
    [ [ 'vaaste', 'BYE' ], [ 2, 0 ] ],
    
    [ [ 'cymbalman', 'genghisprawn' ], [ 2, 0 ] ],
    [ [ 'harju', 'jwyatt' ], [ 2, 0 ] ],
    [ [ 'axelia', 'gearhem' ], [ 2, 1 ] ],
    [ [ 'hyunkim87', 'uberlegen' ], [ 2, 1 ] ],
    [ [ 'jadedtrekkie', 'purukogi' ], [ 2, 1 ] ],
    [ [ 'vaaste', 'brogatsby' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'ketzol' ], [ 2, 0 ] ],
    [ [ 'bailite', 'zfrougle' ], [ 2, 0 ] ],

    [ [ 'harju', 'cymbalman' ], [ 0, 2 ] ]
  ];

const oct14Decks = parseDecklists(`
Harju (UWg Vault)
cymbalman (Jeskai control)
Axelia (5C Superfriends Omnitell)
JWyatt (Jeskai Moon)
GenghisPrawn (Czech)
JadedTrekkie (Paradox Academy)
hyunkim87 (Temur Timeshift)
Vaaste (Gruul Monsters)
Cyclopes8 (Naya Maverick)
Gearhem (GW Enchantress)
Purukogi (Flash Hulk)
uberlegen (Paradox Academy)
Bailite (Abzan Midrange)
brogatsby (WUGB Natural Order)
Ketzol (UW Miracles)
Zfrougle (Abzan Lands Midrange)
`);

webcam.processWeek(pairingsToStandings(oct14Pairings), oct14Decks, 'oct14', oct14Pairings);


const oct21Pairings = [
    [ [ 'bailite', 'genghisprawn' ], [ 2, 0 ] ],   
    [ [ 'raicune', 'kelvin' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'ketzol' ], [ 2, 0 ] ],       
    [ [ 'levi', 'mehall' ], [ 2, 1 ] ],
    [ [ 'hurrex', 'jdizl' ], [ 2, 0 ] ],
    [ [ 'theonewhoknocks', 'calhove' ], [ 2, 0 ] ],
    [ [ 'yeti', 'oogablast' ], [ 2, 1 ] ],
    [ [ 'purukogi', 'qzzyozzy' ], [ 2, 1 ] ],      
    [ [ 'axelia', 'hyunkim87' ], [ 2, 1 ] ],
    [ [ 'cat_island', 'BYE' ], [ 2, 0 ] ],
    
    [ [ 'axelia', 'hurrex' ], [ 2, 0 ] ],
    [ [ 'yeti', 'cyclopes8' ], [ 2, 0 ] ],
    [ [ 'purukogi', 'cat_island' ], [ 2, 1 ] ],      
    [ [ 'theonewhoknocks', 'levi' ], [ 2, 0 ] ],   
    [ [ 'raicune', 'bailite' ], [ 1, 1 ] ],        
    [ [ 'kelvin', 'calhove' ], [ 2, 0 ] ],
    [ [ 'jdizl', 'mehall' ], [ 2, 1 ] ],
    [ [ 'qzzyozzy', 'ketzol' ], [ 2, 0 ] ],        
    [ [ 'genghisprawn', 'hyunkim87' ], [ 1, 2 ] ], 
    [ [ 'oogablast', 'BYE' ], [ 2, 0 ] ],
    
    [ [ 'yeti', 'purukogi' ], [ 2, 1 ] ],
    [ [ 'axelia', 'theonewhoknocks' ], [ 2, 1 ] ], 
    [ [ 'kelvin', 'bailite' ], [ 0, 2 ] ],
    [ [ 'raicune', 'oogablast' ], [ 2, 1 ] ],
    [ [ 'hyunkim87', 'cat_island' ], [ 2, 0 ] ],   
    [ [ 'qzzyozzy', 'hurrex' ], [ 2, 1 ] ],        
    [ [ 'cyclopes8', 'levi' ], [ 2, 1 ] ],
    [ [ 'genghisprawn', 'jdizl' ], [ 2, 0 ] ],
    [ [ 'calhove', 'ketzol' ], [ 2, 1 ] ],

    [ [ 'yeti', 'axelia' ], [ 2, 0 ] ]
  ];

const oct21Decks = parseDecklists(`
Mehall (Food Rector)
Yeti (RDW)
Purukogi (Flash Hulk)
hyunkim87 (Temur Time-Shift)
QzzyOzzy (Mardu Tokens)
Hurrex (Paradox Academy)
Cat_Island (Boros Equipment)
raicune (Mardu Midrange)
Oogablast (Bug Elves)
Axelia (5c Superfriends Omnitell)
theOneWhoKnocks (Jund Midrange)
kelvin (Jeskai Green)
Bailite (Abzan Midrange)
Cyclopes8 (Ubwg Turbo Ring)
Levi (Rb Goblins)
GenghisPrawn (Czech)
jDIZL (Jund Madness)
calhove3141 (4C Blood)
Ketzol (UW Control)
`);

webcam.processWeek(pairingsToStandings(oct21Pairings), oct21Decks, 'oct21', oct21Pairings);


const oct28Pairings = [
    [ [ 'genghisprawn', 'hurrex' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'minstrel' ], [ 2, 0 ] ],
    [ [ 'machineman10k', 'mehall' ], [ 2, 0 ] ],
    [ [ 'jwyatt', 'nanderg' ], [ 2, 0 ] ],
    [ [ 'sir nikheizen', 'purukogi' ], [ 2, 1 ] ],
    [ [ 'kelvin', 'cat_island' ], [ 2, 1 ] ],
    [ [ 'jadedtrekkie', 'remi' ], [ 2, 1 ] ],
    [ [ 'tr33vs', 'axelia' ], [ 2, 1 ] ],
    
    [ [ 'machineman10k', 'kelvin' ], [ 2, 0 ] ],
    [ [ 'jwyatt', 'sir nikheizen' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'tr33vs' ], [ 2, 0 ] ],
    [ [ 'jadedtrekkie', 'genghisprawn' ], [ 0, 2 ] ],
    [ [ 'minstrel', 'purukogi' ], [ 2, 1 ] ],
    [ [ 'mehall', 'hurrex' ], [ 2, 0 ] ],
    [ [ 'axelia', 'nanderg' ], [ 2, 1 ] ],
    [ [ 'remi', 'cat_island' ], [ 2, 1 ] ],

    [ [ 'jadedtrekkie', 'minstrel' ], [ 1, 2 ] ],
    [ [ 'jwyatt', 'machineman10k' ], [ 2, 1 ] ],
    [ [ 'cyclopes8', 'genghisprawn' ], [ 2, 1 ] ],
    [ [ 'kelvin', 'sir nikheizen' ], [ 2, 0 ] ],
    [ [ 'axelia', 'mehall' ], [ 2, 1 ] ],
    [ [ 'remi', 'hurrex' ], [ 2, 0 ] ],
    [ [ 'purukogi', 'cat_island' ], [ 2, 0 ] ],
    [ [ 'nanderg', 'BYE' ], [ 2, 0 ] ],

    [ [ 'jwyatt', 'cyclopes8' ], [ 2, 0 ] ],
  ];

const oct28Decks = parseDecklists(`
Cyclopes8 (Ubwg Turbo Ring)
JWyatt (Jeskai Green)
MachineMan10K (RG aggro)
GenghisPrawn (Jeskai Green)
Minstrel (BUG artifact midrange)
kelvin (UB Doomsday)
Axelia (5c Superfriends Omnitell)
Remi (5c Artifact Combo)
Tr33vs (D&T)
NanderG (5c Food Chain)
JaddedTrekkie (Paradox Academy)
nikheizen (Medium Boros)
mehall (Food Rector)
Purukogi (Flash Hulk)
Cat_Island (Boros Equipment)
Hurrex (wubg Food Legends) 
`);

webcam.processWeek(pairingsToStandings(oct28Pairings), oct28Decks, 'oct28', oct28Pairings);


const nov4Pairings = [
    [ [ 'cyclopes8', 'jdizl' ], [ 2, 0 ] ],
    [ [ 'hyunkim87', 'purukogi' ], [ 2, 1 ] ],
    [ [ 'axelia', 'harju' ], [ 2, 0 ] ],
    [ [ 'solemn_storm', 'calhove' ], [ 2, 1 ] ],
    [ [ 'raicune', 'ketzol' ], [ 2, 1 ] ],
    [['unusualthunder', 'BYE'], [2, 0]],
    
    [ [ 'raicune', 'solemn_storm' ], [ 2, 0 ] ],
    [ [ 'jdizl', 'purukogi' ], [ 2, 0 ] ],
    [ [ 'cyclopes8', 'hyunkim87' ], [ 2, 0 ] ],
    [ [ 'axelia', 'unusualthunder' ], [ 2, 1 ] ],
    [ [ 'harju', 'calhove' ], [ 2, 1 ] ],
    [['ketzol', 'BYE'], [2, 0]],
    
    [ [ 'cyclopes8', 'axelia' ], [ 2, 0 ] ],
    [ [ 'solemn_storm', 'jdizl' ], [ 2, 1 ] ],
    [ [ 'raicune', 'unusualthunder' ], [ 2, 0 ] ],
    [ [ 'calhove', 'hyunkim87' ], [ 1, 2 ] ],
    [ [ 'harju', 'ketzol' ], [ 2, 1 ] ],
    [['purukogi', 'BYE'], [2, 0]],
    
    [ [ 'cyclopes8', 'raicune' ], [ 2, 1 ] ]
  ];

const nov4Decks = parseDecklists(`
Cyclopes8 (Grixis White Midrange)
Axelia (5c Walker Omnitell)
solemn_storm (Jeskai Vault)
jDIZL (Big Red)
raicune (Mardu Midrange)
UnusualThunder (Temur Control)
calhove3141 (Golgari Lands)
hyunkim87 (Temur Turns)
Ketzol (UW Miracles)
Harju (Jeskai Slushie)
Purukogi (Flash Hulk)
`);

webcam.processWeek(pairingsToStandings(nov4Pairings), nov4Decks, 'nov4', nov4Pairings);


const allDecks = Object.keys(webcam.decks).filter((name) => {
    return Array.isArray(name.match(/jeskaiMid.+/g))
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

// console.log(webcam.players['hyunkim87']);
// console.log(webcam.decks['jeskaiMidrange']);
// console.log(Object.keys(webcam.events).length);
// console.log(webcam.events['may20'].decks);
// console.log(webcam.events['apr22'].players);
// console.log(formatMatchups(webcam));
// const sortedByElo = sortPlayers(webcam, makeComparator('elo'), ['name', 'elo', 'peakElo']);
// console.log(sortedByElo);

// console.log(sortPlayers(webcam, , ['name']));


const lastDecks = [];
Object.keys(webcam.getLastEvent().decks).map((key) => {
    lastDecks.push(webcam.getLastEvent().decks[key].name);
});

// console.log(lastDecks.join('\n'));
// console.log(webcam.getLastEvent().players);
// console.log(webcam.getLastEvent().decks);
// console.log(formatEventDecks(webcam.getLastEvent()));


const deckCsv = formatCSV(webcam, 'decks', ['name', 'played', 'uniquePilots', 'totalPoints', 'average', 'winrate', 'nonMirrorWinrate', 'trophies','topCuts', 'pointsBreakdown', 'colors', 'archetypes', 'nicknames'], null, makeComparator(9)); // index of 2-x or better

const playerCsv = formatCSV(webcam, 'players', ['properName', 'eventCount', 'deckCount', 'totalPoints', 'average', 'winrate', 'trophies','topCuts', 'pointsBreakdown', 'longestStreak', 'mostPlayed'], null, makeComparator(8));


const archetypeDisclaimer = `note: archetype metagame share percentages don't add up to 100% because some decks span multiple archetypes`;

const archetypeCsv = [formatCSV(webcam, 'archetypes', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'), null, false, 'archetypes'), archetypeDisclaimer].join('\n\n');

const familyCsv = formatCSV(webcam, 'families', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter', 'members'], makeComparator('2-XBetter'), null, false, 'subarchetypes');

const hybridArchetypeCsv = formatCSV(webcam, 'hybridArchetypes', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'), null, false, 'hybridArchetypes');

const allArchetypesCsv = mergeCSVHorizontally(archetypeCsv, [familyCsv, hybridArchetypeCsv].join('\n\n\n'));

// all color combinations (jeskai, dimir, ...)
const colorCsv = formatCSV(webcam, 'colors', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'), null, false, 'colorCombos');

// data for each of the five colors
const wubrgCsv = formatCSV(webcam, 'wubrg', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], null, null, false, 'colors');

// data by number of colors (mono, dual...)
const numColorsCsv = formatCSV(webcam, 'numColors', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], null, null, false, 'numColors');

const colorAggregateCsv = mergeCSVHorizontally([wubrgCsv, numColorsCsv].join('\n\n\n'), colorCsv);


const lastEventArchetypesCsv = formatCSV(webcam, 'lastEventHybridArchetypes', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('played'));

const lastEventColorsCsv = formatCSV(webcam, 'lastEventColors', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('played'));

const lastEventWUBRGCsv = formatCSV(webcam, 'lastEventWUBRG', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter']);

const lastEventMisc = formatEventMisc(webcam.getLastEvent());

const lastEventDecks = formatEventDecks(webcam.getLastEvent());

const lastEventAll = mergeCSVHorizontally([lastEventMisc, lastEventArchetypesCsv, lastEventColorsCsv, lastEventWUBRGCsv].join('\n\n'), lastEventDecks);


const matchupCsv = formatMatchups(webcam);


function writeAll(texts, files) {
    for (let i = 0; i < texts.length; i++) {
        fs.writeFile(files[i], texts[i], err => {
            if (err) {
                console.error(err);
            }
        });
    }
}

writeAll([deckCsv, playerCsv, allArchetypesCsv, colorAggregateCsv, lastEventAll, matchupCsv], ['csv/decks.csv', 'csv/players.csv', 'csv/archetypes.csv', 'csv/colors.csv', 'csv/lastEvent.csv', 'csv/matchups.csv']);
