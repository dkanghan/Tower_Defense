class Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    // Enemy position
    this.position = position;
    // Enemy speed
    this.speed = 3; //--------------------------
    // Enemy dimensions
    this.width = 75;
    this.height = 75;
    // Enemy center point
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    // Waypoint index
    this.wpIndex = 0;
    // Enemy radius
    this.radius = 50;
    // Enemy health
    this.health = 100; //---------------------------
    // Enemy image
    this.image = new Image();
    this.image.src = "assets/attackers/Orcs/ORK1/WALK_000.png"; //--------------------
    // Animation properties
    this.frameIndex = 0;
    this.frames = 7;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
  }

  draw() {
    // Draw enemy image
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );

    // Draw enemy bounding box
    // c.fillStyle = 'rgba(255, 0, 0, 0.5)';
    // c.fillRect(this.position.x, this.position.y, this.width, this.height);

    // Draw enemy bounding circle
    // c.beginPath();
    // c.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    // c.fill();

    // Draw enemy health bar background
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y - 30, this.width, 10);
    // Draw enemy health bar
    c.fillStyle = "green";
    c.fillRect(
      this.position.x,
      this.position.y - 30,
      (this.width * this.health) / 100,
      10
    );
  }

  update() {
    this.draw();
    // Update animation frame
    // this.elapsedTime += 1 / 60;
    // if (this.elapsedTime >= this.animationSpeed) {
    //   this.frameIndex++;
    //   this.elapsedTime = 0;
    // }
    // if (this.frameIndex >= this.frames) {
    //   this.frameIndex = 0;
    // }
    // this.image.src = `assets/attackers/Orcs/ORK1/WALK_00${this.frameIndex}.png`;

    // Calculate movement towards the next waypoint
    const waypoint = waypoints[this.wpIndex];
    const yDistance = 2.3 * waypoint.y - this.position.y;
    const xDistance = 2.5 * waypoint.x - this.position.x;
    const angle = Math.atan2(yDistance, xDistance);
    this.position.x += Math.cos(angle) * this.speed;
    this.position.y += Math.sin(angle) * this.speed;

    // Check if enemy has reached the next waypoint
    if (
      Math.abs(Math.round(this.position.x) - Math.round(2.5 * waypoint.x)) <
        Math.abs(Math.cos(angle) * this.speed) &&
      Math.abs(Math.round(this.position.y) - Math.round(2.3 * waypoint.y)) <
        Math.abs(Math.sin(angle) * this.speed) &&
      this.wpIndex < waypoints.length - 1
    ) {
      this.wpIndex++;
    }

    // Update enemy center point
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
  }
}
