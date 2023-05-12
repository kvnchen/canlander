
const AZORIUS = 'WU';
const DIMIR = 'UB';
const RAKDOS = 'BR';
const GRUUL = 'RG';
const SELESNYA = 'WG';
const ORZHOV = 'WB';
const BOROS = 'WR';
const GOLGARI = 'BG';
const IZZET = 'UR';
const SIMIC = 'UG';

const ESPER = 'WUB';
const GRIXIS = 'UBR';
const JUND = 'BRG';
const NAYA = 'WRG';
const BANT = 'WUG';

const JESKAI = 'WUR';
const MARDU = 'WBR';
const TEMUR = 'URG';
const ABZAN = 'WBG';
const SULTAI = 'UBG';

const WUBRG = 'WUBRG';

const MIDRANGE = new Set(['midrange']);
const CONTROL = new Set(['control']);
const COMBO = new Set(['combo']);
const AGGRO = new Set(['aggro']);
const TEMPO = new Set(['tempo']);
const STAX = new Set(['stax']);

const deckDictionary = {
    'deathAndTaxes': {
        name: 'Death and Taxes',
        colors: 'W',
        archetypes: new Set(['aggro', 'midrange']),
        nicknames: new Set(['DnT'])
    },
    'jeskaiMidrange': {
        name: 'Jeskai Midrange',
        colors: JESKAI,
        archetypes: MIDRANGE
    },
    'jundPyromancer': {
        name: 'Jund Pyromancer',
        colors: JUND,
        archetypes: MIDRANGE
    },
    'wurgOmnath': {
        name: 'WURG Omnath',
        colors: 'WURG',
        archetypes: new Set(['control', 'midrange']),
        nicknames: new Set(['Spearmint', 'Jeskai Green', 'Hot Bant', '4C Omnath'])
    },
    'rakdosMidrange': {
        name: 'Rakdos Midrange',
        colors: RAKDOS,
        archetypes: MIDRANGE,
        nicknames: new Set(['Black Moon'])
    },
    'borosDeathAndTaxes': {
        name: 'Boros Death and Taxes',
        colors: BOROS,
        archetypes: new Set(['aggro', 'midrange']),
        nicknames: new Set(['Blood and Taxes'])
    },
    'patternRector': {
        name: 'Pattern Rector',
        colors: ABZAN,
        archetypes: COMBO,
        nicknames: new Set(['Sandy B'])
    },
    'temurControl': {
        name: 'Temur Control',
        colors: TEMUR,
        archetypes: CONTROL
    },
    'wurgSeekerWalk': {
        name: 'WURG Seeker Walk',
        colors: 'WURG',
        archetypes: new Set(['combo', 'midrange']),
        nicknames: new Set(['Spearmint Seeker', '4C Seeker Walk', 'Sans Black Seeker'])
    },
    'nayaPod': {
        name: 'Naya Pod',
        colors: NAYA,
        archetypes: COMBO
    },
    'lotuslessBreachStorm': {
        name: 'Lotusless Breach Storm',
        colors: WUBRG,
        archetypes: COMBO
    },
    'borosTokens': {
        name: 'Boros Tokens',
        colors: BOROS,
        archetypes: AGGRO
    },
    'dimirHighTide': {
        name: 'Dimir High Tide',
        colors: DIMIR,
        archetypes: COMBO
    },
    '5CSuperfriends': {
        name: '5C Superfriends',
        colors: WUBRG,
        archetypes: COMBO,
        nicknames: new Set(['5C Walker Omnitell'])
    },
    'sultaiMidrange': {
        name: 'Sultai Midrange',
        colors: SULTAI,
        archetypes: MIDRANGE,
        nicknames: new Set(['BUG Midrange'])
    },
    'jeskaiWelder': {
        name: 'Jeskai Welder',
        colors: JESKAI,
        archetypes: MIDRANGE,
        nicknames: new Set(['Jeskai Artifact Midrange'])
    },
    'monoBlackAggro': {
        name: 'Mono Black Aggro',
        colors: 'B',
        archetypes: AGGRO,
        nicknames: new Set(['Sui Black'])
    },
    'blueMoon': {
        name: 'Blue Moon',
        colors: IZZET,
        archetypes: CONTROL
    },
    'esperVault': {
        name: 'Esper Time Vault',
        colors: ESPER,
        archetypes: COMBO,
        nicknames: new Set(['Esper Vault'])
    },
    'monoBlueControl': {
        name: 'Mono Blue Control',
        colors: 'U',
        archetypes: CONTROL
    },
    'flashOath': {
        name: 'Flash Oath',
        colors: 'WUBG',
        archetypes: COMBO
    },
    'jundInitiative': {
        name: 'Jund Initiative',
        colors: JUND,
        archetypes: MIDRANGE
    },
    'doomsDragon': {
        name: 'DoomsDragon',
        colors: GRIXIS,
        archetypes: COMBO
    },
    'eggs': {
        name: 'Eggs',
        colors: WUBRG,
        archetypes: COMBO
    },
    'nayaWinota': {
        name: 'Naya Winota',
        colors: NAYA,
        archetypes: MIDRANGE
    },
    'wubgMidrange': {
        name: 'WUBG Midrange',
        colors: 'WUBG',
        archetypes: MIDRANGE
    },
    'abzanLands': {
        name: 'Abzan Lands',
        colors: ABZAN,
        archetypes: MIDRANGE
    },
    'zombies': {
        name: 'Zombies',
        colors: 'B',
        archetypes: MIDRANGE
    },
    'mediumRed': {
        name: 'Medium Red',
        colors: 'R',
        archetypes: AGGRO
    },
    'esperControl': {
        name: 'Esper Control',
        colors: ESPER,
        archetypes: CONTROL
    },
    'simicMerfolk': {
        name: 'Simic Merfolk',
        colors: SIMIC,
        archetypes: MIDRANGE,
        nicknames: new Set(['UG Merfolk'])
    },
    'czechMidrange': {
        name: 'Czech Midrange',
        colors: 'UBRG',
        archetypes: MIDRANGE,
        nicknames: new Set(['Sans White Midrange'])
    },
    '4CPod': {
        name: '4C Pod',
        colors: null, // unknown colors
        archetypes: COMBO
    },
    'azoriusControl': {
        name: 'Azorius Control',
        colors: AZORIUS,
        archetypes: CONTROL,
        nicknames: new Set(['UW Control'])
    },
    'lotusBreachStorm': {
        name: 'Lotus Breach Storm',
        colors: WUBRG,
        archetypes: COMBO
    },
    'grixisWelder': {
        name: 'Grixis Welder',
        colors: GRIXIS,
        archetypes: new Set(['combo', 'midrange'])
    },
    'esperThoracle': {
        name: 'Esper Thoracle',
        colors: ESPER,
        archetypes: new Set(['combo', 'control'])
    },
    'esperInitiative': {
        name: 'Esper Initiative',
        colors: ESPER,
        archetypes: MIDRANGE
    },
    'bantEnchantress': {
        name: 'Bant Enchantress',
        colors: BANT,
        archetypes: COMBO
    },
    '4CWelder': {
        name: '4C Welder',
        colors: null,
        archetypes: new Set(['combo', 'midrange'])
    },
    'jeskaiControl': {
        name: 'Jeskai Control',
        colors: JESKAI,
        archetypes: CONTROL
    },
    'sultaiDoomsday': {
        name: 'Sultai Doomsday',
        colors: SULTAI,
        archetypes: COMBO,
        nicknames: new Set(['BUG Doomsday'])
    },
    'nayaInitiative': {
        name: 'Naya Initiative',
        colors: NAYA,
        archetypes: MIDRANGE
    },
    'redDeckBins': {
        name: 'Red Deck Bins',
        colors: 'R',
        archetypes: AGGRO
    },
    '5CSeekerWalk': {
        name: '5C Seeker Walk',
        colors: WUBRG,
        archetypes: new Set(['combo', 'midrange'])
    },
    'bantMidrange': {
        name: 'Bant Midrange',
        colors: BANT,
        archetypes: MIDRANGE
    },
    'jeskaiVault': {
        name: 'Jeskai Vault',
        colors: JESKAI,
        archetypes: new Set(['combo', 'midrange'])
    },
    'deadGuyDragons': {
        name: 'Dead Guy Dragons',
        colors: MARDU,
        archetypes: COMBO
    },
    'grixisThoracle': {
        name: 'Grixis Thoracle',
        colors: GRIXIS,
        archetypes: new Set(['combo', 'tempo'])
    },
    'rakdosPyromancer': {
        name: 'Rakdos Pyromancer',
        colors: RAKDOS,
        archetypes: MIDRANGE
    },
    'jundGoblins': {
        name: 'Jund Goblins',
        colors: JUND,
        archetypes: new Set(['aggro', 'combo'])
    },
    'grixisTinkerReanimator': {
        name: 'Grixis Tinker Reanimator',
        colors: GRIXIS,
        archetypes: COMBO
    },
    ubrgThoracle: {
        name: 'UBRG Thoracle',
        colors: 'UBRG',
        archetypes: new Set(['combo', 'midrange']),
        nicknames: new Set(['Sans White Thoracle'])
    },
    deathAndGoblins: {
        name: 'Death and Goblins',
        colors: BOROS,
        archetypes: AGGRO,
        nicknames: new Set(['Boros Goblins', 'RW Goblins'])
    },
    redDeckWins: {
        name: 'Red Deck Wins',
        colors: 'R',
        archetypes: AGGRO,
        nicknames: new Set(['Burn', 'Mono Red Aggro', 'RDW'])
    },
    temurMoon: {
        name: 'Temur Moon',
        colors: TEMUR,
        archetypes: CONTROL,
        nicknames: new Set(['RUG Moon'])
    },
    gruulHoof: {
        name: 'Gruul Cradlehoof',
        colors: GRUUL,
        archetypes: COMBO,
        nicknames: new Set(['Hoof', 'RG Hoof', 'GR Hoof'])
    },
    blackMold: {
        name: 'Black Mold',
        colors: GOLGARI,
        archetypes: AGGRO,
        nicknames: new Set(['Black Mould'])
    },
    wbrgInitiative: {
        name: 'WBRG Initiative',
        colors: 'WBRG',
        archetypes: MIDRANGE,
        nicknames: new Set(['Blood Initiative'])
    },
    selesnyaLegends: {
        name: 'Selesnya Legends',
        colors: SELESNYA,
        archetypes: MIDRANGE,
        nicknames: new Set(['GW Legends', 'GW Maverick'])
    },
    dimirNinjas: {
        name: 'Dimir Ninjas',
        colors: DIMIR,
        archetypes: TEMPO,
        nicknames: new Set(['UB Ninjas'])
    },
    temurMidrange: {
        name: 'Temur Midrange',
        colors: TEMUR,
        archetypes: MIDRANGE,
        nicknames: new Set(['RUG Midrange'])
    },
    sultaiThoracle: {
        name: 'Sultai Thoracle',
        colors: SULTAI,
        archetypes: new Set(['combo', 'control']),
        nicknames: new Set(['BUG Thoracle'])
    },
    grixisTempoDoomsday: {
        name: 'Grixis Tempo Doomsday',
        colors: GRIXIS,
        archetypes: new Set([ 'combo', 'tempo'])
    },
    esperDoomsday: {
        name: 'Esper Doomsday',
        colors: ESPER,
        archetypes: new Set(['combo'])
    },
    gruulAggro: {
        name: 'Gruul Aggro',
        colors: GRUUL,
        archetypes: AGGRO,
        nicknames: new Set(['Gruul Monsters', 'RG Aggro'])
    },
    wurgLands: {
        name: 'WURG Lands Midrange',
        colors: 'WURG',
        archetypes: MIDRANGE,
        nicknames: new Set(['Sans Black Lands'])
    },
    yawgmothJacuzzi: {
        name: 'Yawgmoth\'s Jacuzzi',
        colors: 'WUBG',
        archetypes: COMBO
    },
    wurgInitiative: {
        name: 'WURG Initiative',
        colors: 'WURG',
        archetypes: MIDRANGE,
        nicknames: new Set(['Omnath Initiative', 'Sans Black Initiative'])
    },
    abzanMidrange: {
        name: 'Abzan Midrange',
        colors: ABZAN,
        archetypes: MIDRANGE
    },
    rakdosGoblins: {
        name: 'Rakdos Goblins',
        colors: RAKDOS,
        archetypes: new Set(['aggro', 'combo']),
        nicknames: new Set(['BR Goblins'])
    },
    jeskaiBreach: {
        name: 'Jeskai Breach',
        colors: JESKAI,
        archetypes: new Set(['combo', 'control']),
        nicknames: new Set(['Jeskai Slushie'])
    },
    aluren: {
        name: 'Aluren',
        colors: 'WUBG',
        archetypes: new Set(['combo', 'midrange'])
    },
    jundAristocrats: {
        name: 'Jund Aristocrats',
        colors: JUND,
        archetypes: new Set(['combo', 'midrange'])
    },
    paradoxAcademy: {
        name: 'Paradox Academy',
        colors: 'WURG',
        archetypes: COMBO
    },
    academyPrison: {
        name: 'Academy Prison',
        colors: 'WUBG',
        archetypes: new Set(['combo', 'stax'])
    },
    grixisReanimator: {
        name: 'Grixis Reanimator',
        colors: GRIXIS,
        archetypes: COMBO
    },
    borosEquipment: {
        name: 'Boros Equipment',
        colors: BOROS,
        archetypes: AGGRO,
        nicknames: new Set(['RW Equipment'])
    },
    orzhovTokens: {
        name: 'Orzhov Tokens',
        colors: ORZHOV,
        archetypes: MIDRANGE,
        nicknames: new Set(['BW Tokens'])
    },
    theRock: {
        name: 'The Rock',
        colors: GOLGARI,
        archetypes: MIDRANGE,
        nicknames: new Set(['Golgari Midrange'])
    },
    '4CWinota': {
        name: '4C Winota',
        colors: 'WBRG',
        archetypes: MIDRANGE,
        nicknames: new Set(['Blood Winota'])
    },
    marduDeadGuyAle: {
        name: 'Mardu Dead Guy Ale',
        colors: MARDU,
        archetypes: MIDRANGE,
    },
    '4CArtifacts': {
        name: '4C Artifacts',
        colors: null,
        archetypes: null
    },
    '4CInitiative': {
        name: '4C Initiative',
        colors: null,
        archetypes: MIDRANGE
    },
    unknown: {
        name: 'Unknown',
        colors: null,
        archetypes: null
    },
    wbrgAristocrats: {
        name: 'WBRG Aristocrats',
        colors: 'WBRG',
        archetypes: new Set(['combo', 'midrange'])
    },
    flashHulk: {
        name: 'Flash Hulk',
        colors: 'WUBG',
        archetypes: COMBO
    },
    wurgTempo: {
        name: 'WURG Tempo',
        colors: 'WURG',
        archetypes: TEMPO,
        nicknames: new Set(['Jeskai Green Tempo', 'Spearmint Tempo'])
    },
    esperDreadnaughtPrison: {
        name: 'Esper Dreadnaught Prison',
        colors: ESPER,
        archetypes: STAX,
    },
    orzhovControl: {
        name: 'Orzhov Control',
        colors: ORZHOV,
        archetypes: CONTROL
    },
    atraxaAndTaxes: {
        name: 'Atraxa and Taxes',
        colors: 'WUBG',
        archetypes: MIDRANGE
    },
    abzanAristocrats: {
        name: 'Abzan Aristocrats',
        colors: ABZAN,
        archetypes: new Set(['combo', 'midrange'])
    },
    '5CLandsCombo': {
        name: '5C Lands Combo',
        colors: WUBRG,
        archetypes: COMBO
    },
    grixisMidrange: {
        name: 'Grixis Midrange',
        colors: GRIXIS,
        archetypes: MIDRANGE
    },
    abzanRecSur: {
        name: 'Abzan RecSur',
        colors: ABZAN,
        archetypes: MIDRANGE
    },
    wurgTokens: {
        name: 'WURG Tokens',
        colors: 'WURG',
        archetypes: MIDRANGE
    },
    temurTempo: {
        name: 'Temur Tempo',
        colors: TEMUR,
        archetypes: TEMPO
    },
    jundMidrange: {
        name: 'Jund Midrange',
        colors: JUND,
        archetypes: MIDRANGE
    },
    monoGreenElves: {
        name: 'Mono Green Elves',
        colors: 'G',
        archetypes: new Set(['combo', 'midrange'])
    },
    golgariElves: {
        name: 'Golgari Elves',
        colors: GOLGARI,
        archetypes: new Set(['combo', 'midrange'])
    },
    abzanEnchantress: {
        name: 'Abzan Enchantress',
        colors: ABZAN,
        archetypes: new Set(['combo', 'midrange'])
    },
    sultaiLands: {
        name: 'Sultai Lands',
        colors: SULTAI,
        archetypes: MIDRANGE
    },
    marduAristocrats: {
        name: 'Mardu Aristocrats',
        colors: MARDU,
        archetypes: new Set(['combo', 'midrange'])
    },
    orzhovDeathAndTaxes: {
        name: 'Orzhov Death and Taxes',
        colors: ORZHOV,
        archetypes: new Set(['aggro', 'midrange'])
    },
    jundInfect: {
        name: 'Jund Infect',
        colors: JUND,
        archetypes: AGGRO
    },
    wubgReanimator: {
        name: 'WUBG Reanimator',
        colors: 'WUBG',
        archetypes: COMBO,
        nicknames: new Set(['Dark Bant Reanimator'])
    },
    azoriusFlash: {
        name: 'Azorius Flash',
        colors: AZORIUS,
        archetypes: new Set(['control','midrange'])
    },
    marduPyromancer: {
        name: 'Mardu Pyromancer',
        colors: MARDU,
        archetypes: MIDRANGE
    },
    grixisTempo: {
        name: 'Grixis Tempo',
        colors: GRIXIS,
        archetypes: TEMPO
    },
    mediumGreen: {
        name: 'Medium Green',
        colors: 'G',
        archetypes: MIDRANGE
    },
    humansAndTaxes: {
        name: 'Humans and Taxes',
        colors: 'W',
        archetypes: AGGRO
    },
    wubgSeekerInitiative: {
        name: 'WUBG Seeker Initiative',
        colors: 'WUBG',
        archetypes: new Set(['combo', 'midrange'])
    },
    azoriusBreach: {
        name: 'Azorius Breach',
        colors: AZORIUS,
        archetypes: new Set(['combo', 'control'])
    },
    wubgOathControl: {
        name: 'WUBG Oath Control',
        colors: 'WUBG',
        archetypes: new Set(['combo', 'control'])
    },
    gruulRamp: {
        name: 'Gruul Ramp',
        colors: GRUUL,
        archetypes: MIDRANGE
    }
};

