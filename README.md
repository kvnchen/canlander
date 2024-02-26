## Overview

A model for tracking Magic: the Gathering tournament data and computing aggregate statistics.

Raw tournament text data in the form of pairings and match results are parsed and converted into object data. From there, aggregate statistics are calculated and can be outputted to the .CSV format to be viewed in spreadsheet form.

An example spreadsheet output of Canadian Highlander tournament data can be viewed [here](https://docs.google.com/spreadsheets/d/1LovcvsBuGnNAwnd1BvNrD2B_NjFkchicZsMytgFHRL0/edit?ouid=117765922889893696775&usp=sheets_home&ths=true).


## Usage

todo


## Documentation

#### Player

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

- name
- eventCount
- totalPoints
- decks
- deckCount
- average
- trophies
- pointsBreakdown
- wins
- losses
- draws
- winrate
- activeStreak
- longestStreak
- properName
- topCuts
- elo
- peakElo

**Methods**

