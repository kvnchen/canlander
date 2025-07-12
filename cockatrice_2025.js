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

const feb2Pairings = [
  [ [ 'goyf', 'remi' ], [ 2, 1 ] ],
  [ [ 'nogooddecisions', 'parrot robar' ], [ 2, 0 ] ],
  [ [ 'noah wick', 'untitledusername' ], [ 1, 2 ] ],
  [ [ 'creatorbeats', 'smnk' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'ccpyro' ], [ 2, 0 ] ],
  [ [ 'vaaste', 'boxlaunch' ], [ 2, 0 ] ],
  [ [ 'rekka', 'cowsmoogo' ], [ 2, 1 ] ],
  [ [ 'eking', 'minstrel' ], [ 2, 1 ] ],

  [ [ 'genghisprawn', 'untitledusername' ], [ 2, 1 ] ],
  [ [ 'rekka', 'goyf' ], [ 2, 1 ] ],
  [ [ 'eking', 'nogooddecisions' ], [ 2, 0 ] ],
  [ [ 'vaaste', 'creatorbeats' ], [ 2, 1 ] ],
  [ [ 'smnk', 'cowsmoogo' ], [ 2, 1 ] ],
  [ [ 'noah wick', 'boxlaunch' ], [ 1, 2 ] ],
  [ [ 'ccpyro', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'genghisprawn', 'eking' ], [ 2, 1 ] ],
  [ [ 'rekka', 'vaaste' ], [ 2, 0 ] ],
  [ [ 'ccpyro', 'goyf' ], [ 2, 1 ] ],
  [ [ 'untitledusername', 'boxlaunch' ], [ 2, 0 ] ],
  [ [ 'nogooddecisions', 'smnk' ], [ 2, 1 ] ],
  [ [ 'noah wick', 'cowsmoogo' ], [ 1, 2 ] ],
  
  [ [ 'genghisprawn', 'rekka' ], [ 2, 0 ] ]
];

const feb2Decks = parseDecklists(`
GenghisPrawn (Dark Jeskai)
rekka (Oath Turns)
EKing (Naya Monsters)
CCPyro (Naya Legends)
Vaaste (UR Moon Bots)
UntitledUserName (Lotus Breach)
nogooddecisions (Jund Delirium)
Goyf (Gruul Blitz)
cowsmoogo (Rakdos Aggro)
BoxLaunch (Sans R Three-animator)
creatorbeats (Jund Aggro)
smnk (Sans Red Oath Control)
Minstrel (Goblins)
Parrot Robar (Simic-w Slaw)
Noah Wick (Sans-Sultai Game Objects)
Remi (Academy Combo) 
  `);

cockatrice.processWeek(feb2Decks, 'feb2', feb2Pairings);


const feb9Pairings = [
  [ [ 'untitledusername', 'george' ], [ 2, 1 ] ],
  [ [ 'eking', 'manageorge' ], [ 2, 0 ] ],       
  [ [ 'vaaste', 'gobi' ], [ 2, 1 ] ],
  [ [ 'goyf', 'noah wick' ], [ 2, 1 ] ],
  [ [ 'remi', 'boxlaunch' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'therealemt' ], [ 2, 1 ] ],      
  [ [ 'parrot robar', 'morb' ], [ 2, 0 ] ],      

  [ [ 'goyf', 'vaaste' ], [ 2, 1 ] ],
  [ [ 'remi', 'eking' ], [ 2, 0 ] ],
  [ [ 'untitledusername', 'kelvin' ], [ 2, 1 ] ], 
  [ [ 'noah wick', 'parrot robar' ], [ 1, 2 ] ], 
  [ [ 'gobi', 'george' ], [ 2, 1 ] ],
  [ [ 'manageorge', 'boxlaunch' ], [ 2, 1 ] ],    
  [ [ 'morb', 'therealemt' ], [ 0, 2 ] ],        
  
  [ [ 'parrot robar', 'goyf' ], [ 2, 1 ] ],
  [ [ 'remi', 'untitledusername' ], [ 0, 2 ] ],
  [ [ 'gobi', 'eking' ], [ 2, 1 ] ],
  [ [ 'therealemt', 'vaaste' ], [ 2, 1 ] ],      
  [ [ 'manageorge', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'george', 'boxlaunch' ], [ 2, 0 ] ],       
  [ [ 'noah wick', 'morb' ], [ 2, 1 ] ],

  [ [ 'untitledusername', 'parrot robar' ], [ 2, 0 ] ],
];

const feb9Decks = parseDecklists(`
UntitledUserName (Tin Fins)
Parrot Robar (Grixis Discard)
Remi (Academy Combo)
Goyf (Golgari Monsters)
TheRealEMT (Sans R Control)
GOBI (Esper Miracles)
ManaGeorge (Jeskai Prison Stompy)
kelvin (Will Storm)
George (Academy-Tinker Combo)
Vaaste (UR Moon Bots)
Noah Wick (Sans-Sultai Game Objects)
EKing (Naya Monsters)
Morb (Abzan Stompy)
BoxLaunch (Dimir High Tide)  
  `);

cockatrice.processWeek(feb9Decks, 'feb9', feb9Pairings);


