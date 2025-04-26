const playerNameMap = {
    'kelvin': 'kelvin',

    'rick': 'rick',

    'axelia': 'axelia',

    'harju': 'harju',

    'genghisprawn': 'genghisprawn',
    'zgenghisprawn': 'genghisprawn',
    'zghengisprawn': 'genghisprawn',
    'xghengisprawn': 'genghisprawn',
    'prawn': 'genghisprawn',
    'genghis': 'genghisprawn',
    'genghis prawn': 'genghisprawn',

    'wonky wombat': 'wonkywombat',
    'wonkywombat': 'wonkywombat',
    'wombat': 'wonkywombat',
    'wonky': 'wonkywombat',

    'purukogi': 'purukogi',
    'puru': 'purukogi',

    'deggers': 'deggers',
    
    'calhove': 'calhove',
    'calhove3141': 'calhove',
    'calhove1314': 'calhove',

    'impulse': 'impulse27',
    'impulse27': 'impulse27',

    'jazze': 'jazze',

    'jwyatt': 'jwyatt',

    'hyunkim': 'hyunkim87',
    'hyunkim87': 'hyunkim87',
    'huynkim87': 'hyunkim87',

    'yeti': 'yeti',
    
    'yucca': 'yucca',

    'cyclopes8': 'cyclopes8',
    'cyclops8': 'cyclopes8',
    'cyclopes': 'cyclopes8',
    'cyclops': 'cyclopes8',
    'cylcopes8': 'cyclopes8',

    'andrew and drew': 'andrew and drew',

    'macintose': 'macintose',
    
    'fry guy': 'fry guy',
    'fryguy': 'fry guy',

    'delaelle': 'delaelle',
    'delealle': 'delaelle',
    'dalaelle': 'delaelle',

    'kaleb': 'kaleb gloriouswolfman',
    'kaleb gloriouswolfman': 'kaleb gloriouswolfman',

    'cat_island': 'cat_island',
    'cat island': 'cat_island',
    'catisland': 'cat_island',

    'sir nikheizen': 'nikheizen',
    'nikheizen': 'nikheizen',
    'extremely grey nikheizen': 'nikheizen',

    'violet eventide': 'violet eventide',
    'violeteventide': 'violet eventide',
    'violent eventide': 'violet eventide',
    'eventide': 'violet eventide',
    'viole(n)t eventide': 'violet eventide',

    'therealemt': 'therealemt',
    'emt': 'therealemt',
    'realemt': 'therealemt',

    'hal': 'hal',
    'hal8999': 'hal',

    'kannnicks': 'kannnicks',
    'kannicks': 'kannnicks',

    'thunder_farts': 'thunder_farts',
    'thunderfarts': 'thunder_farts',
    'thunder farts': 'thunder_farts',

    'shakashaka': 'shakashaka',
    'shakashka': 'shakashaka',

    'jamesses': 'jamesses',
    'jamesess': 'jamesses',

    'tr33vs': 'tr33vs',
    'treevs': 'tr33vs',
    'treeves': 'tr33vs',

    'pickleplop': 'pickleplop',
    'picklepop': 'pickleplop',

    'paul pilz': 'paul pilz',
    'paul': 'paul pilz',

    'gerrimeister': 'gerrimeister',
    'gerrimaster': 'gerrimeister',
    'garrimeister': 'gerrimeister',

    'bird | jonas': 'bird | jonas',
    'bird jonas': 'bird | jonas',
    'jonas': 'bird | jonas',

    'codypsizzle': 'codypsizzle',
    'codypizzle': 'codypsizzle',

    'robin sorensen': 'robin sorensen',
    'robin sorenson': 'robin sorensen',
    'robin': 'robin sorensen',
    'sorensen': 'robin sorensen',

    'solemn_storm': 'solemn_storm',
    'solemnstorm': 'solemn_storm',

    'oogablast': 'oogablast',
    'oogblast': 'oogablast',

    'jadedtrekkie': 'jadedtrekkie',
    'jaddedtrekkie': 'jadedtrekkie',
    'trekkie': 'jadedtrekkie',

    'unusualthunder': 'unusualthunder',
    'unusual thunder': 'unusualthunder',

    'lance larsen': 'lance larsen',
    'lance larson': 'lance larsen',

    'sean barry': 'sean barry',
    'sean.barry': 'sean barry',

    'mm10k': 'machineman10k',

    'lahdoja': 'lahdoja',
    'lahdojah': 'lahdoja',
    'parrot robar': 'parrot robar',

    'some user zoe': 'some user zoe',
    'zoe': 'some user zoe',

    'demondrinkingtea': 'demondrinkingtea',
    'ddt': 'demondrinkingtea',

    'nathan': 'nathan lipetz',
    'nathan lipetz': 'nathan lipetz',
    'nathanlipetz': 'nathan lipetz',

    'aleek the freak': 'aleek the freak',
    'aleek': 'aleek the freak',

    'regorn': 'regorn',

};

const properNames = {
    kelvin: 'kelvin',
    impulse27: 'Impulse',
    rick: 'Rick',
    axelia: 'Axelia',
    harju: 'Harju',
    genghisprawn: 'GenghisPrawn',
    wonkywombat: 'WonkyWombat',
    purukogi: 'Purukogi',
    calhove: 'Calhove',
    deggers: 'Deggers',
    jazze: 'JazzE',
    jwyatt: 'JWyatt',
    hyunkim87: 'hyunkim87',
    'fry guy': 'Fry Guy',
    yeti: 'Yeti',
    yucca: 'Yucca',
    cyclopes8: 'Cyclopes8',
    'andrew and drew': 'Andrew and Drew',
    'nikheizen': 'Nikheizen',
    delaelle: 'Delaelle',
    cat_island: 'Cat_Island',
    'violet eventide': 'Violet Eventide',
    therealemt: 'TherealEMT',
    hal: 'Hal',
    kannnicks: 'KannNicks',
    thunder_farts: 'Thunder_Farts',
    'paul pilz': 'Paul Pilz',
    gerrimeister: 'Gerrimeister',
    'bird | jonas': 'BIRD | Jonas',
    'robin sorensen': 'Robin Sorensen',
    'kaleb gloriouswolfman': 'Kaleb Gloriouswolfman',
    'gabe sorci': 'Gabe Sorci',
    jadedtrekkie: 'JadedTrekkie',
    notfreduardo: 'NotFreduardo',
    violetblight: 'violetblight',
    tictaco: 'TicTaco',
    jetheweary: 'JeTheWeary',
    solemn_storm: 'solemn_storm',
    'robin sorensen': 'Robin Sorensen',
    unusualthunder: 'UnusualThunder',
    'parrot robar': 'Parrot Robar'
};

exports.playerNameMap = playerNameMap;
exports.properNames = properNames;
