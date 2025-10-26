const { Series, parseDecklists, pairingsToStandings, formatCSV, formatEventMisc, formatMatchups, formatEventDecks, mergeCSVHorizontally, parseReporting, makeComparator, writeAll } = require('./eventData.js');

const webcam = new Series();

const jan11Pairings = [
  [ [ 'eagleandwolf', 'hyunkim87' ], [ 2, 0 ] ],
  [ [ 'purukogi', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'some user zoe' ], [ 2, 1 ] ],
  [ [ 'zenteca', 'lahdoja' ],[ 2, 0 ] ],
  [ [ 'raicune', 'cat_island' ], [ 2, 0 ] ],
  [ [ 'cowsmoogo', 'impulse27' ], [ 2, 0 ] ],
  [ [ 'harju', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'jwyatt', 'minstrel' ], [ 1, 1 ] ],
  [ [ 'demondrinkingtea', 'hurrex' ], [ 2, 0 ] ],

  [ [ 'cyclopes8', 'demondrinkingtea' ], [ 2, 0 ] ],
  [ [ 'raicune', 'cowsmoogo' ], [ 2, 0 ] ],
  [ [ 'harju', 'zenteca' ], [ 2, 1 ] ],
  [ [ 'purukogi', 'eagleandwolf' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'jwyatt' ], [ 2, 1 ] ],
  [ [ 'hyunkim87', 'minstrel' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'some user zoe' ], [ 2, 1 ] ],
  [ [ 'cat_island', 'hurrex' ], [ 2, 0 ] ],
  [ [ 'lahdoja', 'BYE' ],[ 2, 0 ] ],

  [ [ 'raicune', 'purukogi' ], [ 2, 0 ] ],
  [ [ 'harju', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'cat_island', 'demondrinkingtea' ], [ 2, 0 ] ],
  [ [ 'minstrel', 'eagleandwolf' ], [ 1, 1 ] ],
  [ [ 'hyunkim87', 'zenteca' ], [ 2, 0 ] ],

  [ [ 'raicune', 'harju' ], [ 2, 0 ] ]
];

const jan11Decks = parseDecklists(`raicune (Jeskai)
Harju (Jeskai)
Purukogi (Esper Citadel Storm)
Cat_Island (Redless Vault)
Cyclopes8 (Bant Academy Ramp)
GenghisPrawn (Grixis Green Control)
hyunkim87 (Temur Time-Shift)
EagleAndWolf (Temur Black Scapeshift)
Zenteca (Naya Counters)
cowsmoogo (Rakdos Aggro)
Parrot Robar (Flash Hulk)
demondrinkingtea (UW Control)
Lahdoja (Grixis Midrange)
Minstrel (Grixis Control)
Jwyatt (Jeskai)
some user zoe (Broodlord Reanimator Breach Storm)
Hurrex (Bean Machines)
Impulse (Jeskai)`);

webcam.processWeek(jan11Decks, 'jan11', jan11Pairings);


const jan18Pairings = [
  [ [ 'genghisprawn', 'demondrinkingtea' ], [ 2, 0 ] ],
  [ [ 'cymbalman', 'cyclopes8' ], [ 2, 0 ] ],
  [ [ 'cat_island', 'jwyatt' ], [ 2, 1 ] ],
  [ [ 'cowsmoogo', 'hurrex' ], [ 2, 0 ] ],
  [ [ 'minstrel', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'parrot robar', 'purukogi' ], [ 2, 0 ] ],
  [ [ 'jadedtrekkie', 'mrpipes' ], [ 2, 1 ] ],

  [ [ 'cowsmoogo', 'minstrel' ], [ 2, 0 ] ],
  [ [ 'parrot robar', 'cymbalman' ], [ 2, 1 ] ],
  [ [ 'jadedtrekkie', 'cat_island' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'hurrex' ], [ 2, 1 ] ],
  [ [ 'demondrinkingtea', 'purukogi' ], [ 2, 0 ] ],

  [ [ 'parrot robar', 'jadedtrekkie' ], [ 2, 0 ] ],
  [ [ 'cowsmoogo', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'cymbalman', 'demondrinkingtea' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'cat_island' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'minstrel' ], [ 2, 1 ] ],
  [ [ 'purukogi', 'hurrex' ], [ 2, 1 ] ],

  [ [ 'parrot robar', 'cowsmoogo' ], [ 2, 0 ] ],
];

const jan18Decks = parseDecklists(`
Parrot Robar (Flash Hulk)
cowsmoogo (Rakdos Aggro)
cymbalman (Esper Green Nadu Control)
JadedTrekkie (Paradox Academy)
Cyclopes8 (Bant Academy Ramp)
GenghisPrawn (Esper Red Control)
Minstrel (5c Will Storm)
some user zoe (Turbo Blood)
Cat_Island (Redless Vault)
demondrinkingtea (UW Control)
Purukogi (Redless Naduwalk)
MrPipes (5c Artifact Combo)
Hurrex (Mono Red Artifact Aggro)
Jwyatt (Jeskai Scamblade)
`);

webcam.processWeek(jan18Decks, 'jan18', jan18Pairings);


const jan25Pairings = [
  [ [ 'cyclopes8', 'minstrel' ], [ 2, 0 ] ],
  [ [ 'harju', 'kamal' ], [ 2, 0 ] ],
  [ [ 'regorn', 'demondrinkingtea' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'raicune', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'anticipate27', 'BYE' ], [ 2, 0] ],

  [ [ 'regorn', 'anticipate27' ], [ 2, 0 ] ],
  [ [ 'harju', 'cyclopes8' ], [ 2, 0 ] ],
  [ [ 'raicune', 'some user zoe' ], [ 2, 1 ] ],
  [ [ 'demondrinkingtea', 'kamal' ], [ 1, 0 ] ],
  [ [ 'genghisprawn', 'minstrel' ], [ 2, 0 ] ],

  [ [ 'raicune', 'harju' ], [ 2, 0 ] ],
  [ [ 'regorn', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'anticipate27', 'demondrinkingtea' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'kamal', 'BYE' ], [ 2, 0 ] ],

  [ [ 'regorn', 'raicune' ], [ 2, 1 ] ],
];

const jan25Decks = parseDecklists(`
Regorn (Redless Time Vault)
raicune (Turbo Citadel)
Harju (Zoomer Jund)
Anticipate27 (Turbo Citadel)
Cyclopes8 (Abzan Tokens Hoof)
some user zoe (Turbo Blood)
demondrinkingtea (UW Control)
GenghisPrawn (Esper Red Control)
Kamal (Jeskai Welder)
Parrot Robar (BUG Lowrange)
Minstrel (Will Storm)
`);

webcam.processWeek(jan25Decks, 'jan25', jan25Pairings);


const feb1Pairings = [
  [ [ 'cyclopes8', 'purukogi' ], [ 2, 1 ] ],
  [ [ 'regorn', 'bbvet' ], [ 2, 0 ] ],
  [ [ 'therealemt', 'george' ], [ 2, 0 ] ],
  [ [ 'duckyofdarkness', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'demondrinkingtea', 'minstrel' ], [ 1, 1 ] ],
  [ [ 'nikheizen', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'therealemt', 'duckyofdarkness' ], [ 2, 0 ] ],
  [ [ 'regorn', 'nikheizen' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'minstrel' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'demondrinkingtea' ], [ 2, 1 ] ],
  [ [ 'george', 'bbvet' ], [ 2, 0 ] ],
  [ [ 'purukogi', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'cyclopes8', 'therealemt' ], [ 2, 0 ] ],
  [ [ 'regorn', 'duckyofdarkness' ], [ 2, 1 ] ],
  [ [ 'george', 'nikheizen' ], [ 2, 0 ] ],
  [ [ 'purukogi', 'some user zoe' ], [ 2, 0 ] ],

  [ [ 'regorn', 'cyclopes8' ], [ 2, 1 ] ]
];

const feb1Decks = parseDecklists(`
Cyclopes8 (Abzan Brewmaster Combo)
Regorn (Bant Black Time Vault)
TherealEMT (4c Oath Control)
Purukogi (Redless Naduwalk)
George (Blackless Academy Combo)
Minstrel (BUG Cradle Control)
demondrinkingtea (UW Control)
nikheizen (rw aggro)
DuckyofDarkness (Jeskai Black Control)
some user zoe (Turbo Blood)
bbvet (Naduwalk)`);

webcam.processWeek(feb1Decks, 'feb1', feb1Pairings);


const feb8Pairings = [
  [ [ 'jwyatt', 'zenteca' ], [ 2, 0 ] ],
  [ [ 'unusualthunder', 'eking' ], [ 2, 0 ] ],
  [ [ 'dentro', 'some user zoe' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'forrend' ], [ 1, 1 ] ],
  [ [ 'tyrix', 'minstrel' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'purukogi' ], [ 2, 0 ] ],
  [ [ 'demondrinkingtea', 'aleek the freak' ], [ 2, 0 ] ],
  [ [ 'regorn', 'nathan lipetz' ], [ 2, 0 ] ],

  [ [ 'jwyatt', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'tyrix', 'dentro' ], [ 2, 1 ] ],
  [ [ 'demondrinkingtea', 'unusualthunder' ], [ 2, 1 ] ],
  [ [ 'forrend', 'regorn' ], [ 0, 2 ] ],
  [ [ 'cyclopes8', 'aleek the freak' ], [ 2, 0 ] ],
  [ [ 'purukogi', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'nathan lipetz', 'eking' ], [ 2, 0 ] ],
  [ [ 'minstrel', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'demondrinkingtea', 'regorn' ], [ 2, 1 ] ],
  [ [ 'jwyatt', 'tyrix' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'nathan lipetz' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'dentro' ], [ 2, 1 ] ],
  [ [ 'minstrel', 'unusualthunder' ], [ 2, 1 ] ],
  [ [ 'forrend', 'purukogi' ], [ 2, 0 ] ],
  [ [ 'aleek the freak', 'eking' ], [ 2, 1 ] ],
  
  [ [ 'demondrinkingtea', 'jwyatt' ], [ 2, 0 ] ]
];