const feb16Pairings = [
  [ [ 'uberlegen', 'zarord' ], [ 2, 0 ] ],
  [ [ 'ccpyro', 'nogooddecisions' ], [ 2, 0 ] ],
  [ [ 'untitledusername', 'morb' ], [ 2, 1 ] ],
  [ [ 'wooffloof', 'cowsmoogo' ], [ 2, 0 ] ],
  [ [ 'parrot robar', 'dan782' ], [ 2, 0 ] ],
  [ [ 'lightms', 'rekka' ], [ 2, 1 ] ],
  [ [ 'noah wick', 'remi' ], [ 1, 2 ] ],
  [ [ 'vaaste', 'boxlaunch' ], [ 2, 1 ] ],
  [ [ 'manageorge', 'gobi' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'axelia' ], [ 2, 1 ] ],
  [ [ 'shionshadows', 'goyf' ], [ 2, 1 ] ],

  [ [ 'ccpyro', 'shionshadows' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'untitledusername' ], [ 2, 0 ] ],
  [ [ 'remi', 'uberlegen' ], [ 2, 0 ] ],
  [ [ 'lightms', 'manageorge' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'wooffloof' ], [ 2, 1 ] ],
  [ [ 'vaaste', 'gobi' ], [ 2, 0 ] ],
  [ [ 'cowsmoogo', 'rekka' ], [ 2, 1 ] ],
  [ [ 'noah wick', 'zarord' ], [ 2, 0 ] ],
  [ [ 'goyf', 'nogooddecisions' ], [ 2, 0 ] ],
  [ [ 'morb', 'boxlaunch' ], [ 2, 0 ] ],
  [ [ 'axelia', 'dan782' ], [ 2, 1 ] ],
  
  [ [ 'lightms', 'ccpyro' ], [ 2, 1 ] ],
  [ [ 'remi', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'vaaste' ], [ 2, 1 ] ],
  [ [ 'untitledusername', 'goyf' ], [ 2, 0 ] ],
  [ [ 'noah wick', 'axelia' ], [ 2, 0 ] ],
  [ [ 'morb', 'manageorge' ], [ 2, 0 ] ],
  [ [ 'wooffloof', 'shionshadows' ], [ 2, 1 ] ],
  [ [ 'cowsmoogo', 'uberlegen' ], [ 2, 0 ] ],
  [ [ 'boxlaunch', 'rekka' ], [ 2, 1 ] ],
  [ [ 'gobi', 'dan782' ], [ 2, 0 ] ],
  
  [ [ 'kelvin', 'parrot robar' ], [ 2, 0 ] ],
  [ ['remi', 'lightms'] , [2, 0] ],

  [ [ 'kelvin', 'remi' ], [ 2, 1 ] ]
];

const feb16Decks = parseDecklists(`
Remi (Academy Combo)
Kelvin (Will Storm)
lightms (Esper Blink)
Parrot Robar (Bant Slaw)
UntitledUserName (TinFins)
NoahWick (RW Prison Stompy)
WoofFloof (RW Tokens)
Vaaste (Esper Ketramose Blink)
CCPyro (Naya Legends)
Morb (Abzan Stompy)
cowsmoogo (Mono-Black Moon)
Axelia (6c Superfriends Omnitell)
ManaGeorge (Jeskai Prison Stompy)
uberlegen (Czech Soothsayer)
ShionShadows (Citadel Storm)
BoxLaunch (Boros Heroic)
GOBI (Esper Miracles)
Goyf (Golgari Monsters)
rekka (Cephalid Brekfast)
dan782 (Bant Naduwalk)
nogooddecisions (Jund Delirium)
Zarord (Paradox Academy)  
`);

cockatrice.processWeek(feb16Decks, 'feb16', feb16Pairings);


const feb23Pairings = [
  [ [ 'kelvin', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'goyf', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'rekka', 'minstrel' ], [ 2, 0 ] ],
  [ [ 'zarord', 'cjhobbes' ], [ 2, 1 ] ],
  [ [ 'untitledusername', 'smnk' ], [ 2, 0 ] ],
  [ [ 'thepersiaconquerer', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'zarord', 'rekka' ], [ 2, 1 ] ],
  [ [ 'thepersiaconquerer', 'untitledusername' ], [ 2, 1 ] ],
  [ [ 'goyf', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'smnk', 'cjhobbes' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'thepersiaconquerer', 'zarord' ], [ 2, 1 ] ],
  [ [ 'rekka', 'goyf' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'untitledusername' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'smnk' ], [ 2, 0 ] ],
  [ [ 'cjhobbes', 'BYE' ], [ 2, 0 ] ],
];

const feb23Decks = parseDecklists(`
ThePersiaConquerer (GW Lands)
Zarord (Paradox Academy)
Kelvin (Citadel Storm)
Goyf (BUG Monsters)
rekka (Hermit Druid)
GenghisPrawn (Creamy Grixis)
UntitledUserName (TinFins)
cjhobbes (UR Tempo)
smnk (UW Control)
Parrot Robar (Grixis Discard)
Minstrel (unknown) 
`);

cockatrice.processWeek(feb23Decks, 'feb23', feb23Pairings);


const march2Pairings = [
  [ [ 'dan782', 'manageorge' ], [ 2, 1 ] ],
  [ [ 'wyvernflight', 'parrot robar' ], [ 2, 0 ] ],
  [ [ 'eking', 'uberlegen' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'gobi' ], [ 2, 0 ] ],
  [ [ 'wooffloof', 'thepersiaconquerer' ], [ 1, 0 ] ],
  [ [ 'rekka', 'remi' ], [ 2, 1 ] ],
  [ [ 'goyf', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'eking', 'wooffloof' ], [ 2, 0 ] ],
  [ [ 'rekka', 'wyvernflight' ], [ 2, 0 ] ],
  [ [ 'dan782', 'genghisprawn' ], [ 1, 1 ] ],
  [ [ 'manageorge', 'goyf' ], [ 2, 1 ] ],
  [ [ 'remi', 'gobi' ], [ 2, 0 ] ],
  [ [ 'uberlegen', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'rekka', 'eking' ], [ 2, 1 ] ],
  [ [ 'remi', 'dan782' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'manageorge' ], [ 2, 1 ] ],
  [ [ 'goyf', 'wyvernflight' ], [ 2, 0 ] ],
  [ [ 'gobi', 'BYE' ], [ 2, 0 ] ],
];

