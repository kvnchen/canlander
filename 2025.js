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
  [ [ 'regorn', 'nathanlipetz' ], [ 2, 0 ] ],

  [ [ 'jwyatt', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'tyrix', 'dentro' ], [ 2, 1 ] ],
  [ [ 'demondrinkingtea', 'unusualthunder' ], [ 2, 1 ] ],
  [ [ 'forrend', 'regorn' ], [ 0, 2 ] ],
  [ [ 'cyclopes8', 'aleek the freak' ], [ 2, 0 ] ],
  [ [ 'purukogi', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'nathanlipetz', 'eking' ], [ 2, 0 ] ],
  [ [ 'minstrel', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'demondrinkingtea', 'regorn' ], [ 2, 1 ] ],
  [ [ 'jwyatt', 'tyrix' ], [ 2, 0 ] ],
  [ [ 'cyclopes8', 'nathanlipetz' ], [ 2, 0 ] ],
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
NathanLipetz (Jeskai)
Dentro (Redless Nadu)
Purukogi (Redless Naduwalk)
Zenteca (unknown)
some user zoe (Turbo Blood)
EKing (unknown)
`);

webcam.processWeek(feb8Decks, 'feb8', feb8Pairings);


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
