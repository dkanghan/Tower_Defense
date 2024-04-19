 // Array of assets to prefetch
 var arrows = [
    'ELF_Arrow.png',
    'Warrior_Arrow.png',
];
var ELves = [
    'Elf_01__ATTACK_001.png',
    'Elf_01__ATTACK_002.png',
    'Elf_01__ATTACK_003.png',
    'Elf_01__ATTACK_004.png',
    'Elf_01__ATTACK_005.png',
    'Elf_03__ATTACK_000.png',
    'Elf_03__ATTACK_001.png',
    'Elf_03__ATTACK_002.png',
    'Elf_03__ATTACK_003.png',
    'Elf_03__ATTACK_004.png',
    'Elf_03__ATTACK_005.png'
];

var Fairies = [
    'Fairy_01__ATTACK_000.png',
    'Fairy_01__ATTACK_001.png',
    'Fairy_01__ATTACK_002.png',
    'Fairy_01__ATTACK_003.png',
    'Fairy_01__ATTACK_004.png',
    'Fairy_01__ATTACK_005.png',
    'Fairy_02__ATTACK_000.png',
    'Fairy_02__ATTACK_001.png',
    'Fairy_02__ATTACK_002.png',
    'Fairy_02__ATTACK_003.png',
    'Fairy_02__ATTACK_004.png',
    'Fairy_03__ATTACK_000.png',
    'Fairy_03__ATTACK_001.png',
    'Fairy_03__ATTACK_002.png',
    'Fairy_03__ATTACK_003.png',
    'Fairy_03__ATTACK_004.png'
];

var Warriors = [
    'Warrior_03__ATTACK_000.png',
    'Warrior_03__ATTACK_001.png',
    'Warrior_03__ATTACK_002.png',
    'Warrior_03__ATTACK_003.png',
    'Warrior_03__ATTACK_004.png',
    'Warrior_03__ATTACK_005.png',
    'Warrior_03__ATTACK_006.png',
    'Warrior_03__ATTACK_007.png'
];

var Ork = [
    'WALK_000.png',
    'WALK_001.png',
    'WALK_002.png',
    'WALK_003.png',
    'WALK_004.png',
    'WALK_005.png',
    'WALK_006.png'
]

var Knights = [
    '_WALK_000.png',
    '_WALK_001.png',
    '_WALK_002.png',
    '_WALK_003.png',
    '_WALK_004.png',
    '_WALK_005.png',
    '_WALK_006.png'
]

var Troll1 = [
    'Troll_01_1_WALK_000.png',
    'Troll_01_1_WALK_001.png',
    'Troll_01_1_WALK_002.png',
    'Troll_01_1_WALK_003.png',
    'Troll_01_1_WALK_004.png',
    'Troll_01_1_WALK_005.png',
    'Troll_01_1_WALK_006.png',
    'Troll_01_1_WALK_007.png',
    'Troll_01_1_WALK_008.png',
    'Troll_01_1_WALK_009.png'
]

var Troll2 = [
    'Troll_02_1_WALK_000.png',
    'Troll_02_1_WALK_001.png',
    'Troll_02_1_WALK_002.png',
    'Troll_02_1_WALK_003.png',
    'Troll_02_1_WALK_004.png',
    'Troll_02_1_WALK_005.png',
    'Troll_02_1_WALK_006.png',
    'Troll_02_1_WALK_007.png',
    'Troll_02_1_WALK_008.png',
    'Troll_02_1_WALK_009.png'
]

var Troll3 = [
    'Troll_03_1_WALK_000.png',
    'Troll_03_1_WALK_001.png',
    'Troll_03_1_WALK_002.png',
    'Troll_03_1_WALK_003.png',
    'Troll_03_1_WALK_004.png',
    'Troll_03_1_WALK_005.png',
    'Troll_03_1_WALK_006.png',
    'Troll_03_1_WALK_007.png',
    'Troll_03_1_WALK_008.png',
    'Troll_03_1_WALK_009.png'
]

var Golem = [
    '0_Golem_Walking_000.png',
    '0_Golem_Walking_001.png',
    '0_Golem_Walking_002.png',
    '0_Golem_Walking_003.png',
    '0_Golem_Walking_004.png',
    '0_Golem_Walking_005.png',
    '0_Golem_Walking_006.png',
    '0_Golem_Walking_007.png',
    '0_Golem_Walking_008.png',
    '0_Golem_Walking_009.png',
    '0_Golem_Walking_010.png',
    '0_Golem_Walking_011.png',
    '0_Golem_Walking_012.png',
    '0_Golem_Walking_013.png',
    '0_Golem_Walking_014.png',
    '0_Golem_Walking_015.png',
    '0_Golem_Walking_016.png',
    '0_Golem_Walking_017.png',
    '0_Golem_Walking_018.png',
    '0_Golem_Walking_019.png',
    '0_Golem_Walking_020.png',
    '0_Golem_Walking_021.png',
    '0_Golem_Walking_022.png',
    '0_Golem_Walking_023.png'
]

var projectile = [
    '01.png',
    '02.png',
    '06.png',
    '08.png'
]

var levelMap =[
    'map1.png',
    'map2.png',
    'map3.png',
    'map4.png'
]



// Function to prefetch each asset
function prefetchAssets() {
    arrows.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/arrows/' + asset;
        document.head.appendChild(link);
    });
    ELves.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/defenders/ELf/' + asset;
        document.head.appendChild(link);
    });
    Fairies.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/defenders/Fairy/' + asset;
        document.head.appendChild(link);
    });
    Warriors.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/defenders/Warrior/' + asset;
        document.head.appendChild(link);
    });

    Ork.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/attackers/Orcs/ORK1/' + asset;
        document.head.appendChild(link);

        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/attackers/Orcs/ORK2/' + asset;
        document.head.appendChild(link);

        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/attackers/Orcs/ORK3/' + asset;
        document.head.appendChild(link);
    });

    Knights.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/attackers/Knight/KNIGHT1/' + asset;
        document.head.appendChild(link);

        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/attackers/Knight/KNIGHT2/' + asset;
        document.head.appendChild(link);

        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/attackers/Knight/KNIGHT3/' + asset;
        document.head.appendChild(link);
    });

    Troll1.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/attackers/Trolls/TROLL1/' + asset;
        document.head.appendChild(link);
    });

    Troll2.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/attackers/Trolls/TROLL2/' + asset;
        document.head.appendChild(link);
    });

    Troll3.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/attackers/Trolls/TROLL3/' + asset;
        document.head.appendChild(link);
    });

    Golem.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/attackers/Golem/Golem-2/' + asset;
        document.head.appendChild(link);

        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/attackers/Golem/Golem-3/' + asset;
        document.head.appendChild(link);
    });

    projectile.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/Laser/' + asset;
        document.head.appendChild(link);
    });

    levelMap.forEach(function (asset,i) {
        count = i+1;
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/Level'+(count)+'/' + asset;
        document.head.appendChild(link);
    });
}

// Prefetch assets when the window loads
window.onload = prefetchAssets;