const deckNameMap = {
    'death and taxes': 'deathAndTaxes',
    'death & taxes': 'deathAndTaxes',
    'w death & taxes': 'deathAndTaxes',
    'dnt': 'deathAndTaxes',
    'd&t': 'deathAndTaxes',
    'mono w dnt': 'deathAndTaxes',
    'mono-w dnt': 'deathAndTaxes',
    'mono w d&t': 'deathAndTaxes',
    'mono-w d&t': 'deathAndTaxes',

    'jeskai midrange': 'jeskaiMidrange',

    'jund pyromancer': 'jundPyromancer',
    'jund pyro': 'jundPyromancer',

    'wurg omnath': 'wurgOmnath',
    '4c omnath': 'wurgOmnath',
    'spearmint': 'wurgOmnath',
    'spearmint jeskai': 'wurgOmnath',
    'spearmint midrange': 'wurgOmnath',
    'jeskai green': 'wurgOmnath',
    'hot bant': 'wurgOmnath',
    'jeskai spearmint midrange': 'wurgOmnath',

    'rakdos midrange': 'rakdosMidrange',
    'br midrange': 'rakdosMidrange',
    'rb midrange': 'rakdosMidrange',
    'black moon': 'rakdosMidrange',

    'boros death and taxes': 'borosDeathAndTaxes',
    'boros d&t': 'borosDeathAndTaxes',
    'blood and taxes': 'borosDeathAndTaxes',
    'rw dnt': 'borosDeathAndTaxes',
    'rw taxes': 'borosDeathAndTaxes',

    'pattern rector': 'patternRector',
    'abzan pattern rector': 'patternRector',
    'sandy b': 'patternRector',

    'temur control': 'temurControl',
    'rug control': 'temurControl',
    'rug moon': 'temurControl',

    'wurg seeker walk': 'wurgSeekerWalk',
    'seeker walk sans b': 'wurgSeekerWalk',
    'sans b seeker walk': 'wurgSeekerWalk',
    'sans b seekerwalk': 'wurgSeekerWalk',
    'spearmint seeker': 'wurgSeekerWalk',
    'hot bant seeker walk': 'wurgSeekerWalk',

    'naya pod': 'nayaPod',
    
    'lotusless breach storm': 'lotuslessBreachStorm',
    'lotusless breach': 'lotuslessBreachStorm',
    'breach storm sans lotus': 'lotuslessBreachStorm',

    'boros tokens': 'borosTokens',
    'rw tokens': 'borosTokens',

    'dimir high tide': 'dimirHighTide',
    'ub high tide': 'dimirHighTide',

    '5c superfriends': '5CSuperfriends',
    '5c walkers': '5CSuperfriends',
    '5c walkers omnitell': '5CSuperfriends',
    '5c walkeromnitell': '5CSuperfriends',

    'sultai midrange': 'sultaiMidrange',
    'bug midrange': 'sultaiMidrange',

    'jeskai welder': 'jeskaiWelder',
    'jeskai painter': 'jeskaiWelder',

    'mono black aggro': 'monoBlackAggro',
    'mono-black aggro': 'monoBlackAggro',
    'mono b aggro': 'monoBlackAggro',
    'mono-b aggro': 'monoBlackAggro',
    'monob aggro': 'monoBlackAggro',
    'suicide black': 'monoBlackAggro',
    'sui black': 'monoBlackAggro',

    'blue moon': 'blueMoon',
    'ur moon': 'blueMoon',

    'esper vault': 'esperVault',
    'esper time vault': 'esperVault',

    'mono blue control': 'monoBlueControl',
    'mono-blue control': 'monoBlueControl',

    'flash oath': 'flashOath',

    'jund initiative': 'jundInitiative',

    'doomsdragon': 'doomsDragon',

    'eggs': 'eggs',

    'naya winota': 'nayaWinota',
    '\'naya\' winota': 'nayaWinota',
    '\"naya\" winota': 'nayaWinota',
    '\“naya\” winota': 'nayaWinota', // what the fuck

    'wubg midrange': 'wubgMidrange',
    '4c sans red midrange': 'wubgMidrange',
    '4c midrange sans red': 'wubgMidrange',
    '4c midrange no red': 'wubgMidrange',

    'abzan lands': 'abzanLands',
    'abzan lands midrange': 'abzanLands',

    'zombies': 'zombies',

    'medium red': 'mediumRed',

    'esper control': 'esperControl',

    'simic merfolk': 'simicMerfolk',
    'ug merfolk': 'simicMerfolk',

    'czech midrange': 'czechMidrange',
    'ubrg midrange': 'czechMidrange',
    'rugb midrange': 'czechMidrange',
    'czech bears': 'czechMidrange',
    'czech pile': 'czechMidrange',
    'czech pyromancer': 'czechMidrange',

    '4c pod': '4CPod',

    'azorius control': 'azoriusControl',
    'uw control': 'azoriusControl',

    'lotus breach storm': 'lotusBreachStorm',
    'lotus breach': 'lotusBreachStorm',
    
    'grixis welder': 'grixisWelder',
    'grixis tinker painter': 'grixisWelder',
    'grixis painter': 'grixisWelder',

    'esper thoracle': 'esperThoracle',

    'esper initiative': 'esperInitiative',
    'esper blink initiative': 'esperInitiative',

    'bant enchantress': 'bantEnchantress',

    '4c welder': '4CWelder',

    'jeskai control': 'jeskaiControl',

    'sultai doomsday': 'sultaiDoomsday',
    'bug doomsday': 'sultaiDoomsday',

    'naya initiative': 'nayaInitiative',
    'naya turbo initiative': 'nayaInitiative',

    'red deck bins': 'redDeckBins',

    '5c seeker walk': '5CSeekerWalk',

    'bant midrange': 'bantMidrange',

    'jeskai vault': 'jeskaiVault',
    'jeskai vault twin': 'jeskaiVault',
    'jeskai painter vault': 'jeskaiVault',
    'jeskai welder vault': 'jeskaiVault',

    'dead guy dragons': 'deadGuyDragons',

    'grixis thoracle': 'grixisThoracle',

    'rakdos pyromancer': 'rakdosPyromancer',
    'br pyromancer': 'rakdosPyromancer',

    'jund goblins': 'jundGoblins',

    'grixis tinker reanimator': 'grixisTinkerReanimator',
    
    'ubrg thoracle': 'ubrgThoracle',
    '4c kess thoracle': 'ubrgThoracle',

    'death and goblins': 'deathAndGoblins',
    'goblins and taxes': 'deathAndGoblins',

    'red deck wins': 'redDeckWins',
    'rdw': 'redDeckWins',
    'mono red aggro': 'redDeckWins',
    'mono r aggro': 'redDeckWins',
    'mono-r aggro': 'redDeckWins',

    'gruul hoof': 'gruulHoof',
    'gruul cradlehoof': 'gruulHoof',
    'rg hoof': 'gruulHoof',
    'gr hoof': 'gruulHoof',

    'temur moon': 'temurMoon',
    'rug moon': 'temurMoon',

    'black mold': 'blackMold',
    'black mould': 'blackMold',

    'blood initiative': 'wbrgInitiative',
    'wbrg initiative': 'wbrgInitiative',

    'wg legends': 'selesnyaLegends',
    'gw legends': 'selesnyaLegends',
    'selesnya legends': 'selesnyaLegends',

    'ub ninjas': 'dimirNinjas',
    'dimir ninjas': 'dimirNinjas',

    'temur midrange': 'temurMidrange',
    'rug midrange': 'temurMidrange',

    'gruul aggro': 'gruulAggro',
    'rg aggro': 'gruulAggro',
    'gr aggro': 'gruulAggro',
    'gr stompy': 'gruulAggro',
    'rg stompy': 'gruulAggro',
    'gruul stompy': 'gruulAggro',
    'gruul monsters': 'gruulAggro',

    'bug thoracle': 'sultaiThoracle',
    'sultai thoracle': 'sultaiThoracle',

    'grixis tempo doomsday': 'grixisTempoDoomsday',
    
    'esper doomsday': 'esperDoomsday',

    'wurg lands midrange': 'wurgLands',
    'wurg lands': 'wurgLands',
    'sans b lands midrange': 'wurgLands',
    'sans b lands': 'wurgLands',
    'spearmint lands midrange': 'wurgLands',
    'spearmint lands': 'wurgLands',

    'yawgmoth jacuzzi': 'yawgmothJacuzzi',
    'yawgmoth\'s jacuzzi': 'yawgmothJacuzzi',
    'yawgmoths jacuzzi': 'yawgmothJacuzzi',

    'wurg initiative': 'wurgInitiative',
    'sans black initiative': 'wurgInitiative',
    'hot bant initiative': 'wurgInitiative',
    'jeskai green initiative': 'wurgInitiative',

    'abzan midrange': 'abzanMidrange',
    'abzan delirium': 'abzanMidrange',
    'abzan hatebears': 'abzanMidrange',

    'br goblins': 'rakdosGoblins',
    'rb goblins': 'rakdosGoblins',
    'rakdos goblins': 'rakdosGoblins',

    'jeskai slushie': 'jeskaiBreach',
    'jeskai breach': 'jeskaiBreach',

    'aluren': 'aluren',

    'jund aristocrats': 'jundAristocrats',

    'paradox academy': 'paradoxAcademy',

    'academy prison': 'academyPrison',

    'grixis reanimator': 'grixisReanimator',

    'boros equipment': 'borosEquipment',
    'rw equipment': 'borosEquipment',

    'bw tokens': 'orzhovTokens',
    'orzhov tokens': 'orzhovTokens',

    'the rock': 'theRock',
    'bg midrange': 'theRock',
    'golgari midrange': 'theRock',

    '4c winota': '4CWinota',

    'mardu dead guy ale': 'marduDeadGuyAle',

    '4c artifacts': '4CArtifacts',
    '4c initiative': '4CInitiative',

    unknown: 'unknown',

    'wbrg aristocrats': 'wbrgAristocrats',

    'flash hulk': 'flashHulk',

    'wurg tempo': 'wurgTempo',

    'esper dreadnaught prison': 'esperDreadnaughtPrison',
    'esper dreadnought': 'esperDreadnaughtPrison',
    'esper dreadnought prison': 'esperDreadnaughtPrison',
    'esper dreadnaught tezzerator': 'esperDreadnaughtPrison',
    'esper dreadnought tezzerator': 'esperDreadnaughtPrison',

    'orzhov pw control': 'orzhovControl',

    'atraxa and taxes': 'atraxaAndTaxes',

    'abzan aristocrats': 'abzanAristocrats',

    '5c lands combo': '5CLandsCombo',

    'grixis midrange': 'grixisMidrange',

    'abzan recsur': 'abzanRecSur',
    'abzan rec-sur': 'abzanRecSur',

    'wurg tokens': 'wurgTokens',
    'wurg pool party tokens': 'wurgTokens',
    
    'rug tempo': 'temurTempo',
    'temur tempo': 'temurTempo',

    'jund midrange': 'jundMidrange',

    'mono green elves': 'monoGreenElves',
    'mono-green elves': 'monoGreenElves',

    'gb elves': 'golgariElves',
    'bg elves': 'golgariElves',
    'golgari elves': 'golgariElves',

    'abzan enchantress': 'abzanEnchantress',
    'abzan sanctum stompy': 'abzanEnchantress',

    'sultai lands': 'sultaiLands',
    'bug lands': 'sultaiLands',

    'mardu aristocrats': 'marduAristocrats',

    'wb d&t': 'orzhovDeathAndTaxes',
    'bw d&t': 'orzhovDeathAndTaxes',
    'orzhov death and taxes': 'orzhovDeathAndTaxes',

    'jund infect': 'jundInfect',

    'dark bant reanimator': 'wubgReanimator',

    'uw flash': 'azoriusFlash',

    'mardu pyromancer': 'marduPyromancer',

    'grixis tempo': 'grixisTempo',

    'medium green': 'mediumGreen',

    'humans and taxes': 'humansAndTaxes',

    'wubg seeker initiative': 'wubgSeekerInitiative',

    'azorius breach': 'azoriusBreach',

    'wubg oath control': 'wubgOathControl',

    'gruul ramp': 'gruulRamp',

};

