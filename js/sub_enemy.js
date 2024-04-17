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
    this.coins = 10;  
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
    this.coins = 20;
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
    this.coins = 30;
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
    this.coins = 10;
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
    this.coins = 15;
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
    this.initialhealth = 350;
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
    this.coins = 20;
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

//---------------------------------------------------------
// Class: Troll_1
// Dependencies: Enemy
// Description: This class contains the properties and methods for the Troll_1 enemy in the game.
// Expected Inputs: position
// Expected Outputs: An instance of the Troll_1 class
//---------------------------------------------------------
class Troll_1 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 200;
    this.initialhealth = 200;
    this.image = new Image();
    this.image.src = "assets/attackers/Trolls/TROLL1/Troll_01_1_WALK_000.png";
    this.frameIndex = 0;
    this.frames = 9;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.speed = 2.5;
    this.type = "Troll_1";
    this.coins = 10;
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Inputs: None
  // Expected Output: None
  // Description: Updates the Troll_1 object's position and frame.
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
    this.image.src = `assets/attackers/Trolls/TROLL1/Troll_01_1_WALK_00${this.frameIndex}.png`;
  }
}

//---------------------------------------------------------
// Class: Troll_2
// Dependencies: Enemy
// Description: This class contains the properties and methods for the Troll_2 enemy in the game.
// Expected Inputs: position
// Expected Outputs: An instance of the Troll_2 class
//---------------------------------------------------------
class Troll_2 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 250;
    this.initialhealth = 250;
    this.image = new Image();
    this.image.src = "assets/attackers/Trolls/TROLL2/Troll_02_1_WALK_000.png";
    this.frameIndex = 0;
    this.frames = 9;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.speed = 2;
    this.type = "Troll_2";
    this.coins = 20;
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Inputs: None
  // Expected Output: None
  // Description: Updates the Troll_2 object's position and frame.
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
    this.image.src = `assets/attackers/Trolls/TROLL2/Troll_02_1_WALK_00${this.frameIndex}.png`;
  }
}

//---------------------------------------------------------
// Class: Troll_3
// Dependencies: Enemy
// Description: This class contains the properties and methods for the Troll_3 enemy in the game.
// Expected Inputs: position
// Expected Outputs: An instance of the Troll_3 class
//---------------------------------------------------------
class Troll_3 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 400;
    this.initialhealth = 400;
    this.image = new Image();
    this.image.src = "assets/attackers/Trolls/TROLL3/Troll_03_1_WALK_000.png";
    this.frameIndex = 0;
    this.frames = 9;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.speed = 2.2;
    this.type = "Troll_3";
    this.coins = 25;
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Inputs: None
  // Expected Output: None
  // Description: Updates the Troll_3 object's position and frame.
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
    this.image.src = `assets/attackers/Trolls/TROLL3/Troll_03_1_WALK_00${this.frameIndex}.png`;
  }
}

//---------------------------------------------------------
// Class: Golem_1
// Dependencies: Enemy
// Description: This class contains the properties and methods for the Golem_1 enemy in the game.
// Expected Inputs: position
// Expected Outputs: An instance of the Golem_1 class
//---------------------------------------------------------
class Golem_2 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 1200;
    this.initialhealth = 1200;
    this.image = new Image();
    this.image.src = "assets/attackers/Golem/Golem-2/0_Golem_Walking_000.png";
    this.frameIndex = 0;
    this.frames = 23;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.speed = 2;
    this.type = "Troll_3";
    this.coins = 25;
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Inputs: None
  // Expected Output: None
  // Description: Updates the Golem_1 object's position and frame.
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
    if(this.frameIndex<10){
      this.image.src = `assets/attackers/Golem/Golem-2/0_Golem_Walking_00${this.frameIndex}.png`;
    }
    else{
      this.image.src = `assets/attackers/Golem/Golem-2/0_Golem_Walking_0${this.frameIndex}.png`;
    }
  }
}

//---------------------------------------------------------
// Class: Golem_1
// Dependencies: Enemy
// Description: This class contains the properties and methods for the Golem_1 enemy in the game.
// Expected Inputs: position
// Expected Outputs: An instance of the Golem_1 class
//---------------------------------------------------------
class Golem_3 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 1500;
    this.initialhealth = 1500;
    this.image = new Image();
    this.image.src = "assets/attackers/Golem/Golem-3/0_Golem_Walking_000.png";
    this.frameIndex = 0;
    this.frames = 23;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.speed = 2.5;
    this.type = "Troll_3";
    this.coins = 25;
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Inputs: None
  // Expected Output: None
  // Description: Updates the Golem_1 object's position and frame.
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
    if(this.frameIndex<10){
      this.image.src = `assets/attackers/Golem/Golem-3/0_Golem_Walking_00${this.frameIndex}.png`;
    }
    else{
      this.image.src = `assets/attackers/Golem/Golem-3/0_Golem_Walking_0${this.frameIndex}.png`;
    }
  }
}