const march2Decks = parseDecklists(`
rekka (cephalid breakfast)
wyvernflight (grixis discard)
genghisprawn (esper red)
dan782 (bant slaw)
parrot robar (uw control)
Eking (Naya Monsters)
gobi (esper miracles)
remi (academy combo)
uberlegen (simic merfolk)
thepersiaconquerer (gw lands)
goyf (golgari monsters)
wooffloof (unknown)
manageorge (jeskai prison stompy)
`);

cockatrice.processWeek(march2Decks, 'mar2', march2Pairings);


const march9Pairings = [
  [ [ 'parrot robar', 'george' ], [ 2, 0 ] ],      
  [ [ 'rekka', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'remi' ], [ 2, 0 ] ],        
  [ [ 'morb', 'goyf' ], [ 2, 1 ] ],
  [ [ 'cowsmoogo', 'jwyatt' ], [ 2, 0 ] ],
  [ [ 'riverhix', 'BYE' ], [ 2, 0 ] ],

  [ [ 'parrot robar', 'cowsmoogo' ], [ 2, 1 ] ],   
  [ [ 'genghisprawn', 'riverhix' ], [ 2, 1 ] ],   
  [ [ 'morb', 'rekka' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'george' ], [ 2, 0 ] ],
  [ [ 'remi', 'goyf' ], [ 2, 0 ] ],

  [ [ 'parrot robar', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'cowsmoogo', 'morb' ], [ 2, 1 ] ],
  [ [ 'remi', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'riverhix', 'rekka' ], [ 2, 1 ] ],
  [ [ 'goyf', 'george' ], [ 2, 1 ] ],
];

const march9Decks = parseDecklists(`
parrot robar (esper midrange)
genghisprawn (esper red)
remi (academy combo)
kelvin (citadel storm)
riverhix (ub tempo)
rekka (cephalid breakfast)
george (paradox academy)
goyf (golgari monsters)
cowsmoogo (mono-black moon)
morb (abzan midrange)
jwyatt (jeskai tempo)
`);

cockatrice.processWeek(march9Decks, 'mar9', march9Pairings);


const march16Pairings = [
  [ [ 'remi', 'kanave' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'boxlaunch' ], [ 2, 0 ] ],
  [ [ 'rekka', 'p0glet' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'smnk' ], [ 2, 0 ] ],
  [ [ 'untitledusername', 'goyf' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'remi', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'rekka', 'untitledusername' ], [ 2, 1 ] ],
  [ [ 'boxlaunch', 'goyf' ], [ 2, 0 ] ],
  [ [ 'p0glet', 'kanave' ], [ 2, 0 ] ],
  [ [ 'smnk', 'cowsmoogo' ], [ 2, 0 ] ],

  [ [ 'remi', 'rekka' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'p0glet' ], [ 2, 0 ] ],
  [ [ 'untitledusername', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'boxlaunch', 'smnk' ], [ 2, 0 ] ],
  [ [ 'cowsmoogo', 'goyf' ], [ 2, 1 ] ],
  [ [ 'kanave', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'remi', 'genghisprawn' ], [ 2, 1 ] ],
];

const march16Decks = parseDecklists(`
Remi (Academy)
GenghisPrawn (Esper Red Control)
Rekka (Nadu Breakfast)
UntitledUserName (Lotus Breach Storm)
BoxLaunch (Esper ThreeAnimator)
Kelvin (GB Cradle Control)
Parrot Robar (UB Mid)
SMNK (UW Control)
P0glet (Academy)
Kanave (Esper Nadu Control)
CowsMooGo (mono-black moon)
Goyf (Golgari Monsters) 
`);

cockatrice.processWeek(march16Decks, 'mar16', march16Pairings);

const march23Pairings = [
  [ [ 'therealemt', 'remi' ], [ 2, 0 ] ],
  [ [ 'rekka', 'monday' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'kanave' ], [ 2, 0 ] ],
  [ [ 'goyf', 'vaaste' ], [ 2, 1 ] ],
  [ [ 'untitledusername', 'cowsmoogo' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'creeperfishstix' ], [ 2, 1 ] ],
  [ [ 'smnk', 'fitzy' ], [ 2, 0 ] ],
  [ [ 'p0glet', 'lightms' ], [ 0, 2 ] ],
  [ [ 'thepersiaconquerer', 'boxlaunch' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'BYE' ], [ 2, 0 ] ],

  [ [ 'thepersiaconquerer', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'rekka', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'untitledusername', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'goyf', 'therealemt' ], [ 2, 1 ] ],
  [ [ 'smnk', 'lightms' ], [ 2, 0 ] ],
  [ [ 'remi', 'cowsmoogo' ], [ 2, 1 ] ],
  [ [ 'p0glet', 'boxlaunch' ], [ 2, 0 ] ],
  [ [ 'fitzy', 'kanave' ], [ 2, 1 ] ],
  [ [ 'creeperfishstix', 'BYE' ], [ 2, 0 ] ],
  
  [['thepersiaconquerer','goyf'],[ 2, 0 ]],
  [ [ 'rekka', 'smnk' ], [ 2, 0 ] ],
  [ [ 'untitledusername', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'p0glet' ], [ 2, 1 ] ],
  [ [ 'remi', 'creeperfishstix' ], [ 2, 0 ] ],
  [ [ 'lightms', 'fitzy' ], [ 2, 0 ] ],
  [ [ 'therealemt', 'kanave' ], [ 2, 0 ] ],
  [ [ 'cowsmoogo', 'BYE' ], [ 2, 0 ] ],
  
  [['thepersiaconquerer','smnk'],[ 2, 1 ]],
  [ [ 'rekka', 'untitledusername' ], [ 2, 0 ] ],
  
  [['thepersiaconquerer','rekka'],[ 2, 0 ]],
];

