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
image.src = "assets/Level2/level2map.png";

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

const mouse = {
    x: undefined,
    y: undefined,
  };
console.log(placementTilesArr);

function animate() {
    animId = requestAnimationFrame(animate);
    c.drawImage(image, 0, 0, canvas.width, canvas.height);
    placementTilesArr.forEach((tile) => {
      tile.update();
    });

}

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