const families = {
    seekerWalk: {
        name: 'Seeker Walk',
        variants: new Set(['wurgSeekerWalk', '5CSeekerWalk', 'wubgSeekerInitiative']),
    },
    deathAndTaxes: {
        name: 'Death and Taxes',
        variants: new Set(['deathAndTaxes', 'borosDeathAndTaxes', 'orzhovDeathAndTaxes', 'humansAndTaxes'])
    },
    welder: {
        name: 'Welder',
        variants: new Set(['jeskaiWelder', 'grixisWelder', '4CWelder'])
    },
    breachStorm: {
        name: 'Breach Storm',
        variants: new Set(['lotuslessBreachStorm', 'lotusBreachStorm'])
    },
    timeVault: {
        name: 'Time Vault',
        variants: new Set(['esperVault', 'jeskaiVault'])
    },
    thoracle: {
        name: 'Thoracle',
        variants: new Set(['esperThoracle', 'grixisThoracle', 'ubrgThoracle', 'sultaiThoracle', 'sultaiDoomsday', 'esperDoomsday', 'grixisTempoDoomsday'])
    },
    goblins: {
        name: 'Goblins',
        variants: new Set(['jundGoblins', 'deathAndGoblins', 'rakdosGoblins'])
    },
    birthingPod: {
        name: 'Birthing Pod',
        variants: new Set(['nayaPod', '4CPod', 'patternRector'])
    },
    lands: {
        name: 'Lands',
        variants: new Set(['abzanLands', 'wurgLands', '5CLandsCombo', 'sultaiLands'])
    },
    initiativeMidrange: {
        name: 'Initiative Midrange',
        variants: new Set(['jundInitiative', 'nayaInitiative', 'esperInitiative', 'wbrgInitiative', 'wurgInitiative', '4CInitiative', 'wubgSeekerInitiative'])
    },
    blueMoon: {
        name: 'Blue Moon',
        variants: new Set(['blueMoon', 'temurMoon'])
    },
    blueMidrange: {
        name: 'Blue Midrange',
        variants: new Set(['jeskaiMidrange', 'sultaiMidrange', 'wubgMidrange', 'czechMidrange', 'bantMidrange', 'temurMidrange', 'grixisMidrange'])
    },
    aristocrats: {
        name: 'Aristocrats',
        variants: new Set(['jundAristocrats', 'abzanAristocrats', 'wbrgAristocrats', 'marduAristocrats'])
    },
    reanimator: {
        name: 'Reanimator',
        variants: new Set(['grixisReanimator', 'grixisTinkerReanimator', 'wubgReanimator'])
    }
}

exports.deckDictionary = deckDictionary;
exports.deckNameMap = deckNameMap;
exports.families = families;
