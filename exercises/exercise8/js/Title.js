class Title extends Phaser.Scene {

  constructor() {
    super({
      key: `title`
    });
  }

  create() {
    let titleStyle = {
      fontFamily: `Monospace`,
      fontSize: `70px`,
      color: `#ffff`,
      textAlign: `center`,
      fontStyle: `bold`
    }
    let gameTitle = `RETURN TO EARTH`;

    let pressStart = {
      fontFamily: `Monospace`,
      fontSize: `30px`,
      color: `#ffff`,
      align: `center`
    }
    let gamePressStart = `Press [Space] to continue`;

    let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    // Title
    this.add.text(screenCenterX, screenCenterY, gameTitle, titleStyle).setOrigin(0.5);
    // Press START
    this.add.text(screenCenterX, screenCenterY + 100, gamePressStart, pressStart).setOrigin(0.5);

    // to register keyboard commands
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // Press start to check instructions
    if (this.cursors.space.isDown) {
      this.scene.start(`instructions`);
    }
  }

}
