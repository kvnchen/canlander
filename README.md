## Overview

A model for tracking Magic: the Gathering tournament data and computing aggregate statistics.

Raw tournament text data in the form of pairings and match results are parsed and converted into object data. From there, aggregate statistics are calculated and can be outputted to the .CSV format to be viewed in spreadsheet form.

An example spreadsheet output of Canadian Highlander tournament data can be viewed [here](https://docs.google.com/spreadsheets/d/1LovcvsBuGnNAwnd1BvNrD2B_NjFkchicZsMytgFHRL0/edit?ouid=117765922889893696775&usp=sheets_home&ths=true).


## Usage

todo


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

