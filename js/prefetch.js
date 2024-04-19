 // prefetch.js
// This script is used to prefetch assets for the game.
 
 
 
// List of assets to prefetch
// Each asset is a string that represents the name of the asset
// The asset are located in the assets folder
// The assets are divided into different folders based on the type of asset

//Arrows
 var arrows = [
    'ELF_Arrow.png',
    'Warrior_Arrow.png',
];

//Defenders

//ELf
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

//Fairy
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

//Warrior
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

//Attackers

//Orcs
var Ork = [
    'WALK_000.png',
    'WALK_001.png',
    'WALK_002.png',
    'WALK_003.png',
    'WALK_004.png',
    'WALK_005.png',
    'WALK_006.png'
]

//Knight
var Knights = [
    '_WALK_000.png',
    '_WALK_001.png',
    '_WALK_002.png',
    '_WALK_003.png',
    '_WALK_004.png',
    '_WALK_005.png',
    '_WALK_006.png'
]

//Trolls
//Troll1
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

//Troll2
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

//Troll3
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

//Golem
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

//Projectile
var projectile = [
    '01.png',
    '02.png',
    '06.png',
    '08.png'
]

//LevelMap
var levelMap =[
    'map1.png',
    'map2.png',
    'map3.png',
    'map4.png'
]


//------------------------------------------
//prefetchAssets
// Function to prefetch each asset
// Description :
// This function creates a link element for each asset
// The link element has a rel attribute set to 'prefetch'
// The href attribute is set to the path of the asset
// The link element is appended to the head of the document
// This function is called when the window loads
// Input :
//  - Array of asset names
// Output :
//  - None
//------------------------------------------
function prefetchAssets() {
    // Prefetch arrows
    arrows.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/arrows/' + asset;
        document.head.appendChild(link);
    });

    // Prefetch defenders

    //Prefetch ELf assets
    ELves.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/defenders/ELf/' + asset;
        document.head.appendChild(link);
    });

    //Prefetch Fairy assets
    Fairies.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/defenders/Fairy/' + asset;
        document.head.appendChild(link);
    });

    //Prefetch Warrior assets
    Warriors.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/defenders/Warrior/' + asset;
        document.head.appendChild(link);
    });

    // Prefetch attackers

    //Prefetch Orcs assets
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

    //Prefetch Knight assets
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

    //Prefetch Troll1 assets
    Troll1.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/attackers/Trolls/TROLL1/' + asset;
        document.head.appendChild(link);
    });

    //Prefetch Troll2 assets
    Troll2.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/attackers/Trolls/TROLL2/' + asset;
        document.head.appendChild(link);
    });

    //Prefetch Troll3 assets
    Troll3.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/attackers/Trolls/TROLL3/' + asset;
        document.head.appendChild(link);
    });

    //Prefetch Golem assets
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

    //Prefetch projectile assets
    projectile.forEach(function (asset) {
        var link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'assets/Laser/' + asset;
        document.head.appendChild(link);
    });

    //Prefetch levelMap assets
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
