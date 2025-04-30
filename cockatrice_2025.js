const { Series, parseDecklists, pairingsToStandings, formatCSV, formatEventMisc, formatMatchups, formatEventDecks, mergeCSVHorizontally, parseReporting, makeComparator, writeAll } = require('./eventData.js');

const cockatrice = new Series();

const jan1Pairings = [
  [ [ 'parrot robar', 'rekka' ], [ 2, 0 ] ],
  [ [ 'nef', 'remi' ], [ 2, 1 ] ],
  [ [ 'nsingman', 'nyxhighlander' ], [ 2, 1 ] ],
  [ [ 'untitledusername', 'goyf' ], [ 2, 0 ] ],
  [ [ 'vaaste', 'cowsmoogo' ], [ 2, 0 ] ],
  [ [ 'levi', 'falsefenn' ], [ 2, 0 ] ],

  [ [ 'nef', 'vaaste' ], [ 2, 1 ] ],
  [ [ 'nsingman', 'levi' ], [ 0, 2 ] ],
  [ [ 'parrot robar', 'untitledusername' ], [ 2, 1 ] ],
  [ [ 'cowsmoogo', 'remi' ], [ 2, 1 ] ],
  [ [ 'goyf', 'nyxhighlander' ], [ 2, 0 ] ],
  [ [ 'rekka', 'falsefenn' ], [ 2, 0 ] ],

  [ [ 'parrot robar', 'levi' ], [ 2, 0 ] ],
  [ [ 'nef', 'rekka' ], [ 2, 1 ] ],
  [ [ 'untitledusername', 'cowsmoogo' ], [ 2, 0 ] ],
  [ [ 'goyf', 'vaaste' ], [ 2, 0 ] ],
  [ [ 'nsingman', 'falsefenn' ], [ 2, 0 ] ],
  [ [ 'remi', 'nyxhighlander' ], [ 2, 1 ] ],

  [ [ 'parrot robar', 'nef' ], [ 2, 1 ] ]
];

const jan5Decks = parseDecklists(`
Parrot Robar (BUG Lowrange)
nef (Naya Midrange)
UntitledUserName (Dark Jeskai Midrange)
Levi (Grixis Midrange)
Goyf (Golgari Stompy)
NSingman (Mardu Tokens)
rekka (Oath Turns)
Vaaste (Esper Lowrange)
Remi (Academy Combo)
cowsmoogo (Mardu Midrange)
NyxHighlander (Sliver Lands)
FalseFenn (4c Nadu)
  `);

cockatrice.processWeek(jan5Decks, 'jan5', jan1Pairings);


const jan12Pairings = [
  [ [ 'tr33vs', 'goyf' ], [ 2, 0 ] ],
  [ [ 'noah wick', 'untitledusername' ], [ 2, 0 ] ],
  [ [ 'katopris', 'rekka' ], [ 2, 1 ] ],
  [ [ 'shionshadows', 'darkcloud9' ], [ 2, 0 ] ],
  [ [ 'parrot robar', 'remi' ], [ 2, 0 ] ],
  [ [ 'vaaste', 'nsingman' ], [ 2, 0 ] ],
  [ [ 'cowsmoogo', 'creatorbeats' ], [ 2, 1 ] ],
  [ [ 'minstrel', 'luca0483' ], [ 2, 0 ] ],
  [ [ 'zarord', 'necropotence' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'minstrel', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'tr33vs', 'cowsmoogo' ], [ 2, 1 ] ],
  [ [ 'katopris', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'noah wick', 'zarord' ], [ 2, 0 ] ],
  [ [ 'shionshadows', 'vaaste' ], [ 2, 0 ] ],
  [ [ 'remi', 'goyf' ], [ 2, 1 ] ],
  [ [ 'nsingman', 'darkcloud9' ], [ 2, 1 ] ],
  [ [ 'creatorbeats', 'necropotence' ], [ 2, 0 ] ],
  [ [ 'untitledusername', 'luca0483' ], [ 2, 0 ] ],
  [ [ 'rekka', 'BYE' ], [ 2, 0 ] ],

  [ [ 'katopris', 'noah wick' ], [ 2, 1 ] ],
  [ [ 'minstrel', 'tr33vs' ], [ 2, 0 ] ],
  [ [ 'shionshadows', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'rekka', 'creatorbeats' ], [ 1, 1 ] ],
  [ [ 'untitledusername', 'zarord' ], [ 2, 0 ] ],
  [ [ 'vaaste', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'goyf', 'nsingman' ], [ 2, 0 ] ],
  [ [ 'luca0483', 'darkcloud9' ], [ 1, 2 ] ],
  
  [ [ 'katopris', 'minstrel' ], [ 2, 0 ] ]
];

