// import { Enemy } from "./enemy.js";

class Orc_1 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
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
    console.log("Orc_1 created");
  }

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

class Orc_2 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 200;
    this.image = new Image();
    this.image.src = "assets/attackers/Orcs/ORK2/WALK_000.png";
    this.frameIndex = 0;
    this.frames = 7;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
  }

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

class Orc_3 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 300;
    this.image = new Image();
    this.image.src = "assets/attackers/Orcs/ORK3/WALK_000.png";
    this.frameIndex = 0;
    this.frames = 7;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
  }

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

class Knight_1 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 100;
    this.image = new Image();
    this.image.src = "assets/attackers/Knight/KNIGHT1/_WALK_000.png";
    this.frameIndex = 0;
    this.frames = 7;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
  }

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

class Knight_2 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 200;
    this.image = new Image();
    this.image.src = "assets/attackers/Knight/KNIGHT2/_WALK_000.png";
    this.frameIndex = 0;
    this.frames = 7;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
  }

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

class Knight_3 extends Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    super({ position });
    this.wpIndex = 0;
    this.radius = 50;
    this.health = 300;
    this.image = new Image();
    this.image.src = "assets/attackers/Knight/KNIGHT3/_WALK_000.png";
    this.frameIndex = 0;
    this.frames = 7;
    this.frameWidth = 100;
    this.frameHeight = 100;
    this.animationSpeed = 0.2;
    this.elapsedTime = 0;
  }

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
