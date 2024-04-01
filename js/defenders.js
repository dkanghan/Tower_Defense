//------------------------------------------------------------------------------------------------
// Class: Defenders
// Dependencies: projectile.js
// Description: This class contains the properties and methods for the defenders in the game.
// Expected Inputs: position
// Expected Outputs: None
//------------------------------------------------------------------------------------------------
class Defenders {
  //------------------------------------------------------------------------------------------------
    //Defenders class
    // Inputs: position
    // Expected Output: None
    // Description: Constructor function for the Defenders class. Initializes the properties of a defender object.
  //------------------------------------------------------------------------------------------------
  constructor({ position = { x: 0, y: 0 } }) {

    this.position = position;
    this.size = 32;
    this.width = this.size * 2;
    this.height = this.size * 2;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.color = "rgba(0, 0, 255, 0.2)";
    this.projectiles = [];
    this.radius = 250;
    this.target = null;

    this.image = new Image();
    this.image.src = "assets/defenders/ELf/Elf_01__ATTACK_001.png";
    this.frameIndex = 1;
    this.frames = 0;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.frameLimit = 5;
    this.type = "Elf_1";
  }

  //------------------------------------------------------------------------------------------------
  // draw()
  // Inputs: None
  // Expected Output: None
  // Description: Draws the defender object on the canvas.
  //------------------------------------------------------------------------------------------------
  draw() {
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Inputs: None
  // Expected Output: None
  // Description: Updates the defender object.
  //     - Draws the defender object on the canvas.
  //     - Creates a new projectile object every 100 frames.
  //------------------------------------------------------------------------------------------------
  update() {
    this.draw();

    this.frames++;
    if (this.frames % 100 === 0 && this.target) {
      this.projectiles.push(
        new Projectile(
          { position: { x: this.center.x, y: this.center.y } },
          this.target
        )
      );
    }
  }
}
