// projtile.js

class Projectile {
  //------------------------------------------------------------------------------------------------
  // Constructor for the Projectile class.
  // Initializes the position, velocity, target, radius, and image properties.
  // Input: An object with a position property and a target property.
  // Expected Output: None.
  //------------------------------------------------------------------------------------------------
  constructor({ position = { x: 0, y: 0 } }, target,imagesrc = "assets/Laser/01.png") {
    this.position = position;
    this.velocity = { x: 0, y: 0 };
    this.target = target;
    this.radius = 10;
    this.image = new Image();
    this.image.src = imagesrc;
    this.angle = 0;

    if(imagesrc == "assets/arrows/Warrior_Arrow.png" || imagesrc == "assets/arrows/ELF_Arrow.png"){
    this.image.width = 60; 
    this.image.height = 30; 
    }
    else{
      this.image.width = 30; 
      this.image.height = 30; 
    }
  }

  //------------------------------------------------------------------------------------------------
  // draw()
  // Inputs: None
  // Expected Output: None
  // Description: Draws the Projectile object on the canvas.
  //        - If the target is to the left of the defender, the projectile is flipped horizontally. 
  //------------------------------------------------------------------------------------------------
  draw() {
    if (this.target.center.x < this.position.x) {
      this.angle = Math.PI;
      c.save();
      c.translate(this.position.x, this.position.y);
      c.scale(-1, 1); 
      c.drawImage(this.image, -this.image.width / 2, -this.image.height / 2, this.image.width, this.image.height);
      c.restore();
    } else {
      c.save();
      c.translate(this.position.x, this.position.y);
      c.drawImage(this.image, -this.image.width / 2, -this.image.height / 2, this.image.width, this.image.height);
      c.restore();
    }
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
