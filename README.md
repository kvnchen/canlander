## Overview

A model for tracking Magic: the Gathering tournament data and computing aggregate statistics.

Raw tournament text data in the form of pairings and match results are parsed and converted into object data. From there, aggregate statistics are calculated and can be outputted to the .CSV format to be viewed in spreadsheet form.

An example spreadsheet output of Canadian Highlander tournament data can be viewed [here](https://docs.google.com/spreadsheets/d/1LovcvsBuGnNAwnd1BvNrD2B_NjFkchicZsMytgFHRL0/edit?ouid=117765922889893696775&usp=sheets_home&ths=true).


## Usage

Start by creating a new `Series`, which will represent a tournament series.

```
const { Series, parseDecklists, pairingsToStandings, parseReporting, formatCSV, makeComparator, writeAll } = require('./eventData.js');

const webcam = new Series();
```

Raw match result text can be copied from the source and parsed into Array form.

```
const raw = `
Cyclopes8 2-0 JWyatt (Drops, on Jeskai) 
Fry Guy 2 - 1 Axelia
Harju 2-1 calhove3141
Vaaste 2-0 jDIZL
Hurrex 2 - 0 Sp1derclaw
Azuth 2 0 genghisprawn
UnusualThunder 2-1 Impulse27
Minstrel 1-2 Champlet
UnusualThunder 2-0 Azuth
Harju 2-0 Champlet
Fry Guy 2-1 Cyclopes8
Minstrel 2-0 Sp1derclaw 
jDIZL 2-0 Axelia
Prawn 2-1 Calhove
Hurrex 2 -1 Vaaste
Vaaste (Mono W D&T) 2-0 Prawn (Czech Pile) 
Cyclopes8 (GWb Monsters) 2-0 jDIZL (Jund Madness)
Harju (UWbg Vault) 2-0 Fry Guy (Gruul Monsters)
Azuth (dark jeskai welder) vs Champlet ( RW equipment taxes) 
UnusualThunder (MonoW DnT) 2-1 Hurrex (UR High Tide)
Azuth 2 0 champlet
calhove3141(Naya Init) 2-1 Sp1derclaw ( 4C aristocrats)
UnusualThunder 2-1 Harju for the finals
`;

const jan6Pairings = parseReporting(raw); 
```

Where `jan6Pairings` will look like:

```
[
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
]
```

Decklists can be parsed from a raw form.

```
const rawDecks = `
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
`;

const jan6Decks = parseDecklists(rawDecks);
```

Where `jan6Decks` will look like:

```
{
  unusualthunder: 'death and taxes',
  harju: 'uwbg vault',
  hurrex: 'ur high tide',
  'fry guy': 'gruul monsters',
  azuth: 'dark jeskai welder',
  vaaste: 'death and taxes',
  cyclopes8: 'gwb monsters',
  champlet: 'rw equipment taxes',
  calhove: 'naya initiative',
  jdizl: 'jund madness',
  genghisprawn: 'czech midrange',
  minstrel: 'czech midrange',
  impulse27: 'jeskai midrange',
  jwyatt: 'jeskai midrange',
  axelia: '5c walker omnitell',
  sp1derclaw: '4c aristocrats'
}
```

Process the data into the Series with `processWeek()`.

`webcam.processWeek(pairingsToStandings(jan6Pairings), jan6Decks, 'jan6', jan6Pairings);`

You can now inspect a wide range of statistical and aggregate data for players, decks, or tournaments in the Series.

```
console.log(webcam.events['jan6'].decks['deathAndTaxes']);

/*
Deck {
  name: 'Death and Taxes',
  played: 2,
  totalPoints: 18,
  trophies: 1,
  uniquePilots: Set(2) { 'unusualthunder', 'vaaste' },
  average: '9.00',
  pointsBreakdown: { '6': 1, '12': 1 },
  nicknames: Set(1) { 'DnT' },
  wins: 6,
  losses: 1,
  draws: 0,
  winrate: '0.86',
  topCuts: 1,
  key: 'deathAndTaxes',
  colors: 'W',
  archetypes: Set(2) { 'aggro', 'midrange' },
  matchups: {}
}
*/
```

To output data to a CSV file for spreadsheet use, first format the object data into CSV format, then write it to a file.

```
const deckCsv = formatCSV(webcam, 'decks', ['name', 'played', 'uniquePilots', 'totalPoints', 'average', 'winrate', 'nonMirrorWinrate', 'trophies','topCuts', 'pointsBreakdown', 'colors', 'archetypes', 'nicknames'], null, makeComparator(9)); // 9 is the index of 2-x or better, the column used to sort rows

writeAll([deckCsv], ['csv/2024/decks.csv']);
```



## Documentation

### Class Player

The Player object tracks all tournament data for a specific person.

**Constructor**

`new Player(name, events, total, deck, trophies, record)`

Parameters

`name`: the player's name  
`events`: how many events this player has participated in  
`total`: the total number of match points earned  
`deck`: the string key of the deck this player played in their first event  
`trophies`: how many events this player has won  
`record`: an array of `[wins, losses, draws]` for the player's first event  

**Properties**

`name`  
`eventCount`  
`totalPoints`  
`decks`  
`deckCount`  
`average`  
`trophies`  
`pointsBreakdown`  
`wins`  
`losses`  
`draws`  
`winrate`  
`activeStreak`  
`longestStreak`  
`properName`  
`topCuts`  
`elo`  
`peakElo`  

**Methods**

**Player.prototype.update()**

Given args representing a player's performance in an event, updates the player's overall statistics.

Parameters

`points`  
`deck`  
`trophy`  
`record`  

**Player.prototype.mostPlayedDecks()**

Returns a sorted array of the n most played deck names in descending order

Parameters

`n`: The number of decks to return. Defaults to 3 if undefined.

---

### Class Deck

The Deck object tracks tournament performance data for a given deck.

Here, a "deck" refers to a unique pair of a color combination and a subarchetype. That is to say, Grixis Tempo and Izzet Tempo are separated as two distinct decks in this model, as are Gruul Midrange/Monsters and Gruul Aggro/Blitz.

Many decks that contain multiple colors do not actually play said colors at equal rates. Decks "splashing" a few cards of another color can  have the splashed color denoted in the name in lowercase like in "UWr Control". How such splashes are represented is up to the user to determine.

**Constructor**

`new Deck({ name, played, totalPoints, trophies, uniquePilots, record, colors, archetypes, nicknames, key })`

Parameters

`props`: An object containing args
- `name`
- `played`
- `totalPoints`
- `trophies`
- `uniquePilots`
- `record`
- `colors`
- `archetypes`
- `nicknames`
- `key`

**Methods**

**Deck.prototype.update()**

Updates a deck's performance statistics with data from an event.

Parameters

`pilot`  
`points`  
`trophy`  
`record`  

**Deck.prototype.updateMatchup()**

Updates a deck's head-to-head matchup statistics against another deck with data from an event.

Parameters

`deckName`  
`record`  

**Deck.prototype.getNonmirrorWinrate()**

Returns a deck's overall winrate excluding matches against itself.

Parameters

None

