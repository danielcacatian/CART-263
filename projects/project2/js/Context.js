class Context extends Phaser.Scene {

  constructor() {
    super({
      key: `context`
    });
  }

  create() {
    this.centerY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    // Context
    this.context = this.add.text(700, this.centerY + 600, `Your name is Boxxy, and although you don't know much,
all you do know is that you need to escape. Find your way out
of the labyrinth by solving the puzzles and escaping.`, {
      fontFamily: `EnterCommand`,
      fontSize: `48px`,
      color: `#ffff`,
      align: `left`,
      lineSpacing: 10,
      fontStyle: `bold`
    }).setOrigin(0.5);
    // Instructions
    this.instructions = this.add.text(125, this.centerY + 750, `Press 'E' to begin`, {
      fontFamily: `EnterCommand`,
      fontSize: `40px`,
      color: `#ffff`,
      align: `left`
    });

    // Screenwipe ////////////////////////////////////////////////////////////
    this.transitionEnd = this.add.sprite(this.centerX, this.centerY * 4, `platformH`).setScale(12);

    // Register keyboard inputs
    this.keyboard = this.input.keyboard.addKeys(`E`);
  } // create() end


  update() {
    // Start game
    if (this.keyboard.E.isDown) {
      this.begin = true;
    }
    if (this.begin) {
      this.transitionEnd.y -= 25;
    }
    if (this.transitionEnd.y === this.centerY) {
      this.scene.start(`level1`);
    }

    // Stop text
    if (this.context.y === this.centerY) {
      this.reading = true;
    }
    if (!this.reading) {
      this.context.y -= 10;
      this.instructions.y -= 10;
    }

    // Start next scene
    if (this.instructions.y === -10) {
      this.scene.start(`context`);
    }

  } // update() end

}
