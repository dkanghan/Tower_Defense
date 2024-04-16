//------------------------------------------------------------------------------------------------
// sub_defender.js
// Dependencies: projectile.js
// Description: This file contains the properties and methods for the defenders in the game.
//------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------
// Class representing Elf_1 defender
// Description: Represents a specific type of defender called Elf_1
// Expected input: An object with optional position properties
// Expected output: An instance of Elf_1 defender
//------------------------------------------------------------------------------------------------
class Elf_1 extends Defenders {
  //------------------------------------------------------------------------------------------------
  //Elf_1 class
  // Inputs: position
  // Expected Output: None
  // Description: Constructor function for the Elf_1 class. Initializes the properties of a Elf_1 object.
  //------------------------------------------------------------------------------------------------
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });

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
    this.imagesrc = "assets/arrows/ELF_Arrow.png";
    this.hit = 50;
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Method to update the Elf_1 defender
  // Description: Updates the state of the defender
  // Expected input: None
  // Expected output: None
  //------------------------------------------------------------------------------------------------
  update() {
    super.update();

    if (!this.target) {
      return;
    }

    this.elapsedTime += 1 / 60;
    if (this.elapsedTime >= this.animationSpeed) {
      this.frameIndex++;
      this.elapsedTime = 0;
    }
    if (this.frameIndex >= this.frameLimit) {
      this.frameIndex = 1;
    }
    this.image.src = `assets/defenders/ELf/Elf_01__ATTACK_00${this.frameIndex}.png`;
  }
}

//------------------------------------------------------------------------------------------------
// Class representing Elf_3 defender
// Description: Represents a specific type of defender called Elf_3
// Expected input: An object with optional position properties
// Expected output: An instance of Elf_3 defender
//------------------------------------------------------------------------------------------------
class Elf_3 extends Defenders {
  //------------------------------------------------------------------------------------------------
  //Elf_3 class
  // Inputs: position
  // Expected Output: None
  // Description: Constructor function for the Elf_3 class. Initializes the properties of a Elf_3 object.
  //------------------------------------------------------------------------------------------------
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });

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
    this.image.src = "assets/defenders/ELf/Elf_03__ATTACK_001.png";
    this.frameIndex = 1;
    this.frames = 0;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.frameLimit = 6;
    this.type = "Elf_3";
    this.hit = 75;
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Method to update the Elf_3 defender
  // Description: Updates the state of the defender
  // Expected input: None
  // Expected output: None
  //------------------------------------------------------------------------------------------------
  update() {
    super.update();

    if (!this.target) {
      return;
    }

    this.elapsedTime += 1 / 60;
    if (this.elapsedTime >= this.animationSpeed) {
      this.frameIndex++;
      this.elapsedTime = 0;
    }
    if (this.frameIndex >= this.frameLimit) {
      this.frameIndex = 1;
    }
    this.image.src = `assets/defenders/ELf/Elf_03__ATTACK_00${this.frameIndex}.png`;
  }
}

//------------------------------------------------------------------------------------------------
// Class representing Fairy_1 defender
// Description: Represents a specific type of defender called Fairy_1
// Expected input: An object with optional position properties
// Expected output: An instance of Fairy_1 defender
//------------------------------------------------------------------------------------------------
class Fairy_1 extends Defenders {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });

    this.size = 32;
    this.width = this.size * 2;
    this.height = this.size * 2;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.color = "rgba(0, 0, 255, 0.2)";
    this.projectiles = [];
    this.radius = 200;
    this.target = null;

    this.image = new Image();
    this.image.src = "assets/defenders/Fairy/Fairy_01__ATTACK_000.png";
    this.frameIndex = 1;
    this.frames = 0;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.frameLimit = 6;
    this.type = "Fairy_1";
    this.imagesrc = "assets/Laser/02.png";
    this.hit = 150;
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Method to update the Fairy_1 defender
  // Description: Updates the state of the defender
  // Expected input: None
  // Expected output: None
  //------------------------------------------------------------------------------------------------
  update() {
    super.update();

    if (!this.target) {
      return;
    }

    this.elapsedTime += 1 / 60;
    if (this.elapsedTime >= this.animationSpeed) {
      this.frameIndex++;
      this.elapsedTime = 0;
    }
    if (this.frameIndex >= this.frameLimit) {
      this.frameIndex = 1;
    }
    this.image.src = `assets/defenders/Fairy/Fairy_01__ATTACK_00${this.frameIndex}.png`;
  }
}

