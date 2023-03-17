
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
    'grixisTinkerReanimator': {
        name: 'Grixis Tinker Reanimator',
        colors: GRIXIS,
        archetypes: COMBO
    },
    'ubrgThoracle': {
        name: 'UBRG Thoracle',
        colors: 'UBRG',
        archetypes: COMBO
    },
    'deathAndGoblins': {
        name: 'Death and Goblins',
        colors: BOROS,
        archetypes: AGGRO
    },
    'redDeckWins': {
        name: 'Red Deck Wins',
        colors: 'R',
        archetypes: AGGRO
    },
    'temurMoon': {
        name: 'Temur Moon',
        colors: 'URG',
        archetypes: CONTROL
    },
    'gruulHoof': {
        name: 'Gruul Cradlehoof',
        colors: 'RG',
        archetypes: COMBO
    },
    'blackMold': {
        name: 'Black Mold',
        colors: 'BG',
        archetypes: AGGRO
    },
    'wbrgInitiative': {
        name: 'WBRG Initiative',
        colors: 'WBRG',
        archetypes: MIDRANGE
    },
    selesnyaLegends: {
        name: 'Selesnya Legends',
        colors: 'WG',
        archetypes: MIDRANGE
    },
    dimirNinjas: {
        name: 'Dimir Ninjas',
        colors: 'UB',
        archetypes: TEMPO
    },
    temurMidrange: {
        name: 'Temur Midrange',
        colors: 'URG',
        archetypes: MIDRANGE
    },
    sultaiThoracle: {
        name: 'Sultai Thoracle',
        colors: SULTAI,
        archetypes: new Set(['combo', 'control'])
    },
    grixisTempoDoomsday: {
        name: 'Grixis Tempo Doomsday',
        colors: GRIXIS,
        archetypes: new Set(['tempo', 'combo'])
    },
    esperDoomsday: {
        name: 'Esper Doomsday',
        colors: ESPER,
        archetypes: new Set(['combo'])
    },
    gruulAggro: {
        name: 'Gruul Aggro',
        colors: GRUUL,
        archetypes: AGGRO
    },
    wurgLands: {
        name: 'WURG Lands Midrange',
        colors: 'WURG',
        archetypes: MIDRANGE
    },
    yawgmothJacuzzi: {
        name: 'Yawgmoth\'s Jacuzzi',
        colors: 'WUBG',
        archetypes: COMBO
    },
    wurgInitiative: {
        name: 'WURG Initiative',
        colors: 'WURG',
        archetypes: MIDRANGE
    },
    abzanMidrange: {
        name: 'Abzan Midrange',
        colors: 'WBG',
        archetypes: MIDRANGE
    },
    rakdosGoblins: {
        name: 'Rakdos Goblins',
        colors: RAKDOS,
        archetypes: new Set(['aggro', 'combo'])
    },
    jeskaiBreach: {
        name: 'Jeskai Breach',
        colors: JESKAI,
        archetypes: new Set(['control', 'combo'])
    },
    aluren: {
        name: 'Aluren',
        colors: 'WUBG',
        archetypes: new Set(['combo', 'midrange'])
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
    'hot bant': 'wurgOmnath',

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
    'sans b seeker walk': 'wurgSeekerWalk',
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
    'abzan lands midrange': 'abzanLands',

    'zombies': 'zombies',

    'medium red': 'mediumRed',

    'esper control': 'esperControl',

    'simic merfolk': 'simicMerfolk',
    'ug merfolk': 'simicMerfolk',

    'czech midrange': 'czechMidrange',
    'ubrg midrange': 'czechMidrange',
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

    'jeskai vault twin': 'jeskaiVaultTwin',

    'dead guy dragons': 'deadGuyDragons',

    'grixis thoracle': 'grixisThoracle',

    'rakdos pyromancer': 'rakdosPyromancer',
    'br pyromancer': 'rakdosPyromancer',

    'jund goblins': 'jundGoblins',

    'grixis tinker reanimator': 'grixisTinkerReanimator',
    
    'ubrg thoracle': 'ubrgThoracle',

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
        variants: new Set(['esperThoracle', 'grixisThoracle', 'ubrgThoracle', 'sultaiThoracle', 'sultaiDoomsday', 'esperDoomsday', 'grixisTempoDoomsday'])
    },
    'goblins': {
        name: 'Goblins',
        variants: new Set(['jundGoblins', 'deathAndGoblins', 'rakdosGoblins'])
    },
    'birthingPod': {
        name: 'Birthing Pod',
        variants: new Set(['nayaPod', '4CPod', 'patternRector'])
    },
    'landsMidrange': {
        name: 'Lands Midrange',
        variants: new Set(['abzanLands', 'wurgLands'])
    },
    'initiativeMidrange': {
        name: 'Initiative Midrange',
        variants: new Set(['jundInitiative', 'nayaInitiative', 'esperInitiative', 'wbrgInitiative', 'wurgInitiative'])
    },
    'blueMoon': {
        name: 'Blue Moon',
        variants: new Set(['blueMoon', 'temurMoon'])
    },
    'blueMidrange': {
        name: 'Blue Midrange',
        variants: new Set(['jeskaiMidrange', 'sultaiMidrange', 'wubgMidrange', 'czechMidrange', 'bantMidrange', 'temurMidrange'])
    }
}

exports.deckDictionary = deckDictionary;
exports.deckNameMap = deckNameMap;
exports.families = families;
