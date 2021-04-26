class Boot extends Phaser.Scene {

  constructor(){
    super({
      key: `boot`
    });
  }

  preload(){
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

    this.load.on(`complete`, () => {
      this.scene.start(`title`);
    })
  }

  create(){

  }

  update(){

  }

}
