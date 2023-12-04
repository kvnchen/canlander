const { Series, parseDecklists, formatCSV } = require('./eventData.js');

const all = new Series();

// 1/8
const jan8Decks = parseDecklists(`Rick - Goblins
Pika - Death and taxes
GenghisPrawn - Jund Pyro
Yeti - Jund Aggro
just Josh - Medium Green
Ky  - Jeskai Control`);

const jan8Players = [
    ['yeti', [2,1], 1],
    ['genghisprawn', [2,1]],
    ['just josh', [2,1]],
    ['pika', [2,1]],
    ['ky', [1,2]],
    ['rick', [0,3]],
];
all.processWeek(jan8Players, jan8Decks, 'jan8');

// 1/15
const jan15Decks = parseDecklists(`raicune - eggs
Yeti - death and taxes
Rick - goblins
Pika - death and taxes
Smooth Turtle - 4c pod
Cannonhead - Mono-B Aggro
Purukogi - pattern rector
GenghisPrawn - jund pyro
Sp1derclaw - Mardu aristrocrats
solemnstorm - jeskies`);

const jan15Players = [
    ['solemnstorm', [3,0], 1],
    ['raicune', [2,1]],
    ['smooth turtle', [2,1]],
    ['yeti', [2,1]],
    ['genghisprawn', [2,1]],
    ['pika', [1,2]],
    ['sp1derclaw', [1,2]],
    ['rick', [1,2]],
    ['purukogi', [1,2]],
    ['cannonhead', [0,3]],
];
all.processWeek(jan15Players, jan15Decks, 'jan15');

// 1/22
const jan22Decks = parseDecklists(`Rick - Tidespout Tezzerator
Wilbur - Mono-B aggro
Raicune - Jeskai bots
solemnstorm - Jeskai bots
Cannonhead - Mono-B Aggro
Purukogi - 5c Jeskai Ascendancy
Yeti - death and taxes
Ky - Breach Storm
just Josh - Medium Green
pika - Time Vault`);

const jan22Players = [
    ['raicune', [3,0], 1],
    ['solemnstorm', [2,1]],
    ['just Josh', [2,1]],
    ['Ky', [2,1]],
    ['rick', [2,1]],
    ['yeti', [1,2]],
    ['Cannonhead', [1,2]],
    ['pika', [1,2]],
    ['Purukogi', [1,2]],
    ['Wilbur', [0,3]],
];

all.processWeek(jan22Players, jan22Decks, 'jan22');

// 1/29
const jan29Decks = parseDecklists(`raicune - 5c Pod
Dentro - hoof
TwistedGengar - Elves
Purukogi - Channel Mirror
Rick - Aluren
GenghisPrawn - Jund pyro
solemnstorm - Temur Tempo
Harju - Breach Storm
PaladinR - Elves
pika - death and taxes
Cannonhead - Mardu pyro
Gabe Sorci - death and taxes
Just Josh - Medium Green
Wilbur - Aluren
Ky - Jeskai Midrange
Yeti - death and taxes
Nitrox 2x - GW Midrange`);

const jan29Players = [
    ['harju', [4,0], 1],
    ['raicune', [3,1]],
    ['Gabe Sorci', [2,1]],
    ['GenghisPrawn', [2,1]],
    ['TwistedGengar', [2,1]],
    ['Dentro', [2,1]],
    ['just josh', [2,1]],
    ['Nitrox 2x', [2,1]],
    ['solemnstorm', [2,1]],
    ['rick', [1,1,1]],
    ['cannonhead', [1,2]],
    ['yeti', [1,2]],
    ['paladinr', [1,2]],
    ['ky', [1,2]],
    ['pika', [1,2]],
    ['wilbur', [0,2,1]],
    ['purukogi', [0,3]],
];
all.processWeek(jan29Players, jan29Decks, 'jan29');


// 2/5
const feb5Decks = parseDecklists(`GenghisPrawn - Jund Pyro
Sp1derClaw - rdw
PaladinR - Elves
TheRealEMT - ug Sorensen
Yeti - death and taxes
solemnstorm - Jund Pyro
Rick - Food Chain
Axelia - Superfriends
Nitrox 2x - ub Ninjas
Purukogi - Channel Mirror`);

const feb5Players = [
    ['Sp1derClaw', [3,0], 1],
    ['GenghisPrawn', [2,1]],
    ['solemnstorm', [2,1]],
    ['PaladinR', [2,1]],
    ['Yeti', [2,1]],
    ['Nitrox 2x', [1,2]],
    ['TheRealEMT', [1,2]],
    ['Rick', [1,2]],
    ['Purukogi', [1,2]],
    ['Axelia', [0,3]],
];
all.processWeek(feb5Players, feb5Decks, 'feb5');

// 2/12
const feb12Decks = parseDecklists(`Rick - 5c Pod
GenghisPrawn - Jund Pyro
Yeti - death and taxes
just Josh - Medium Green
Wilbur - Aluren
Nitrox 2x - Lands Midrange
Purukogi - Channel Mirror
PaladinR - Elves`);

const feb12Players = [
    ['GenghisPrawn', [3,0], 1],
    ['yeti', [2,1]],
    ['Wilbur', [2,1]],
    ['Purukogi', [2,1]],
    ['just Josh', [1,2]],
    ['Nitrox 2x', [1,2]],
    ['Rick', [1,2]],
    ['PaladinR', [0,3]],
];
all.processWeek(feb12Players, feb12Decks, 'feb12');

// 2/19
const feb19Decks = parseDecklists(`Rick - Reanimator
kelvin - Temur Midrange
Foster - Superfriends
hyunkim87 - Seeker Walk
Gabe sorci - death and taxes
Cannonhead - Mardu Pyro
genghisPrawn - Jund Pyro
Wilbur - Aluren
Yeti - death and taxes
raicune - seeker walk
just Josh - Medium Green
solemnstorm - Jeskai bots`);

const feb19Players = [
    ['gabe sorci', [3,0], 1],
    ['kelvin', [2,1]],
    ['genghisprawn', [2,1]],
    ['solemnstorm', [2,1]],
    ['wilbur', [2,1]],
    ['foster', [2,1]],
    ['hyunkim87', [2,1]],
    ['raicune', [1,2]],
    ['rick', [1,2]],
    ['yeti', [1,2]],
    ['just josh', [0,3]],
    ['cannonhead', [0,3]],
];
all.processWeek(feb19Players, feb19Decks, 'feb19');
// console.log(all.players['kelvin']);

// 2/26
const feb26Decks = parseDecklists(`Rick - Blood Tide
raicune - rdw
Gabe sorci - death and taxes
solemnstorm - Jeskies
hyunkim87 - Seeker Walk
SWinters - Lands Midrange
kelvin - Abzan Midrange
Yeti - death and taxes
Nitrox 2x - grixis delver
Wilbur - Aluren
Purukogi - Lands Midrange
genghisPrawn - Jund Pyro`);