//------------------------------------------------------------------------------------------------
// Class representing Fairy_2 defender
// Description: Represents a specific type of defender called Fairy_2
// Expected input: An object with optional position properties
// Expected output: An instance of Fairy_2 defender
//------------------------------------------------------------------------------------------------
class Fairy_2 extends Defenders {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });

    this.size = 32;
    this.width = this.size * 2;
    this.height = this.size * 2;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.color = "rgba(0, 0, 255, 0.2)";
    this.projectiles = [];
    this.radius = 225;
    this.target = null;

    this.image = new Image();
    this.image.src = "assets/defenders/Fairy/Fairy_02__ATTACK_000.png";
    this.frameIndex = 1;
    this.frames = 0;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.frameLimit = 5;
    this.type = "Fairy_2";
    this.imagesrc = "assets/Laser/06.png";
    this.hit = 100;
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Method to update the Fairy_2 defender
  // Description: Updates the state of the defender
  // Expected input: None
  // Expected output: None
  //------------------------------------------------------------------------------------------------
  update() {
    super.update();

    if (!this.target) {
      return;
    }

    this.elapsedTime += 1 / 60;
    if (this.elapsedTime >= this.animationSpeed) {
      this.frameIndex++;
      this.elapsedTime = 0;
    }
    if (this.frameIndex >= this.frameLimit) {
      this.frameIndex = 1;
    }
    this.image.src = `assets/defenders/Fairy/Fairy_02__ATTACK_00${this.frameIndex}.png`;
  }
}

//------------------------------------------------------------------------------------------------
// Class representing Fairy_3 defender
// Description: Represents a specific type of defender called Fairy_3
// Expected input: An object with optional position properties
// Expected output: An instance of Fairy_3 defender
//------------------------------------------------------------------------------------------------
class Fairy_3 extends Defenders {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });

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
    this.image.src = "assets/defenders/Fairy/Fairy_03__ATTACK_000.png";
    this.frameIndex = 1;
    this.frames = 0;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.frameLimit = 5;
    this.type = "Fairy_3";
    this.imagesrc = "assets/Laser/08.png";
    this.hit = 80;
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Method to update the Fairy_3 defender
  // Description: Updates the state of the defender
  // Expected input: None
  // Expected output: None
  //------------------------------------------------------------------------------------------------
  update() {
    super.update();

    if (!this.target) {
      return;
    }

    this.elapsedTime += 1 / 60;
    if (this.elapsedTime >= this.animationSpeed) {
      this.frameIndex++;
      this.elapsedTime = 0;
    }
    if (this.frameIndex >= this.frameLimit) {
      this.frameIndex = 1;
    }
    this.image.src = `assets/defenders/Fairy/Fairy_03__ATTACK_00${this.frameIndex}.png`;
  }
}

//------------------------------------------------------------------------------------------------
// Class representing Warrior defender
// Description: Represents a specific type of defender called Warrior
// Expected input: An object with optional position properties
// Expected output: An instance of Warrior defender
//------------------------------------------------------------------------------------------------
class Warrior extends Defenders {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });

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
    this.image.src = "assets/defenders/Warrior/Warrior_03__ATTACK_000.png";
    this.frameIndex = 1;
    this.frames = 0;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
    this.frameLimit = 8;
    this.type = "Warrior";
    this.imagesrc = "assets/arrows/Warrior_Arrow.png";
    this.hit = 50;
  }

  //------------------------------------------------------------------------------------------------
  // update()
  // Method to update the Warrior defender
  // Description: Updates the state of the defender
  // Expected input: None
  // Expected output: None
  //------------------------------------------------------------------------------------------------
  update() {
    super.update();

    if (!this.target) {
      return;
    }

    this.elapsedTime += 1 / 60;
    if (this.elapsedTime >= this.animationSpeed) {
      this.frameIndex++;
      this.elapsedTime = 0;
    }
    if (this.frameIndex >= this.frameLimit) {
      this.frameIndex = 1;
    }
    this.image.src = `assets/defenders/Warrior/Warrior_03__ATTACK_00${this.frameIndex}.png`;
  }
}
