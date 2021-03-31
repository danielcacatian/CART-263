class Instructions extends Phaser.Scene {

  constructor() {
    super({
      key: `instructions`
    });
  }

  create() {
    let headerStyle = {
      fontFamily: `Monospace`,
      fontSize: `50px`,
      color: `#ffff`,
      fontStyle: `bold`
    };
    let gameHeader = `Instructions`;

    let controlsStyle = {
      fontFamily: `Monospace`,
      fontSize: `30px`,
      color: `#ffff`,
      align: `center`
    };
    let gameControls = `- UP ARROW to move forward

- LEFT/RIGHT ARROWS to change
  direction

- Reach Earth before your oxygen
  reaches 0%`;

    let pressStart = {
      fontFamily: `Monospace`,
      fontSize: `30px`,
      color: `#ffff`,
      align: `center`
    }
    let gamePressStart = `Press [Space] to continue`;

    let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    // Header
    this.add.text(screenCenterX, screenCenterY - 200, gameHeader, headerStyle).setOrigin(0.5);
    // Controls
    this.add.text(screenCenterX, screenCenterY, gameControls, controlsStyle).setOrigin(0.5);
    // Press START
    this.add.text(screenCenterX, screenCenterY + 200, gamePressStart, pressStart).setOrigin(0.5);


    // to register keyboard commands
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // Press start to check instructions
    if (this.cursors.space.isDown) {
      this.scene.start(`play`);
    }
  }

}