const feb26Players = [
    ['Nitrox 2x', [4,0], 1],
    ['solemnstorm', [3,1]],
    ['kelvin', [2,1]],
    ['genghisPrawn', [2,1]],
    ['raicune', [2,1]],
    ['hyunkim87', [1,1,1]],
    ['Yeti', [1,2]],
    ['Rick', [1,2]],
    ['Purukogi', [1,2]],
    ['SWinters', [0,2,1]],
    ['Gabe sorci', [0,3]],
    ['Wilbur', [0,3]],
];

all.processWeek(feb26Players, feb26Decks, 'feb26');
// console.log(all.players['nitrox 2x']);

// 3/5
const mar5Decks = parseDecklists(`solemnstorm - Jeskai bots
GenghisPrawn - Jund Pyro
UnusualThunder - Lands Midrange
Rick - Artifact Prison
Killin - seeker walk
Nitrox 2x - ur tempo
kelvin - Medium Red
Harju - Breach Storm
calhove - Medium Red
Purukogi - Esper Control
Cannonhead - Mono-B Aggro`);

const mar5Players = [
    ['UnusualThunder', [3,0], 1],
    ['solemnstorm', [2,1]],
    ['calhove', [2,1]],
    ['rick', [2,1]],
    ['harju', [2,1]],
    ['killin', [2,1]],
    ['Cannonhead', [1,2]],
    ['GenghisPrawn', [1,2]],
    ['Nitrox 2x', [1,2]],
    ['Purukogi', [1,2]],
    ['kelvin', [1,2]],
];

all.processWeek(mar5Players, mar5Decks, 'mar5');

// ----- backfill ---------

// 3/12
all.update('fry guy', 12, 'Sultai Control', 1);
all.update('yeti', 9, 'Death and Taxes');
all.update('nitrox 2x', 6, 'Simic Turns');
all.update('calhove', 6, 'Medium Red');
all.update('unusualthunder', 6, 'Death and Taxes');
all.update('raicune', 3, 'Blue Moon');
all.update('genghisprawn', 3, 'Jund Pyro');
all.update('gustav', 3, 'Mardu Pyro');
all.update('hyunkim87', 3, 'Seeker Walk');
all.update('kelvin', 3, 'UW Control');
all.update('rick', 3, 'Artifact Prison');
all.update('purukogi', 0, 'esper control');
all.eventCount;

// 3/19
all.update('solemnstorm', 12, 'bant control', 1);
all.update('yeti', 9, 'death and taxes');
all.update('cymbalman2', 9, 'boros dnt');
all.update('purukogi', 6, 'esper control');
all.update('calhove', 6, 'medium red');
all.update('fry guy', 6, 'sultai control');
all.update('kelvin', 6, 'sultai thoracle'); // sultai
all.update('raicune', 6, 'lands midrange');
all.update('unusualthunder', 6, 'lands midrange');
all.update('hyunkim87', 3, 'ub ninjas');
all.update('genghisprawn', 3, 'jund pyro');
all.update('wilbur', 3, 'pattern rector');
all.update('axelia', 3, 'superfriends');
all.update('pika', 3, 'time vault');
all.update('nitrox 2x', 0, 'grixis delver');
all.update('cannonhead', 0, 'jeskai control');
all.update('rick', 0, 'sneak show fins');
all.eventCount;

// 3/26
all.update('unusualthunder', 12, 'blue moon', 1);
all.update('hyunkim87', 9, 'ub ninjas');
all.update('tragic cancer', 6, 'medium red');
all.update('raicune', 6, 'death and taxes');
all.update('fry guy', 6, 'oath reanimator');
all.update('nitrox 2x', 6, 'gw midrange');
all.update('rick', 6, 'aluren');
all.update('calhove', 6, 'medium green');
all.update('bailite', 4, 'abzan midrange');
all.update('kelvin', 4, 'hoof');
all.update('genghisprawn', 3, 'jund pyro');
all.update('yeti', 3, 'Death and Taxes');
all.update('purukogi', 3, 'bant blink');
all.update('gustav', 3, 'mardu pyro');
all.update('solemnstorm', 3, 'hoof');
all.update('johann', 3, 'bant natural order');
all.update('cannonhead', 0, 'jeskai control');
all.eventCount;


// 4/9
all.update('kelvin', 12, 'ur tempo', 1);
all.update('orchid', 9, 'paradox academy');
all.update('gustav', 6, 'bant stoneblade');
all.update('fry guy', 6, 'sultai control');
all.update('yeti', 6, 'Death and Taxes');
all.update('calhove', 6, '4c blood');
all.update('genghisprawn', 6, 'jund pyro');
all.update('spicynapalm', 6, 'mardu monarch');
all.update('hyunkim87', 3, 'ub ninjas');
all.update('purukogi', 3, 'bant blink');
all.update('rick', 3, 'landstorm');
all.update('harju', 3, 'breach storm');
all.update('nitrox 2x', 3, 'bw superfriends');
all.update('just josh', 3, '4c sans white aggro');
all.update('cannonhead', 0, 'mono-b aggro');
all.eventCount;

// 4/16

all.update('calhove', 9, '4c blood', 1);
all.update('robin sorensen', 9, 'blue moon');
all.update('yeti', 6, 'Death and Taxes');
all.update('raicune', 6, 'mardu pyro');
all.update('hyunkim87', 6, 'ub ninjas');
all.update('foster', 6, 'bots');
all.update('wilbur', 4, 'pattern rector');
all.update('jetheweary', 4, 'esper control');
all.update('genghisprawn', 3, 'jund pyro');
all.update('kelvin', 3, 'temur midrange');
all.update('harju', 3, 'jeskai slushie');
all.update('rick', 3, 'flash hulk');
all.update('purukogi', 3, 'channel mirror');
all.update('solemnstorm', 3, 'jeskai slushie');
all.eventCount;

// 4/23
all.update('genghisprawn', 12, 'jund pyro', 1);
all.update('cymbalman2', 9, 'goblins');
all.update('yeti', 6, 'Death and Taxes');
all.update('unusualthunder', 6, 'blue moon');
all.update('kelvin', 6, 'sultai thoracle'); // sultai
all.update('wilbur', 6, 'pattern rector');
all.update('rick', 4, 'breach tide');
all.update('hyunkim87', 3, 'bant merfolk');
all.update('just josh', 3, 'medium green');
all.update('fry guy', 3, 'seeker walk');
all.update('calhove', 3, '4c blood');
all.update('solemnstorm', 3, 'breach storm');
all.update('pika', 2, 'ub control');
all.update('purukogi', 1, 'pattern rector');
all.update('raicune', 0, 'sultai control');
all.eventCount;

