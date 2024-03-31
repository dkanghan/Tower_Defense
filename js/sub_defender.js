class Elf_1 extends Defenders {
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
  }

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

class Elf_3 extends Defenders {
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
  }

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
    this.radius = 250;
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
  }

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
    this.radius = 250;
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
  }

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
  }

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
  }

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
