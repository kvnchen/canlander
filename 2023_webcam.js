const { Series, parseDecklists, parseReporting, formatCSV, formatEventMisc } = require('./eventData.js');
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

const feb25Parsed = [
[ [ 'wonkywombat', 'vaaste' ], [ 2, 0 ] ],
[ [ 'axelia', 'therealemt' ], [ 2, 0 ] ],
[ [ 'mehall', 'kannnicks' ], [ 0, 2 ] ],
[ [ 'yeti', 'jwyatt' ], [ 1, 2 ] ],
[ [ 'cyclopes8', 'dentro' ], [ 2, 0 ] ],
[ [ 'jamesses', 'sir nikheizen' ], [ 2, 0 ] ],
[ [ 'shakashaka', 'hyunkim87' ], [ 0, 2 ] ],
[ [ 'kelvin', 'tictaco' ], [ 2, 1 ] ],
[ [ 'genghisprawn', 'dorbird' ], [ 2, 1 ] ],
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
[ [ 'dorbird', 'robin sorensen' ], [ 2, 1 ] ],
[ [ 'dentro', 'vaaste' ], [ 2, 1 ] ],
[['purukogi', 'kelvin'], [2,1]],
[['kannnicks', 'axelia'], [2,0]],

[ [ 'yeti', 'dorbird' ], [ 0, 2 ] ],
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
Yeti (D&T) 
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


// console.log(webcam.players.tr33vs);
console.log(webcam.decks['flashOath'].matchups);


const deckCsv = formatCSV(webcam, 'decks', ['name', 'played', 'uniquePilots', 'totalPoints', 'average', 'winrate', 'trophies', 'pointsBreakdown', 'colors', 'archetypes', 'nicknames'], null, makeComparator(7)); // index of 2-x or better

const playerCsv = formatCSV(webcam, 'players', ['name', 'eventCount', 'deckCount', 'totalPoints', 'average', 'winrate', 'trophies', 'pointsBreakdown', 'longestStreak', 'mostPlayed'], null, makeComparator(7));

const archetypeCSV = formatCSV(webcam, 'archetypes', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'), null, true);

const colorCsv = formatCSV(webcam, 'colors', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'), null, true);

const familyCsv = formatCSV(webcam, 'families', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter', 'members'], makeComparator('2-XBetter'), null, true);

const wubrgCsv = formatCSV(webcam, 'wubrg', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], null, null, true);

const mergedAggregates = [archetypeCSV, colorCsv, familyCsv, wubrgCsv].join('\n\n');

const lastEventArchetypesCsv = formatCSV(webcam, 'lastEventArchetypes', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'));

const lastEventColorsCsv = formatCSV(webcam, 'lastEventColors', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'));

const lastEventWUBRGCsv = formatCSV(webcam, 'lastEventWUBRG', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'));

const lastEventMisc = formatEventMisc(webcam);

const lastEventAll = [lastEventMisc, lastEventArchetypesCsv, lastEventColorsCsv, lastEventWUBRGCsv].join('\n\n');


function writeAll(texts, files) {
    for (let i = 0; i < texts.length; i++) {
        fs.writeFile(files[i], texts[i], err => {
            if (err) {
                console.error(err);
            }
        });
    }
}

// writeAll([deckCsv, playerCsv, mergedAggregates, lastEventAll], ['./decks.csv', './players.csv', './aggregate.csv', './lastEvent.csv']);