// 4/30
all.update('unusualthunder', 12, 'blue moon', 1);
all.update('kelvin', 9, 'doomsday');
all.update('yeti', 6, 'rdw');
all.update('solemnstorm', 6, 'breach storm');
all.update('purukogi', 6, 'death and taxes');
all.update('genghisprawn', 6, 'jund pyro');
all.update('cymbalman2', 3, 'aluren');
all.update('wilbur', 3, 'pattern rector');
all.update('jetheweary', 3, 'esper control');
all.update('hyunkim87', 3, 'seeker walk');
all.update('fry guy', 3, 'temur madness');
all.update('rick', 3, 'show and tide');
all.update('nukelaunch', 0, 'blue moon');
all.update('johann', 0, 'temur tempo');
all.eventCount;

// 5/7
all.update('unusualthunder', 12, 'blue moon', 1);
all.update('kelvin', 9, '4c omnath midrange');
all.update('genghisprawn', 6, 'jund pyro');
all.update('hyunkim87', 6, 'hoof');
all.update('solemnstorm', 6, 'jund blitz');
all.update('johann', 6, 'temur tempo');
all.update('yeti', 3, 'death and taxes');
all.update('fry guy', 3, 'grixis madness');
all.update('pika', 3, 'sultai midrange');
all.update('shinerccc', 3, 'dredge');
all.update('tsubame', 0, 'the rock');
all.update('rick', 0, 'goblins');
all.eventCount;


// 5/14
all.update('genghisprawn', 12, 'jund pyro', 1);
all.update('johann', 9, 'temur tempo');
all.update('fry guy', 6, 'sultai control');
all.update('kelvin', 6, 'mono-u vault');
all.update('unusualthunder', 6, 'blue moon');
all.update('hyunkim87', 6, 'hoof');
all.update('rick', 6, '4c sans green wildfire');
all.update('purukogi', 3, 'breach storm');
all.update('wilbur', 3, 'lands midrange');
all.update('yeti', 3, 'death and taxes');
all.update('foster', 3, 'grixis reanimator');
all.update('saddlebags', 0, 'hoof');
all.eventCount;

// 5/21
all.update('cymbalman2', 12, 'jeskai bots', 1);
all.update('hyunkim87', 9, 'hoof');
all.update('paul pilz', 6, 'hoof');
all.update('solemnstorm', 6, '4c blood');
all.update('kelvin', 6, 'breach storm');
all.update('johann', 3, 'temur tempo');
all.update('purukogi', 3, 'mardu pyro');
all.update('foster', 3, 'grixis reanimator');
all.update('raicune', 3, 'rdw');
all.update('fry guy', 3, 'bant blink');
all.update('rick', 0, 'unknown');
all.update('yeti', 0, 'death and taxes');
all.eventCount;

// 5/28
all.update('hyunkim87', 12, 'seeker walk', 1);
all.update('unusualthunder', 9, 'blue moon');
all.update('fry guy', 6, 'esper thoracle'); // esper
all.update('johann', 6, 'temur tempo');
all.update('purukogi', 6, 'mardu pyro');
all.update('genghisprawn', 6, 'jund pyro');
all.update('cymbalman2', 6, 'ur tempo');
all.update('foster', 3, 'grixis reanimator');
all.update('raicune', 3, 'rdw');
all.update('sir nikheizen', 3, 'mardu aristocrats');
all.update('kelvin', 3, 'breach storm');
all.update('yeti', 0, 'death and taxes');
all.update('solemnstorm', 0, 'grixis thoracle'); // grixis
all.eventCount;

// 6/4
all.update('kelvin', 12, 'uw control', 1);
all.update('hyunkim87', 9, 'seeker walk');

all.update('fry guy', 6, 'boros aggro');
all.update('raicune', 6, 'eggs');
all.update('foster', 6, 'jund blitz');
all.update('purukogi', 6, 'jund infect');
all.update('paul pilz', 6, 'paradox academy');
all.update('cymbalman2', 6, 'goblins');

all.update('rick', 3, '5c shrines');
all.update('dentro', 3, 'hoof');
all.update('johann', 3, 'angel stompy');
all.update('unusualthunder', 3, 'paradox academy');
all.update('solemnstorm', 3, 'grixis thoracle'); //grixis

all.update('wilbur', 0, 'gw midrange');
all.update('kithknight', 0, 'goblins');
all.update('robin sorensen', 0, 'mono-u bots');
all.eventCount;


// 6/11
all.update('solemnstorm', 9, '4c blood', 1);
all.update('hyunkim87', 7, 'mardu pyro');
all.update('swinters', 7, 'abzan midrange');

all.update('unusualthunder', 6, 'gw pod');
all.update('kelvin', 6, 'jund madness');
all.update('purukogi', 6, 'mardu pyro');

all.update('paul pilz', 3, 'artifact combo');
all.update('fry guy', 3, 'gw lifegain combo');
all.update('pika', 3, 'ub tempo');
all.update('sir nikheizen', 3, 'ug merfolk');
all.update('foster', 3, 'unknown');
all.update('nitrox 2x', 3, '4c pod');
all.update('yeti', 3, 'death and taxes');
all.update('tsubame', 0, 'rdw');
all.eventCount;

// 6/18
const june18Dict = parseDecklists(`UnusualThunder - Blue Moon
kelvin - Jund Madness
SpicyNapalm - UW Control
cymbalman2 - Aluren
nitrox 2x - Boros Modular
hyunkim87 - Mardu Pyro
Purukogi - Esper Control
Fry Guy - Rakdos Madness
Sp1derClaw - GW Midrange
Yeti - death and taxes
GenghisPrawn - Jund Pyro
Rick - Esper Kitten`);

const june18Points = [
    ['genghisprawn', [4,0], 1],
    ['yeti', [3,1]],
    ['fry guy', [2,1]],
    ['unusualthunder', [2,1]],
    ['nitrox 2x', [2,1]],
    ['hyunkim87', [1,2]],
    ['cymbalman2', [1,2]],
    ['purukogi', [1,2]],
    ['sp1derclaw', [1,2]],
    ['kelvin', [1,2]],
    ['spicynapalm', [1,2]],
    ['rick', [0,3]]
];

all.processWeek(june18Points, june18Dict, 'jun18');

// 6/25
const june25Dict = parseDecklists(`Harju (Jeskai Slushie)
Axelia (superfriends)
Purukogi (Flash Hulk)
kelvin (Doomsday)
solemnstorm (Jeskies)
Ranseheroica (UW control)
Paul Pilz (Hoof)
yeti (death and taxes)
hyunkim87 (Hoof)`);

const june25Points = [
    ['axelia', [3,0], 1],
    ['kelvin', [2,1]],
    ['harju', [2,1]],
    ['yeti', [2,1]],
    ['solemnstorm', [2,1]],
    ['paul pilz', [1,2]],
    ['purukogi', [1,2]],
    ['Ranseheroica', [1,2]],
    ['hyunkim87', [1,2]],
    ['catmoozi', [0,3]]
];
all.processWeek(june25Points, june25Dict);


