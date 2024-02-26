const { Series, parseDecklists, pairingsToStandings, formatCSV, formatEventMisc, formatMatchups, formatEventDecks, mergeCSVHorizontally, parseReporting } = require('./eventData.js');
const fs = require('fs');

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