const feb8Decks = parseDecklists(`
JWyatt (Jeskai Firecracker)
demondrinkingtea (UW Control)
Cyclopes8 (Esper Green Seekerchant)
Tyrix (RWb Bots)
Regorn (Bant Black Vault)
kelvin (Lotus Breach)
Minstrel (BUG Delirium Reanimator)
Forrend (Redless Oath Control)
Aleek the Freak (BUG Reanimator)
UnusualThunder (Death and Taxes)
Nathan Lipetz (Jeskai)
Dentro (Redless Nadu)
Purukogi (Redless Naduwalk)
Zenteca (unknown)
some user zoe (Turbo Blood)
EKing (unknown)
`);

webcam.processWeek(feb8Decks, 'feb8', feb8Pairings);


const feb15Pairings = [
  [ [ 'axelia', 'rixy' ], [ 2, 1 ] ],
  [ [ 'nopre', 'aleek the freak' ], [ 1, 1 ] ],   
  [ [ 'goyf', 'hyunkim87' ], [ 1, 2 ] ],
  [ [ 'jwyatt', 'minstrel' ], [ 1, 1 ] ],
  [ [ 'some user zoe', 'cyclopes8' ], [ 2, 1 ] ],   
  [ [ 'regorn', 'demondrinkingtea' ], [ 2, 0 ] ],   
  [ [ 'lance larsen', 'nathan lipetz' ], [ 2, 1 ] ],       
  [ [ 'thunder_sharts', 'kelvin' ], [ 2, 0 ] ],     
  [ [ 'cowsmoogo', 'genghisprawn' ], [ 2, 0 ] ],    

  [ [ 'cowsmoogo', 'hyunkim87' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'lance larsen' ], [ 2, 0 ] ],
  [ [ 'thunder_sharts', 'axelia' ], [ 2, 0 ] ],     
  [ [ 'regorn', 'aleek the freak' ], [ 2, 0 ] ],    
  [ [ 'jwyatt', 'nopre' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'minstrel' ], [ 2, 1 ] ],        
  [ [ 'kelvin', 'genghisprawn' ], [ 2, 0 ] ],       
  [ [ 'goyf', 'rixy' ], [ 2, 0 ] ],
  [ [ 'nathan lipetz', 'demondrinkingtea' ], [ 2, 1 ] ],
  
  [ [ 'some user zoe', 'cowsmoogo' ], [ 2, 1 ] ],
  [ [ 'regorn', 'thunder_sharts' ], [ 2, 0 ] ],
  [ [ 'hyunkim87', 'jwyatt' ], [ 0, 2 ] ],
  [ [ 'cyclopes8', 'axelia' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'goyf' ], [ 2, 0 ] ],
  [ [ 'nathan lipetz', 'aleek the freak' ], [ 1, 1 ] ],
  [ [ 'nopre', 'demondrinkingtea' ], [ 2, 0 ] ],
  [ [ 'rixy', 'BYE' ], [ 2, 0 ] ],

  [ [ 'regorn', 'some user zoe' ], [ 2, 0 ] ],
];

const feb15Decks = parseDecklists(`
some user zoe (Esper Stonewalk)
Regorn (Bant Time Vault)
JWyatt (Jeskai Firecracker)
thunder_sharts (Esper Control)
cowsmoogo (Rakdos Aggro)
Cyclopes8 (BUG Natural Order)
kelvin (Lotus Breach)
Nopre (Redless Nadu Kiki-Walk)
Nathan Lipetz (Jeskai)
Lance Larsen (Czech)
hyunkim87 (Temur Time-Shift)
Axelia (Axelia Pile)
Goyf (Golgari Monsters)
RixY (Grixis Welder)
Aleek the Freak (Bant Nadu Vault)
Minstrel (BUG Delirium Reanimator)
GenghisPrawn (Esper Red)
demondrinkingtea (UW Control)
`);

webcam.processWeek(feb15Decks, 'feb15', feb15Pairings);


const feb22Pairings = [
  [ [ 'lance larsen', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'kamal' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'p0glet' ], [ 2, 0 ] ],
  [ [ 'minstrel', 'nathan lipetz' ], [ 2, 0 ] ],
  [ [ 'bbvet', 'harju' ], [ 2, 1 ] ],
  [ [ 'regorn', 'nopre' ], [ 2, 0 ] ],
  
  [ [ 'regorn', 'lance larsen' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'minstrel' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'bbvet' ], [ 2, 1 ] ],
  [ [ 'harju', 'p0glet' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'kamal' ], [ 2, 0 ] ],
  [[ 'nathan lipetz', 'nopre' ],[ 2, 1 ]],

  [ [ 'regorn', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'cyclopes8' ], [ 2, 0 ] ],
  [ [ 'minstrel', 'lance larsen' ], [ 2, 0 ] ],
  [ [ 'nathan lipetz', 'bbvet' ], [ 2, 1 ] ],
  [ [ 'harju', 'nopre' ], [ 2, 0 ] ],
  [ [ 'kamal', 'p0glet' ], [ 2, 0 ] ],

  [ [ 'regorn', 'some user zoe' ], [ 2, 1 ] ]
];

const feb22Decks = parseDecklists(`
some user zoe (Esper Stonewalk)
Regorn (Bant Time Vault)
Minstrel (BUG Will Storm Doomsday)
kelvin (Will Storm)
Nathan Lipetz (Jeskai)
Harju (Esper Turbo Citadel)
bbvet (Blue Moon)
Lance Larsen (Lotus Breach Storm)
Cyclopes8 (Dark Gruul Midrange)
Kamal (Jeskai Welder)
Nopre (Redless Nadu-Walk)
p0glet (Grixis Artifact Beatdown)
`);

webcam.processWeek(feb22Decks, 'feb22', feb22Pairings);


const march1Pairings = [
  [ [ 'cyclopes8', 'tr33vs' ], [ 2, 1 ] ],
  [ [ 'regorn', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'dentro', 'p0glet' ], [ 2, 0 ] ],
  [ [ 'therealemt', 'nikheizen' ], [ 1, 1 ] ],
  [ [ 'nopre', 'calhove' ], [ 2, 0 ] ],
  [ [ 'rixy', 'vaaste' ], [ 2, 0 ] ],
  [ [ 'yeti', 'forrend' ], [ 2, 0 ] ],

  [ [ 'dentro', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'regorn', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'yeti', 'nopre' ], [ 2, 0 ] ],
  [ [ 'rixy', 'nikheizen' ], [ 2, 0 ] ],
  [ [ 'therealemt', 'calhove' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'forrend' ], [ 2, 1 ] ],
  [ [ 'p0glet', 'tr33vs' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'BYE' ], [ 2, 0 ] ],

  [ [ 'yeti', 'dentro' ], [ 2, 1 ] ],
  [ [ 'rixy', 'regorn' ], [ 0, 2 ] ],
  [ [ 'cyclopes8', 'therealemt' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'nopre' ], [ 2, 1 ] ],
  [ [ 'p0glet', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'nikheizen', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'calhove', 'forrend' ], [ 2, 0 ] ],

  [ [ 'yeti', 'regorn' ], [ 0, 2 ] ],
];

const march1Decks = parseDecklists(`
Regorn (Bant Time Vault)
Yeti (Boros Death and Taxes)
Dentro (Mono Red Goblins)
some user zoe (Esper Stonewalk)
RixY (Czech)
Cyclopes8 (Abzan Lowrange)
p0glet (Paradox Academy)
nikheizen (Esper Threeanimator)
TherealEMT (Esper Red)
Nopre (Redless Naduwalk)
GenghisPrawn (Esper Red)
kelvin (Lotus Will Storm)
calhove3141 (Sans Red Control)
Tr33vs (Mono White Death and Taxes)
Vaaste (Esper Blink)
Forrend (Abzan Tokens)`);

webcam.processWeek(march1Decks, 'mar1', march1Pairings);


const march8Pairings = [
  [ [ 'kelvin', 'nopre' ], [ 2, 0 ] ],
  [ [ 'calhove', 'regorn' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'minstrel' ], [ 2, 0 ] ],
  [ [ 'george', 'v' ], [ 1, 2 ] ],
  [ [ 'cyclopes8', 'forrend' ], [ 2, 0 ] ],
  [ [ 'harju', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'harju', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'v', 'calhove' ], [ 2, 1 ] ],
  [ [ 'george', 'forrend' ], [ 2, 1 ] ],
  [ [ 'nopre', 'minstrel' ], [ 2, 0 ] ],
  
  [ [ 'harju', 'v' ], [ 2, 0 ] ],
  [ [ 'george', 'some user zoe' ], [ 2, 1 ] ],
  [ [ 'calhove', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'nopre' ], [ 2, 0 ] ],
  [ [ 'forrend', 'BYE' ], [ 2, 0 ] ],
];

const march8Decks = parseDecklists(`
Harju (Turbo Citadel)
V (BUGw Nadu Seeker Reanimator)
Cyclopes8 (Simic Slaw)
George (Paradox Academy)
calhove3141 (Abzan Hatebears)
some user zoe (Esper Stonewalk)
Forrend (Abzan Tokens)
kelvin (Turbo Citadel)
Nopre (Abzan Blue Nadu)
Regorn (Bant Time Vault)
Minstrel (BUG Control)
`);

webcam.processWeek(march8Decks, 'mar8', march8Pairings);

