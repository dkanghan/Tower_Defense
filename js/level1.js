//level1.js
// Description: Main JavaScript file for the first level of the game.

// Define the canvas and context
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// Set the canvas width and height
canvas.width = 1280;
canvas.height = 760;

// Draw a white rectangle to cover the canvas
c.fillStyle = "rgba(255, 255, 255, 0.5)";
c.fillRect(0, 0, canvas.width, canvas.height);

//Draw the level1 image
const image = new Image();
image.onload = function () {
  c.drawImage(image, 0, 0, canvas.width, canvas.height);
};
image.src = "assets/Level1/towerdefense1.png";

// Define the placement tiles
// set the placement tiles on the canvas
const placementTiles12D = [];
for (let i = 0; i < placementTiles1.length; i += 40) {
  placementTiles12D.push(placementTiles1.slice(i, i + 40));
}
const placementTilesArr = [];
placementTiles12D.forEach((row, y) => {
  row.forEach((tile, x) => {
    if (tile === 201) {
      placementTilesArr.push(
        new placementTiles({ position: { x: x * 32, y: y * 32 } })
      );
    }
  });
});

// Create enemies array to store the enemies
// initialize the wave, waypoints, hearts, and coins
const enemies = [];
let wave = 1;
let hearts = 10;
let coins = 100;
const waypoints = waypoints1;

// ---------------------------------------------------------
// Function: spawnEnemy
// Description: Spawns enemies based on the wave number.
// Expected Inputs: wave
// Expected Outputs: None
// Calls: new Orc_1()
//        new Orc_2()
//        new Orc_3()
// ---------------------------------------------------------
function spawnEnemy(wave = 1) {
  let count = wave * 3;
  for (let i = 0; i < count; i++) {
    const xOff = i * 150;
    if (wave === 1) {
      enemies.push(
        new Orc_1({
          position: { x: 2.5 * waypoints[0].x - xOff, y: 2.3 * waypoints[0].y },
        })
      );
    } else if (wave === 2) {
      if (i < 3) {
        enemies.push(
          new Orc_1({
            position: {
              x: 2.5 * waypoints[0].x - xOff,
              y: 2.3 * waypoints[0].y,
            },
          })
        );
      } else {
        enemies.push(
          new Orc_2({
            position: {
              x: 2.5 * waypoints[0].x - xOff,
              y: 2.3 * waypoints[0].y,
            },
          })
        );
      }
    } else if (wave === 3) {
      if (i < 3) {
        enemies.push(
          new Orc_1({
            position: {
              x: 2.5 * waypoints[0].x - xOff,
              y: 2.3 * waypoints[0].y,
            },
          })
        );
      } else if (i < 6) {
        enemies.push(
          new Orc_2({
            position: {
              x: 2.5 * waypoints[0].x - xOff,
              y: 2.3 * waypoints[0].y,
            },
          })
        );
      } else {
        enemies.push(
          new Orc_3({
            position: {
              x: 2.5 * waypoints[0].x - xOff,
              y: 2.3 * waypoints[0].y,
            },
          })
        );
      }
    } else if (wave === 4) {
      if (i < 2) {
        enemies.push(
          new Orc_1({
            position: {
              x: 2.5 * waypoints[0].x - xOff,
              y: 2.3 * waypoints[0].y,
            },
          })
        );
      } else if (i < 5) {
        enemies.push(
          new Orc_2({
            position: {
              x: 2.5 * waypoints[0].x - xOff,
              y: 2.3 * waypoints[0].y,
            },
          })
        );
      } else {
        enemies.push(
          new Orc_3({
            position: {
              x: 2.5 * waypoints[0].x - xOff,
              y: 2.3 * waypoints[0].y,
            },
          })
        );
      }
    } else if (wave === 5) {
      enemies.push(
        new Orc_3({
          position: { x: 2.5 * waypoints[0].x - xOff, y: 2.3 * waypoints[0].y },
        })
      );
    }
  }
}
spawnEnemy(wave);

// Define the defenders array and active tile
const defenders = [];
let activeTile = undefined;

