//----------------------------------------------------------------
//sub_enemy.js
// Description: This file contains the properties and methods for the enemies in the game.
//------------------------------------------------------------------------------------------------

//---------------------------------------------------------
// Class: Orc_1
// Dependencies: Enemy
// Description: This class contains the properties and methods for the Orc_1 enemy in the game.
// Expected Inputs: position
// Expected Outputs: An instance of the Orc_1 class
//---------------------------------------------------------
class Orc_1 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 100;
    this.initialhealth = 100;
    this.image = new Image();
    this.image.src = "assets/attackers/Orcs/ORK1/WALK_000.png";
    this.frameIndex = 0;
    this.frames = 7;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.speed = 1.5;
    this.type = "Orc_1";
    console.log("Orc_1 created");
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Inputs: None
  // Expected Output: None
  // Description: Updates the Orc_1 object's position and frame.
  //------------------------------------------------------------------------------------------------
  update() {
    super.update();
    this.elapsedTime += 1 / 60;
    if (this.elapsedTime >= this.animationSpeed) {
      this.frameIndex++;
      this.elapsedTime = 0;
    }
    if (this.frameIndex >= this.frames) {
      this.frameIndex = 0;
    }
    this.image.src = `assets/attackers/Orcs/ORK1/WALK_00${this.frameIndex}.png`;
  }
}

//---------------------------------------------------------
// Class: Orc_2
// Dependencies: Enemy
// Description: This class contains the properties and methods for the Orc_2 enemy in the game.
// Expected Inputs: position
// Expected Outputs: An instance of the Orc_2 class
//---------------------------------------------------------
class Orc_2 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 150;
    this.initialhealth = 150;
    this.image = new Image();
    this.image.src = "assets/attackers/Orcs/ORK2/WALK_000.png";
    this.frameIndex = 0;
    this.frames = 7;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.speed = 2;
    this.type = "Orc_2";
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Inputs: None
  // Expected Output: None
  // Description: Updates the Orc_2 object's position and frame.
  //------------------------------------------------------------------------------------------------
  update() {
    super.update();
    this.elapsedTime += 1 / 60;
    if (this.elapsedTime >= this.animationSpeed) {
      this.frameIndex++;
      this.elapsedTime = 0;
    }
    if (this.frameIndex >= this.frames) {
      this.frameIndex = 0;
    }
    this.image.src = `assets/attackers/Orcs/ORK2/WALK_00${this.frameIndex}.png`;
  }
}

//---------------------------------------------------------
// Class: Orc_3
// Dependencies: Enemy
// Description: This class contains the properties and methods for the Orc_3 enemy in the game.
// Expected Inputs: position
// Expected Outputs: An instance of the Orc_3 class
//---------------------------------------------------------
class Orc_3 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 200;
    this.initialhealth = 200;
    this.image = new Image();
    this.image.src = "assets/attackers/Orcs/ORK3/WALK_000.png";
    this.frameIndex = 0;
    this.frames = 7;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.speed = 1.5;
    this.type = "Orc_3";
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Inputs: None
  // Expected Output: None
  // Description: Updates the Orc_3 object's position and frame.
  //------------------------------------------------------------------------------------------------
  update() {
    super.update();
    this.elapsedTime += 1 / 60;
    if (this.elapsedTime >= this.animationSpeed) {
      this.frameIndex++;
      this.elapsedTime = 0;
    }
    if (this.frameIndex >= this.frames) {
      this.frameIndex = 0;
    }
    this.image.src = `assets/attackers/Orcs/ORK3/WALK_00${this.frameIndex}.png`;
  }
}

//---------------------------------------------------------
// Class: Knight_1
// Dependencies: Enemy
// Description: This class contains the properties and methods for the Knight_1 enemy in the game.
// Expected Inputs: position
// Expected Outputs: An instance of the Knight_1 class
//---------------------------------------------------------
class Knight_1 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 100;
    this.initialhealth = 100;
    this.image = new Image();
    this.image.src = "assets/attackers/Knight/KNIGHT1/_WALK_000.png";
    this.frameIndex = 0;
    this.frames = 7;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.speed = 3;
    this.type = "Knight_1";
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Inputs: None
  // Expected Output: None
  // Description: Updates the Knight_1 object's position and frame.
  //------------------------------------------------------------------------------------------------
  update() {
    super.update();
    this.elapsedTime += 1 / 60;
    if (this.elapsedTime >= this.animationSpeed) {
      this.frameIndex++;
      this.elapsedTime = 0;
    }
    if (this.frameIndex >= this.frames) {
      this.frameIndex = 0;
    }
    this.image.src = `assets/attackers/Knight/KNIGHT1/_WALK_00${this.frameIndex}.png`;
  }
}

//---------------------------------------------------------
// Class: Knight_2
// Dependencies: Enemy
// Description: This class contains the properties and methods for the Knight_2 enemy in the game.
// Expected Inputs: position
// Expected Outputs: An instance of the Knight_2 class
//---------------------------------------------------------
class Knight_2 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 150;
    this.initialhealth = 150;
    this.image = new Image();
    this.image.src = "assets/attackers/Knight/KNIGHT2/_WALK_000.png";
    this.frameIndex = 0;
    this.frames = 7;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.speed = 2;
    this.type = "Knight_2";
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Inputs: None
  // Expected Output: None
  // Description: Updates the Knight_2 object's position and frame.
  //------------------------------------------------------------------------------------------------
  update() {
    super.update();
    this.elapsedTime += 1 / 60;
    if (this.elapsedTime >= this.animationSpeed) {
      this.frameIndex++;
      this.elapsedTime = 0;
    }
    if (this.frameIndex >= this.frames) {
      this.frameIndex = 0;
    }
    this.image.src = `assets/attackers/Knight/KNIGHT2/_WALK_00${this.frameIndex}.png`;
  }
}

//---------------------------------------------------------
// Class: Knight_3
// Dependencies: Enemy
// Description: This class contains the properties and methods for the Knight_3 enemy in the game.
// Expected Inputs: position
// Expected Outputs: An instance of the Knight_3 class
//---------------------------------------------------------
class Knight_3 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 350;
    this.initialhealth = 300;
    this.image = new Image();
    this.image.src = "assets/attackers/Knight/KNIGHT3/_WALK_000.png";
    this.frameIndex = 0;
    this.frames = 7;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.speed = 2.5;
    this.type = "Knight_3";
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Inputs: None
  // Expected Output: None
  // Description: Updates the Knight_3 object's position and frame.
  //------------------------------------------------------------------------------------------------
  update() {
    super.update();
    this.elapsedTime += 1 / 60;
    if (this.elapsedTime >= this.animationSpeed) {
      this.frameIndex++;
      this.elapsedTime = 0;
    }
    if (this.frameIndex >= this.frames) {
      this.frameIndex = 0;
    }
    this.image.src = `assets/attackers/Knight/KNIGHT3/_WALK_00${this.frameIndex}.png`;
  }
}

// export { Orc_1, Orc_2, Orc_3, Knight_1, Knight_2, Knight_3 };
