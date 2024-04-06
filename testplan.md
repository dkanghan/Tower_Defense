# Test Plan for Defenders of the forest

### Introduction
The purpose of this test plan document is to outline the testing approach for the Defenders of the forest application. 

> Test can be performed on major browsers like Chrome and Edge.

## Test Scenarios

### User Interface Testing


### Home Page

| Test Item          | Description                                                             | Result           |
|--------------------|-------------------------------------------------------------------------|------------------|
| Home Page          | Verify that the home screen displays options to start the game.         | Successful       |              
| User Manual        | Verify that the user manual is loading properly with descriptions on defenders and attackers.  | Successful       |
| Level Selection    | Verify that the level selection screen is displayed with options to choose levels. | Successful       |

### Game Play

| Test Item          | Description         | Input|Expected Output  | Result           |
|--------------------|---------------------|------|------------------|------------------|
| Start Game         | Verify that the game starts when the player clicks on the level selection button. | Click on level-1 or level-2  button | Game starts | Successful |
| Defender Selection | Verify that the player can select defenders from the available options. | Click on defender icon | Defender is selected | Successful |
| Defender Selection | Verify that the player can only select defenders when balance is available. | Click on selected defender icon | Defender is not selected | Successful |
| Defender Placement | Verify that the player can place defenders on the map. | Click on empty spot on the map | Defender is placed | Successful |
| Defender Placement | Verify that the player cannot place defenders on top of each other, on the path of the enemies, rocks, or on the trees. | Click on invalid spot | Defender is not placed | Successful |
| Enemy Movement     | Verify that the enemies move along the path towards the player's base. | Start the game | Enemies move along the path | Successful |
| Enemy Defeat       | Verify that the player earns coins by defeating enemies. | Defeat an enemy | Coin counter increases | Successful |

### Progression System
| Test Item          | Description         | Input|Expected Output  | Result           |
|--------------------|---------------------|------|------------------|------------------|
| Level 1            | Progression through level 1 and confirm the player can move to the next level. | Defeat all enemies in level 1 | Move to level 2 | Successful |
| Level 2            | Progression through level 2 and confirm the game ends after the player successfully defends against all waves of enemies. | Defeat all enemies in level 2 | Option to go to home page or replay | Successful |
| Level Completion PopUp   | Verify that the player gets the popup to move to the next level after successfully defending against all waves of enemies. | Defeat all enemies in the current level | Player sees the popUp | Successful |
| Wave Counter       | Verify that the wave counter displays the current wave number. | Defeat an enemy | Wave counter increases | Successful |
| Coin Counter       | Verify that the coin counter displays the player's current coin balance. | Defeat an enemy | Coin counter increases | Successful |
| Health Counter      | Verify that the player's health decreases when enemies reach the end of the path. | Enemy reaches the end of the path | Player's health decreases | Successful |

### Game Over

| Test Item          | Description         | Input|Expected Output  | Result           |
|--------------------|---------------------|------|------------------|------------------|
| Game Over          | Verify that the game ends when the player's health reaches 0. | Player's health reaches 0 | Game Over screen PopuUp is displayed | Successful |
| Game Over PopUP    | Verify that the player sees the game over popup when the game ends. | Player's health reaches 0 | Game Over screen PopuUp is displayed | Successful |
| Replay             | Verify that the player can replay the game after the game ends. | Click on replay button | Game starts again | Successful |
| Home Page          | Verify that the player can go back to the home page after the game ends. | Click on home button | Home page is displayed | Successful |