const march15Pairings = [
  [ [ 'regorn', 'forrend' ], [ 2, 1 ] ],
  [ [ 'goyf', 'jwyatt' ], [ 2, 1 ] ],
  [ [ 'jdizl', 'bbvet' ], [ 2, 0 ] ],
  [ [ 'calhove', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'nathan lipetz', 'johann' ], [ 2, 0 ] ],
  [ [ 'salt boi', 'spacepatrice' ], [ 2, 0 ] ],
  [ [ 'cymbalman', 'mrpipes' ], [ 2, 0 ] ],
  [ [ 'raicune', 'eagleandwolf' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'some user zoe' ], [ 2, 0 ] ],

  [ [ 'cymbalman', 'salt boi' ], [ 2, 0 ] ],
  [ [ 'calhove', 'goyf' ], [ 2, 1 ] ],
  [[ 'nathan lipetz', 'jdizl' ],[ 2, 1 ]],
  [ [ 'regorn', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'jwyatt', 'spacepatrice' ], [ 2, 0 ] ],
  [ [ 'bbvet', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'eagleandwolf', 'mrpipes' ], [ 2, 0 ] ],
  [[ 'some user zoe', 'johann' ],[ 2, 0 ]],
  [[ 'forrend', 'BYE' ],[ 2, 0 ]],

  [ [ 'nathan lipetz', 'calhove' ], [ 2, 0 ] ],
  [ [ 'regorn', 'cymbalman' ], [ 2, 0 ] ],
  [ [ 'goyf', 'eagleandwolf' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'bbvet' ], [ 2, 1 ] ],
  [ [ 'salt boi', 'forrend' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'jdizl' ], [ 2, 0 ] ],
  [ [ 'johann', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'spacepatrice', 'BYE' ], [ 2, 0 ] ],

  [ [ 'regorn', 'nathan lipetz' ], [ 2, 0 ] ],
];

const march15Decks = parseDecklists(`
Regorn (Bant Vault)
Nathan Lipetz (Jeskai)
cymbalman (Esper Green Nadu Control)
Cyclopes8 (Simic Slaw)
calhove3141 (Mardu Midrange)
Goyf (Golgari Monsters)
some user zoe (Broodlord Reanimator Storm)
salt boi (Jund Midrange)
Forrend (Abzan Tokens)
EagleAndWolf (Abzan Creature Vault)
jDIZL (Rakdos Goblins)
Johann (Turbo Blood)
Spacepatrice (5c Paradox Academy)
JWyatt (Grixis)
bbvet (Blue Moon)
raicune (Jeskai)
MrPipes (5c Hybrid Circus)
kelvin (BW Necro) 
`);

webcam.processWeek(march15Decks, 'mar15', march15Pairings);


const march22Pairings = [
  [ [ 'v', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'unusualthunder', 'goyf' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'kyle' ], [ 2, 0 ] ],
  [ [ 'forrend', 'tyrix' ], [ 2, 1 ] ],
  [ [ 'nathan lipetz', 'bbvet' ], [ 2, 0 ] ],
  [ [ 'rixy', 'nogooddecisions' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'cyclopes8' ], [ 2, 0 ] ],
  [ [ 'spacepatrice', 'zavenkil' ], [ 0, 2 ] ],
  [ [ 'calhove', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'calhove', 'forrend' ], [ 2, 1 ] ],
  [ [ 'rixy', 'v' ], [ 2, 1 ] ],
  [ [ 'unusualthunder', 'nathan lipetz' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'zavenkil' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'bbvet' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'spacepatrice' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'kyle' ], [ 2, 0 ] ],
  [ [ 'tyrix', 'goyf' ], [ 2, 0 ] ],
  [ [ 'nogooddecisions', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'some user zoe', 'calhove' ], [ 2, 1 ] ],
  [ [ 'rixy', 'unusualthunder' ], [ 1, 2 ] ],
  [ [ 'zavenkil', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'nathan lipetz', 'v' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'forrend' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'tyrix' ], [ 2, 1 ] ],
  [ [ 'bbvet', 'spacepatrice' ], [ 2, 0 ] ],
  [ [ 'kyle', 'goyf' ], [ 2, 0 ] ],

  [ [ 'some user zoe', 'unusualthunder' ], [ 2, 1 ] ]
];

const march22Decks = parseDecklists(`
some user zoe (Al Ghoti)
UnusualThunder (Blue Moon)
Zavenkil (Mardu Initiative)
calhove (Grixis Discard)
RixY (Cradlehoof)
Nathan Lipetz (Jeskai)
Cyclopes8 (Esper Blink)
kelvin (Golgari Cradle Control)
GenghisPrawn (Esper Red Control)
V (4c Naduwalk)
nogooddecisions (Jund Delirium)
Forrend (Abzan Tokens)
bbvet (Naduwalk)
Kyle (Abzan Nightmare)
Tyrix (Paradox Academy)
Goyf (BG Monsters)
Spacepatrice (5c Paradoxical Outcome)`);

webcam.processWeek(march22Decks, 'mar22', march22Pairings);


const april5Pairings = [
  [ [ 'parrot robar', 'nopre' ], [ 2, 0 ] ],
  [ [ 'cowsmoogo', 'purukogi' ], [ 1, 1 ] ],
  [ [ 'kelvin', 'cpt_camel' ], [ 2, 1 ] ],
  [ [ 'calhove', 'strahboliandcheese' ], [ 2, 0 ] ],
  [ [ 'minstrel', 'forrend' ], [ 2, 0 ] ],
  [ [ 'v', 'bbvet' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'genghisprawn' ], [ 2, 1 ] ],

  [ [ 'some user zoe', 'minstrel' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'calhove' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'v' ], [ 2, 1 ] ],
  [ [ 'bbvet', 'cowsmoogo' ], [ 2, 0 ] ],
  [ [ 'forrend', 'purukogi' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'nopre' ], [ 2, 0 ] ],
  [ [ 'cpt_camel', 'strahboliandcheese' ], [ 2, 1 ] ],

  [ [ 'kelvin', 'parrot robar' ], [ 2, 0 ] ],
  [ [ 'calhove', 'some user zoe' ], [ 2, 1 ] ],
  [ [ 'bbvet', 'cpt_camel' ], [ 2, 1 ] ],
  [ [ 'forrend', 'v' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'minstrel' ], [ 2, 0 ] ],
  [ [ 'purukogi', 'strahboliandcheese' ], [ 2, 1 ] ],
];

const april5Decks = parseDecklists(`
kelvin (Flash Hulk)
Parrot Robar (Bug Lowrange)
calhove3141 (Flash Hulk)
some user zoe (Al ghoti)
GenghisPrawn (Esper Red)
forrend (esper red)
bbvet (Flash Hulk)
Purukogi (Redless Nadu SeekerWalk)
V (Esper Blink)
Cpt_Camel (Goblins)
Minstrel (Sultai White Control)
cowsmoogo (Rakdos Aggro)
Nopre (Abzan Blue Nadu)
Strahboliandcheese (Big Boros)`);

webcam.processWeek(april5Decks, 'apr5', april5Pairings);


// Skipping events that are below 8 players?

// const april12Decks = parseDecklists(`
// Cyclopes8 (Boros Taxes)
// kelvin (Nadu Cephalid Breakfast)
// cowsmoogo (Rakdos Aggro)
// Clouse (Sans Black Midrange Lands)
// forrend (esper red)
// calhove3141 (Flash Hulk)`);

const april19Pairings = [
  [ [ 'some user zoe', 'forrend' ], [ 2, 0 ] ],
  [ [ 'nogooddecisions', 'calhove' ], [ 2, 0 ] ],
  [ [ 'jwyatt', 'nathan lipetz' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'BYE' ], [ 2, 0 ] ],

  [ [ 'kelvin', 'some user zoe' ], [ 2, 1 ] ],
  [['nogooddecisions','jwyatt'],[ 2, 1 ]],
  [ [ 'genghisprawn', 'forrend' ], [ 2, 0 ] ],
  [ [ 'nathan lipetz', 'cyclopes8' ], [ 2, 1 ] ],
  
  [['nogooddecisions','genghisprawn'],[ 2, 0 ]],
  [ [ 'kelvin', 'nathan lipetz' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'some user zoe' ], [ 2, 1 ] ],
  [ [ 'forrend', 'BYE' ], [ 2, 0 ] ],

  [ [ 'kelvin', 'nogooddecisions' ], [ 2, 0 ] ],
];

const april19Decks = parseDecklists(`
nogooddecisions (Jund Delirium)
kelvin (Flash Hulk)
GenghisPrawn (Esper Red)
JWyatt (Jeskai Firecracker)
Nathan Lipetz (Jeskai)
some user zoe (Creamur Midrange)
forrend (esper red)
Cyclopes8 (Boros Taxes)
calhove3141 (Sans Red Midrange) `);

webcam.processWeek(april19Decks, 'apr19', april19Pairings);


const april26Pairings = [
  [ [ 'regorn', 'tjuppus' ], [ 2, 1 ] ],
  [ [ 'v', 'harju' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'calhove' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'forrend' ], [ 2, 0 ] ],

  [ [ 'regorn', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'v' ], [ 2, 0 ] ],
  [ [ 'calhove', 'tjuppus' ], [ 2, 0 ] ],
  [ [ 'forrend', 'harju' ], [ 2, 0 ] ],
  
  [ [ 'tjuppus', 'harju' ], [ 2, 0 ] ],
  [ [ 'calhove', 'forrend' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'regorn' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'v' ], [ 2, 1 ] ]
];

const april26Decks = parseDecklists(`
Cyclopes8 (Boros Taxes)
Regorn (Bant Time Vault)
kelvin (UW Control)
calhove3141 (Grixis Moon)
V (Grixis Moon)
forrend (esper red)
Tjuppus (Mono Red Goblins)
Harju (Bant Flash Rector)
`);

webcam.processWeek(april26Decks, 'apr26', april26Pairings);