// 7/2
const july2Dict = parseDecklists(`hyunkim87 - hoof
Rick - Medium Red
Wilbur - lands midrange
Alex - Death and taxes
Yeti - death and taxes
UnusualThunder - death and taxes
kelvin - Temur Midrange
cymbalman2 - ur Tempo
Chronicle - Eggs
Foster - Grixis Midrange
GenghisPrawn - Jund Pyro
TheRealEMT - 4c Omnath midrange
Tr33vs - lands midrange
Fry Guy - Living End
Pika - Sultai Tempo
solemnstorm - Jeskies`);

const july2Points = [
    ['hyunkim87', [4,0], 1],
    ['solemnstorm', [3,1]],
    ['genghisprawn', [2,1]],
    ['wilbur', [2,1]],
    ['kelvin', [2,1]],
    ['therealemt', [2,1]],
    ['yeti', [2,1]],
    ['UnusualThunder', [1,2]],
    ['foster', [1,2]],
    ['rick', [1,2]],
    ['pika', [1,2]],
    ['Tr33vs', [1,2]],
    ['fry guy', [1,2]],
    ['Chronicle', [1,2]],
    ['alex', [0,3]],
    ['cymbalman2', [0,3]]
];
all.processWeek(july2Points, july2Dict);
// console.log(all.players['solemnstorm']);
// console.log(all.players['solemnstorm']);


// 7/9
const july9Dict = parseDecklists(`hyunkim87 (hoof)
funkyzeit (Mardu pyro)
Fry Guy (UW control)
solemnstorm (RDW)
KannNicks (esper bots)
Ranseheroica (Mardu aggro)
kelvin (UW Control)
GenghisPrawn (blood pyro)
Dentro (hoof)
JadedTrekkie (Breach Storm)`);

const july9Points = [
    ['GenghisPrawn', [4,0], 1],
    ['solemnstorm', [2,1]],
    ['Ranseheroica', [2,1]],
    ['KannNicks', [2,1]],
    ['hyunkim87', [2,1]],
    ['JadedTrekkie', [1,2]],
    ['fry guy', [1,2]],
    ['funkyzeit', [1,2]],
    ['kelvin', [0,3]],
    ['Dentro', [0,3]]
];
// console.log(all.players['kelvin']);
all.processWeek(july9Points, july9Dict);
// console.log(all.players['kelvin']);

// 7/16
const july16Dict = parseDecklists(`Rick - food Chain
kelvin - Breach Storm (no lotus)
GenghisPrawn - blood pyro
pika - UB Tempo
cymbalman2 - Boros dnt
Fry Guy - sultai Midrange
Dentro - Hoof
solemnstorm - 4c Blood
hyunkim87 - hoof
Yeti - Death and taxes
Johann - Angel Stompy`);

const july16Points = [
    ['cymbalman2', [4,0], 1],
    ['kelvin', [3,1]],
    ['solemnstorm', [2,1]],
    ['johann', [2,1]],
    ['genghisprawn', [2,1]],
    ['hyunkim87', [2,1]],
    ['yeti', [1,2]],
    ['rick', [1,2]],
    ['pika', [1,2]],
    ['fry guy', [0,3]],
    ['dentro', [0,3]],
];

// console.log(all.players['solemnstorm']);
all.processWeek(july16Points, july16Dict);
// console.log(all.players['solemnstorm']);

// 7/23
const july23Dict = parseDecklists(`cymbalman2 - Naya Winota
Fry Guy - Goblins
GenghisPrawn - Blood pyro
Harju - Jeskai slushie
hyunkim87 - Hoof
kelvin - Breach Storm (no lotus)
Orchid - ug Sorensen
Paul Pilz - Esper Control
raicune - Seeker Walk
solemnstorm - RDW
WonkyWombat - RDW
Yeti - Green Grixis`);

const july23Points = [
    ['Paul Pilz', [4,0], 1],
    ['GenghisPrawn', [3,1]],
    ['WonkyWombat', [2,1]],
    ['cymbalman2', [2,1]],
    ['Orchid', [2,1]],
    ['solemnstorm', [1,2]],
    ['Harju', [1,2]],
    ['raicune', [1,2]],
    ['Yeti', [1,2]],
    ['kelvin', [1,2]],
    ['Fry Guy', [1,2]],
    ['hyunkim87', [0,3]],
];
all.processWeek(july23Points, july23Dict);

// 7/30
const july30Decks = parseDecklists(`codypsizzle - Blue Moon
Fry Guy - Druids
hyunkim87 - Hoof
Johann - temur tempo
kelvin - Breach Storm (no lotus)
Nitrox 2x - RG Ramp
Paul Pilz - Esper Control
raicune - Seeker Walk
solemnstorm - UR Tempo
SWinters - Mardu Pyro
Yeti - Death and Taxes`);

const july30Players = [
    ['solemnstorm', [3,0], 1],
    ['hyunkim87', [2,1]],
    ['Nitrox 2x', [2,1]],
    ['yeti', [2,1]],
    ['swinters', [2,1]],
    ['raicune', [2,1]],
    ['codypsizzle', [1,2]],
    ['Fry Guy', [1,2]],
    ['paul pilz', [1,2]],
    ['Johann', [1,2]],
    ['kelvin', [1,2]],
];

// console.log(all.players['solemnstorm']);
all.processWeek(july30Players, july30Decks);
// console.log(all.players['solemnstorm']);

// 8/6
const aug6Decks = parseDecklists(`Cyclopes8 - Esper Tempo
Dentro - Hoof
DuckyofDarkness - UR Tempo
Fry Guy - Reanimator
GenghisPrawn - Blood Pyro
JadedTrekkie - Breach Storm
macintose - Lands midrange
Nitrox 2x - GB RecSur
Ranseheroica - Abzan Midrange
solemnstorm - Jeskai Midrange
thomas simmons - 4c omnath control
WonkyWombat - RDW`);

const aug6Players = [
    ['thomas simmons', [3,0], 1],
    ['Nitrox 2x', [2,1]],
    ['DuckyofDarkness', [2,1]],
    ['dentro', [2,1]],
    ['Cyclopes8', [2,1]],
    ['GenghisPrawn', [2,1]],
    ['JadedTrekkie', [1,2]],
    ['solemnstorm', [1,2]],
    ['Fry Guy', [1,2]],
    ['WonkyWombat', [1,2]],
    ['Ranseheroica', [0,3]],
    ['macintose', [0,3]],
];

// console.log(all.players['solemnstorm']);
all.processWeek(aug6Players, aug6Decks);
// console.log(all.players['solemnstorm']);

