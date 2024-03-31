const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 760;
c.fillStyle = "rgba(255, 255, 255, 0.5)";
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.onload = function () {
  c.drawImage(image, 0, 0, canvas.width, canvas.height);
};
image.src = "assets/Level1/towerdefense1.png";

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

console.log(placementTilesArr);
const enemies = [];
let wave = 1;
let hearts = 10;
let coins = 100;


const waypoints = waypoints1;
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
            position: { x: 2.5 * waypoints[0].x - xOff, y: 2.3 * waypoints[0].y },
          })
        );
      } else {
        enemies.push(
          new Orc_2({
            position: { x: 2.5 * waypoints[0].x - xOff, y: 2.3 * waypoints[0].y },
          })
        );
      }
    } else if (wave === 3) {
      if (i < 3) {
        enemies.push(
          new Orc_1({
            position: { x: 2.5 * waypoints[0].x - xOff, y: 2.3 * waypoints[0].y },
          })
        );
      } else if (i < 6) {
        enemies.push(
          new Orc_2({
            position: { x: 2.5 * waypoints[0].x - xOff, y: 2.3 * waypoints[0].y },
          })
        );
      } else {
        enemies.push(
          new Orc_3({
            position: { x: 2.5 * waypoints[0].x - xOff, y: 2.3 * waypoints[0].y },
          })
        );
      }
    } else if (wave === 4) {
      if (i < 2) {
        enemies.push(
          new Orc_1({
            position: { x: 2.5 * waypoints[0].x - xOff, y: 2.3 * waypoints[0].y },
          })
        );
      } else if (i < 5) {
        enemies.push(
          new Orc_2({
            position: { x: 2.5 * waypoints[0].x - xOff, y: 2.3 * waypoints[0].y },
          })
        );
      } else {
        enemies.push(
          new Orc_3({
            position: { x: 2.5 * waypoints[0].x - xOff, y: 2.3 * waypoints[0].y },
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

const defenders = [];
let activeTile = undefined;

function animate() {
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


  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i];
    enemy.update();

    if (enemy.position.x > canvas.width - enemy.width) {
      enemies.splice(i, 1);
      hearts--;
      if (hearts === 0) {
        cancelAnimationFrame(animId);

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

  if (enemies.length === 0) {
    if(wave < 6){
      wave++;
      spawnEnemy(wave);
    }
    else{
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
      <button style="font-size: 36px; background-color: #4CAF50; color: white; border: none; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; margin: 4px 2px; cursor: pointer;"  onclick="window.location.href = './level2.html'"">Next Level</button>
      <button style="font-size: 36px; background-color: #f44336; color: white; border: none; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; margin: 4px 2px; cursor: pointer;" onclick="window.location.href = './index.html'">Home</button>
    `;
    canvas.parentNode.appendChild(congratulationsPopup);
    }

    
  }

  placementTilesArr.forEach((placementTile) => {
    placementTile.update();
  });

  defenders.forEach((defender) => {
    defender.update();
    defender.target = null;

    const validTargets = enemies.filter((enemy) => {
      const xDistance = enemy.center.x - defender.center.x;
      const yDistance = enemy.center.y - defender.center.y;
      const distance = Math.hypot(xDistance, yDistance);
      return distance < enemy.radius + defender.radius;
    });
    defender.target = validTargets[0];

    if (defender.target !== null) {
      for (let i = defender.projectiles.length - 1; i >= 0; i--) {
        const projectile = defender.projectiles[i];
        projectile.update();

        if (projectile.target) {
          const xDistance = projectile.target.center.x - projectile.position.x;
          const yDistance = projectile.target.center.y - projectile.position.y;
          const distance = Math.hypot(xDistance, yDistance);

          //when projectile hits enemy
          if (distance < projectile.target.radius + projectile.radius) {
            if(defender.type === "Elf_1"){
              projectile.target.health -= 50;
            }
            else if(defender.type === "Elf_3"){
              projectile.target.health -= 75;
            }
            else if(defender.type === "Fairy_1"){
              projectile.target.health -= 100;
            }
            const index = enemies.indexOf(projectile.target);
            if (index !== -1 && projectile.target.health <= 0) {
              if (coins < 940) {
                if(enemies[index].type === "Orc_1"){
                  coins += 10;
                }
                else if(enemies[index].type === "Orc_2"){
                  coins += 20;
                }
                else if(enemies[index].type === "Orc_3"){
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

const mouse = {
  x: undefined,
  y: undefined,
};


const html_image = document.querySelector(".def_button");
html_image.addEventListener("click", (event) => {
  clicked_button_id = event.target.id;
  //   console.log("clicked button is ", clicked_button_id);
});

let belowIndex;
let currentIndex;
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
    if (
      placementTilesArr[belowIndex].occupied === false && placementTilesArr[belowIndex+1].occupied === false && placementTilesArr[currentIndex+1].occupied === false &&
      activeTile &&
      !activeTile.occupied &&
      coins >= 50
    ) {
      let newDefender;
      if (clicked_button_id === "Warrior") {
        newDefender = new Elf_1({
          position: { x: activeTile.position.x, y: activeTile.position.y },
        });
        coins -= 50;
      } else if (clicked_button_id === "Fairy_2") {
        if(coins >= 100){
        newDefender = new Elf_3({
          position: { x: activeTile.position.x, y: activeTile.position.y },
        });
        coins -= 100;
      }
      } else if (clicked_button_id === "Fairy_3") {
        if (coins >= 150) {
          newDefender = new Fairy_1({
            position: { x: activeTile.position.x, y: activeTile.position.y },
          });
          coins -= 150;
        }
      } else {
        // Handle unknown button id
        console.log("Unknown button id:", clicked_button_id);
        return; // Exit the function if id is unknown
      }

      // Push the newly created defender into the defenders array
      defenders.push(newDefender);

      // Update other necessary variables
      activeTile.occupied = true;
      placementTilesArr[belowIndex].occupied = true;
      placementTilesArr[belowIndex+1].occupied = true;
      placementTilesArr[currentIndex+1].occupied = true;
    }
  }
});

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