const may3Pairings = [
  [ [ 'nathan lipetz', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'theonewhoknocks', 'demondrinkingtea' ], [ 2, 0 ] ],
  [ [ 'impulse27', 'jwyatt' ], [ 2, 0 ] ],
  [ [ 'nopre', 'forrend' ], [ 2, 1 ] ],
  [ [ 'dan782', 'cyclopes8' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'zenteca' ], [ 2, 0 ] ],
  
  [ [ 'dan782', 'nathan lipetz' ], [ 2, 1 ] ],
  [ [ 'impulse27', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'theonewhoknocks', 'nopre' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'dentro', 'lexi' ], [ 2, 1 ] ],
  [ [ 'forrend', 'demondrinkingtea' ], [ 2, 0 ] ],       
  [ [ 'zenteca', 'BYE' ], [ 2, 0 ] ],

  [ [ 'impulse27', 'theonewhoknocks' ], [ 2, 1 ] ],
  [ [ 'forrend', 'dan782' ], [ 1, 1 ] ],
  [ [ 'cyclopes8', 'zenteca' ], [ 2, 1 ] ],
  [ [ 'dentro', 'nopre' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'nathan lipetz' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'lexi' ], [ 2, 1 ] ]
];

const may3Decks = parseDecklists(`
Impulse27 (Jeskai control)
dan782 (Rakdos Midrange)
some user zoe (Creamur Midrange)
theOneWhoKnocks (Czech Pile)
Dentro (Mono Red Goblins)
Cyclopes8 (Boros Taxes)
forrend (esper red)
Zenteca (Temur Midrange)
Nopre (Abzan Blue Nadu)
Nathan Lipetz (Jeskai Black)
kelvin (Dimir Reanimator)
JWyatt (Jeskai Tempo)
lexi (Abzan Nightmare)
demondrinkingtea (UW Control)
  `);

webcam.processWeek(may3Decks, 'may3', may3Pairings);


const may10Pairings = [
  [ [ 'raicune', 'lexi' ], [ 2, 0 ] ],
  [ [ 'zenteca', 'hyunkim87' ], [ 0, 2 ] ],
  [ [ 'cyclopes8', 'jdizl' ], [ 2, 1 ] ],
  [ [ 'regorn', 'rissun' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'kelvin' ], [ 2, 0 ] ],

  [ [ 'hyunkim87', 'cyclopes8' ], [ 2, 0 ] ],
  [ [ 'regorn', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'raicune', 'rissun' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'zenteca' ], [ 2, 0 ] ],
  [ [ 'jdizl', 'lexi' ], [ 2, 0 ] ],
  
  [ [ 'raicune', 'hyunkim87' ], [ 2, 1 ] ],
  [ [ 'regorn', 'jdizl' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'cyclopes8' ], [ 1, 0 ] ],
  [ [ 'rissun', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'lexi', 'BYE' ], [ 2, 0 ] ],      

  [ [ 'raicune', 'regorn' ], [ 2, 1 ] ],      
];

const may10Decks = parseDecklists(`
raicune (Turbo Citadel)
Regorn (Paradox Academy)
hyunkim87 (Redless Naduwalk)
GenghisPrawn (Esper Red Control)
Rissun (Sultai Delirium)
lexi (Abzan Blink Control)
jDIZL (Rakdos Goblins)
Cyclopes8 (BUG Control)
kelvin (Will Storm)
Zenteca (Temur Midrange)
  `);

webcam.processWeek(may10Decks, 'may10', may10Pairings);


const may17Pairings = [
  [ [ 'paladin', 'unusualthunder' ], [ 2, 1 ] ], 
  [ [ 'raicune', 'lance larsen' ], [ 2, 1 ] ],   
  [ [ 'some user zoe', 'cyclopes8' ], [ 2, 0 ] ],
  [ [ 'hurrex', 'lexi' ], [ 1, 1 ] ],
  [ [ 'regorn', 'jwyatt' ], [ 2, 0 ] ],
  [ [ 'rissun', 'forrend' ], [ 2, 0 ] ],
  [ [ 'thunder_sharts', 'kelvin' ], [ 2, 1 ] ],  

  [ [ 'raicune', 'rissun' ], [ 1, 2 ] ],
  [ [ 'paladin', 'thunder_sharts' ], [ 2, 1 ] ],  
  [ [ 'regorn', 'some user zoe' ], [ 2, 0 ] ],   
  [ [ 'kelvin', 'lexi' ], [ 2, 1 ] ],
  [ [ 'hurrex', 'cyclopes8' ], [ 2, 0 ] ],       
  [ [ 'jwyatt', 'unusualthunder' ], [ 2, 1 ] ],
  [ [ 'forrend', 'lance larsen' ], [ 2, 1 ] ],

  [ [ 'regorn', 'paladin' ], [ 2, 0 ] ],
  [ [ 'hurrex', 'rissun' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'jwyatt' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'forrend' ], [ 2, 0 ] ],
  [ [ 'raicune', 'thunder_sharts' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'lexi' ], [ 2, 0 ] ],
  [ [ 'unusualthunder', 'lance larsen' ], [ 2, 1 ] ],
];

const may17Decks = parseDecklists(`
Regorn (Jeskai control)
Hurrex (Mono Red Bots)
Rissun (Sultai Delirium)
some user zoe (Esper Stonewalk)
Paladin (Jund)
raicune (Turbo Citadel)
kelvin (Rakdos Midrange)
thunder_sharts (Jeskai control)
JWyatt (Jeskai Firecracker)
Cyclopes8 (Paradox Academy)
forrend (esper red)
UnusualThunder (Dimir Delver)
lexi (Redless Flicker Control)
Lance Larsen (Czech Pile)
  `);

webcam.processWeek(may17Decks, 'may17', may17Pairings);

const may24Pairings = [
  [ [ 'maggie125', 'ben vw' ], [ 2, 0 ] ],
  [ [ 'raicune', 'coltonx9' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'cymbalman' ], [ 2, 0 ] ],   
  [ [ 'thealmightycheddar', 'forrend' ], [ 2, 0 ] ],
  [ [ 'lexi', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'impulse27', 'therealemt' ], [ 2, 0 ] ],      
  [ [ 'kelvin', 'nathan lipetz' ], [ 2, 0 ] ],      
  [ [ 'hurrex', 'lahdoja' ], [ 2, 0 ] ],
  
  [ [ 'ben vw', 'forrend' ], [ 2, 0 ] ],
  [ [ 'coltonx9', 'lahdoja' ], [ 2, 1 ] ],
  [ [ 'cymbalman', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'impulse27', 'hurrex' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'maggie125' ], [ 2, 0 ] ],
  [ [ 'raicune', 'some user zoe' ], [ 2, 1 ] ],     
  [ [ 'lexi', 'thealmightycheddar' ], [ 1, 1 ] ],
  [ [ 'therealemt', 'nathan lipetz' ], [ 2, 1 ] ],
  
  [ [ 'impulse27', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'raicune', 'thealmightycheddar' ], [ 2, 0 ] ],
  [ [ 'ben vw', 'lexi' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'maggie125' ], [ 2, 0 ] ],
  [ [ 'coltonx9', 'therealemt' ], [ 2, 0 ] ],
  [ [ 'hurrex', 'cymbalman' ],[ 2, 0 ]],
  [ [ 'genghisprawn', 'BYE' ],[ 2, 0 ]],

  [ [ 'impulse27', 'raicune' ], [ 2, 0 ] ],
];

const may24Decks = parseDecklists(`
impulse27 (esper red)
raicune (flash hulk)
kelvin (rakdos midrange)
thealmightycheddar (Esper blink)
ben vw (naya lands aggro)
lexi (abzan flash)
some user zoe (flash rector)
maggie125 (boros taxes)
coltonx9 (wubr threeanimator)
therealemt (omni tinker)
hurrex (mono red bots)
cymbalman (wubg nadu)
genghisprawn (esper green)
lahdoja (unknown)
nathan lipetz (esper red)
forrend (esper red)
`);

webcam.processWeek(may24Decks, 'may24', may24Pairings);


const may31Pairings = [
  [ [ 'lexi', 'some user zoe' ], [ 2, 1 ] ],     
  [ [ 'cyclopes8', 'maggie125' ], [ 2, 1 ] ],    
  [ [ 'morb', 'forrend' ], [ 2, 1 ] ],
  [ [ 'impulse27', 'paladin' ], [ 2, 0 ] ],      
  [ [ 'jwyatt', 'v' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'waspls' ], [ 2, 1 ] ],
  
  [ [ 'impulse27', 'jwyatt' ], [ 2, 0 ] ],       
  [ [ 'kelvin', 'lexi' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'morb' ], [ 2, 0 ] ],
  [ [ 'forrend', 'v' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'maggie125' ], [ 2, 1 ] ],
  [ [ 'paladin', 'waspls' ], [ 2, 1 ] ],

  [ [ 'impulse27', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'forrend', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'lexi', 'morb' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'paladin' ], [ 2, 1 ] ],
  [ [ 'jwyatt', 'waspls' ], [ 2, 0 ] ],
  [ [ 'v', 'maggie125' ], [ 2, 0 ] ],
];


const may31Decks = parseDecklists(`
morb (esper green)
forrend (esper red)
kelvin (golgari cradle control)  
waspls (temur scapeshift)
jwyatt (esper red)
v (wubg nadu seeker)
lexi (jund aggro)
paladin (jund midrange)
impulse27 (esper red)
some user zoe (flash rector)
maggie125 (mono red aggro)
cyclopes8 (naya aggro)
`)

webcam.processWeek(may31Decks, 'may31', may31Pairings);


