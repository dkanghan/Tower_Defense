//plashmentTile1.js

class placementTiles {
  //---------------------------------------------------------
  // Constructor for the placementTiles class.
  // Initializes the position, size, color, and occupied properties.
  // Input: An object with an position property.
  // Expected Output: None.
  // Description: Constructor function for the placementTiles class. Initializes the properties of a placementTiles object.
  //---------------------------------------------------------
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.size = 32;
    this.color = "rgba(0, 255, 0, 0.2)";
    this.occupied = false;
  }

  draw() {
    c.fillStyle = this.color;
    c.fillRect(this.position.x, this.position.y, this.size, this.size);
  }




  //------------------------------------------------------------------------------------------------
  //update()
  // Input: None.
  // Expected Output: None.
  // Description: Updates the color property of the placementTiles object based on the mouse hover.
  //------------------------------------------------------------------------------------------------
  update() {
    this.draw();
    if (
      mouse.x > this.position.x &&
      mouse.x < this.position.x + this.size &&
      mouse.y > this.position.y &&
      mouse.y < this.position.y + this.size
    ) {
      this.color = "rgba(0, 255, 0, 0.5)";
    } else {
      this.color = "rgba(0, 255, 0, 0.2)";
    }
  }
}