const jan12Decks = parseDecklists(`
Katopris (Grixis Moon)
ShionShadows (Citadel Storm)
Minstrel (Grixis Moon)
Noah Wick (Jund Scraps)
Tr33vs (Mono W D&T)
Vaaste (Abzan Nightmare)
UntitledUserName (4c Slushie)
rekka (Oath Turns)
creatorbeats (Jund Aggro)
GenghisPrawn (Grixis Green Control)
Parrot Robar (BUG Lowrange)
cowsmoogo (Rakdos Aggro)
DarkCloud9 (Esper Reanimator) 
Zarord (Wet Naya Midrange)
Goyf (Golgari Stompy)
NSingman (Mardu Tokens)
Remi (Academy Combo)
luca0483 (5c Blink)
Necropotence (Golgari Pox)  
  `);

cockatrice.processWeek(jan12Decks, 'jan12', jan12Pairings);


const jan19Pairings = [
  [ [ 'parrot robar', 'untitledusername' ], [ 2, 0 ] ],
  [ [ 'therealemt', 'levi'], [ 2, 1 ] ],
  [ [ 'katopris', 'vaaste' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'forceofwill' ], [ 2, 0 ] ],
  [ [ 'catintree', 'rekka' ], [ 2, 0 ] ],
  [ [ 'noah wick', 'manageorge' ], [ 1, 2 ] ],
  [ [ 'jarikosik', 'goyf' ], [ 2, 0 ] ],
  [ [ 'smnk', 'cowsmoogo' ], [ 2, 0 ] ],
  [ [ '12ball', 'BYE' ], [ 2, 0 ] ],

  [ [ 'smnk', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ '12ball', 'catintree' ], [ 2, 1 ] ],
  [ [ 'jarikosik', 'katopris' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'therealemt' ], [ 2, 0 ] ],
  [ [ 'manageorge', 'forceofwill' ], [ 2, 0 ] ],
  [ [ 'noah wick', 'rekka' ], [ 2, 0 ] ],
  [ [ 'vaaste', 'goyf' ], [ 2, 1 ] ],
  [ [ 'untitledusername', 'levi' ], [ 2, 0 ] ],

  [ [ 'smnk', '12ball' ], [ 2, 0 ] ],
  [ [ 'parrot robar', 'jarikosik' ], [ 2, 0 ] ],
  [ [ 'manageorge', 'catintree' ], [ 1, 2 ] ],
  [ [ 'noah wick', 'katopris' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'untitledusername' ], [ 2, 0 ] ],
  [ [ 'vaaste', 'forceofwill' ], [ 2, 0 ] ],
  [ [ 'levi', 'goyf' ], [ 2, 1 ] ],
  [ [ 'rekka', 'BYE' ], [ 2, 0 ] ],

  [ [ 'parrot robar', 'smnk' ], [ 2, 1 ] ]
];

const jan19Decks = parseDecklists(`smnk (Sans R Oath Control)
Parrot Robar (Simic Stuff)
12ball (Golgari Nightmare)
jarikosik (Citadel Storm)
Genghis Prawn (Dark Jeskai)
ManaGeorge (Jeskai Prison Stompy)
CatInTree (Bant Seekerwalk)
Noah Wick (Mardu Prison Stompy)
Vaaste (Abzan Nightmare)
TherealEMT (Dark Jeskai)
UntitledUserName (Dark Jeskai)
Katopris (Grixis Moon)
rekka (Oath Turns)
Levi (Grixis Midrange)
cowsmoogo (Rakdos Aggro)
FORCEOFWILL (Paradox Academy)
Goyf (Lotus Breach)`);

cockatrice.processWeek(jan19Decks, 'jan19', jan19Pairings);


const jan26Pairings = [
  [ [ 'catintree', 'marekek' ], [ 2, 1 ] ],
  [ [ 'rekka', 'manageorge' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'goyf' ], [ 2, 0 ] ],
  [ [ 'kanave', 'thepersiaconquerer' ], [ 1, 1 ] ],
  [ [ 'parrot robar', 'gobi' ], [ 2, 1 ] ],
  [ [ 'remi', 'darkcloud9' ], [ 2, 1 ] ],
  [ [ 'eking', 'forceofwill' ], [ 2, 0 ] ],
  [ [ 'dan782', 'coldramen' ], [ 2, 0 ] ],
  [ [ 'cowsmoogo', 'nsingman' ], [ 2, 1 ] ],
  
  [ [ 'genghisprawn', 'catintree' ], [ 2, 0 ] ],
  [ [ 'dan782', 'rekka' ], [ 2, 0 ] ],
  [ [ 'cowsmoogo', 'eking' ], [ 0, 2 ] ],
  [ [ 'remi', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'manageorge', 'thepersiaconquerer' ], [ 2, 0 ] ],
  [ [ 'kanave', 'nsingman' ], [ 2, 1 ] ],
  [ [ 'goyf', 'coldramen' ], [ 2, 0 ] ],
  [ [ 'marekek', 'forceofwill' ], [ 2, 1 ] ],
  [ [ 'gobi', 'darkcloud9' ], [ 2, 1 ] ],

  [ [ 'eking', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'dan782', 'remi' ], [ 2, 1 ] ],
  [ [ 'goyf', 'kanave' ], [ 2, 1 ] ],
  [ [ 'rekka', 'marekek' ], [ 2, 1 ] ],
  [ [ 'manageorge', 'gobi' ], [ 1, 2 ] ],
  [ [ 'forceofwill', 'thepersiaconquerer' ], [ 2, 0 ] ],
  [ [ 'nsingman', 'coldramen' ], [ 2, 0 ] ],

  [ [ 'dan782', 'eking' ], [ 2, 0 ] ]
];

