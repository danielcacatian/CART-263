class Play extends Phaser.Scene {

  constructor(){
    super({
      key: `play`
    });
  }

  create(){
    // Create the avatar
    this.avatar = this.physics.add.sprite(100, 300, `avatar`);
    this.avatar.setCollideWorldBounds(true);
    // Avatar animation
    this.anims.create({
      key: `avatar-flying`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        start: 0,
        end: 3
      }),
      frameRate: 12,
      repeat: -1
    });
    // Play animation
    this.avatar.play(`avatar-flying`);

    // Create the earth (destination)
    let x = 700;
    let y = Math.random() * this.sys.canvas.height-5;
    this.earth = this.physics.add.sprite(x, y, `earth`);

    // Obstacles
    this.asteroids = this.physics.add.group({
      key: `asteroid`,
      immovable: true,
      quantity: 50,
    });
    this.asteroids.children.each(function(wall){
      let x = Math.random() * this.sys.canvas.width;
      let y = Math.random() * this.sys.canvas.height;
      wall.setPosition(x, y);
    }, this);

    this.physics.add.overlap(this.avatar, this.earth, this.arrived, null, this); // collide with the earth
    this.physics.add.collider(this.avatar, this.asteroids); //cant go through asteroids


    // Register keyboard commands
    this.cursors = this.input.keyboard.createCursorKeys();

    let timerStyle = {
      fontSize: `20px`,
      color: `#ffff`,
      fontStyle: `bold`
    };
    // Timer
    this.oxygen = 100; // Starting oxygen level
    this.timerText = this.add.text(20, 20, ``, timerStyle); // timer text
    // Oxygen depletes by 1% every 100 millisecondes
    this.timedEvent = this.time.addEvent({ delay: 100, callback: this.oxygenDepleting, callbackScope: this, loop: true });
  }

  // Arrived on Earth
  arrived(avatar, earth){
    this.scene.start(`you-win`);
  }

  // Oxygen depleting
  oxygenDepleting(){
    this.oxygen--;
  }

  update(){
    // Keyboard controls
    if (this.cursors.left.isDown) {
      this.avatar.setAngularVelocity(-150);
    }
    else if (this.cursors.right.isDown) {
      this.avatar.setAngularVelocity(150);
    }
    else {
      this.avatar.setAngularVelocity(0);
    }

    if (this.cursors.up.isDown) {
      this.physics.velocityFromRotation(this.avatar.rotation, 200, this.avatar.body.acceleration);
    }
    else {
      this.avatar.setAcceleration(0);
    }

    // Timer text
    this.timerText.setText(`Oxygen: `+ this.oxygen + `%`);
    if(this.oxygen === 0){ // Oxygen reeaches 0 = Game Over
      this.scene.start(`game-over`);
    }
  }

}
