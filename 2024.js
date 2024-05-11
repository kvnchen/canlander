const { Series, parseDecklists, pairingsToStandings, formatCSV, formatEventMisc, formatMatchups, formatEventDecks, mergeCSVHorizontally, parseReporting, makeComparator, writeAll } = require('./eventData.js');

const webcam = new Series();

const jan6Pairings = [
  [ [ 'azuth', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'harju', 'calhove' ], [ 2, 1 ] ],
  [ [ 'minstrel', 'champlet' ], [ 1, 2 ] ],
  [ [ 'unusualthunder', 'impulse27' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'jwyatt' ], [ 2, 0 ] ],
  [ [ 'fry guy', 'axelia' ], [ 2, 1 ] ],
  [ [ 'hurrex', 'sp1derclaw' ], [ 2, 0 ] ],
  [ [ 'vaaste', 'jdizl' ], [ 2, 0 ] ],
  
  [ [ 'hurrex', 'vaaste' ], [ 2, 1 ] ],
  [ [ 'unusualthunder', 'azuth' ], [ 2, 0 ] ],
  [ [ 'harju', 'champlet' ], [ 2, 0 ] ],
  [ [ 'fry guy', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'jdizl', 'axelia' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'calhove' ], [ 2, 1 ] ],
  [ [ 'minstrel', 'sp1derclaw' ], [ 2, 0 ] ],
  
  [ [ 'harju', 'fry guy' ], [ 2, 0 ] ],
  [ [ 'unusualthunder', 'hurrex' ], [ 2, 1 ] ],
  [ [ 'azuth', 'champlet' ], [ 2, 0 ] ],
  [ [ 'vaaste', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'jdizl' ], [ 2, 0 ] ],
  [ [ 'calhove', 'sp1derclaw' ], [ 2, 1 ] ],

  [ [ 'unusualthunder', 'harju' ], [ 2, 1 ] ]
];

const jan6Decks = parseDecklists(`
UnusualThunder (Death and Taxes)
Harju (UWbg Vault)
Hurrex (UR High Tide)
Fry Guy (Gruul Monsters)
Azuth (Dark Jeskai Welder)
Vaaste (Death and Taxes)
Cyclopes8 (GWb Monsters)
Champlet (RW Equipment Taxes)
calhove3141 (Naya Initiative)
jDIZL (Jund Madness)
GenghisPrawn (Czech Midrange)
Minstrel (Czech Midrange)
Impulse27 (Jeskai Midrange)
JWyatt (Jeskai Midrange)
Axelia (5c Walker Omnitell)
Sp1derclaw (4c Aristocrats)
`);

webcam.processWeek(jan6Decks, 'jan6', jan6Pairings);


const jan13Pairings = [
  [ [ 'minstrel', 'dentro' ], [ 2, 1 ] ],
  [ [ 'axelia', 'fry guy' ], [ 0, 2 ] ],
  [ [ 'tr33vs', 'hurrex' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'calhove' ], [ 2, 0 ] ],
  [ [ 'hyunkim87', 'harju' ], [ 2, 0 ] ],
  [ [ 'raicune', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'jwyatt', 'ketzol' ], [ 2, 0 ] ],
  
  [ [ 'cyclopes8', 'tr33vs' ], [ 2, 0 ] ],
  [ [ 'fry guy', 'hyunkim87' ], [ 2, 0 ] ],
  [ [ 'jwyatt', 'minstrel' ], [ 2, 0 ] ],
  [ [ 'raicune', 'dentro' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'ketzol' ], [ 2, 0 ] ],
  [ [ 'axelia', 'calhove' ], [ 2, 0 ] ],

  [ [ 'cyclopes8', 'jwyatt' ], [ 2, 1 ] ],
  [ [ 'raicune', 'fry guy' ], [ 1, 2 ] ],
  [ [ 'minstrel', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'axelia', 'hyunkim87' ], [ 2, 0 ] ],
  [ [ 'tr33vs', 'calhove' ], [ 2, 0 ] ],
  [ [ 'dentro', 'BYE' ], [ 2, 0 ] ], //?

  [ [ 'cyclopes8', 'fry guy' ], [ 2, 0 ] ]
];

const jan13Decks = parseDecklists(`
Cyclopes8 (Schmedium Red)
Fry Guy (Pattern Rector)
JWyatt (Jeskai Control)
Axelia (5c Walker Omnitell)
Tr33vs (Death and Taxes)
raicune (Lotus Breach Storm)
Minstrel (BUG Control)
hyunkim87 (Temur Time-Shift)
Dentro (Grixis Tempo)
GenghisPrawn (Jeskai Black)
calhove3141 (RUG Tempo)
Hurrex (UR High Tide)
Ketzol (Esper Miracles)
Harju (4c Sans Red Vault)
`);


webcam.processWeek(jan13Decks, 'jan13', jan13Pairings);


const jan20Pairings = [
  [ [ 'bailite', 'purukogi' ], [ 2, 0 ] ],
  [ [ 'jwyatt', 'nanderg' ], [ 2, 0 ] ],
  [ [ 'minstrel', 'jadedtrekkie' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'axelia' ], [ 2, 1 ] ],
  [ [ 'theonewhoknocks', 'wanderingvenser' ], [ 2, 1 ] ],
  [ [ 'calhove', 'cyclopes8' ], [ 2, 0 ] ],
  
  [ [ 'calhove', 'jwyatt' ], [ 2, 0 ] ],
  [ [ 'minstrel', 'bailite' ], [ 1, 1 ] ],
  [ [ 'genghisprawn', 'theonewhoknocks' ], [ 2, 0 ] ],
  [ [ 'jadedtrekkie', 'wanderingvenser' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'purukogi' ], [ 2, 0 ] ],
  [ [ 'axelia', 'nanderg' ], [ 2, 0 ] ],
  
  [ [ 'theonewhoknocks', 'jadedtrekkie' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'calhove' ], [ 0, 2 ] ],
  [ [ 'jwyatt', 'minstrel' ], [ 2, 0 ] ],
  [ [ 'bailite', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'purukogi', 'axelia' ], [ 2, 1 ] ],
];

const jan20Decks = parseDecklists(`
calhove3141 (BR Midrange)
Bailite (Abzan Delirium)
GenghisPrawn (Dark Jeskai)
JWyatt (Jeskai Control)
theOneWhoKnocks (wubg Time Vault)
Minstrel (Sans R Lands)
Cyclopes8 (BR Monsters)
Purukogi (Flash Hulk)
JadedTrekkie (Paradox Academy)
Axelia (5c Walker Omnitell)
WanderingVenser (4c Sans G Midrange)
NanderG (5c Cascade Midrange)
`);

webcam.processWeek(jan20Decks, 'jan20', jan20Pairings);

// console.log(webcam.events['jan6'].players['fry guy']);
// console.log(webcam.events['jan6'].decks);
// console.log(webcam.events['jan6'].decks['deathAndTaxes']);

const deckCsv = formatCSV(webcam, 'decks', ['name', 'played', 'uniquePilots', 'totalPoints', 'average', 'winrate', 'nonMirrorWinrate', 'trophies','topCuts', 'pointsBreakdown', 'colors', 'archetypes', 'nicknames'], null, makeComparator(9)); // index of 2-x or better

writeAll([deckCsv], ['csv/2024/decks.csv']);