const jun7Pairings = [
  [ [ 'genghisprawn', 'rissun' ], [ 2, 0 ] ],   
  [ [ 'kelvin', 'mrpipes' ], [ 2, 0 ] ],        
  [ [ 'jwyatt', 'some user zoe' ], [ 2, 1 ] ],  
  [ [ 'minstrel', 'bbvet' ], [ 2, 0 ] ],        
  [ [ 'impulse27', 'waspls' ], [ 2, 0 ] ],      
  [ [ 'yeti', 'maggie125' ], [ 2, 0 ] ],        
  [ [ 'cyclopes8', 'purukogi' ], [ 2, 0 ] ],    
  [ [ 'lexi', 'BYE' ], [ 2, 0 ] ],    
  
  [ [ 'cyclopes8', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'minstrel', 'jwyatt' ], [ 2, 1 ] ],       
  [ [ 'yeti', 'lexi' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'impulse27' ], [ 2, 0 ] ],      
  [ [ 'mrpipes', 'maggie125' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'rissun' ], [ 2, 0 ] ],  
  [ [ 'bbvet', 'waspls' ], [ 2, 1 ] ],
  [ [ 'purukogi', 'BYE' ], [ 2, 0 ] ],    
  
  [ [ 'cyclopes8', 'minstrel' ], [ 2, 1 ] ],
  [ [ 'yeti', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'lexi', 'mrpipes' ], [ 2, 1 ] ],
  [ [ 'jwyatt', 'purukogi' ], [ 2, 0 ] ],
  [ [ 'bbvet', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'impulse27' ], [ 2, 0 ] ],
  [ [ 'rissun', 'maggie125' ], [ 2, 0 ] ],
  [ [ 'waspls', 'BYE' ], [ 2, 0 ] ],    
  
  [ [ 'yeti', 'cyclopes8' ], [ 2, 1 ] ],
];

const jun7Decks = parseDecklists(`
Cyclopes8 (GWr Zoo)
Yeti (Boros Taxes)
Minstrel (BUG Control)
lexi (Affinity Pod)
kelvin (Blackless Scapeshift)
GenghisPrawn (Esper Green Control)
JWyatt (Jeskai Black Control)
bbvet (Blue Moon)
Purukogi (Bant Seekerchant)
some user zoe (BW Taxes)
MrPipes (Grixis moon)
Impulse (Esper Red Control)
waspls (temur turns)
Rissun (Sultai Delirium)
maggie125 (Mardu midrange)
`);

webcam.processWeek(jun7Decks, 'jun7', jun7Pairings);


const jun14Pairings = [
  [ [ 'some user zoe', 'v' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'tr33vs', 'tyrix' ], [ 2, 0 ] ],
  [ [ 'unusualthunder', 'lexi' ], [ 2, 1 ] ],        

  [ [ 'unusualthunder', 'cyclopes8' ], [ 2, 1 ] ],   
  [ [ 'some user zoe', 'tr33vs' ], [ 2, 1 ] ],       
  [ [ 'lexi', 'tyrix' ], [ 1, 0 ] ],
  [ [ 'kelvin', 'v' ], [ 2, 1 ] ],

  [ [ 'kelvin', 'lexi' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'tr33vs' ], [ 2, 0 ] ],
  [ [ 'v', 'tyrix' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'unusualthunder' ], [ 2, 1 ] ],
];

const jun14Decks = parseDecklists(`
some user zoe (BW Death and Taxes)
UnusualThunder (BUG Control)
Cyclopes8 (Turbo Citadel)
kelvin (Rakdos Midrange)
V (BUGw Naduwalk Reanimator)
Tr33vs (Mono White Death and Taxes)
lexi (Affinity Pod)
Tyrix (Esper Control)
`);

webcam.processWeek(jun14Decks, 'jun14', jun14Pairings);


const jun21Pairings = [
  [ [ 'yeti', 'rissun' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'george' ], [ 2, 0 ] ],       
  [ [ 'cymbalman', 'kelvin' ], [ 2, 0 ] ],       
  [ [ 'lexi', 'some user zoe' ], [ 2, 1 ] ],     

  [ [ 'yeti', 'cyclopes8' ], [ 2, 0 ] ],
  [ [ 'cymbalman', 'lexi' ], [ 2, 0 ] ],
  [ [ 'rissun', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'george' ], [ 2, 1 ] ],   
  
  [ [ 'yeti', 'cymbalman' ], [ 1, 2 ] ],
  [ [ 'cyclopes8', 'some user zoe' ], [ 2, 1 ] ],
  [ [ 'george', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'rissun', 'lexi' ], [ 2, 1 ] ],
];

const jun21Decks = parseDecklists(`
cymbalman (WUBG Nadu)
Yeti (Boros Taxes)
Cyclopes8 (Turbo Citadel)
Rissun (BUG Delirium)
lexi (5c Affinity Pod)
some user zoe (BW Taxes)
George (Paradox Academy)
kelvin (Golgari Midrange)
`);

webcam.processWeek(jun21Decks, 'jun21', jun21Pairings);

const jun28Pairings = [
  [ [ 'sabrus', 'nathan lipetz' ], [ 2, 1 ] ],
  [ [ 'regorn', 'srs_business' ], [ 2, 0 ] ],
  [ [ 'therealemt', 'george' ], [ 2, 1 ] ],
  [ [ 'goyf', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'waspls', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'forrend', 'v' ], [ 2, 1 ] ],
  [ [ 'yeti', 'lexi' ], [ 1, 2 ] ],

  [ [ 'regorn', 'sabrus' ], [ 2, 0 ] ],
  [ [ 'forrend', 'waspls' ], [ 2, 1 ] ],
  [ [ 'therealemt', 'lexi' ], [ 2, 0 ] ],
  [ [ 'yeti', 'goyf' ], [ 2, 1 ] ],
  [ [ 'v', 'cyclopes8' ], [ 2, 0 ] ],
  [ [ 'srs_business', 'nathan lipetz' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'george' ], [ 2, 1 ] ],

  [ [ 'therealemt', 'forrend' ], [ 2, 0 ] ],
  [ [ 'regorn', 'v' ], [ 2, 1 ] ],
  [ [ 'yeti', 'sabrus' ], [ 2, 1 ] ],
  [ [ 'goyf', 'waspls' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'srs_business' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'george' ], [ 2, 0 ] ],
  [ [ 'regorn', 'therealemt' ], [ 2, 0 ] ],
];

const jun28Decks = parseDecklists(`
TherealEMT (Redless Omni-Tinker)
Regorn (Bant Time Vault)
Goyf (Citadel Storm)
Forrend (Esper Red Control)
some user zoe (Al Ghoti)
yeti (wr dnt)
lexi (5c Affinity)
V (Bant Black Naduwalk)
Srs_Business (Pattern Rector Reanimator)
Sabrus (Grixis Wheels)
waspls (Sans White Scapeshift Turns)
Cyclopes8 (Dark Schmedium Red)
George (Redless Oath Control)
Nathan Lipetz (Jeskai Black)
`);

webcam.processWeek(jun28Decks, 'jun28', jun28Pairings);


const jul5Pairings = [
  [ [ 'jwyatt', 'rissun' ], [ 2, 0 ] ],
  [ [ 'harju', 'lexi' ], [ 2, 1 ] ],
  [ [ 'dan782', 'goyf' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'some user zoe' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'sabrus' ], [ 2, 0 ] ],

  [ [ 'jwyatt', 'harju' ], [ 2, 0 ] ],
  [ [ 'dan782', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'goyf', 'cyclopes8' ], [ 2, 0 ] ],
  [ [ 'rissun', 'lexi' ], [ 1, 0 ] ],
  [ [ 'some user zoe', 'sabrus' ], [ 2, 0 ] ],
  
  [ [ 'jwyatt', 'dan782' ], [ 2, 1 ] ],
  [ [ 'rissun', 'goyf' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'cyclopes8' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'lexi' ], [ 2, 0 ] ],
  [ [ 'sabrus', 'BYE' ], [ 2, 0 ] ]
];

const jul5Decks = parseDecklists(`
JWyatt (Jeskai Stoneblade)
dan782 (Jund Midrange)
Rissun (Sultai Delirium)
kelvin (Wide Czech)
some user zoe (Al Ghoti)
Harju (Jeskai)
Sabrus (Grixis Wheels)
Goyf (Citadel Storm)
Cyclopes8 (Bant Painter Control)
lexi (5c Affinity Pod)
  `);

webcam.processWeek(jul5Decks, 'jul5', jul5Pairings);


const jul12Pairings = [
  [ [ 'goyf', 'zenteca' ], [ 2, 1 ] ],
  [ [ 'jwyatt', 'lexi' ], [ 2, 0 ] ],
  [ [ 'unusualthunder', 'lahdoja' ], [ 2, 0 ] ],    
  [ [ 'forrend', 'promised' ], [ 1, 1 ] ],
  [ [ 'rissun', 'therealemt' ], [ 2, 0 ] ],
  [ [ 'purukogi', 'v' ], [ 2, 1 ] ],
  [ [ 'oogablast', 'minstrel' ], [ 2, 1 ] ],        
  [ [ 'tr33vs', 'hyunkim87' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'some user zoe' ], [ 2, 1 ] ],

  [ [ 'jwyatt', 'unusualthunder' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'oogablast' ], [ 2, 1 ] ],
  [ [ 'goyf', 'tr33vs' ], [ 2, 1 ] ],
  [ [ 'rissun', 'purukogi' ], [ 2, 0 ] ],
  [ [ 'promised', 'therealemt' ], [ 0, 2 ] ],       
  [ [ 'forrend', 'lahdoja' ], [ 2, 0 ] ],
  [ [ 'hyunkim87', 'minstrel' ], [ 2, 0 ] ],        
  [ [ 'v', 'zenteca' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'lexi' ], [ 2, 0 ] ],        
  
  [ [ 'jwyatt', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'rissun', 'goyf' ], [ 2, 0 ] ],
  [ [ 'forrend', 'tr33vs' ], [ 2, 1 ] ],
  [ [ 'therealemt', 'oogablast' ], [ 2, 1 ] ],
  [ [ 'purukogi', 'hyunkim87' ], [ 1, 2 ] ],
  [ [ 'v', 'lahdoja' ], [ 0, 2 ] ],
  [ [ 'zenteca', 'BYE' ], [ 2, 0 ] ],        

  [ [ 'rissun', 'jwyatt' ], [ 1, 2 ] ]
];