// 8/13
const aug13Decks = parseDecklists(`calhove - Sultai Midrange
chrono342 - Abzan Aggro
cymbalman2 - Naya Winota
DuckyofDarkness - ur Tempo
Duunko - 4c sans white Midrange
Fry Guy - Jeskai bots
hyunkim87 - Seeker Walk
kelvin - UW bots
KjeldoranMoron - Time Vault
Nitrox 2x - Ruby Storm
solemnstorm - Jeskai bots
UnusualThunder - Blue Moon`);

const aug13Players = [
    ['UnusualThunder', [4,0], 1],
    ['KjeldoranMoron', [3,1]],
    ['cymbalman2', [2,1]],
    ['solemnstorm', [2,1]],
    ['DuckyofDarkness', [2,1]],
    ['Nitrox 2x', [2,1]],
    ['kelvin', [1,2]],
    ['Fry Guy', [1,2]],
    ['hyunkim87', [1,2]],
    ['Duunko', [1,2]],
    ['chrono342', [0,3]],
    ['calhove', [0,3]],
];
// console.log(all.players['hyunkim87']);
all.processWeek(aug13Players, aug13Decks);
// console.log(all.players['hyunkim87']);

// 8/20
const aug20Decks = parseDecklists(`kelvin - UW bots
Rick - Goblins
cymbalman2 - Boros dnt
Purukogi - Esper Kitten
GenghisPrawn - Jund Pyro
hyunkim87 - UB Ninjas
Paul Pilz - Esper Control
calhove - 4c Blood
Cyclopes8 - Rakdos Madness
fry guy - Lunar Storm
UnusualThunder - Lands Midrange
Alex - rakdos midrange
Yeti - Medium Red`);

const aug20Players = [
    ['UnusualThunder', [4,0], 1],
    ['hyunkim87', [3,1]],
    ['kelvin', [2,1]],
    ['cymbalman2', [2,1]],
    ['Rick', [2,1]],
    ['fry guy', [2,1]],
    ['Cyclopes8', [1,2]],
    ['Alex', [1,2]],
    ['calhove', [1,2]],
    ['Yeti', [1,2]],
    ['GenghisPrawn', [1,2]],
    ['Paul Pilz', [1,2]],
    ['Purukogi', [1,2]]
];
// console.log(all.players['yeti']);
all.processWeek(aug20Players, aug20Decks);
// console.log(all.players['yeti']);

// 8/27
const aug27Decks = parseDecklists(`Purukogi (Esper Kitten)
Yeti (death and taxes)
JadedTrekkie (paradox Academy)
hyunkim87 (UB Ninjas)
funkyzeit (Mardu pyro)
Fry Guy (Flash Hulk)
kelvin (4c omnath Control)
Cyclopes8 (rakdos Midrange)
macintose (Pattern Rector)
WonkyWombat (RDW)
Wilbur (Jund midrange)
yeastynobody (Mardu Pyro)`);

const aug27Players = [
    ['JadedTrekkie', [4,0], 1],
    ['kelvin', [3,1]],
    ['hyunkim87', [2,1]],
    ['WonkyWombat', [2,1]],
    ['funkyzeit', [2,1]],
    ['Cyclopes8', [1,1,1]],
    ['Wilbur', [1,1,1]],
    ['Fry Guy', [1,2]],
    ['Yeti', [1,2]],
    ['yeastynobody', [0,3]],
    ['macintose', [1,2]],
];
// console.log(all.players['yeti']);
all.processWeek(aug27Players, aug27Decks);
// console.log(all.players['yeti']);


// 9/3
const sep3Decks = parseDecklists(`cymbalman2 - Naya Winota
Rick - Orzhov clerics
GenghisPrawn - Jund Pyro
kelvin - Seeker Walk
UnusualThunder - 5c bots
Yeti - death and taxes
Cyclopes8 - rakdos Midrange
solemnstorm - Dredge
Killuas - Jeskai Control
Purukogi - Esper Kitten
hyunkim87 - ub Ninjas
Fry Guy - rdw`);

const sep3Players = [
    ['cymbalman2', [3,0], 1],
    ['yeti', [2,1]],
    ['Cyclopes8', [2,1]],
    ['UnusualThunder', [2,1]],
    ['Fry Guy', [2,1]],
    ['kelvin', [2,1]],
    ['solemnstorm', [2,1]],
    ['hyunkim87', [1,2]],
    ['Purukogi', [1,2]],
    ['GenghisPrawn', [1,2]],
    ['rick', [0,3]],
    ['killuas', [0,3]],
];
all.processWeek(sep3Players, sep3Decks);


// 9/10
const sep10Decks = parseDecklists(`UnusualThunder - Blue Moon
raicune - Mardu pyro
Fry Guy - 4c thoracle
Purukogi - Jund anvil
kelvin - UR Tempo
JeTheWeary - Lands midrange
solemnstorm - Domain Zoo
GenghisPrawn - Jund Pyro
Craddical - Medium Red
Johann - temur tempo
WonkyWombat - RDW
funkyzeit - Mardu Aggro
Sodas - temur Control
Hal - Mono-b Aggro
Rick - Goblins`); //combo

const sep10Players = [
    ['raicune', [4,0], 1],
    ['Fry Guy', [3,1]],
    ['purukogi', [2,1]],
    ['UnusualThunder', [2,1]],
    ['WonkyWombat', [2,1]],
    ['solemnstorm', [2,1]],
    ['kelvin', [2,1]],
    ['Craddical', [2,1]],
    ['JeTheWeary', [1,2]],
    ['Johann', [1,2]],
    ['Rick', [1,2]],
    ['GenghisPrawn', [1,2]],
    ['funkyzeit', [1,2]],
    ['Sodas', [1,2]],
    ['Hal', [0,3]],
];

all.processWeek(sep10Players, sep10Decks);

// 9/17
const sep17Decks = parseDecklists(`kelvin - Doomsday
solemnstorm - Seeker Walk
GenghisPrawn - Jund Pyro
Rick - Aluren
cymbalman2 - Naya Winota
WonkyWombat - RDW
Craddical - Medium Green
Purukogi - Jund anvil
meorean - Death and taxes
hyunkim87 - UB Ninjas
Sodas - temur Control
Cyclopes8 - UW Tempo
DuckyofDarkness - UR Tempo
calhove - Sultai Midrange`);

const sep17Players = [
    ['meorean', [4,0], 1],
    ['DuckyofDarkness', [3,1]],
    ['GenghisPrawn', [2,1]],
    ['hyunkim87', [2,1]],
    ['Craddical', [2,1]],
    ['Sodas', [2,1]],
    ['kelvin', [2,1]],
    ['calhove', [1,2]],
    ['cymbalman2', [1,2]],
    ['solemnstorm', [1,2]],
    ['WonkyWombat', [1,2]],
    ['Cyclopes8', [1,2]],
    ['Rick', [0,3]],
    ['Purukogi', [0,3]]
];

all.processWeek(sep17Players, sep17Decks);

// 9/24

