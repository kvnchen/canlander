
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

const deckDictionary = {
    'deathAndTaxes': {
        name: 'Death and Taxes',
        colors: 'W',
        archetypes: new Set(['aggro', 'midrange'])
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
        archetypes: new Set(['control', 'midrange'])
    },
    'rakdosMidrange': {
        name: 'Rakdos Midrange',
        colors: RAKDOS,
        archetypes: MIDRANGE
    },
    'borosDeathAndTaxes': {
        name: 'Boros Death and Taxes',
        colors: BOROS,
        archetypes: new Set(['aggro', 'midrange'])
    },
    'patternRector': {
        name: 'Pattern Rector',
        colors: ABZAN,
        archetypes: COMBO
    },
    'temurControl': {
        name: 'Temur Control',
        colors: TEMUR,
        archetypes: CONTROL
    },
    'wurgSeekerWalk': {
        name: 'WURG Seeker Walk',
        colors: 'WURG',
        archetypes: new Set(['combo', 'midrange'])
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
        archetypes: COMBO
    },
    'sultaiMidrange': {
        name: 'Sultai Midrange',
        colors: SULTAI,
        archetypes: MIDRANGE
    },
    'jeskaiWelder': {
        name: 'Jeskai Welder',
        colors: JESKAI,
        archetypes: new Set(['midrange', 'combo'])
    },
    'monoBlackAggro': {
        name: 'Mono Black Aggro',
        colors: 'B',
        archetypes: AGGRO
    },
    'blueMoon': {
        name: 'Blue Moon',
        colors: IZZET,
        archetypes: CONTROL
    },
    'esperVault': {
        name: 'Esper Time Vault',
        colors: ESPER,
        archetypes: COMBO
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
        archetypes: MIDRANGE
    },
    'czechMidrange': {
        name: 'Czech Midrange',
        colors: 'UBRG',
        archetypes: MIDRANGE
    },
    '4CPod': {
        name: '4C Pod',
        colors: null, // unknown colors
        archetypes: COMBO
    },
    'azoriusControl': {
        name: 'Azorius Control',
        colors: AZORIUS,
        archetypes: CONTROL
    },
    'lotusBreachStorm': {
        name: 'Lotus Breach Storm',
        colors: WUBRG,
        archetypes: COMBO
    },
    'grixisWelder': {
        name: 'Grixis Welder',
        colors: GRIXIS,
        archetypes: new Set(['midrange', 'combo'])
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
        archetypes: new Set(['midrange', 'combo'])
    },
    'jeskaiControl': {
        name: 'Jeskai Control',
        colors: JESKAI,
        archetypes: CONTROL
    },
    'sultaiDoomsday': {
        name: 'Sultai Doomsday',
        colors: SULTAI,
        archetypes: COMBO
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
        archetypes: new Set(['midrange', 'combo'])
    },
    'bantMidrange': {
        name: 'Bant Midrange',
        colors: BANT,
        archetypes: MIDRANGE
    },
    'jeskaiVaultTwin': {
        name: 'Jeskai Vault Twin',
        colors: JESKAI,
        archetypes: COMBO
    },
    'deadGuyDragons': {
        name: 'Dead Guy Dragons',
        colors: MARDU,
        archetypes: COMBO
    },
    'grixisThoracle': {
        name: 'Grixis Thoracle',
        colors: GRIXIS,
        archetypes: COMBO
    },
    'rakdosPyromancer': {
        name: 'Rakdos Pyromancer',
        colors: RAKDOS,
        archetypes: MIDRANGE
    },
    'jundGoblins': {
        name: 'Jund Goblins',
        colors: JUND,
        archetypes: new Set(['combo', 'aggro'])
    },
    'tinkerReanimator': {
        name: 'Tinker Reanimator',
        colors: GRIXIS,
        archetypes: new Set(['combo'])
    },
    'ubrgThoracle': {
        name: 'UBRG Thoracle',
        colors: 'UBRG',
        archetypes: COMBO
    },
    'deathAndGoblins': {
        name: 'Death and Goblins',
        colors: BOROS,
        archetypes: new Set(['aggro'])
    },
    'redDeckWins': {
        name: 'Red Deck Wins',
        colors: 'R',
        archetypes: new Set(['aggro'])
    }
};

