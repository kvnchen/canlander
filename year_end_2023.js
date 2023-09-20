const { playerNameMap } = require('./playerDictionary');

// currently sorted by best 3 finishes
const asyncPlayers = `Impulse27
nikheizen
JWyatt
raicune
Yeti
JadedTrekkie
Paul Pilz
Tr33vs
Violet Eventide
DuckyOfDarkness
Oogablast
hyunkim87
TherealEMT
solemnstorm
JazzE
kelvin
Fry Guy
FalseBlu
0rley
Purukogi
HymntoThoth
Cpt_camel
joelh
Horde of Notions
Gerrimeister
Cyclopes8
Wilbur
Anticipate27
Fluffasaurus
that guy
SWinters
Shakashaka
Hal
TheOneWhoKnocks
Axelia
Harju
cymbalman
funkyzeit
Johann
uberlegen
Rick
Vaaste
Duunko
Chronicle
WonkyWombat
KannNicks
dorbird
adonalsium
PlichoW
some user
MoxPebble
swannie
jcknox
GenghisPrawn
Jorbin
Aphrodite
yucca
zGenghisPrawn
stevie0037
QzzyOzzy
chirurgeon
Yannic
violetblight
NotGene
Jamesses
Dentro
crayon
ABQ Cowman
Pvcpipe21
Minstrel
Jamesses
gao
mehall
NanderG
Odin
Orchid Kudi
NekoMachine
sean.barry
HalcyonPrime
Tao
Bailite`.toLowerCase().split('\n').map((name) => { return playerNameMap[name] ? playerNameMap[name] : name; });


const weeklyByTopCut = `Impulse
Yeti
Axelia
GenghisPrawn
Cyclopes8
hyunkim87
Fry Guy
Purukogi
Wilbur
JWyatt
kelvin
Harju
WonkyWombat
JazzE
Yannic
Cymbalman
Calhove
Tr33vs
Minstrel
TicTaco
JadedTrekkie
Violet Eventide
Swinters
Raicune
KannNicks
Dentro
JeTheWeary
Xeaji
Vaaste
Shakashaka
Funkyzeit
Rick
Hal
Paul Pilz
Delaelle
TherealEMT
Jamesses
BIRD | Jonas
violetblight
Sir Nikheizen
Mehall
Bailite
Oogablast
Chirurgeon
Adonalsium
Broken myth
UnusualThunder
Sam
Gabe Sorci
Johann
Deggers
Andrew and Drew
Robin Sorensen
Cat_Island
Praenomen
Macintose
solemn_storm
Demonic tutor
Lance larsen
Some user
Gerrimeister
Pickleplop
Ashtoreth
Dynethor
Yucca
Thunder_Farts
Kaleb Gloriouswolfman
Odin
NotFreduardo
Codypsizzle
Cpt_camel
Jingoistical
Sean barry
Forceofwill
Zoy
That guy
Elijah
Idiotic avocado
Nanderg
Falseblu
Qzzyozzy
Morganwyrd
Jdizl
Uberlegen
A_shadybadger`.toLowerCase().split('\n').map((name) => { return playerNameMap[name] ? playerNameMap[name] : name; });


function getCombinedRanking(asyncPlayers, weeklyPlayers) {
  const combinedRanking = [];
  const rankedPlayers = {};

  let ap, wp;

  function addPlayer(p) {
    if (!rankedPlayers[p]) {
      combinedRanking.push(p);
      rankedPlayers[p] = combinedRanking.length;
    }
  }
  
  for (let i = 0; i < asyncPlayers.length; i++) {
    ap = asyncPlayers[i];
    wp = weeklyPlayers[i];

    addPlayer(ap);
    addPlayer(wp);
  }

  return combinedRanking;
}

console.log(getCombinedRanking(asyncPlayers, weeklyByTopCut).join('\n'));
