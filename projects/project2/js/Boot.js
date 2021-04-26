class Boot extends Phaser.Scene {

  constructor() {
    super({
      key: `boot`
    });
  }

  preload() {
    // Sprites
    // Boxxy
    this.load.spritesheet(`boxxy`, `assets/images/boxxy.png`, {
      frameWidth: 64,
      frameHeight: 64,
    });
    // Conny
    this.load.spritesheet(`conny`, `assets/images/conny.png`, {
      frameWidth: 64,
      frameHeight: 64,
    });
    // Door
    this.load.spritesheet(`door`, `assets/images/door.png`, {
      frameWidth: 128,
      frameHeight: 128,
    });
    // Plate
    this.load.spritesheet(`plate`, `assets/images/plate.png`, {
      frameWidth: 64,
      frameHeight: 64,
    });
    // Miscellaneous
    this.load.image(`box`, `assets/images/box.png`);
    this.load.image(`buttonS`, `assets/images/buttonS.png`);
    this.load.image(`buttonT`, `assets/images/buttonT.png`);
    this.load.image(`platformH`, `assets/images/platformH.png`);
    this.load.image(`platformV`, `assets/images/platformV.png`);
    this.load.image(`dialogue`, `assets/images/dialogue.png`);
    this.load.image(`title`, `assets/images/title.png`);
    this.load.image(`good`, `assets/images/good.png`);
    this.load.image(`bad`, `assets/images/bad.png`);
    // Sounds
    this.load.audio(`bgMusic`, `assets/sounds/bgmusic.mp3`);

    this.load.on(`complete`, () => {
      this.scene.start(`title`);
    })
  }

  create() {
    this.centerX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    this.centerY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    // Loading...
    this.title = this.add.text(this.centerX, this.centerY, `Loading...`, {
      fontFamily: `EnterCommand`,
      fontSize: `120px`,
      color: `#ffff`,
      align: `center`
    }).setOrigin(0.5);

    // Background music
    this.bgMusic = this.sound.add(`bgMusic`);
    this.bgMusic.loop = true;
    this.bgMusic.play();
  }

  update() {

  }

}
