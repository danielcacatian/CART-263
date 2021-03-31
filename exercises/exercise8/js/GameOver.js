class GameOver extends Phaser.Scene {

  constructor(){
    super({
      key: `game-over`
    });
  }

  create(){
    let gameOverStyle = {
      fontFamily: `Monospace`,
      fontSize: `70px`,
      color: `#ffff`,
      textAlign: `center`,
      fontStyle: `bold`
    }
    let gameOverText = `GAME OVER`;

    let restartStyle = {
      fontFamily: `Monospace`,
      fontSize: `20px`,
      color: `#ffff`,
      align: `center`
    }
    let restartText = `You ran out of oxygen!
Press [Space] to restart`;

    let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    // Title
    this.add.text(screenCenterX, screenCenterY, gameOverText, gameOverStyle).setOrigin(0.5);
    // Press SPACE
    this.add.text(screenCenterX, screenCenterY+100, restartText, restartStyle).setOrigin(0.5);

    // register keyboard commands
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update(){
    // Press SPACE to check instructions
    if (this.cursors.space.isDown) {
      this.scene.start(`instructions`);
    }
  }

}