const sep24Decks = parseDecklists(`GenghisPrawn - Jund Pyro
Johann - 5c midrange
Purukogi - Jund Anvil
funkyzeit - Mardu Pyro
calhove - Sultai Midrange
solemnstorm - Domain Zoo
Fry Guy - 4c omnath control
kelvin - Goblins
Harju - 4c omnath control
Nelhafi - temur tempo
Electrum - UW Control
hyunkim87 - Hoof
thomas simmons - Seeker Walk
cymbalman2 - boros dnt
Wilbur - Lands Midrange
Rick - Dimir Owling Mine`);

const sep24Players = [
    ['harju', [3,0], 1],
    ['wilbur', [2,0,1]],
    ['kelvin', [2,1]],
    ['nelhafi', [2,1]],
    ['fry guy', [2,1]],
    ['solemnstorm', [2,1]],
    ['electrum', [1,1,1]],
    ['hyunkim87', [1,1,1]],
    ['rick', [1,2]],
    ['cymbalman2', [1,2]],
    ['thomas simmons', [1,2]],
    ['johann', [1,2]],
    ['purukogi', [1,2]],
    ['calhove', [1,2]],
    ['genghisprawn', [1,2]],
    ['funkyzeit', [0,3]],
];

all.processWeek(sep24Players, sep24Decks);

// 10/1
const oct1Decks = parseDecklists(`kelvin (sultai Thoracle)
Shakashaka (Goblins)
Solemnstorm (Blue Moon)
cymbalman2 (Naya Winota)
Yeti (Death and taxes)
Hyunkim87 (Hoof)
Harju (4c omnath Control)
KannNicks (Grixis Midrange)
UnusualThunder (Death and taxes)
raicune (Eggs)
Axelia (superfriends)
GenghisPrawn (Jund pyro)
Johann (5C midrange)
Purukogi (Lands midrange)
Fry Guy (Medium Green)
WonkyWombat (esper Thoracle)
Cyclopes8 (rakdos Midrange)`);

const oct1Players = [
    ['UnusualThunder', [5,0], 1],
    ['Solemnstorm', [3,1]],
    ['cymbalman2', [3,1]],
    ['WonkyWombat', [3,1]],
    ['kelvin', [2,1]],
    ['Cyclopes8', [2,1]],
    ['fry guy', [2,1]],
    ['harju', [2,1]],
    ['KannNicks', [1,2]],
    ['raicune', [1,2]],
    ['Johann', [1,2]],
    ['GenghisPrawn', [1,2]],
    ['Purukogi', [1,2]],
    ['Shakashaka', [1,2]],
    ['Hyunkim87', [1,2]],
    ['Axelia', [1,2]],
    ['yeti', [0,3]],
];

all.processWeek(oct1Players, oct1Decks);

// 10/8
const oct8Decks = parseDecklists(`solemnstorm - Domain Zoo
andrews1022 - Elves
Rick - Enchantress
Dynethor - Enchantress
WonkyWombat - esper thoracle
Sodas - 4c Blood
Cyclopes8 - rakdos Midrange
Sam - orzhov Dnt
GenghisPrawn - jund pyro
meorean - death and taxes
Fry Guy - Grixis Tinker Reanimator
hyunkim87 - grixis welder
calhove - Pattern Rector
kelvin - Doomsday
Yeti - Death and taxes
shakashaka - Mardu Pyro
Johann - Temur tempo
JadedTrekkie - Medium Red`);

const oct8Players = [
    ['johann', [4,0], 1],
    ['WonkyWombat', [3,1]],
    ['Sodas', [2,1]],
    ['solemnstorm', [2,1]],
    ['JadedTrekkie', [2,1]],
    ['Yeti', [2,1]],
    ['GenghisPrawn', [2,1]],
    ['hyunkim87', [2,1]],
    ['kelvin', [2,1]],
    ['fry guy', [1,1,1]],
    ['sam', [1,2]],
    ['rick', [1,2]],
    ['calhove', [1,2]],
    ['shakashaka', [1,2]],
    ['Cyclopes8', [1,2]],
    ['andrews1022', [0,2,1]],
    ['Dynethor', [0,3]],
    ['meorean', [0,3]],
];

all.processWeek(oct8Players, oct8Decks, 'oct8');

// 10/15

const oct15Decks = parseDecklists(`Duunko (Grixis Welder)
Yeti (death and taxes)
Cyclops8 (Abzan Turbo Initiative)
Sodas (4c Blood)
JadedTrekkie (paradox Academy)
calhove (Gruul Midrange)
kelvin (Doomsday)
GenghisPrawn (Jund pyro)
Purukogi (Lands midrange)
johann (Temur tempo)
WonkyWombat (esper thoracle)
SWinters (Mardu pyro)
UnusualThunder 
Mike (temur Tempo)
DuckyofDarkness (sultai thoracle)
Wilbur (Abzan Midrange)
Zenhu (4c Blood)
Nelhafi (temur Tempo)
meorean (death and taxes)`);

const oct15Players = [
    ['johann', [3,0], 1],
    ['nelhafi', [3,1]],
    ['swinters', [2,1]],
    ['meorean', [2,1]],
    ['mike', [2,1]],
    ['wonkywombat', [2,1]],
    ['sodas', [2,1]],
    ['genghisprawn', [2,1]],
    ['duckyofdarkness', [2,1]],
    ['zenhu', [1,1,1]],
    ['unusualthunder', [1,2]],
    ['yeti', [1,2]],
    ['wilbur', [1,2]],
    ['JadedTrekkie', [1,2]],
    ['duunko', [1,2]],
    ['calhove', [1,2]],
    ['purukogi', [1,2]],
    ['cyclopes8', [0,3]],
    ['kelvin', [0,3]],
];
all.processWeek(oct15Players, oct15Decks);

// 10/22
const oct22Decks = parseDecklists(`Yeti - Death and Taxes
Purukogi - grixis welder
hyunkim87 - grixis welder
raicune - Breach Storm
UnusualThunder - Sultai Artifact Combo
kelvin - Temur Midrange
Nelhafi - Temur Tempo
Fry Guy - Medium Black
Mike - Temur Tempo
TherealEMT - Seeker Walk
Cyclopes8 - Abzan Turbo Initiative
meorean - Death and taxes
Paul Pilz - hoof
shakashaka - Blue Moon
that guy - Naya Midrange
Johann - Temur Tempo
GenghisPrawn - Jund Pyro
solemnstorm - Jeskai Midrange
Sodas - Gruul Blitz
Dentro - Hoof
Rick - Aluren
TVsVeryOwn - Pattern Rector
cymbalman2 - Naya winota
Harju - 4c omnath control`);