//---------------------------------------------------------
// Function: animate
// Description: Main animation loop for the game.
// Expected Inputs: None
// Expected Outputs: None
//---------------------------------------------------------
function animate() {
  // start the animation loop
  animId = requestAnimationFrame(animate);
  c.drawImage(image, 0, 0, canvas.width, canvas.height);

  c.fillStyle = "rgba(255, 255, 255, 0.2)";
  c.fillRect(canvas.width - 250, 10, 240, 70);

  // Draw a heart symbol
  c.fillStyle = "red";
  c.strokeStyle = "black";
  c.lineWidth = 2;
  c.font = "48px Arial";
  c.strokeText("\u2665", canvas.width - 120, 60);
  c.fillText("\u2665", canvas.width - 120, 60);

  // Draw a yellow circle
  c.fillStyle = "yellow";
  c.font = "32px Arial";
  c.beginPath();
  c.arc(canvas.width - 235, 45, 20, 0, Math.PI * 2);
  c.fillStyle = "yellow";
  c.fill();
  c.strokeStyle = "black";
  c.lineWidth = 2;
  c.stroke();

  // Draw a dollar sign
  c.fillStyle = "black";
  c.font = "20px Arial";
  const dollarSignWidth = c.measureText("\u0024").width;
  const dollarSignX = canvas.width - 235 - dollarSignWidth / 2;
  c.fillText("\u0024", dollarSignX, 53);

  // Draw the number of coins
  c.fillStyle = "white";
  c.font = "32px Alfa Slab One";
  c.fillText(": " + coins, canvas.width - 210, 60);
  c.strokeText(": " + coins, canvas.width - 210, 60);

  // Draw the number of hearts
  c.fillStyle = "white";
  c.font = "32px Alfa Slab One";
  c.fillText(": " + hearts, canvas.width - 80, 60);
  c.strokeText(": " + hearts, canvas.width - 80, 60);

  // Draw the wave number
  c.fillStyle = "white";
  c.font = "32px Alfa Slab One";
  c.fillText("Wave: " + wave, 90, 60);
  c.strokeText("Wave: " + wave, 90, 60);

  // Add a pause button if it doesn't exist
  if (!document.getElementById("pauseButton")) {
    const pauseButton = document.createElement("button");
    pauseButton.id = "pauseButton";
    pauseButton.title = "Pause";
    pauseButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pause">
        <rect x="6" y="4" width="4" height="16"></rect>
        <rect x="14" y="4" width="4" height="16"></rect>
        </svg>`;
    pauseButton.style.backgroundColor = "#f1c40f";
    pauseButton.style.color = "white";
    pauseButton.style.border = "none";
    pauseButton.style.padding = "10px 20px";
    pauseButton.style.textAlign = "center";
    pauseButton.style.textDecoration = "none";
    pauseButton.style.display = "inline-block";
    pauseButton.style.margin = "10px";
    pauseButton.style.cursor = "pointer";
    pauseButton.style.borderRadius = "5px";
    pauseButton.style.position = "absolute";
    pauseButton.style.top = "10px";
    pauseButton.addEventListener("click", () => {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
        pauseButton.style.backgroundColor = "#4CAF50";
        pauseButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>`;
      } else {
        animId = requestAnimationFrame(animate);
        pauseButton.style.backgroundColor = "#f1c40f";
        pauseButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pause">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
            </svg>`;
      }
    });
    pauseButton.style.borderRadius = "5px"; // round edges
    canvas.parentNode.appendChild(pauseButton);
  }

  for (let i = enemies.length - 1; i >= 0; i--) {
    // Loop through the enemies array and update each enemy
    const enemy = enemies[i];
    enemy.update();

    // Check if the enemy has reached the end of the path
    //Remove the enemy from the enemies array
    //Decrement the hearts variable
    if (enemy.position.x > canvas.width - enemy.width) {
      enemies.splice(i, 1);
      hearts--;

      // Check if the player has lost all their hearts
      if (hearts === 0) {
        // Stop the animation loop
        cancelAnimationFrame(animId);

        // Display the game over popup
        const gameOverPopup = document.createElement("div");
        gameOverPopup.classList.add("game-over-popup");
        gameOverPopup.style.position = "absolute";
        gameOverPopup.style.top = canvas.height / 2 + "px";
        gameOverPopup.style.left = canvas.width / 2 + "px";
        gameOverPopup.style.transform = "translate(-50%, -50%)";
        gameOverPopup.style.fontSize = "48px";
        gameOverPopup.style.fontFamily = "Alfa Slab One, serif";
        gameOverPopup.style.color = "white";
        gameOverPopup.style.webkitTextStroke = "1px black";
        gameOverPopup.style.alignItems = "center";
        gameOverPopup.style.textAlign = "center";
        gameOverPopup.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
        gameOverPopup.style.padding = "20px";
        gameOverPopup.innerHTML = `
                    <h1>Game Over</h1>
                    <button style="font-size: 36px; background-color: #4CAF50; color: white; border: none; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; margin: 4px 2px; cursor: pointer;" onclick="window.location.reload()">Play Again</button>
                    <button style="font-size: 36px; background-color: #f44336; color: white; border: none; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; margin: 4px 2px; cursor: pointer;" onclick="window.location.href = './index.html'">Home</button>
                `;
        canvas.parentNode.appendChild(gameOverPopup);
      }
    }
  }

  // Check if all enemies have been defeated

  if (enemies.length === 0) {
    // If all enemies have been defeated, spawn the next wave
    if (wave < 6) {
      wave++;
      spawnEnemy(wave);
    } else {
      // Stop the animation loop
      //If all waves are cleared, display the congratulations popup
      cancelAnimationFrame(animId);
      const congratulationsPopup = document.createElement("div");
      congratulationsPopup.classList.add("congratulations-popup");
      congratulationsPopup.style.position = "absolute";
      congratulationsPopup.style.top = canvas.height / 2 + "px";
      congratulationsPopup.style.left = canvas.width / 2 + "px";
      congratulationsPopup.style.transform = "translate(-50%, -50%)";
      congratulationsPopup.style.fontSize = "48px";
      congratulationsPopup.style.fontFamily = "Alfa Slab One, serif";
      congratulationsPopup.style.color = "white";
      congratulationsPopup.style.webkitTextStroke = "1px black";
      congratulationsPopup.style.alignItems = "center";
      congratulationsPopup.style.textAlign = "center";
      congratulationsPopup.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
      congratulationsPopup.style.padding = "20px";
      congratulationsPopup.innerHTML = `
      <h1>Congratulations!</h1>
      <p>You have cleared the level.</p>
      <button style="font-size: 36px; background-color: #4CAF50; color: white; border: none; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; margin: 4px 2px; cursor: pointer;" onclick="window.location.href = './level2.html'"">Next Level</button>
      <button style="font-size: 36px; background-color: #f44336; color: white; border: none; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; margin: 4px 2px; cursor: pointer;" onclick="window.location.href = './index.html'">Home</button>
    `;
      canvas.parentNode.appendChild(congratulationsPopup);
    }
  }

  //update the placement tiles
  placementTilesArr.forEach((placementTile) => {
    placementTile.update();
  });

  defenders.forEach((defender) => {
    // Loop through the defenders array and update each defender
    defender.update();
    defender.target = null;

    // Loop through the enemies array and check if any enemies are within range of the defender
    const validTargets = enemies.filter((enemy) => {
      const xDistance = enemy.center.x - defender.center.x;
      const yDistance = enemy.center.y - defender.center.y;
      const distance = Math.hypot(xDistance, yDistance);
      return distance < enemy.radius + defender.radius;
    });

    // Set the first enemy in range as the target for the defender
    defender.target = validTargets[0];

    // Loop through the defender's projectiles array and update each projectile
    if (defender.target !== null) {
      for (let i = defender.projectiles.length - 1; i >= 0; i--) {
        const projectile = defender.projectiles[i];
        projectile.update();

        // Check if the projectile has hit the target
        // If the projectile hits the target, reduce the target's health
        // If the target's health is less than or equal to 0, remove the target from the enemies array
        // Remove the projectile from the defender's projectiles array
        // Add coins to the player's total
        // If the player's total coins is less than 980, add coins based on the enemy type
        // Remove the target from the enemies array
        // Remove the projectile from the defender's projectiles array
        if (projectile.target) {
          const xDistance = projectile.target.center.x - projectile.position.x;
          const yDistance = projectile.target.center.y - projectile.position.y;
          const distance = Math.hypot(xDistance, yDistance);

          //when projectile hits enemy
          if (distance < projectile.target.radius + projectile.radius) {
            if (defender.type === "Elf_1") {
              projectile.target.health -= 50;
            } else if (defender.type === "Elf_3") {
              projectile.target.health -= 75;
            } else if (defender.type === "Fairy_1") {
              projectile.target.health -= 100;
            }
            const index = enemies.indexOf(projectile.target);
            if (index !== -1 && projectile.target.health <= 0) {
              if (coins < 980) {
                if (enemies[index].type === "Orc_1") {
                  coins += 10;
                } else if (enemies[index].type === "Orc_2") {
                  coins += 20;
                } else if (enemies[index].type === "Orc_3") {
                  coins += 30;
                }
              }
              enemies.splice(index, 1);
            }

            defender.projectiles.splice(i, 1);
          }
        }
      }
    }
  });
}

// Define the mouse object
const mouse = {
  x: undefined,
  y: undefined,
};

clicked_button_id = undefined;
// Define the clicked_button_id variable
const html_image = document.querySelector(".def_button");
html_image.addEventListener("click", (event) => {
  // if the clicked button is an image, get the id of the image
  clicked_button_id = event.target.id;
});

// Define the belowIndex and currentIndex variables
let belowIndex;
let currentIndex;

// Add an event listener to the canvas
// When the canvas is clicked, check if the active tile is occupied
// If the active tile is not occupied, check if the tile below the active tile is not occupied
// If the tile below the active tile is not occupied, create a new defender based on the clicked button id
// Push the newly created defender into the defenders array
// Update the occupied property of the active tile and the tile below the active tile
// Update the player's coins based on the cost of the defender
// Update the belowIndex and currentIndex variables
// Calls : placementTilesArr.findIndex()
//        - newDefender = new Elf_1()
//        - newDefender = new Elf_3()
//        - newDefender = new Fairy_1()
canvas.addEventListener("click", () => {
  belowIndex = placementTilesArr.findIndex(
    (tile) =>
      tile.position.x === activeTile.position.x &&
      tile.position.y === activeTile.position.y + 32
  );
  currentIndex = placementTilesArr.findIndex(
    (tile) =>
      tile.position.x === activeTile.position.x &&
      tile.position.y === activeTile.position.y
  );

  if (belowIndex != -1) {
    // if tile below is not occupied, check if the tile to the right of the active tile and below tile is not occupied
    if (
      placementTilesArr[belowIndex].occupied === false &&
      placementTilesArr[belowIndex + 1].occupied === false &&
      placementTilesArr[currentIndex + 1].occupied === false &&
      activeTile &&
      !activeTile.occupied &&
      coins >= 50
    ) {
      let newDefender;
      if (clicked_button_id === "Elf_1") {
        if (coins >= 50){
          newDefender = new Elf_1({
            position: { x: activeTile.position.x, y: activeTile.position.y },
          });
          coins -= 50;
          // Push the newly created defender into the defenders array
        defenders.push(newDefender);
        }
        
      } else if (clicked_button_id === "Elf_3") {
        if (coins >= 100) {
          newDefender = new Elf_3({
            position: { x: activeTile.position.x, y: activeTile.position.y },
          });
          coins -= 100;
          // Push the newly created defender into the defenders array
      defenders.push(newDefender);
        }
      } else if (clicked_button_id === "Fairy_1") {
        if (coins >= 150) {
          newDefender = new Fairy_1({
            position: { x: activeTile.position.x, y: activeTile.position.y },
          });
          coins -= 150;
          // Push the newly created defender into the defenders array
      defenders.push(newDefender);
        }
      } else {
        // Handle unknown button id
        console.log("Unknown button id:", clicked_button_id);
        return;
      }

      

      // Update other necessary variables
      activeTile.occupied = true;
      placementTilesArr[belowIndex].occupied = true;
      placementTilesArr[belowIndex + 1].occupied = true;
      placementTilesArr[currentIndex + 1].occupied = true;
    }
  }
});

// Add an event listener to the window
// When the mouse is moved, update the mouse x and y coordinates
// Set the active tile to null
// Loop through the placement tiles array and check if the mouse is hovering over a tile
// If the mouse is hovering over a tile, set the active tile to that tile
window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  activeTile = null;

  for (let i = 0; i < placementTilesArr.length; i++) {
    const tile = placementTilesArr[i];
    if (
      mouse.x > tile.position.x &&
      mouse.x < tile.position.x + tile.size &&
      mouse.y > tile.position.y &&
      mouse.y < tile.position.y + tile.size
    ) {
      activeTile = tile;
      break;
    }
}
});

try {
  animate();
} catch (error) {
  console.error("An error occurred while running the animation:", error);
}