const deckNameMap = {
    'death and taxes': 'deathAndTaxes',
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
    'jeskai green': 'wurgOmnath',

    'rakdos midrange': 'rakdosMidrange',
    'br midrange': 'rakdosMidrange',

    'boros death and taxes': 'borosDeathAndTaxes',
    'boros d&t': 'borosDeathAndTaxes',
    'blood and taxes': 'borosDeathAndTaxes',
    'rw dnt': 'borosDeathAndTaxes',
    'rw taxes': 'borosDeathAndTaxes',

    'pattern rector': 'patternRector',
    'sandy b': 'patternRector',

    'temur control': 'temurControl',
    'rug control': 'temurControl',
    'rug moon': 'temurControl',

    'wurg seeker walk': 'wurgSeekerWalk',
    'seeker walk sans b': 'wurgSeekerWalk',
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

    'sultai midrange': 'sultaiMidrange',
    'bug midrange': 'sultaiMidrange',

    'jeskai welder': 'jeskaiWelder',
    'jeskai painter': 'jeskaiWelder',
    'jeskai painter vault': 'jeskaiWelder',
    'jeskai welder vault': 'jeskaiWelder',

    'mono black aggro': 'monoBlackAggro',
    'mono-black aggro': 'monoBlackAggro',
    'mono b aggro': 'monoBlackAggro',
    'mono-b aggro': 'monoBlackAggro',
    'suicide black': 'monoBlackAggro',
    'sui black': 'monoBlackAggro',

    'blue moon': 'blueMoon',

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

    'wubg midrange': 'wubgMidrange',
    '4c sans red midrange': 'wubgMidrange',
    '4c midrange sans red': 'wubgMidrange',
    '4c midrange no red': 'wubgMidrange',

    'abzan lands': 'abzanLands',

    'zombies': 'zombies',

    'medium red': 'mediumRed',

    'esper control': 'esperControl',

    'simic merfolk': 'simicMerfolk',
    'ug merfolk': 'simicMerfolk',

    'czech midrange': 'czechMidrange',
    'ubrg midrange': 'czechMidrange',
    'czech bears': 'czechMidrange',
    'czech pile': 'czechMidrange',

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

    'naya initiative': 'nayaInitiative',

    'red deck bins': 'redDeckBins',

    '5c seeker walk': '5CSeekerWalk',

    'bant midrange': 'bantMidrange',

    'jeskai vault twin': 'jeskaiVaultTwin',

    'dead guy dragons': 'deadGuyDragons',

    'grixis thoracle': 'grixisThoracle',

    'rakdos pyromancer': 'rakdosPyromancer',
    'br pyromancer': 'rakdosPyromancer',

    'jund goblins': 'jundGoblins',

    'tinker reanimator': 'tinkerReanimator',
    
    'ubrg thoracle': 'ubrgThoracle',

    'death and goblins': 'deathAndGoblins',
    'goblins and taxes': 'deathAndGoblins',

    'red deck wins': 'redDeckWins',
    'rdw': 'redDeckWins',
    'mono red aggro': 'redDeckWins',
    'mono r aggro': 'redDeckWins',
    'mono-r aggro': 'redDeckWins',
};

const families = {
    'seekerWalk': {
        name: 'Seeker Walk',
        variants: new Set(['wurgSeekerWalk', '5CSeekerWalk']),
    },
    'deathAndTaxes': {
        name: 'Death and Taxes',
        variants: new Set(['deathAndTaxes', 'borosDeathAndTaxes'])
    },
    'welder': {
        name: 'Welder',
        variants: new Set(['jeskaiWelder', 'grixisWelder', '4CWelder'])
    },
    'breachStorm': {
        name: 'Breach Storm',
        variants: new Set(['lotuslessBreachStorm', 'lotusBreachStorm'])
    },
    'timeVault': {
        name: 'Time Vault',
        variants: new Set(['esperVault', 'jeskaiVaultTwin', 'jeskaiWelder'])
    },
    'thoracle': {
        name: 'Thoracle',
        variants: new Set(['esperThoracle', 'grixisThoracle', 'ubrgThoracle'])
    },
    'goblins': {
        name: 'Goblins',
        variants: new Set(['jundGoblins', 'deathAndGoblins'])
    },
    'birthingPod': {
        name: 'Birthing Pod',
        variants: new Set(['nayaPod', '4CPod', 'patternRector'])
    },
    'landsMidrange': {
        name: 'Lands Midrange',
        variants: new Set(['abzanLands'])
    },
    'initiativeMidrange': {
        name: 'Initiative Midrange',
        variants: new Set(['jundInitiative', 'nayaInitiative', 'esperInitiative'])
    },
    'rickDecks': {
        name: 'Rick Decks',
        variants: new Set(['doomsDragon', 'deadGuyDragons', 'deathAndGoblins'])
    }
}

exports.deckDictionary = deckDictionary;
exports.deckNameMap = deckNameMap;
exports.families = families;
