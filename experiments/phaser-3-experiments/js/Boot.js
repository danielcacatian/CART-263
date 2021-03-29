class Boot extends Phaser.Scene {

  constructor() {
    super({
      key: `boot`
    });
  }

  // only in the Boot.js
  preload() {
    // this.load.image(`image key-name`, `link to image`)
    // loads an image
    this.load.image(`wall`, `assets/images/wall.png`);
    // this.load.spritesheet(`image key-name`, `link to image`, {properties})
    // loads a spritesheet
    this.load.spritesheet(`avatar`, `assets/images/avatar.png`, {
      frameWidth: 32, // single frame width
      frameHeight: 32, // single frame width
      endFrame: 6 // number of total frames
    });
                      // use () => (arrow function)
    this.load.on(`complete`, () => {
      this.scene.start(`play`);
    });
  }

  create() {
    let style = {
      fontFamily: `Arial`,
      fontSize: `40px`,
      color: `#ffff`
    };
    let loadingString = `Loading...`
    // add.text( x, y, `string`, {css})
    // Adds text into the scene
    this.add.text(100, 100, loadingString, style);
  }

  update() {

  }

}
