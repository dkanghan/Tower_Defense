//level2.js
// Description: Main JavaScript file for the second level of the game.

// Define the canvas and context
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// Set the canvas dimensions
canvas.width = 1280;
canvas.height = 760;

// Draw a white background
c.fillStyle = "rgba(255, 255, 255, 0.5)";
c.fillRect(0, 0, canvas.width, canvas.height);

// Load the level 2 map
const image = new Image();
image.onload = function () {
  c.drawImage(image, 0, 0, canvas.width, canvas.height);
};
image.src = "assets/Level2/map2.png";

// Define the placement tiles
// set the placement tiles on the canvas
const placementTiles12D = [];
for (let i = 0; i < placementTiles2.length; i += 40) {
  placementTiles12D.push(placementTiles2.slice(i, i + 40));
}
const placementTilesArr = [];
placementTiles12D.forEach((row, y) => {
  row.forEach((tile, x) => {
    if (tile === 537) {
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
let nextwave = 1;
let hearts = 10;
let coins = 100;
let waypoints = waypoints2;

// ---------------------------------------------------------
// Function: spawnEnemy
// Description: Spawns enemies based on the wave number.
// Expected Inputs: wave
// Expected Outputs: None
// Calls: new Knight_1, new Knight_2, new Knight_3
// ---------------------------------------------------------
function spawnEnemy(wave = 1) {
  let count = wave * 4;
  const knightTypes = [Knight_1, Knight_2, Knight_3];

  for (let i = 0; i < count; i++) {
    let knightTypeIndex = 0;
    if (wave >= 2) {
      if (i >= 3) knightTypeIndex = 1;
      if (wave >= 4 && i >= 8) knightTypeIndex = 2;
      if (wave >= 5 && i >= 12) knightTypeIndex = 2;
      if (wave >= 6 && i >= 10) knightTypeIndex = 2;
      if (wave >= 7 && i >= 8) knightTypeIndex = 1;
      if (wave >= 8 && i >= 5) knightTypeIndex = 2;
    }

    const knightType = knightTypes[knightTypeIndex];
    const xOff = i * 150;
    const knightPosition = {
      x: 2.5 * waypoints[0].x - xOff,
      y: 2.3 * waypoints[0].y,
    };
    enemies.push(new knightType({ position: knightPosition }));
  }
}

// ---------------------------------------------------------
// Function: createDefender
// Description : Create a new defender based on the defender type and cost
// If the player has enough coins, create a new defender
// Deduct the cost of the defender from the player's coins
// Push the new defender into the defenders array
// Update the occupied property of the active tile and the tiles below the active tile
// Set the clicked button id to undefined
// Expected Inputs: defenderType, cost
// Expected Outputs: Instance of Defender
// Calls: Defender()
//        - newDefender = new Defender()
// ---------------------------------------------------------
function createDefender(defenderType, cost) {
  if (coins >= cost) {
    newDefender = new defenderType({
      position: { x: activeTile.position.x, y: activeTile.position.y },
    });
    coins -= cost;
    defenders.push(newDefender);
    activeTile.occupied = true;
    placementTilesArr[belowIndex].occupied = true;
    placementTilesArr[belowIndex + 1].occupied = true;
    placementTilesArr[currentIndex + 1].occupied = true;
    clicked_button_id = undefined;
    previouslyClickedButton.style.border = "none";
  } else {
    clicked_button_id = undefined;
    previouslyClickedButton.style.border = "none";
  }
}

// Define the defenders array and activeTile variable
const defenders = [];
let activeTile = undefined;
let clicked_button_id = undefined;
let radius;
let previouslyClickedButton = null;
let wave_button = null;
// Define the clicked_button_id variable
const html_image = document.querySelector(".def_button");
html_image.addEventListener("click", (event) => {
  // Get the id of the clicked button
  if (event.target.tagName !== "P" && event.target.tagName !== "DIV") {
    clicked_button_id = event.target.id;

    // Remove border from previously clicked button
    if (previouslyClickedButton) {
      previouslyClickedButton.style.border = "none";
    }

    // Add border to the clicked button
    const clicked_button = document.getElementById(clicked_button_id);
    if (clicked_button) {
      clicked_button.style.border = "2px solid black";
      clicked_button.style.borderRadius = "5px";
    }

    previouslyClickedButton = clicked_button;
  } else {
    clicked_button_id = undefined;
  }
});

wave_button = document.getElementById("wave");
wave_button.addEventListener("click", () => {
  if (enemies.length === 0 && wave <= 10) {
    wave = nextwave;
    spawnEnemy(wave);
    wave_button.style.backgroundColor = "green";
    nextwave++;
  }
});

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

    if (enemy.position.x > canvas.width - enemy.width) {
      //Check if the enemy has reached the end of the path
      //Remove the enemy from the enemies array
      //Decrement the hearts variable
      enemies.splice(i, 1);
      hearts--;

      // Check if the player has lost all their hearts
      if (hearts === 0) {
        // Stop the animation loop
        cancelAnimationFrame(animId);

        // Display the game over popup
        const gameOverPopup = document.createElement("div");
        gameOverPopup.classList.add("game-over-popup");
        gameOverPopup.style.top = canvas.height / 2 + "px";
        gameOverPopup.style.left = canvas.width / 2 + "px";
        gameOverPopup.innerHTML = `
            <h1>Game Over</h1>
            <button class="play-again-btn">Play Again</button>
            <button class="home-btn">Home</button>
        `;
        canvas.parentNode.appendChild(gameOverPopup);
        document
          .querySelector(".play-again-btn")
          .addEventListener("click", () => {
            window.location.reload();
          });

        document.querySelector(".home-btn").addEventListener("click", () => {
          window.location.href = "./index.php";
        });
      }
    }
  }

  if (enemies.length === 0) {
    wave_button.style.backgroundColor = "red";
    //Check if all enemies have been defeated, then spawn the next wave
    if (nextwave > 10) {
      // Stop the animation loop
      //If all waves are cleared, display the congratulations popup
      cancelAnimationFrame(animId);
      const congratulationsPopup = document.createElement("div");
      congratulationsPopup.classList.add("congratulations-popup");
      congratulationsPopup.style.top = canvas.height / 2 + "px";
      congratulationsPopup.style.left = canvas.width / 2 + "px";
      congratulationsPopup.innerHTML = `
          <h1>Congratulations!</h1>
          <p>You have cleared the level.</p>
          <button class="next-level-btn">Next Level</button>
          <button class="home-btn">Home</button>
      `;
      canvas.parentNode.appendChild(congratulationsPopup);

      document
        .querySelector(".next-level-btn")
        .addEventListener("click", () => {
          window.location.href = "./level3.php";
        });

      document.querySelector(".home-btn").addEventListener("click", () => {
        window.location.href = "./index.php";
      });
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

    // Loop through the enemies array and check if the defender is in range of an enemy
    const validTargets = enemies.filter((enemy) => {
      const xDistance = enemy.center.x - defender.center.x;
      const yDistance = enemy.center.y - defender.center.y;
      const distance = Math.hypot(xDistance, yDistance);
      return distance < enemy.radius + defender.radius;
    });

    // Set the target of the defender to the first enemy in range
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

          if (distance < projectile.target.radius + projectile.radius) {
            projectile.target.health -= defender.hit;
            const index = enemies.indexOf(projectile.target);
            if (index !== -1 && projectile.target.health <= 0) {
              if (coins + enemies[index].coins <= 940) {
                coins += enemies[index].coins;
              } else {
                coins = 940;
              }
              enemies.splice(index, 1);
            }

            defender.projectiles.splice(i, 1);
          }
        }
      }
    }
  });

  if (clicked_button_id === "Warrior") {
    radius = 250;
  } else if (clicked_button_id === "Fairy_3") {
    radius = 250;
  } else if (clicked_button_id === "Fairy_2") {
    radius = 225;
  }

  // Draw the radius of the defender on mouse hover
  if (clicked_button_id != undefined) {
    c.beginPath();
    c.arc(mouse.x, mouse.y, radius, 0, Math.PI * 2, false);
    c.fillStyle = "rgba(255, 0, 0, 0)";
    c.fill();
    c.lineWidth = 2;
    c.strokeStyle = "grey";
    c.stroke();
    c.closePath();
  }
}

// Define the mouse object
const mouse = {
  x: undefined,
  y: undefined,
};

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
      !activeTile.occupied
    ) {
      if (clicked_button_id === "Warrior") {
        createDefender(Warrior, 50);
      } else if (clicked_button_id === "Fairy_3") {
        createDefender(Fairy_3, 100);
      } else if (clicked_button_id === "Fairy_2") {
        createDefender(Fairy_2, 350);
      } else {
        return;
      }
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

animate();