const oct22Players = [
    ['raicune', [4,0], 1],
    ['therealemt', [4,0]],
    ['kelvin', [3,1]],
    ['that guy', [2,1]],
    ['cymbalman2', [2,1]],
    ['paul pilz', [2,1]],
    ['hyunkim87', [2,1]],
    ['dentro', [2,1]],
    ['meorean', [2,1]],
    ['johann', [2,1]],
    ['rick', [2,1]],
    ['solemnstorm', [1,2]],
    ['tvsveryown', [1,2]],
    ['mike', [1,2]],
    ['purukogi', [1,2]],
    ['unusualthunder', [1,2]],
    ['shakashaka', [1,2]],
    ['nelhafi', [1,2]],
    ['fry guy', [1,2]],
    ['cyclopes8', [1,2]],
    ['genghisprawn', [1,2]],
    ['sodas', [0,3]],
    ['harju', [0,3]],
    ['yeti', [0,3]]
];

// console.log(all.players['raicune']);
all.processWeek(oct22Players, oct22Decks);
// console.log(all.players['yeti']);

const oct29Decks = parseDecklists(`Purukogi (Channel Mirror)
Sodas (Temur Control)
solemnstorm (4C Blood)
Impulse27 (Temur Tempo)
JadedTrekkie (Medium Red)
WonkyWombat (Medium Red)
kelvin (Doomsday)
UnusualThunder (Death and Taxes)
Cyclopes8 (Naya Turbo Initiative)
Fry Guy (4C Pod)
hyunkim87 (grixis welder)
Paul Pilz (4C Omnath control)
Johann (Temur tempo)
Harju (Jeskai Welder)
ehssankamrimi (4C Blood)
Rosa (Jund midrange)
meorean (Death and Taxes)
Violet Eventide (Temur Lands midrange)
TherealEMT (Gruul midrange)`);

const oct29Players = [
    ['Impulse27', [4,0], 1],
    ['solemnstorm', [3,1]],
    ['kelvin', [2,1]],
    ['sodas', [2,1]],
    ['jadedtrekkie', [2,1]],
    ['cyclopes8', [2,1]],
    ['johann', [2,1]],
    ['wonkywombat', [2,1]],
    ['harju', [2,1]],
    ['hyunkim87', [2,1]],
    ['rosa', [1,1,1]],
    ['purukogi', [1,2]],
    ['unusualthunder', [1,2]],
    ['paul pilz', [1,2]],
    ['fry guy', [1,2]],
    ['therealemt', [1,2]],
    ['ehssankamrimi', [1,2]],
    ['violet eventide', [0,2,1]],
    ['meorean', [0,3]],
];

// console.log(all.players['solemnstorm']);
all.processWeek(oct29Players, oct29Decks);
// console.log(all.players['meorean']);

const nov5Decks = parseDecklists(`Impulse27 - Blue Moon
Cyclopes8 - Naya Turbo Initiative
Rick - 4c Aristocrats
kelvin - Bant Oath Control
WonkyWombat - Esper Thoracle
Purukogi - grixis welder
Johann - Temur tempo
solemnstorm - Temur Midrange
hyunkim87 - Hoof
Fry Guy - 4c Pod
JadedTrekkie - Breach Storm
sir nikheizen - Mardu midrange`);

const nov5Players = [
    ['impulse27', [4,0], 1],
    ['Cyclopes8', [3,1]],
    ['Rick', [2,1]],
    ['kelvin', [2,1]],
    ['WonkyWombat', [2,1]],
    ['Purukogi', [1,2]],
    ['Johann', [1,2]],
    ['solemnstorm', [1,2]],
    ['hyunkim87', [1,2]],
    ['Fry Guy', [1,2]],
    ['JadedTrekkie', [1,2]],
    ['sir nikheizen', [0,3]],
];

// console.log(all.players['kelvin']);
all.processWeek(nov5Players, nov5Decks);
// console.log(all.players['rick']);

const nov12Decks = parseDecklists(`Impulse27 - Breach Storm
WonkyWombat - Esper thOracle
solemnstorm - 4c Blood
Fry Guy - Goblins
Cyclopes8 - Naya Turbo Initiative
Harju - Jeskai Welder
Johann - Abzan Lands
Purukogi - Flash Hulk
cymbalman2 - Naya Winota
hyunkim87 - Hoof
Rick - dirty kitty
UnusualThunder - Death and Taxes
Robin Sorensen - 4c Control`);

const nov12Players = [
    ['Impulse27', [4,0], 1],
    ['WonkyWombat', [3,1]],
    ['solemnstorm', [2,1]],
    ['fry guy', [2,1]],
    ['Cyclopes8', [2,1]],
    ['Harju', [2,1]],
    ['Johann', [2,1]],
    ['Purukogi', [1,2]],
    ['cymbalman2', [1,2]],
    ['hyunkim87', [1,2]],
    ['Rick', [1,2]],
    ['UnusualThunder', [0,3]],
    ['Robin Sorensen', [0,3]],
];

// console.log(all.players['solemnstorm']);
all.processWeek(nov12Players, nov12Decks);
// console.log(all.players['robin sorensen']);

const nov19Decks = parseDecklists(`Pat Berdusco (seeker walk)
Impulse27 (Bant Tinker Prison)
Cymbalman2 (Naya Winota)
Vaaste (death and taxes)
Sly (Jund Midrange)
solemnstorm (UW Soldiers)
Harju (Esper Welder)
Purukogi (flash Hulk)
WonkyWombat - breach Storm (no lotus)
Johann (Sultai Battlebots)
Cyclopes8 (4C Blood)
Hyunkim87 (seeker walk)
Lobo (Pattern Rector)
Tr33vs (Jund Aggro)`);

const nov19Players = [
    ['Cymbalman2', [4,0], 1],
    ['Hyunkim87', [3,1]],
    ['pat berdusco', [2,1]],
    ['sly', [2,1]],
    ['cyclopes8', [2,1]],
    ['harju', [2,1]],
    ['wonkywombat', [2,1]],
    ['vaaste', [1,2]],
    ['solemnstorm', [1,2]],
    ['impulse27', [1,2]],
    ['johann', [1,2]],
    ['lobo', [1,2]],
    ['tr33vs', [0,3]],
    ['purukogi', [0,3]]
];

// console.log(all.players['cymbalman2']);
all.processWeek(nov19Players, nov19Decks);
// console.log(all.players['cymbalman2']);

const nov26Decks = parseDecklists(`
solemnstorm (death and taxes)
Johann (Temur tempo)
WonkyWombat (rdw)
Impulse27 (temur midrange)
Wilbur (4C Blood)
hyunkim87 (UB Ninjas)
Purukogi (Grixis Welder)
GenghisPrawn (Jund pyro)
Paul Pilz (Time Vault)
Cyclopes8 (rakdos Midrange)
live9901 (4c omnath control)
kelvin (death and taxes)
Harju (Jeskai control)
Andrew and Drew (5C bots)
Vaaste (Jeskai Midrange)
Axelia (Superfriends)
TherealEMT (Jeskai Control)
Jomse (Esper Tempo)`);

