const { Series, parseDecklists, pairingsToStandings, formatCSV, formatEventMisc, formatMatchups, formatEventDecks, mergeCSVHorizontally, parseReporting, makeComparator, writeAll } = require('./eventData.js');

const webcam = new Series();

const jan11Pairings = [
  [ [ 'cowsmoogo', 'impulse27' ], [ 2, 0 ] ],
  [ [ 'harju', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'purukogi', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'cyclopes8', 'some user zoe' ], [ 2, 1 ] ],
  [ [ 'eagleandwolf', 'hyunkim87' ], [ 2, 0 ] ],
  [ [ 'demondrinkingtea', 'hurrex' ], [ 2, 0 ] ],
  [ [ 'zenteca', 'lahdoja' ],[ 2, 0 ] ],
  [ [ 'raicune', 'cat_island' ], [ 2, 0 ] ],
  [ [ 'jwyatt', 'minstrel' ], [ 1, 1 ] ],

  [ [ 'cat_island', 'hurrex' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'demondrinkingtea' ], [ 2, 0 ] ],
  [ [ 'parrot robar', 'jwyatt' ], [ 2, 1 ] ],
  [ [ 'raicune', 'cowsmoogo' ], [ 2, 0 ] ],
  [ [ 'harju', 'zenteca' ], [ 2, 1 ] ],
  [ [ 'hyunkim87', 'minstrel' ], [ 2, 1 ] ],
  [ [ 'purukogi', 'eagleandwolf' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'some user zoe' ], [ 2, 1 ] ],
  [ [ 'lahdoja', 'BYE' ],[ 2, 0 ] ],

  [ [ 'raicune', 'purukogi' ], [ 2, 0 ] ],
  [ [ 'hyunkim87', 'zenteca' ], [ 2, 0 ] ],
  [ [ 'harju', 'cyclopes8' ], [ 2, 1 ] ],
  [ [ 'cat_island', 'demondrinkingtea' ], [ 2, 0 ] ],
  [ [ 'minstrel', 'eagleandwolf' ], [ 1, 1 ] ],
  [ [ 'genghisprawn', 'parrot robar' ], [ 2, 1 ] ],

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
  [ [ 'parrot robar', 'purukogi' ], [ 2, 0 ] ],
  [ [ 'cowsmoogo', 'hurrex' ], [ 2, 0 ] ],
  [ [ 'minstrel', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'jadedtrekkie', 'mrpipes' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'demondrinkingtea' ], [ 2, 0 ] ],
  [ [ 'cat_island', 'jwyatt' ], [ 2, 1 ] ],
  [ [ 'cymbalman', 'cyclopes8' ], [ 2, 0 ] ],

  [ [ 'cyclopes8', 'hurrex' ], [ 2, 1 ] ],
  [ [ 'demondrinkingtea', 'purukogi' ], [ 2, 0 ] ],
  [ [ 'jadedtrekkie', 'cat_island' ], [ 2, 0 ] ],
  [ [ 'cowsmoogo', 'minstrel' ], [ 2, 0 ] ],
  [ [ 'parrot robar', 'cymbalman' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'genghisprawn' ], [ 2, 1 ] ],

  [ [ 'parrot robar', 'jadedtrekkie' ], [ 2, 0 ] ],
  [ [ 'purukogi', 'hurrex' ], [ 2, 1 ] ],
  [ [ 'cowsmoogo', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'minstrel' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'cat_island' ], [ 2, 1 ] ],
  [ [ 'cymbalman', 'demondrinkingtea' ], [ 2, 0 ] ],
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