const jul12Decks = parseDecklists(`
Rissun (Sultai Delirium)
JWyatt (Jeskai Stoneblade)
Forrend (Esper Red)
GenghisPrawn (Esper Red)
TherealEMT (4C No Red Tinker Omnitell)
Goyf (Citadel Storm)
hyunkim87 (Temur Turnshift)
Tr33vs (Flash Hulk)
UnusualThunder (Sultai Reanimator control)
Purukogi (Bant Scepter Control)
Oogablast (Boros D&T)
Lahdoja (Selesnya Counters)
some user zoe (Jund Midrange)
Zenteca (Temur Tempo)
Promised (Bant Time Vault)
lexi (5C Affinity Pod)
Minstrel (BUGr Control) 
V (Bugw timesmog)
`);

webcam.processWeek(jul12Decks, 'jul12', jul12Pairings);


const jul19Pairings = [
  [ [ 'cyclopes8', 'cthulhu cultist' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'lexi', 'rissun' ], [ 2, 1 ] ],
  [ [ 'v', 'cpt_camel' ], [ 2, 1 ] ],
  [ [ 'thunder_sharts', 'ben vw' ], [ 2, 0 ] ],    
  [ [ 'tyrix', 'impulse27' ], [ 2, 0 ] ],
  [ [ 'minstrel', 'zenteca' ], [ 2, 0 ] ],
  [ [ 'waspls', 'jdizl' ], [ 2, 1 ] ],

  [ [ 'lexi', 'minstrel' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'thunder_sharts' ], [ 2, 0 ] ],
  [ [ 'v', 'some user zoe' ], [ 2, 1 ] ],
  [ [ 'tyrix', 'waspls' ], [ 0, 2 ] ],
  [ [ 'jdizl', 'cthulhu cultist' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'cpt_camel' ], [ 2, 0 ] ],
  [ [ 'ben vw', 'BYE' ], [ 2, 0 ] ],

  [ [ 'v', 'lexi' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'waspls' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'thunder_sharts' ], [ 2, 1 ] ],
  [ [ 'jdizl', 'minstrel' ], [ 2, 0 ] ],
  [ [ 'tyrix', 'ben vw' ], [ 1, 2 ] ],
  [ [ 'cthulhu cultist', 'cpt_camel' ], [ 2, 0 ] ],

  [ [ 'v', 'cyclopes8' ], [ 2, 0 ] ]
];

const jul19Decks = parseDecklists(`
V (BUGw Seekersmog)
Cyclopes8 (Mardu Midrange)
waspls (Jeskai Black Aggro)
lexi (Jund Delirium Lands)
jDIZL (Rakdos Goblins)
kelvin (Blackless Scapeshift)
Ben VW (Mardu Tokens)
some user zoe (Jund)
thunder_sharts (Lotus Breach)
Cthulhu Cultist (Boros Taxes)
Minstrel (BUG Slaw)
Tyrix (Nadu Landfall)
Rissun (BUG Delirium)
Cpt_Camel (BUG Ad Naus Tendrils)
Impulse (Jeskai)
Zenteca (Jund Counters)
`);

webcam.processWeek(jul19Decks, 'jul19', jul19Pairings);


const jul26Pairings = [
  [ [ 'some user zoe', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'forrend', 'dan782' ], [ 1, 0 ] ],
  [ [ 'therealemt', 'monday' ], [ 2, 0 ] ],
  [ [ 'purukogi', 'hewdra' ], [ 2, 1 ] ],
  [ [ 'george', 'zenteca' ], [ 2, 0 ] ],
  [ [ 'regorn', 'goyf' ], [ 2, 1 ] ],
  [ [ 'v', 'cpt_camel' ], [ 2, 0 ] ],

  [ [ 'therealemt', 'v' ], [ 2, 1 ] ],
  [ [ 'george', 'forrend' ], [ 2, 0 ] ],
  [ [ 'purukogi', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'regorn', 'hewdra' ], [ 2, 0 ] ],
  [ [ 'goyf', 'zenteca' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'cpt_camel' ], [ 2, 0 ] ],
  [ [ 'dan782', 'monday' ], [ 2, 1 ] ],

  [ [ 'regorn', 'purukogi' ], [ 2, 0 ] ],
  [ [ 'therealemt', 'george' ], [ 2, 0 ] ],
  [ [ 'goyf', 'forrend' ], [ 2, 0 ] ],
  [ [ 'dan782', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'monday', 'hewdra' ], [ 2, 1 ] ],
  [ [ 'cpt_camel', 'zenteca' ], [ 2, 1 ] ],

  [ [ 'regorn', 'therealemt' ], [ 2, 1 ] ]
];

const jul26Decks = parseDecklists(`
Regorn (Bant Time Vault)
TherealEMT (bant Time Vault)
Purukogi (Bant Time Vault)
Goyf (Citadel Storm)
George (Paradox Academy)
dan782 (Mono Green Eldrazi)
V (BUGw Seekersmog)
Monday (RDW)
Forrend (Esper Red)
Cyclopes8 (Citadel Storm)
some user zoe (Turbo Mardu)
Cpt_Camel (BUG Tendrils)
Hewdra (Blue Moon)
Zenteca (Grixis Tinker Titan)
  `);

webcam.processWeek(jul26Decks, 'jul26', jul26Pairings);


const aug2Pairings = [
  [ [ 'rissun', 'goyf' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'bird | jonas' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'v' ], [ 2, 0 ] ],
  [ [ 'purukogi', 'waspls' ], [ 0, 2 ] ],
  [ [ 'jorsh', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'cyclopes8', 'waspls' ], [ 2, 0 ] ],
  [ [ 'rissun', 'jorsh' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'bird | jonas' ], [ 2, 0 ] ],
  [ [ 'v', 'goyf' ], [ 2, 0 ] ],
  
  [ [ 'some user zoe', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'v', 'rissun' ], [ 2, 0 ] ],
  [ [ 'waspls', 'jorsh' ], [ 2, 0 ] ],
  [ [ 'bird | jonas', 'BYE' ], [ 2, 0 ] ],
];

const aug2Decks = parseDecklists(`
some user zoe (Al Ghoti)
V (RUG Scapeshift Turns)
Cyclopes8 (Naya Midrange)
waspls (Jeskai Black Aggro)
Rissun (BUG Delirium)
bird | jonas (BGu Counters)
Jorsh (UB Tempo)
Goyf (Citadel Storm)
Purukogi (Bant Time Vault)  
  `);

webcam.processWeek(aug2Decks, 'aug2', aug2Pairings);


const aug9Pairings = [
  [ [ 'hewdra', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'v', 'jorsch' ], [ 2, 1 ] ],
  [ [ 'dan782', 'george' ], [ 2, 0 ] ],
  [ [ 'waspls', 'lahdoja' ], [ 2, 0 ] ],
  [ [ 'goyf', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'ben v.w.', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'goyf', 'ben v.w.' ], [ 2, 0 ] ],
  [ [ 'waspls', 'hewdra' ], [ 2, 0 ] ],
  [ [ 'dan782', 'v' ], [ 1, 1 ] ],
  [ [ 'lahdoja', 'jorsch' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'george' ], [ 2, 0 ] ],
  
  [ [ 'waspls', 'goyf' ], [ 2, 1 ] ],
  [ [ 'v', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'lahdoja', 'dan782' ], [ 2, 0 ] ],
  [ [ 'ben v.w.', 'hewdra' ], [ 2, 1 ] ],
  [ [ 'george', 'BYE' ], [ 2, 0 ] ],
];

const aug9Decks = parseDecklists(`
waspls (Jeskai Black Aggro)
V (Jeskai Slushie)
Goyf (Citadel Storm)
Lahdoja (Czech Midrange)
Ben V.W. (Mardu Tokens)
dan782 (Mono Green Eldrazi)
Hewdra (Blue Moon)
Cyclopes8 (Naya Midrange)
George (Paradox Academy)
jorsch (Blackless Scapeshift)
some user zoe (Al Ghoti)  
`);

webcam.processWeek(aug9Decks, 'aug9', aug9Pairings);


const aug16Pairings = [
  [ [ 'stew', 'mrpipes' ], [ 2, 0 ] ],
  [ [ 'ben v.w.', 'waspls' ], [ 0, 2 ] ],
  [ [ 'cyclopes8', 'goyf' ], [ 2, 1 ] ],
  [ [ 'paladin', 'genghisprawn' ], [ 2, 0 ] ],    
  [ [ 'some user zoe', 'therealemt' ], [ 2, 1 ] ],
  [ [ 'jorsh', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'waspls', 'stew' ], [ 2, 1 ] ],
  [ [ 'paladin', 'cyclopes8' ], [ 2, 1 ] ],       
  [ [ 'some user zoe', 'jorsh' ], [ 2, 1 ] ],     
  [ [ 'goyf', 'therealemt' ], [ 2, 0 ] ],
  [ [ 'ben v.w.', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'waspls', 'paladin' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'some user zoe' ], [ 2, 1 ] ],
  [ [ 'ben v.w.', 'jorsh' ], [ 2, 0 ] ],
  [ [ 'goyf', 'BYE' ], [ 2, 0 ] ],
];

const aug16Decks = parseDecklists(`
waspls (Jeskai Black Aggro)
Cyclopes8 (Jeskai Wildfires)
Paladin (Naya Midrange)
Ben V.W. (Mardu Tokens)
Goyf (Citadel Storm)
some user zoe (Turbo Mardu)
Stew (Paradox Academy)
Jorsh (Amulet Titan)
TherealEMT (Bant Time Vault)
GenghisPrawn (Esper Green Control)
MrPipes (Academy Hybrid)
`);

webcam.processWeek(aug16Decks, 'aug16', aug16Pairings);