const march23Decks = parseDecklists(`
thepersiaconquerer (selesnya lands midrange)
rekka (cephalid breakfast)
untitledusername (grixis tempo)
smnk (gw aggro)
goyf (grixis thoracle)
genghisprawn (esper red)
therealemt (unknown)
lightms (wurg lands)
remi (paradox academy)
cowsmoogo (unknown)
kelvin (gb cradle control)
parrot robar (dimir midrange)
p0glet (paradox academy)
fitzy (simic slaw)
creeperfishstix (paradox academy)
monday (unknown)
vaaste (mono white death and taxes)
boxlaunch (high tide)
kanave (4c oath control)
`);

cockatrice.processWeek(march23Decks, 'mar23', march23Pairings);


const april6Pairings = [
  [ [ 'muto', 'osiris' ], [ 1, 0 ] ],
  [ [ 'remi', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'lexi', 'BYE' ], [ 2, 0 ] ],
  [ [ 'parrot robar', 'creeperfishstix' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'cowsmoogo' ], [ 2, 1 ] ],
  [ [ 'goyf', 'cjhobbes' ], [ 2, 1 ] ],
  [ [ 'rekka', 'untitledusername' ], [ 2, 0 ] ],
  
  [ [ 'remi', 'rekka' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'parrot robar' ], [ 2, 0 ] ],
  [ [ 'goyf', 'muto' ], [ 2, 1 ] ],
  [ [ 'creeperfishstix', 'osiris' ], [ 0, 2 ] ],
  [ [ 'cowsmoogo', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'untitledusername', 'cjhobbes' ], [ 2, 1 ] ],
  
  [ [ 'rekka', 'muto' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'BYE' ], [ 2, 0 ] ],
  [ [ 'cowsmoogo', 'goyf' ], [ 2, 0 ] ],
  [ [ 'creeperfishstix', 'cjhobbes' ], [ 2, 0 ] ],
  [ [ 'untitledusername', 'osiris' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'remi' ], [ 2, 1 ] ],
];

const april6Decks = parseDecklists(`
kelvin (Cephalid Breakfast)
Remi (Academy Combo)
cowsmoogo (rakdos offal)
Rekka (nadu breakfast)
untitledusername (tin fins)
goyf (grixis thoracle)
Parrot Robar (GW Monsters)
Muto (Nadu seeker walk)
osiris (sans red oath)
CreeperFishStix (UB Tempo)
GenghisPrawn (Esper)
cjhobbes (UR Delver)  
lexi (unknown)
  `);

cockatrice.processWeek(april6Decks, 'apr6', april6Pairings);


const april13Pairings = [
  [ [ 'parrot robar', 'forrend' ], [ 2, 0 ] ],
  [ [ 'remi', 'muto' ], [ 2, 1 ] ],
  [ [ 'rekka', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'thepersiaconquerer' ], [ 2, 0 ] ],
  [ [ 'untitledusername', 'vaaste' ], [ 2, 0 ] ],
  [ [ 'cowsmoogo', 'goyf' ], [ 2, 0 ] ],
  [ [ 'yeti', 'fitzy' ], [ 2, 0 ] ],
  
  [ [ 'genghisprawn', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'yeti', 'cowsmoogo' ], [ 1, 2 ] ],
  [ [ 'rekka', 'untitledusername' ], [ 2, 0 ] ],
  [ [ 'remi', 'fitzy' ], [ 2, 0 ] ],
  [ [ 'forrend', 'goyf' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'BYE' ], [ 2, 0 ] ],

  [ [ 'remi', 'rekka' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'cowsmoogo' ], [ 2, 0 ] ],
  [ [ 'some user zoe', 'forrend' ], [ 2, 1 ] ],
  [ [ 'goyf', 'BYE' ], [ 2, 1 ] ],

  [ [ 'genghisprawn', 'remi' ], [ 2, 0 ] ]
];

const april13Decks = parseDecklists(`
genghisprawn (esper red)
remi (paradox academy)
rekka (cephalid breakfast)
cowsmoogo (lotus breach)
some user zoe (wurg midrange)
parrot robar (flash hulk)
forrend (esper red)
goyf (citadel storm)
fitzy (4c time sieve)
yeti (temur slaw)
untitledusername (lotus breach)
muto (dredge)
thepersiaconquerer (sans red nadu)
vaaste (gw monsters)
`);

cockatrice.processWeek(april13Decks, 'apr13', april13Pairings);


const april20Pairings = [
  [ [ 'thepersiaconquerer', 'rekka' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'vaaste' ], [ 2, 0 ] ],
  [ [ 'marekek', 'p0glet' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'forceofwill' ], [ 2, 1 ] ],
  [ [ 'goyf', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'cowsmoogo', 'kanave' ], [ 2, 1 ] ],
  [ [ 'trevor', 'lexi' ], [ 2, 0 ] ],
  
  [ [ 'cowsmoogo', 'thepersiaconquerer' ], [ 2, 0 ] ],
  [ [ 'marekek', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'trevor' ], [ 2, 0 ] ],
  [ [ 'p0glet', 'goyf' ], [ 2, 1 ] ],
  [ [ 'rekka', 'some user zoe' ], [ 2, 0 ] ],
  [ [ 'lexi', 'forceofwill' ], [ 2, 0 ] ],
  [ [ 'kanave', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'parrot robar', 'marekek' ], [ 2, 1 ] ],
  [ [ 'cowsmoogo', 'goyf' ], [ 2, 0 ] ],
  [[ 'rekka', 'p0glet' ],[ 2, 1 ]],
  [ [ 'genghisprawn', 'trevor' ], [ 2, 0 ] ],
  [ [ 'lexi', 'kanave' ], [ 2, 0 ] ],
  [ [ 'forceofwill', 'BYE' ], [ 2, 0 ] ],

  [ [ 'parrot robar', 'cowsmoogo' ], [ 2, 1 ] ]
];

