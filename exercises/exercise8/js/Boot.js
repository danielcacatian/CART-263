class Boot extends Phaser.Scene {

  constructor(){
    super({
      key: `boot`
    });
  }

  preload(){
    // Load assets here!
    this.load.spritesheet(`avatar`, `assets/images/avatar.png`, {
      frameWidth: 32,
      frameHeight: 32,
      endFrame: 4
    });
    this.load.image(`earth`, `assets/images/earth.png`);
    this.load.image(`asteroid`, `assets/images/asteroid.png`);

    this.load.on(`complete`, () => {
      this.scene.start(`title`);
    });
  }

  create(){

  }

  update(){

  }

}