const aug23Pairings = [
  [ [ 'some user zoe', 'thepersiaconquerer' ], [ 2, 0 ] ],
  [ [ 'jwyatt', 'waspls' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'lahdoja' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'v' ], [ 2, 0 ] ],
  [ [ 'forrend', 'calhove' ], [ 2, 0 ] ],
  [ [ 'straix34', 'tyrix' ], [ 1, 1 ] ],
  [ [ 'dustrabbit', 'cyclopes8' ], [ 2, 0 ] ],
  [ [ 'rissun', 'BYE' ], [ 2, 0 ] ],

  [ [ 'some user zoe', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'jwyatt', 'rissun' ], [ 2, 0 ] ],
  [ [ 'forrend', 'dustrabbit' ], [ 1, 2 ] ],
  [ [ 'genghisprawn', 'tyrix' ], [ 2, 0 ] ],
  [ [ 'straix34', 'lahdoja' ], [ 1, 2 ] ],
  [ [ 'cyclopes8', 'calhove' ], [ 2, 1 ] ],
  [ [ 'v', 'waspls' ], [ 2, 0 ] ],
  
  [ [ 'jwyatt', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'dustrabbit', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'lahdoja', 'v' ], [ 2, 0 ] ],
  [ [ 'rissun', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'forrend', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'straix34', 'waspls' ], [ 2, 1 ] ],

  [ [ 'jwyatt', 'dustrabbit' ], [ 2, 0 ] ],
];

const aug23Decks = parseDecklists(`
dustrabbit (WRu Taxes)
JWyatt (Jeskai Control)
GenghisPrawn (Esper Green Control)
Rissun (Sultai Delirium)
Forrend (Esper Red Control)
some user zoe (Jeskai Control)
Lahdoja (Czech)
straix34 (Mardu Initiative)
Cyclopes8 (Jeskai Wildfires)
kelvin (Rakdos Midrange)
V (Jeskai Control)
Tyrix (Jeskai Karnstructs)
ThePersiaConquerer (BG Yawgmoth)
waspls (Jeskai Black Aggro)
calhove (Orzhov Midrange)
  `);

webcam.processWeek(aug23Decks, 'aug23', aug23Pairings);


const aug30Pairings = [
  [ [ 'lahdoja', 'ben v.w.' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'rissun' ], [ 2, 1 ] ],
  [ [ 'harju', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'calhove', 'waspls' ], [ 0, 2 ] ],
  [ [ 'cpt_camel', 'dan782' ], [ 2, 1 ] ],
  [ [ 'salt boi', 'cowsmoogo' ], [ 2, 0 ] ],
  [ [ 'v', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'waspls', 'harju' ], [ 2, 0 ] ],
  [ [ 'salt boi', 'lahdoja' ], [ 2, 1 ] ],
  [ [ 'v', 'cyclopes8' ], [ 2, 0 ] ],
  [ [ 'cpt_camel', 'ben v.w.' ], [ 2, 1 ] ],
  [ [ 'calhove', 'rissun' ], [ 2, 0 ] ],
  [ [ 'dan782', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'waspls', 'v' ], [ 2, 0 ] ],
  [ [ 'salt boi', 'cpt_camel' ], [ 2, 0 ] ],
  [ [ 'dan782', 'calhove' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'ben v.w.' ], [ 2, 0 ] ],
  [ [ 'rissun', 'BYE' ], [ 2, 0 ] ],

  [ [ 'waspls', 'salt boi' ], [ 2, 0 ] ],
];

const aug30Decks = parseDecklists(`
waspls (Jeskai Black Aggro)
salt boi (Mono White Taxes)
V (Boros Taxes)
Cpt_Camel (Hybrid Storm)
dan782 (Flash Hulk)
Cyclopes8 (Flash Hulk)
Harju (4c Cascade)
Lahdoja (Esper Blink)
calhove (Boros Taxes)
Rissun (Sultai Delirium)
cowsmoogo (Rakdos Shadows)
Ben V.W. (Mardu Tokens)
some user zoe (Jeskai Control) 
`);

webcam.processWeek(aug30Decks, 'aug30', aug30Pairings);


const sep6Pairings = [
  [ [ 'cymbalman', 'rissun' ], [ 2, 1 ] ],
  [ [ 'v', 'dan782' ], [ 2, 0 ] ],
  [ [ 'jwyatt', 'hewdra' ], [ 2, 0 ] ],
  [ [ 'waspls', 'forrend' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'yeti' ], [ 2, 1 ] ],
  [ [ 'goyf', 'calhove' ], [ 2, 0 ] ],
  [ [ 'raicune', 'cyber7777' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'therealemt' ], [ 2, 0 ] ],
  
  [ [ 'some user zoe', 'jwyatt' ], [ 2, 0 ] ],
  [ [ 'goyf', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'waspls', 'cymbalman' ], [ 2, 0 ] ],
  [ [ 'raicune', 'v' ], [ 2, 1 ] ],
  [ [ 'hewdra', 'rissun' ], [ 2, 0 ] ],
  [ [ 'forrend', 'cyber7777' ], [ 2, 1 ] ],
  [ [ 'calhove', 'therealemt' ], [ 2, 0 ] ],

  [ [ 'raicune', 'waspls' ], [ 2, 1 ] ],
  [ [ 'forrend', 'some user zoe' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'cymbalman' ], [ 2, 1 ] ],
  [ [ 'calhove', 'v' ], [ 2, 1 ] ],
];

const sep6Decks = parseDecklists(`
raicune (Grixis Reanimator)
Goyf (Citadel Storm)
waspls (Jeskai Black Aggro)
Cyclopes8 (Flash Hulk)
Forrend (Jeskai Black)
calhove (Blackless Scapeshift)
some user zoe (Al Ghoti)
V (Boros Death and Taxes)
JWyatt (Jeskai)
cymbalman (Redless Nadu)
Hewdra (Blue Moon)
Cyber7777 (Rakdos aggro)
Yeti (Boros Death and Taxes)
TherealEMT (Bant Time Vault)
Rissun (Czech Pile)
dan782 (Flash Hulk)
`);

webcam.processWeek(sep6Decks, 'sep6', sep6Pairings);


const sep13Pairings = [
  [ [ 'cyber7777', 'goyf' ], [ 2, 1 ] ],
  [ [ 'dan782', 'kelvin' ], [ 1, 1 ] ],
  [ [ 'calhove', 'v' ], [ 2, 1 ] ],
  [ [ 'regorn', 'waspls' ], [ 2, 1 ] ],
  [ [ 'cpt_camel', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'regorn', 'cpt_camel' ], [ 2, 0 ] ],
  [ [ 'calhove', 'cyber7777' ], [ 2, 1 ] ],
  [ [ 'goyf', 'dan782' ], [ 2, 0 ] ],
  [ [ 'waspls', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'v', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'regorn', 'calhove' ], [ 2, 0 ] ],
  [ [ 'cpt_camel', 'waspls' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'goyf' ], [ 2, 0 ] ],
];

const sep13Decks = parseDecklists(`
Regorn (Esper Red Control)
calhove (Grixis Discard)
Cpt_Camel (lotusless breach Storm)
kelvin (Jund Midrange)
waspls (sans black Scapeshift)
V (Sultai White Seeker Smog)
Cyber7777 (Rakdos aggro)
Goyf (Citadel Storm)
dan782 (Esper Green Control)`);

webcam.processWeek(sep13Decks, 'sep13', sep13Pairings);


const sep20Pairings = [
  [ [ 'cyber7777', 'v' ], [ 2, 0 ] ],
  [ [ 'rissun', 'logan' ], [ 2, 0 ] ],
  [ [ 'purukogi', 'cyclopes8' ], [ 2, 0 ] ],
  [ [ 'regorn', 'goyf' ], [ 2, 0 ] ],
  [ [ 'ben v.w.', 'forrend' ], [ 2, 0 ] ],
  [ [ 'smnk', 'dustrabbit' ], [ 1, 2 ] ],
  [ [ 'kelvin', 'calhove' ], [ 2, 0 ] ],
  
  [ [ 'ben v.w.', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'regorn', 'dustrabbit' ], [ 2, 1 ] ],
  [ [ 'purukogi', 'cyber7777' ], [ 2, 1 ] ],
  [ [ 'rissun', 'v' ], [ 2, 0 ] ],
  [ [ 'forrend', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'jadedtrekkie', 'logan' ], [ 2, 1 ] ],
  [ [ 'smnk', 'calhove' ], [ 1, 1 ] ],
  [ [ 'goyf', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'ben v.w.', 'purukogi' ], [ 2, 0 ] ],
  [ [ 'regorn', 'rissun' ], [ 2, 0 ] ],
  [ [ 'goyf', 'dustrabbit' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'jadedtrekkie' ], [ 2, 0 ] ],
  [ [ 'logan', 'calhove' ], [ 1, 2 ] ],
  [ [ 'v', 'cyclopes8' ], [ 2, 0 ] ],

  [ [ 'regorn', 'ben v.w.' ], [ 2, 0 ] ],
];

const sep20Decks = parseDecklists(`
Ben V.W. (Mono White Taxes)
Regorn (Esper Time Vault)
Goyf (Citadel Storm)
Purukogi (Redless Time Vault)
kelvin (Orzhov Necro Taxes)
Rissun (Sultai Reanimator)
calhove (Grixis Discard)
Forrend (Jeskai Black)
dustrabbit (WRu Taxes)
JadedTrekkie (5c Omnitell)
Cyber7777 (Rakdos Midrange)
V (Jeskai Midrange)
smnk (UW Control)
Cyclopes8 (Citadel Storm)
Logan (Grixis Thoracle)
`);

webcam.processWeek(sep20Decks, 'sep20', sep20Pairings);


