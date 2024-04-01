// projtile.js

class Projectile {
  //------------------------------------------------------------------------------------------------
  // Constructor for the Projectile class.
  // Initializes the position, velocity, target, radius, and image properties.
  // Input: An object with a position property and a target property.
  // Expected Output: None.
  //------------------------------------------------------------------------------------------------
  constructor({ position = { x: 0, y: 0 } }, target) {
    this.position = position;
    this.velocity = { x: 0, y: 0 };
    this.target = target;
    this.radius = 10;
    this.image = new Image();
    this.image.src = "assets/Laser/01.png";
  }

  //------------------------------------------------------------------------------------------------
  // draw()
  // Inputs: None
  // Expected Output: None
  // Description: Draws the Projectile object on the canvas.
  //------------------------------------------------------------------------------------------------
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Inputs: None
  // Expected Output: None
  // Description: Updates the Projectile object's position.
  //------------------------------------------------------------------------------------------------
  update() {
    if (!this.target) {
      return;
    }
    this.draw();
    const yDistance = this.target.center.y - this.position.y;
    const xDistance = this.target.center.x - this.position.x;
    const angle = Math.atan2(yDistance, xDistance);
    this.velocity.x = Math.cos(angle) * 5;
    this.velocity.y = Math.sin(angle) * 5;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
