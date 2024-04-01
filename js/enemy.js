//------------------------------------------------------------------------------------------------
// Class: Enemy
// Dependencies: None
// Description: This class contains the properties and methods for the enemy in the game.
// Expected Inputs: position
// Expected Outputs: None
//------------------------------------------------------------------------------------------------

class Enemy {
  //------------------------------------------------------------------------------------------------
    //Enemy class
    // Inputs: position
    // Expected Output: None
    // Description: Constructor function for the Enemy class. Initializes the properties of a Enemy object.
  //------------------------------------------------------------------------------------------------
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.speed = 3;
    this.width = 75;
    this.height = 75;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 100;
    this.image = new Image();
    this.image.src = "assets/attackers/Orcs/ORK1/WALK_000.png";
    this.frameIndex = 0;
    this.frames = 7;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.type = "Orc_1";
    this.initialhealth = 100;
  }

  //------------------------------------------------------------------------------------------------
  // draw()
  // Inputs: None
  // Expected Output: None
  // Description: Draws the Enemy object on the canvas.
  //------------------------------------------------------------------------------------------------
  draw() {
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y - 20,
      this.width,
      this.height
    );

    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y - 30, this.width, 10);

    c.fillStyle = "green";
    c.fillRect(
      this.position.x,
      this.position.y - 30,
      (this.width * this.health) / this.initialhealth,
      10
    );
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Inputs: None
  // Expected Output: None
  // Description: Updates the Enemy object.
  //  - Draws the Enemy object on the canvas.
  //  - Updates the position of the Enemy object.
  //  - Updates the center of the Enemy object.
  //  - Updates the Enemy object's waypoint index.
  //------------------------------------------------------------------------------------------------
  update() {
    this.draw();

    const waypoint = waypoints[this.wpIndex];
    const yDistance = 2.3 * waypoint.y - this.position.y;
    const xDistance = 2.5 * waypoint.x - this.position.x;
    const angle = Math.atan2(yDistance, xDistance);
    this.position.x += Math.cos(angle) * this.speed;
    this.position.y += Math.sin(angle) * this.speed;

    if (
      Math.abs(Math.round(this.position.x) - Math.round(2.5 * waypoint.x)) <
        Math.abs(Math.cos(angle) * this.speed) &&
      Math.abs(Math.round(this.position.y) - Math.round(2.3 * waypoint.y)) <
        Math.abs(Math.sin(angle) * this.speed) &&
      this.wpIndex < waypoints.length - 1
    ) {
      this.wpIndex++;
    }

    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
  }
}