const nov26Players = [
    ['impulse27', [4,0], 1],
    ['johann', [3,1]],
    ['live9901', [2,1]],
    ['wonkywombat', [2,1]],
    ['solemnstorm', [2,1]],
    ['wilbur', [2,1]],
    ['paul pilz', [2,1]],
    ['hyunkim87', [2,1]],
    ['genghisprawn', [2,1]],
    ['andrew and drew', [1,2]],
    ['kelvin', [1,2]],
    ['cyclopes8', [1,2]],
    ['therealemt', [1,2]],
    ['purukogi', [1,2]],
    ['axelia', [1,2]],
    ['harju', [1,2]],
    ['jomse', [0,3]],
    ['vaaste', [0,3]]
];

// console.log(all.players['cymbalman2']);
all.processWeek(nov26Players, nov26Decks);
// console.log(all.players['solemnstorm']);

const dec3Decks = parseDecklists(`
kelvin (Death and Taxes)
Fry Guy (4C Thoracle) 
Chrono342 (Abzan midrange)
GenghisPrawn (Jund Pyro)
cymbalman2 (Goblins)
Vaaste (Death and Taxes) 
wonkywombat (Esper thoracle)
yeti (Death and Taxes)
solemnstorm (Esper Bots)
sam (Mono-B Aggro)
Cyclopes8 (Tin Fins)
Rick (Landstorm)
Impulse27 (4c sans white midrange)
Purukogi (Grixis Welder)
JadedTrekkie (paradox Academy)
hyunkim87 (UB Ninjas)
`);

const dec3Players = [
    ['impulse27', [4,0], 1],
    ['kelvin', [3,1]],
    ['purukogi', [2,1]],
    ['fry guy', [2,1]],
    ['solemnstorm', [2,1]],
    ['jadedtrekkie', [2,1]],
    ['cymbalman2', [2,1]],
    ['wonkywombat', [2,1]],
    ['hyunkim87', [1,2]],
    ['yeti', [1,2]],
    ['vaaste', [1,2]],
    ['sam', [1,2]],
    ['cyclopes8', [1,2]],
    ['chrono342', [1,2]],
    ['genghisprawn', [0,3]],
    ['rick', [0,3]]
];

// console.log(all.players['kelvin']);
all.processWeek(dec3Players, dec3Decks);
// console.log(all.players['kelvin']);

const dec10Decks = parseDecklists(`
hyunkim87 (Grixis Welder)
Impulse27 (4c sans white midrange)
Purukogi (Grixis Welder)
WonkyWombat (rdw)
Harju (Spearmint Welder Slushie)
solemnstorm (Death and taxes)
Johann (Naya Pod)
Vaaste (Jeskai Midrange)
SWinters (Mardu Pyro)
Cyclopes8 (tin fins)
Fry Guy (Breach Dragonstorm)
GenghisPrawn (Jund pyro)`);

const dec10Players = [
    ['Impulse27', [4,0], 1],
    ['WonkyWombat', [3,1]],
    ['hyunkim87', [2,1]],
    ['Harju', [2,1]],
    ['Johann', [2,1]],
    ['Purukogi', [1,2]],
    ['GenghisPrawn', [1,2]],
    ['solemnstorm', [1,2]],
    ['Vaaste', [1,2]],
    ['SWinters', [1,2]],
    ['Cyclopes8', [0,3]],
    ['Fry Guy', [0,3]]
];

all.processWeek(dec10Players, dec10Decks);
// console.log(all.players['fry guy']);

const dec17Decks = parseDecklists(`
Impulse27 - 4c sans white midrange
GenghisPrawn - Jund pyro
kelvin - Boros Tokens
Vaaste - Sultai Lands
hyunkim87 - Hoof
calhove - Naya Pod
Purukogi - Grixis Welder
Harju - temur Tempo
WonkyWombat - breach storm (no lotus)
Cyclopes8 - Naya Turbo Initiative
solemnstorm - 4C Aristocrats
funkyzeit - Medium Boros
Fry Guy - 4c pod
`);

const dec17Players = [
    ['Impulse27', [4,0], 1],
    ['WonkyWombat', [3,1]],
    ['Cyclopes8', [2,1]],
    ['harju', [2,1]],
    ['calhove', [2,1]],
    ['solemnstorm', [2,1]],
    ['hyunkim87', [1,2]],
    ['funkyzeit', [1,2]],
    ['purukogi', [1,2]],
    ['GenghisPrawn', [1,2]],
    ['fry guy', [1,2]],
    ['kelvin', [1,2]],
    ['vaaste', [1,2]]
];

// console.log(all.players['kelvin']);
all.processWeek(dec17Players, dec17Decks);
// console.log(all.players['vaaste'.toLowerCase()]);

const dec24Decks = parseDecklists(`
solemnstorm - 4c Blood
genghisPrawn - Jund Pyro
kelvin - 4c omnath control
calhove - Naya Pod
Yeti - death and Taxes
SpicyNapalam - Jund Madness
Harju - Jeskai Painter
Fry Guy - boros Equipment
Cyclopes8 - rakdos Midrange
hyunkim87 - Grixis welder
Kaya - bant Control
Rick - Enchantress
`);

const dec24Players = [
    ['solemnstorm', [3,0], 1],
    ['genghisprawn', [2,0,1]],
    ['kelvin', [2,0,1]],
    ['calhove', [2,1]],
    ['yeti', [2,1]],
    ['spicynapalm', [1,2]],
    ['harju', [1,2]],
    ['fry guy', [1,2]],
    ['cyclopes8', [1,2]],
    ['hyunkim87', [1,2]],
    ['kaya', [1,2]],
    ['rick', [0,3]]
];

all.processWeek(dec24Players, dec24Decks);
// console.log(all.players['solemnstorm'.toLowerCase()]);

const dec31Decks = parseDecklists(`
Cyclopes8 - 4c blood
Fry Guy - UW Control
Impulse27 - 4c sans white midrange
calhove - Pattern Rector
hyunkim87 - Seeker Walk
kelvin - 4c omnath control
solemnstorm - Domain Zoo
GenghisPrawn - Jund pyro
`);

const dec31Players = [
    ['impulse27', [3,0], 1],
    ['fry guy', [2,1]],
    ['solemnstorm', [2,1]],
    ['calhove', [2,1]],
    ['hyunkim87', [1,2]],
    ['kelvin', [1,2]],
    ['genghisprawn', [1,2]],
    ['cyclopes8', [0,3]]
];

all.processWeek(dec31Players, dec31Decks);
// console.log(all.players['kelvin'.toLowerCase()]);
console.log(all.players['rick'].decks);

const allDecks = Object.keys(all.decks).filter((name) => {
    return Array.isArray(name.match(/4c blood/g))
}).sort();
allDecks.forEach((deck) => {
    // console.log(all.decks[deck]);
});


// const wubrgCsv = formatCSV(all, 'wubrg', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], null, null, true);


// console.log(wubrgCsv);