const april20Decks = parseDecklists(`
marekek (simic eldrazi)
lexi (abzan midrange)
thepersiaconquerer (mono blue academy)
some user zoe (abzan aggro)
cowsmoogo (mono-black moon)
goyf (turbo citadel)
rekka (cephalid breakfast)
p0glet (golgari lands)
genghisprawn (esper red)
trevor (jeskai)
parrot robar (temur time-shift)
kanave (mardu tokens)
vaaste (unknown)
forceofwill (unknown)
  `);

cockatrice.processWeek(april20Decks, 'apr20', april20Pairings);

const april27Pairings = [
  [ [ 'parrot robar', 'ccpyro' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'eking' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'forrend' ], [ 2, 1 ] ],
  [ [ 'untitledusername', 'rekka' ], [ 2, 0 ] ],
  [ [ 'placuszek', 'remi' ], [ 2, 1 ] ],
  [ [ 'lexi', 'goyf' ], [ 2, 1 ] ],

  [ [ 'placuszek', 'untitledusername' ], [ 2, 0 ] ],
  [ [ 'parrot robar', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'lexi' ], [ 2, 0 ] ],
  [ [ 'eking', 'rekka' ], [ 2, 1 ] ],
  [ [ 'forrend', 'remi' ], [ 2, 1 ] ],
  [ [ 'goyf', 'BYE' ], [ 2, 0 ] ],

  [ [ 'genghisprawn', 'placuszek' ], [ 2, 0 ] ],
  [ [ 'forrend', 'parrot robar' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'untitledusername' ], [ 2, 0 ] ],
  [ [ 'eking', 'lexi' ], [ 2, 1 ] ],
  [ [ 'rekka', 'remi' ], [ 2, 0 ] ]
];

const april27Decks = parseDecklists(`
GenghisPrawn (Esper Red)
Forrend (Esper Stoneblade)
Parrot Robar (4c Scapeshift)
Kelvin (WB Death and Taxes)
Placuszek (Jeskai Blinkrange)
EKing (Naya Monsters)
Lexi (Abzan Nightmare)
UntitledUserName (Grixis Moon)
Rekka (enigma academy)
Goyf (Gruul Blitz)
CCpyro (5c Legends)
Remi (Boomer Academy)
  `);

cockatrice.processWeek(april27Decks, 'apr27', april27Pairings);


const may4Pairings = [
  [ [ 'kelvin', 'cowsmoogo' ], [ 2, 0 ] ],        
  [ [ 'gobi', 'forceofwill' ], [ 2, 0 ] ],        
  [ [ 'smnk', 'idioticavocado' ], [ 2, 1 ] ],     
  [ [ 'remi', 'thepersiaconquerer' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'lexi' ], [ 2, 1 ] ],       
  [ [ 'impulse27', 'p0glet' ], [ 2, 0 ] ],        
  [ [ 'therealemt', 'genghisprawn' ], [ 2, 0 ] ], 
  [ [ 'eking', 'vaaste' ], [ 2, 1 ] ],
  [ [ 'stew', 'goyf' ], [ 2, 0 ] ],

  [['impulse27','gobi'], [ 2, 0 ]],
  [ [ 'smnk', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'remi', 'therealemt' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'stew' ], [ 2, 1 ] ],       
  [ [ 'eking', 'goyf' ], [ 2, 1 ] ],
  [ [ 'p0glet', 'lexi' ], [ 0, 1 ] ],
  [ [ 'cowsmoogo', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'smnk', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'remi', 'eking' ], [ 2, 1 ] ],
  [ [ 'therealemt', 'gobi' ], [ 2, 1 ] ],
  [ [ 'stew', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'lexi', 'goyf' ], [ 2, 1 ] ],
  [ [ 'p0glet', 'BYE' ], [ 2, 0 ] ],

  [ [ 'remi', 'smnk' ], [ 2, 0 ] ],
];

const may4Decks = parseDecklists(`
remi (academy combo)
smnk (esper doomsday)
parrot robar (ub tempo)
eking (naya monsters)
lexi (abzan nightmare)
goyf (uw tempo)
stew (paradox academy)
kelvin (ub reanimator)
genghisprawn (esper red)
cowsmoogo (mono black moon)
p0glet (abzan lands)
impulse27 (sans red oath control)
gobi (unknown)
therealemt (omni tinker)
thepersiaconquerer (gw lands)
forceofwill (unknown)
idioticavocado (unknown)
vaaste (unknown)
`);

cockatrice.processWeek(may4Decks, 'may4', may4Pairings);

const may11Pairings = [
  [ [ 'therealemt', 'remi' ], [ 2, 0 ] ],
  [ [ 'kanave', 'untitledusername' ], [ 2, 0 ] ],
  [ [ 'goyf', 'cowsmoogo' ], [ 2, 0 ] ],
  [ [ 'rekka', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'monday', 'lexi' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'monday', 'therealemt' ], [ 2, 1 ] ],
  [ [ 'goyf', 'rekka' ], [ 2, 0 ] ],
  [ [ 'kanave', 'parrot robar' ], [ 2, 0 ] ],
  [ [ 'remi', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'untitledusername', 'lexi' ], [ 2, 1 ] ],
  [ [ 'cowsmoogo', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'kanave', 'goyf' ], [ 2, 0 ] ],
  [ [ 'remi', 'monday' ], [ 2, 1 ] ],
  [ [ 'therealemt', 'rekka' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'untitledusername' ], [ 2, 0 ] ],
  [ [ 'lexi', 'genghisprawn' ], [ 1, 1 ] ],
];

const may11Decks = parseDecklists(`
Kanave (UW Tempo)
Parrot Robar (UB Tempo)
Goyf (UW Tempo)
Remi (Boomer Academy)
TherealEMT (Omni-Tinker)
Monday (Medium Red)
UntitledUserName (Tin Fins)
Cowsmoogo (Black Moon Combo)
Rekka (Enigma Academy)
Lexi (Abzan Flash Control)
GenghisPrawn (Esper Red Control)
  `);