const jan26Decks = parseDecklists(`
dan782 (Bant Naduwalk)
eking (Naya Monsters)
GenghisPrawn (4C no green)
remi (Paradox Academy)
rekka (oath Turns)
goyf (Gruul Blitz)
gobi (esper miracles reanimator)
kanave (Azorius Control)
parrot robar (simic slaw)
cowsmoogo (rakdos aggro)
manageorge (jeskai prison stompy)
forceofwill (paradox academy)
marekek (mardu prison stompy)
catintree (Jeskai)
nsingman (Mardu Tokens)
thepersiaconquerer (unknown)
darkcloud9 (esper reanimator)
coldramen (dark bant nadu walk)
`);

cockatrice.processWeek(jan26Decks, 'jan26', jan26Pairings);



const deckCsv = formatCSV(cockatrice, 'decks', ['name', 'played', 'uniquePilots', 'totalPoints', 'average', 'winrate', 'nonMirrorWinrate', 'trophies','topCuts', 'pointsBreakdown', 'colors', 'archetypes', 'nicknames'], null, makeComparator(9)); // index of 2-x or better

const playerCsv = formatCSV(cockatrice, 'players', ['properName', 'eventCount', 'deckCount', 'totalPoints', 'average', 'winrate', 'trophies','topCuts', 'pointsBreakdown', 'longestStreak', 'mostPlayed'], null, makeComparator(8));

const eventCsv = formatCSV(cockatrice, 'events', ['date', 'players', 'uniqueDecks', 'winner', 'winningDeck'], null);

const archetypeDisclaimer = `note: archetype metagame share percentages don't add up to 100% because some decks span multiple archetypes`;

const archetypeCsv = [formatCSV(cockatrice, 'archetypes', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'), null, false, 'archetypes'), archetypeDisclaimer].join('\n\n');

const familyCsv = formatCSV(cockatrice, 'families', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter', 'members'], makeComparator('2-XBetter'), null, false, 'subarchetypes');

const hybridArchetypeCsv = formatCSV(cockatrice, 'hybridArchetypes', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'), null, false, 'hybridArchetypes');

const allArchetypesCsv = mergeCSVHorizontally(archetypeCsv, [familyCsv, hybridArchetypeCsv].join('\n\n\n'));

// all color combinations (jeskai, dimir, ...)
const colorCsv = formatCSV(cockatrice, 'colors', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('2-XBetter'), null, false, 'colorCombos');

// data for each of the five colors
const wubrgCsv = formatCSV(cockatrice, 'wubrg', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], null, null, false, 'colors');

// data by number of colors (mono, dual...)
const numColorsCsv = formatCSV(cockatrice, 'numColors', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], null, null, false, 'numColors');

const colorAggregateCsv = mergeCSVHorizontally([wubrgCsv, numColorsCsv].join('\n\n\n'), colorCsv);


const lastEventArchetypesCsv = formatCSV(cockatrice, 'lastEventHybridArchetypes', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('played'));

const lastEventColorsCsv = formatCSV(cockatrice, 'lastEventColors', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter'], makeComparator('played'));

const lastEventWUBRGCsv = formatCSV(cockatrice, 'lastEventWUBRG', ['name', 'decks', 'played', 'metagameShare', 'totalPoints', 'average', 'winrate', 'trophies', '2-XBetter']);

const lastEventMisc = formatEventMisc(cockatrice.getLastEvent());

const lastEventDecks = formatEventDecks(cockatrice.getLastEvent());

const lastEventAll = mergeCSVHorizontally([lastEventMisc, lastEventArchetypesCsv, lastEventColorsCsv, lastEventWUBRGCsv].join('\n\n'), lastEventDecks);


const matchupCsv = formatMatchups(cockatrice);


writeAll([deckCsv, playerCsv, eventCsv, allArchetypesCsv, colorAggregateCsv, lastEventAll, matchupCsv], ['csv/cockatrice/decks.csv', 'csv/cockatrice/players.csv', 'csv/cockatrice/events.csv', 'csv/cockatrice/archetypes.csv', 'csv/cockatrice/colors.csv', 'csv/cockatrice/lastEvent.csv', 'csv/cockatrice/matchups.csv']);
