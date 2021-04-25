class Title extends Phaser.Scene {

  constructor() {
    super({
      key: `title`
    });
  }

  create() {
    this.centerX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    this.centerY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    // Background image
    this.bg = this.add.image(this.centerX, this.centerY, `title`);
    // Title
    this.title = this.add.text(this.centerX, this.centerY, `THE PERFECT
PAIR`, {
      fontFamily: `EnterCommand`,
      fontSize: `120px`,
      color: `#ffff`,
      align: `center`,
      fontStyle: `bold`}).setOrigin(0.5);
    // Instructions
    this.instructions = this.add.text(this.centerX, this.centerY + 200, `Press 'E' to begin`, {
      fontFamily: `EnterCommand`,
      fontSize: `50px`,
      color: `#ffff`,
      align: `center`}).setOrigin(0.5);

    // Register keyboard inputs
    this.keyboard = this.input.keyboard.addKeys(`E`);
  }// create() end


  update() {
    // Start game
    if(this.keyboard.E.isDown){
      this.gameStarted = true;
    };
    if(this.gameStarted){
      this.bg.y -= 10;
      this.title.y -= 10;
      this.instructions.y -= 10;
    };

    // Start next scene
    if(this.instructions.y <= -50){
      this.scene.start(`context`);
    };

    console.log(this.instructions.y);

  }// update() end

}