cockatrice.processWeek(may11Decks, 'may11', may11Pairings);


const may18Pairings = [
  [ [ 'j0h0', 'parrot robar' ], [ 2, 0 ] ],    
  [ [ 'cowsmoogo', 'therealemt' ], [ 2, 0 ] ], 
  [ [ 'genghisprawn', 'cjhobbes' ], [ 2, 1 ] ],
  [ [ 'kanave', 'remi' ], [ 2, 0 ] ],
  [ [ 'goyf', 'rekka' ], [ 2, 1 ] ],

  [ [ 'j0h0', 'kanave' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'cowsmoogo' ], [ 2, 0 ] ],
  [ [ 'goyf', 'cjhobbes' ], [ 2, 0 ] ],        
  [ [ 'rekka', 'therealemt' ], [ 2, 1 ] ],
  [ [ 'remi', 'BYE' ], [ 2, 0 ] ],        
  
  [ [ 'j0h0', 'genghisprawn' ], [ 2, 0 ] ],
  [ [ 'goyf', 'kanave' ], [ 2, 0 ] ],
  [[ 'rekka', 'cowsmoogo' ],[ 2, 1 ]],
  [ [ 'remi', 'cjhobbes' ], [ 2, 0 ] ],
  [ [ 'therealemt', 'BYE' ], [ 2, 0 ] ],

  [ [ 'j0h0', 'goyf' ], [ 2, 0 ] ]
];

const may18Decks = parseDecklists(`
j0h0 - Mississippi
Goyf - UW Tempo
Prawn - EsperG
Rekka - Nadu Breakfast
Remi - Boomer Academy
Kanave - UW Tempo
CowsMooGo - No Black Slushi
therealEMT - Show and Tell Academy
Parrot robar - Boros Taxes
cjhobbes - UR Tempo/Spellslinger  
  `);

cockatrice.processWeek(may18Decks, 'may18', may18Pairings);


const may25Pairings = [
  [ [ 'goyf', 'morb' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'j0h0' ], [ 2, 0 ] ],
  [ [ 'forrend', 'creatorbeats' ], [ 2, 0 ] ],
  [ [ 'parrot robar', 'lilnat' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'BYE' ], [ 2, 0 ] ],

  [ [ 'kelvin', 'parrot robar' ], [ 2, 0 ] ],
  [ [ 'goyf', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'forrend', 'lilnat' ], [ 2, 0 ] ],
  [ [ 'creatorbeats', 'morb' ], [ 2, 0 ] ],
  [ [ 'j0h0', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'forrend', 'goyf' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'creatorbeats' ], [ 2, 1 ] ],
  [ [ 'lilnat', 'BYE' ], [ 2, 0 ] ],

  [ [ 'forrend', 'kelvin' ], [ 2, 1 ] ]
];


const may25Decks = parseDecklists(`
morb (jeskai slushie)
goyf (esper citadel storm)
genghisprawn (esper green)
j0h0 (mississippi river)
creatorbeats (esper reanimator)
forrend (esper red)
parrot robar (dimir tempo)
lilnat (grixis midrange)
kelvin (golgari cradle control)
`);

cockatrice.processWeek(may25Decks, 'may25', may25Pairings);


const june1Pairings = [
  [ [ 'kelvin', 'goyf' ], [ 2, 0 ] ],
  [ [ 'eking', 'cowsmoogo' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'parrot robar' ], [ 2, 1 ] ], 
  [ [ 'morb', 'jerk ken' ], [ 1, 1 ] ],
  [ [ 'thepersiaconquerer', 'forrend' ], [ 2, 0 ] ],
  [ [ 'j0h0', 'smnk' ], [ 2, 1 ] ],
  [ [ 'stew', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'j0h0', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'eking', 'stew' ], [ 0, 2 ] ],
  [ [ 'genghisprawn', 'thepersiaconquerer' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'morb' ], [ 2, 0 ] ],
  [ [ 'smnk', 'jerk ken' ], [ 2, 1 ] ],
  [ [ 'forrend', 'goyf' ], [ 2, 0 ] ],
  [ [ 'cowsmoogo', 'BYE' ], [ 2, 0 ] ],

  [ [ 'stew', 'j0h0' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'forrend' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'parrot robar' ], [ 2, 0 ] ],
  [ [ 'eking', 'smnk' ], [ 2, 1 ] ],
  [ [ 'morb', 'cowsmoogo' ], [ 2, 0 ] ],
  [ [ 'goyf', 'jerk ken' ], [ 2, 1 ] ],

  [ [ 'genghisprawn', 'stew' ], [ 2, 1 ] ]
];

const june1Decks = parseDecklists(`
Stew (Paradox Academy)
GenghisPrawn (Esper Green)
J0H0 (5c Cascade)
EKing (Naya Monsters)
Morb (Esper Green)
Kelvin (WB Taxes)
ThePersiaConquerer (Mono U Academy)
Parrot Robar (UB Tempo)
Forrend (Esper Red)
Cowsmoogo (Oath Slushie)
Smnk (Mono U Control)
Goyf (Citadel Storm)
Jerk Ken (Death and Taxes)
`);

cockatrice.processWeek(june1Decks, 'jun1', june1Pairings);