const sep27Pairings = [
  [ [ 'genghisprawn', 'cyber7777' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'purukogi' ], [ 2, 1 ] ],
  [ [ 'goyf', 'harju' ], [ 2, 1 ] ],
  [ [ 'calhove', 'jwyatt' ], [ 2, 1 ] ],
  [ [ 'therealemt', 'lahdoja' ], [ 2, 0 ] ],
  [ [ 'straix34', 'stew' ], [ 2, 1 ] ],
  [ [ 'BYE', 'v' ], [ 2, 0 ] ],

  [ [ 'calhove', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'therealemt', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'goyf', 'straix34' ], [ 2, 0 ] ],
  [ [ 'v', 'stew' ], [ 2, 1 ] ],
  [ [ 'purukogi', 'BYE' ], [ 2, 0 ] ],

  [ [ 'calhove', 'goyf' ], [ 2, 1 ] ],
  [ [ 'v', 'therealemt' ], [ 2, 0 ] ],
  [ [ 'purukogi', 'straix34' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'BYE' ], [ 2, 0 ] ]
];

const sep27Decks = parseDecklists(`
calhove (Naya Midrange)
Cyclopes8 (Flash Hulk)
V (UB Tempo)
Goyf (Citadel Storm)
Purukogi (Esper Time Vault)
TherealEMT (Jeskai)
Straix34 (Eggs)
GenghisPrawn (Esper Green Control)
JWyatt (Jeskai)
Harju (4c Oath Lands)
Lahdoja (GW Cauldron Combo)
Stew (Redless Beans)
Cyber7777 (Rakdos aggro)
`);

webcam.processWeek(sep27Decks, 'sep27', sep27Pairings);


const oct4Pairings = [
  [ [ 'straix34', 'calhove' ], [ 2, 1 ] ],
  [ [ 'waspls', 'v' ], [ 1, 1 ] ],
  [ [ 'forrend', 'arthur' ], [ 1, 0 ] ],
  [ [ 'cyclopes8', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'purukogi', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'purukogi', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'forrend', 'straix34' ], [ 2, 1 ] ],
  [ [ 'v', 'arthur' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'waspls' ], [ 2, 0 ] ],
  [ [ 'calhove', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'purukogi', 'forrend' ], [ 2, 1 ] ],
  [ [ 'v', 'straix34' ], [ 2, 0 ] ],
  [ [ 'calhove', 'some user zoe' ], [ 2, 1 ] ],
  [ [ 'waspls', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'arthur', 'BYE' ], [ 2, 0 ] ],
];

const oct4Decks = parseDecklists(`
Purukogi (Esper Time Vault)
V (UB Tempo)
Forrend (Jeskai Black)
calhove (Boros Death and Taxes)
waspls (Blackless Scapeshift)
Arthur (Jeskai Green)
Cyclopes8 (Mono White Midrange)
some user zoe (Gruul White Monsters)
straix34 (eggs)
  `);

webcam.processWeek(oct4Decks, 'oct4', oct4Pairings);


const oct11Pairings = [
  [ [ 'goyf', 'sneezium' ], [ 2, 0 ] ],
  [ [ 'tallgeye', 'waspls' ], [ 1, 0 ] ],        
  [ [ 'ben v.w.', 'calhove' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'purukogi' ], [ 2, 0 ] ],        
  [ [ 'cyclopes8', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'cpt_camel', 'forrend' ], [ 2, 1 ] ],      
  [ [ 'bird | jonas', 'v' ], [ 1, 2 ] ],       

  [ [ 'kelvin', 'ben v.w.' ], [ 2, 0 ] ],        
  [ [ 'goyf', 'tallgeye' ], [ 2, 0 ] ],
  [ [ 'v', 'cpt_camel' ], [ 2, 1 ] ],
  [ [ 'waspls', 'cyclopes8' ], [ 2, 0 ] ],       
  [ [ 'some user zoe', 'bird | jonas' ], [ 2, 1 ] ],
  [ [ 'purukogi', 'sneezium' ], [ 2, 0 ] ],
  [ [ 'calhove', 'forrend' ], [ 2, 1 ] ],
  
  [ [ 'goyf', 'v' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'cpt_camel' ], [ 2, 1 ] ],
  [ [ 'purukogi', 'ben v.w.' ], [ 2, 1 ] ],
  [ [ 'calhove', 'tallgeye' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'waspls' ], [ 2, 1 ] ],
  [ [ 'forrend', 'sneezium' ], [ 2, 0 ] ],

  [ [ 'goyf', 'kelvin' ], [ 2, 0 ] ]
];

const oct11Decks = parseDecklists(`
kelvin (Bant Time Vault)
Goyf (Citadel Storm)
Purukogi (Esper Time Vault)
V (Dimir Tempo)
some user zoe (Naya Monsters)
calhove (Orzhov Death and Taxes)
Ben V.W. (Mono White Death and Taxes)
Cpt_Camel (lotusless breach)
tallgeye (Sultai Amulet Titan)
Cyclopes8 (Selesnya Monsters)
waspls (Jeskai tempo)
Forrend (Jeskai Black Control)
BIRD | jonas (Sultai Counters)
Sneezium (Bant Hammer Time)
`);

webcam.processWeek(oct11Decks, 'oct11', oct11Pairings);


const oct18Pairings = [
  [ [ 'nathan lipetz', 'tallgeye' ], [ 1, 1 ] ],
  [ [ 'harju', 'calhove' ], [ 2, 0 ] ],   
  [ [ 'goyf', 'forrend' ], [ 2, 0 ] ],    
  [ [ 'sneezium', 'hewdra' ], [ 1, 1 ] ],
  [ [ 'v', 'anthem' ], [ 2, 1 ] ],        
  [ [ 'kelvin', 'impulse27' ], [ 2, 1 ] ],
  [ [ 'waspls', 'BYE' ], [ 2, 0 ] ],  
  
  [ [ 'waspls', 'v' ], [ 2, 0 ] ],        
  [ [ 'kelvin', 'harju' ], [ 2, 0 ] ],    
  [ [ 'goyf', 'sneezium' ], [ 2, 0 ] ],   
  [ [ 'hewdra', 'tallgeye' ], [ 2, 1 ] ], 
  [ [ 'anthem', 'nathan lipetz' ], [ 2, 0 ] ],   
  [ [ 'calhove', 'forrend' ], [ 2, 1 ] ], 

  [ [ 'kelvin', 'waspls' ], [ 2, 0 ] ],   
  [ [ 'goyf', 'hewdra' ], [ 2, 1 ] ],     
  [ [ 'v', 'harju' ], [ 0, 2 ] ],
  [ [ 'anthem', 'calhove' ], [ 2, 1 ] ],  
  [ [ 'tallgeye', 'sneezium' ], [ 2, 1 ] ],
  [ [ 'forrend', 'BYE' ], [ 2, 0 ] ],  

  [ [ 'kelvin', 'goyf' ], [ 2, 0 ] ],     
];

const oct18Decks = parseDecklists(`
kelvin (Bant Time Vault)
Goyf (Citadel Storm)
waspls (Jeskai Tempo)
Harju (Bant Nadu Combo)
anthem (selesnya Lands)
Hewdra (Blue Moon)
tallgeye (Naya Tokens)
V (Dimir Tempo)
Forrend (Esper Red Control)
calhove (Jeskai Midrange)
Sneezium (Channel Mirror)
NathanLipetz (Esper Red Control)
Impulse (Jeskai Control)
`);

webcam.processWeek(oct18Decks, 'oct18', oct18Pairings);


const oct25Pairings = [
  [ [ 'dan782', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'george', 'v' ], [ 2, 0 ] ],
  [ [ 'jwyatt', 'willy' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'shrekwazowski' ], [ 2, 0 ] ],
  [ [ 'goyf', 'therealemt' ], [ 2, 1 ] ],
  [ [ 'calhove', 'waspls' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'calhove', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'goyf', 'george' ], [ 2, 1 ] ],
  [ [ 'jwyatt', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'dan782', 'therealemt' ], [ 2, 0 ] ],
  [ [ 'waspls', 'willy' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'shrekwazowski' ], [ 2, 0 ] ],    
  [ [ 'v', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'calhove', 'dan782' ], [ 2, 0 ] ],
  [ [ 'jwyatt', 'goyf' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'george' ], [ 2, 0 ] ],
  [ [ 'v', 'waspls' ], [ 2, 1 ] ],
  [ [ 'willy', 'therealemt' ], [ 2, 0 ] ],
  [ [ 'shrekwazowski', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'jwyatt', 'calhove' ], [ 2, 0 ] ]
];

const oct25Decks = parseDecklists(`
calhove (Jeskai Black Midrange)
JWyatt (Jeskai Black Control)
dan782 (Bant Time Vault)
some user zoe (Sultai White seeker)
Goyf (Citadel Storm)
Cyclopes8 (Grixis Tempo)
V (Esper Green Oath Control)
kelvin (Bant Time Vault)
waspls (Jeskai Aggro)
George (Paradox Academy)
shrekwazowski (Paradox Academy)
Willy (Citadel Storm)
TherealEMT (Timmy Tinker)
`);

webcam.processWeek(oct25Decks, 'oct25', oct25Pairings);


const deckCsv = formatCSV(webcam, 'decks', ['name', 'played', 'uniquePilots', 'totalPoints', 'average', 'winrate', 'nonMirrorWinrate', 'trophies','topCuts', 'pointsBreakdown', 'colors', 'archetypes', 'nicknames'], null, makeComparator(9)); // index of 2-x or better

const playerCsv = formatCSV(webcam, 'players', ['properName', 'eventCount', 'deckCount', 'totalPoints', 'average', 'winrate', 'trophies','topCuts', 'pointsBreakdown', 'longestStreak', 'mostPlayed'], null, makeComparator(8));

const eventCsv = formatCSV(webcam, 'events', ['date', 'players', 'uniqueDecks', 'winner', 'winningDeck'], null);

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


writeAll([deckCsv, playerCsv, eventCsv, allArchetypesCsv, colorAggregateCsv, lastEventAll, matchupCsv], ['csv/2025/decks.csv', 'csv/2025/players.csv', 'csv/2025/events.csv', 'csv/2025/archetypes.csv', 'csv/2025/colors.csv', 'csv/2025/lastEvent.csv', 'csv/2025/matchups.csv']);
