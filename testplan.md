# Test Plan for Defenders of the forest

### **Introduction**
The purpose of this test plan document is to outline the testing approach for the Defenders of the forest application. 

> Test can be performed on major browsers like Chrome and Edge.

## **Test Scenarios**

### **Home Page**
-------------------

| Test Item          | Description                                                             | Result           |
|--------------------|-------------------------------------------------------------------------|------------------|
| Home Page          | Verify that the home screen displays options to start the game.         | Successful       |              
| User Manual        | Verify that the user manual is loading properly with descriptions on defenders and attackers.  | Successful       |
| Level Selection    | Verify that the level selection screen is displayed with options to choose levels. | Successful|

### **Game Play**
-------------------

| Test Item          | Description         | Input|Expected Output  | Result           |
|--------------------|---------------------|------|------------------|------------------|
| Start Game         | Verify that the game starts when the player clicks on the level selection button. | Click on level-1 or level-2  button | Game starts | Successful |
| Start Wave         | Verify that the wave starts when the player clicks on the start wave button. | Click on start wave button | Wave starts | Successful |
| Defender Selection | Verify that the player can select defenders from the available options. | Click on defender icon | Defender is selected | Successful |
| Defender Selection | Verify that the player can see that the defender is selected. | Click on defender icon | Defender icon is shown with a border | Successful |
| Defender Selection | Verify that the player can only select defenders when balance is available. | Click on selected defender icon | Defender is not selected | Successful |
| Defender Placement | Verify that the player can place defenders on the map. | Click on empty spot on the map | Defender is placed | Successful |
| Defender Placement | Verify that the player cannot place defenders on top of each other, on the path of the enemies, rocks, or on the trees. | Click on invalid spot | Defender is not placed | Successful |
| Defender Placement | Verify that the player can see the range of the defender when placing it on the map. | Click on defender icon and then move the mouse on the map | Range is displayed | Successful |
| Enemy Movement     | Verify that the enemies move along the path towards the player's base. | Start the game | Enemies move along the path | Successful |
| Enemy Defeat       | Verify that the player earns coins by defeating enemies. | Defeat an enemy | Coin counter increases | Successful |
| Pause Game         | Verify that the player can pause the game at any time. | Click on pause button | Game is paused | Successful |
| Resume Game        | Verify that the player can resume the game after pausing. | Click on resume button | Game resumes | Successful |
| Defender Upgrade   | Verify that the player can upgrade defenders by spending coins. | Click on upgrade button and then click on defender| Defender is upgraded | Successful |
| Defender Upgrade   | Verify that the player cannot upgrade defenders when the balance is insufficient. | Click on upgrade button and then click on defender| Defender is not upgraded | Successful |
| Defender Upgrade   | Verify that the player can upgrade defenders multiple times. | Click on upgrade button and then click on defender twice | Defender is upgraded to max | Successful |
| Defender Removal   | Verify that the player can remove defenders from the map. | Click on remove button and then click on defender | Defender is removed | Successful |
| Defender Removal   | Verify that the player cannot remove defenders when there are no defenders on the map. | Click on remove button | Defender is not removed | Successful |
| Defender Removal   | Verify that the player can remove defenders multiple times. | Click on remove button and then click on different defenders  | Defenders are removed | Successful |
| Defender Removal   | Verify that the player can remove defenders and gain back coins. | Click on remove button and then click on defender | Coins are added back to the balance | Successful |


### **Progression System**
-------------------


| Test Item          | Description         | Input|Expected Output  | Result           |
|--------------------|---------------------|------|------------------|------------------|
| Level 1            | Progression through level 1 and confirm the player can move to the next level. | Defeat all enemies in level 1 | Move to level 2 | Successful |
| Level 2            | Progression through level 2 and confirm the player can move to the next level. | Defeat all enemies in level 2 | Move to level3 | Successful |
| Level 3            | Progression through level 3 and confirm the player can move to the next level. | Defeat all enemies in level 3 | Move to level 4 | Successful |
| Level 4            | Progression through level 4 and confirm the player sees the game completion popup. | Defeat all enemies in level 4 | Game completion popup is displayed | Successful |
| Level Completion PopUp   | Verify that the player gets the popup to move to the next level after successfully defending against all waves of enemies. | Defeat all enemies in the current level | Player sees the popUp | Successful |
| Wave Counter       | Verify that the wave counter displays the current wave number. | Defeat an enemy | Wave counter increases | Successful |
| Coin Counter       | Verify that the coin counter displays the player's current coin balance. | Defeat an enemy | Coin counter increases | Successful |
| Health Counter      | Verify that the player's health decreases when enemies reach the end of the path. | Enemy reaches the end of the path | Player's health decreases | Successful |

<div style="page-break-after: always;"></div>

### **Game Over**
-------------------

| Test Item          | Description         | Input|Expected Output  | Result           |
|--------------------|---------------------|------|------------------|------------------|
| Game Over          | Verify that the game ends when the player's health reaches 0. | Player's health reaches 0 | Game Over screen PopuUp is displayed | Successful |
| Game Over PopUP    | Verify that the player sees the game over popup when the game ends. | Player's health reaches 0 | Game Over screen PopuUp is displayed | Successful |
| Replay             | Verify that the player can replay the game after the game ends. | Click on replay button | Game starts again | Successful |
| Home Page          | Verify that the player can go back to the home page after the game ends. | Click on home button | Home page is displayed | Successful |