const jun8Pairings = [
  [ [ 'eking', 'kanave' ], [ 2, 1 ] ],       
  [ [ 'cowsmoogo', 'morb' ], [ 2, 1 ] ],     
  [ [ 'parrot robar', 'lexi' ], [ 2, 1 ] ],  
  [ [ 'lilnat', 'forrend' ], [ 2, 0 ] ],     
  [ [ 'george', 'jerk ken' ], [ 2, 1 ] ],    
  [ [ 'smnk', 'j0h0' ], [ 2, 0 ] ],
  [ [ 'wyvernflight', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'creatorbeats' ], [ 2, 0 ] ],
  [ [ 'goyf', 'p0glet' ], [ 2, 1 ] ],        
  [ [ 'remi', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'eking', 'goyf' ], [ 2, 0 ] ],
  [ [ 'smnk', 'lilnat' ], [ 2, 1 ] ],
  [ [ 'george', 'cowsmoogo' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'kelvin' ], [ 2, 1 ] ],
  [ [ 'remi', 'wyvernflight' ], [ 2, 0 ] ],  
  [ [ 'p0glet', 'morb' ], [ 2, 1 ] ],
  [ [ 'forrend', 'lexi' ], [ 2, 1 ] ],
  [ [ 'j0h0', 'genghisprawn' ], [ 2, 0 ] ],  
  [ [ 'kanave', 'jerk ken' ], [ 2, 0 ] ],    
  
  [ [ 'parrot robar', 'george' ], [ 2, 0 ] ],
  [ [ 'eking', 'smnk' ], [ 2, 0 ] ],
  [ [ 'remi', 'p0glet' ], [ 2, 1 ] ],
  [ [ 'forrend', 'cowsmoogo' ], [ 2, 0 ] ],
  [ [ 'kelvin', 'lilnat' ], [ 2, 1 ] ],
  [ [ 'wyvernflight', 'j0h0' ], [ 2, 0 ] ],
  [ [ 'goyf', 'kanave' ], [ 2, 0 ] ],
  [ [ 'lexi', 'jerk ken' ], [ 2, 1 ] ],
  [ [ 'morb', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'kelvin', 'eking' ], [ 2, 1 ] ],
  [ [ 'remi', 'parrot robar' ], [ 2, 0 ] ],

  [ [ 'kelvin', 'remi' ], [ 2, 0 ] ]
];

const jun8Decks = parseDecklists(`
EKing (Naya Monsters)
Parrot Robar (Bant Slaw)
Remi (Paradox Academy)
Kelvin (WB Taxes)
Goyf (Turbo Citadel)
Smnk (Esper Red Control)
Wyvernflight (Grixis Discard)
George (Oath Control)
Forrend (Jeskai Tempo)
LilNat (Grixis Tempo)
p0glet (Paradox Academy)
Lexi (Affinity Pod)
Kanave (Nadu Breakfast)
Cowsmoogo (Oath Control)
J0H0 (5c Cascade)
Morb (Esper Green Control)
Creatorbeats (Mardu Humans)
GenghisPrawn (Esper Green Control)
Jerk Ken (Death and Taxes)
`);

cockatrice.processWeek(jun8Decks, 'jun8', jun8Pairings);


const jun15Pairings = [
  [ [ 'goldtravysty', 'camm31' ], [ 2, 0 ] ],
  [ [ 'j0h0', 'genghisprawn' ], [ 2, 1 ] ],
  [ [ 'untitledusername', 'lexi' ], [ 2, 1 ] ],       
  [ [ 'goyf', 'forrend' ], [ 2, 1 ] ],
  [ [ 'eking', 'jerk ken' ], [ 2, 1 ] ],
  [ [ 'cowsmoogo', 'hivemindfullness' ], [ 2, 1 ] ],  
  [ [ 'kelvin', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'boxlaunch', 'thepersiaconquerer' ], [ 2, 1 ] ],
  
  [ [ 'cowsmoogo', 'boxlaunch' ], [ 2, 0 ] ],
  [ [ 'j0h0', 'untitledusername' ], [ 2, 1 ] ],       
  [ [ 'goldtravysty', 'eking' ], [ 2, 1 ] ],
  [ [ 'goyf', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'jerk ken', 'hivemindfullness' ], [ 2, 1 ] ],
  [ [ 'lexi', 'forrend' ], [ 2, 0 ] ],
  [ [ 'parrot robar', 'genghisprawn' ], [ 2, 1 ] ],   
  [ [ 'camm31', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'goyf', 'j0h0' ], [ 2, 0 ] ],
  [ [ 'goldtravysty', 'cowsmoogo' ], [ 2, 1 ] ],
  [ [ 'boxlaunch', 'jerk ken' ], [ 2, 0 ] ],
  [ [ 'parrot robar', 'lexi' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'untitledusername' ], [ 2, 1 ] ],
  [ [ 'hivemindfullness', 'kelvin' ], [ 2, 1 ] ],
  
  [ [ 'goldtravysty', 'goyf' ], [ 2, 1 ] ]
];

const jun15Decks = parseDecklists(`
GoldTravysty (Rakdos Aggro)
Goyf (CItadel Storm)
Camm31 (Rug Cheats)
Cowsmoogo (Rakdos Aggro)
J0H0 (5c Cascade)
BoxLaunch (Esper Threeanimator)
Parrot Robar (Bant Slaw)
EKing (Naya Monsters)
Kelvin (Gruul Prowess)
GenghisPrawn (Esper Green Control)
Jerk Ken (BW Death and Taxes)
HiveMindfullness (Boros Midrange)
UntitledUserName (Lotus Breach)
Lexi (5c Affinity)
ThePersiaConquerer (Esper Legends)
Forrend (Esper Red Control)
`);

cockatrice.processWeek(jun15Decks, 'jun15', jun15Pairings);


