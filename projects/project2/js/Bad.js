class Bad extends Phaser.Scene {

  constructor() {
    super({
      key: `bad`
    });
  }

  create() {
    this.centerX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    this.centerY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

    // Background image
    this.bg = this.add.image(this.centerX, this.centerY, `bad`);
    // Ending
    this.ending = this.add.text(this.centerX, 200, `Boxxy managed to escape the labyrinth.
Finally achieving what Boxxy sought, he cannot help but realize
something is missing. Either way, he is now alone on
his journey.`, {
      fontFamily: `EnterCommand`,
      fontSize: `40px`,
      color: `#ffff`,
      lineSpacing: 10,
      align: `center`}).setOrigin(0.5);
    // Instructions
    this.instructions = this.add.text(this.centerX, this.centerY, `THE END`, {
      fontFamily: `EnterCommand`,
      fontSize: `50px`,
      color: `#ffff`,
      align: `center`}).setOrigin(0.5);

    // Screenwipe //
    this.transitionStart = this.add.sprite(this.centerX, this.centerY, `platformH`).setScale(12);

    // Register keyboard inputs
    this.keyboard = this.input.keyboard.addKeys(`E, R`);
  }// create() end


  update() {
    if(this.keyboard.E.isDown || this.keyboard.R.isDown){
      this.scene.start(`title`);
    };

    // Level started
    if(!this.levelCompleted){
      this.transitionStart.y -= 25;
    }
    if(this.transitionStart.y === -1000){
      this.transitionStart.destroy();
    }

  }// update() end

}
