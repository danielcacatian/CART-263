class YouWin extends Phaser.Scene {

  constructor() {
    super({
      key: `you-win`
    });
  }

  create() {
    let youWinStyle = {
      fontFamily: `Monospace`,
      fontSize: `70px`,
      color: `#ffff`,
      textAlign: `center`,
      fontStyle: `bold`
    }
    let youWinText = `YOU WIN!`;

    let restartStyle = {
      fontFamily: `Monospace`,
      fontSize: `20px`,
      color: `#ffff`,
      align: `center`
    }
    let restartText = `Press [Space] to restart
if you wish`;

    let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    // You Win!
    this.add.text(screenCenterX, screenCenterY, youWinText, youWinStyle).setOrigin(0.5);
    // Press SPACE to restart
    this.add.text(screenCenterX, screenCenterY + 100, restartText, restartStyle).setOrigin(0.5);

    // register keyboard commands
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // Press SPACE to check instructions
    if (this.cursors.space.isDown) {
      this.scene.start(`instructions`);
    }
  }

}