const jun22Pairings = [
  [ [ 'cowsmoogo', 'camm31' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'lexi' ], [ 2, 1 ] ],
  [ [ 'j0h0', 'plantbro' ], [ 2, 0 ] ],
  [ [ 'nogooddecisions', 'remi' ], [ 2, 1 ] ],
  [ [ 'jerk ken', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'goyf', 'creatorbeats' ], [ 2, 1 ] ],
  [ [ 'untitledusername', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'untitledusername', 'jerk ken' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'cowsmoogo' ], [ 2, 1 ] ],
  [ [ 'nogooddecisions', 'j0h0' ], [ 2, 1 ] ],
  [ [ 'goyf', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'camm31', 'plantbro' ], [ 2, 0 ] ],
  [ [ 'remi', 'creatorbeats' ], [ 2, 0 ] ],
  [ [ 'lexi', 'BYE' ], [ 2, 0 ] ],
  
  [ [ 'genghisprawn', 'untitledusername' ], [ 2, 1 ] ],
  [ [ 'nogooddecisions', 'goyf' ], [ 2, 1 ] ],
  [ [ 'j0h0', 'lexi' ], [ 2, 0 ] ],
  [ [ 'camm31', 'jerk ken' ], [ 1, 1 ] ],
  [ [ 'remi', 'plantbro' ], [ 2, 1 ] ],

  [ [ 'genghisprawn', 'nogooddecisions' ], [ 2, 1 ] ]
];

const jun22Decks = parseDecklists(`
Nogooddecisions (Jund Delirium)
GenghisPrawn (Czech Midrange)
UntitledUserName (Grixis Tempo)
J0H0 (5c Cascade)
Remi (Paradox Academy)
Goyf (Citadel Storm)
Jerk Ken (UW Control)
Camm31 (RUG Cheats)
Lexi (5c Affinity)
Cowsmoogo (Rakdos Aggro)
Creatorbeats (UW Control)
PlantBro (UW Battlebots)
Parrot Robar (Bant Slaw)
`);

cockatrice.processWeek(jun22Decks, 'jun22', jun22Pairings);

const jun29Pairings = [
  [ [ 'plantbro', 'j0h0' ], [ 2, 1 ] ],
  [ [ 'eking', 'cjhobbes' ], [ 2, 1 ] ],
  [ [ 'thepersiaconquerer', 'wyvernflight' ], [ 2, 1 ] ],
  [ [ 'some user zoe', 'untitledusername' ], [ 2, 0 ] ],
  [ [ 'lexi', 'jerk ken' ], [ 2, 0 ] ],
  [ [ 'parrot robar', 'goyf' ], [ 2, 1 ] ],
  [ [ 'therealemt', 'genghisprawn' ], [ 2, 1 ] ],

  [ [ 'some user zoe', 'eking' ], [ 2, 0 ] ],
  [ [ 'therealemt', 'parrot robar' ], [ 2, 1 ] ],
  [ [ 'thepersiaconquerer', 'plantbro' ], [ 2, 1 ] ],
  [ [ 'j0h0', 'lexi' ], [ 2, 1 ] ],
  [ [ 'wyvernflight', 'cjhobbes' ], [ 2, 1 ] ],
  [ [ 'goyf', 'jerk ken' ], [ 2, 1 ] ],
  [ [ 'genghisprawn', 'BYE' ], [ 2, 0 ] ],

  [ [ 'some user zoe', 'therealemt' ], [ 2, 0 ] ],
  [ [ 'genghisprawn', 'thepersiaconquerer' ], [ 2, 1 ] ],
  [ [ 'j0h0', 'goyf' ], [ 2, 0 ] ],
  [ [ 'lexi', 'plantbro' ], [ 1, 1 ] ],
  [ [ 'wyvernflight', 'jerk ken' ], [ 2, 1 ] ],
];

const jun29Decks = parseDecklists(`
some user zoe (GRw Monsters)
TherealEMT (4c Citadel)
Genghis Prawn (Czech)
ThePersiaConquerer (Czech Humans)
Wyvernflight (Grixis Discard)
J0H0 (5c Cascade)
PlantBro (UW Affinity)
lexi (5c Affinity)
EKing (Naya Monsters)
Parrot Robar (UB Tempo)
Goyf (Turbo Citadel)
UntitledUserName (4c Tempo)
cjhobbes (Mono U Tempo)
Jerk Ken (UW Control)
`);

cockatrice.processWeek(jun29Decks, 'jun29', jun29Pairings);

const jul6Pairings = [
  [ [ 'goyf', 'plantbro' ], [ 2, 0 ] ],      
  [ [ 'lexi', 'j0h0' ], [ 2, 1 ] ],  
  [ [ 'harju', 'parrot robar' ], [ 2, 1 ] ], 
  [ [ 'minstrel', 'remi' ], [ 2, 0 ] ],      
  [ [ 'rekka', 'forceofwill' ], [ 2, 0 ] ],  
  [ [ 'wyvernflight', 'kelvin' ], [ 2, 0 ] ],      

  [ [ 'lexi', 'wyvernflight' ], [ 2, 1 ] ],  
  [ [ 'minstrel', 'rekka' ], [ 2, 1 ] ],     
  [ [ 'harju', 'goyf' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'kelvin' ], [ 2, 0 ] ],
  [ [ 'j0h0', 'plantbro' ], [ 2, 0 ] ],      
  [ [ 'remi', 'forceofwill' ], [ 2, 0 ] ],   

  [ [ 'minstrel', 'lexi' ], [ 2, 0 ] ],
  [ [ 'j0h0', 'harju' ], [ 2, 1 ] ],
  [ [ 'parrot robar', 'wyvernflight' ], [ 2, 0 ] ],
  [ [ 'goyf', 'remi' ], [ 2, 1 ] ],
  [ [ 'kelvin', 'plantbro' ], [ 2, 0 ] ]
];

const jul6Decks = parseDecklists(`
Minstrel (RUGW SeekerShift)
Lexi (5c Affinity)
Harju (Bant Black Nadu)
J0H0 (Mississippi River)
Parrot Robar (BW DnT)
Goyf (Blue Moon)
Rekka (Nadu Breakfast)
Remi (Boomer Academy)
Wyvernflight (Grixis Discard)
Kelvin (Wide Czech)
PlantBro (Abzan Maverick)
FORCEOFWILL (Paradox Academy)
`);

cockatrice.processWeek(jul6Decks, 'jul6', jul6Pairings);


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
