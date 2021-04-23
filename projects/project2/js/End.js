class End extends Phaser.Scene {

  constructor() {
    super({
      key: `end`
    });
  }

  create() {
    let screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    let screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    this.add.text(screenCenterX, screenCenterY, `You completed the prototype!`, {
      fontSize: `40px`,
      color: `#ffff`,
      textAlign: `center`,
      fontStyle: `bold`}).setOrigin(0.5);
  }

  update() {

  }

}
