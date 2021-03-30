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

    // Create the thumbs-down
    let x = 700;
    let y = Math.random() * this.sys.canvas.height-5;
    this.sadness = this.physics.add.sprite(x, y, `thumbs-down`);

    // Obstacles
    this.walls = this.physics.add.group({
      key: `wall`,
      immovable: true,
      quantity: 50,
    });
    this.walls.children.each(function(wall){
      let x = Math.random() * this.sys.canvas.width;
      let y = Math.random() * this.sys.canvas.height;
      wall.setPosition(x, y);
      wall.setTint(0xdd3333);
    }, this);

    this.happiness = this.physics.add.group({
      key: `thumbs-up`,
      quantity: 2,
      bounceX: 0.5,
      bounceY: 0.5,
      collideWorldBounds: true,
      dragX: 50,
      dragY: 50
    });
    Phaser.Actions.RandomRectangle(this.happiness.getChildren(), this.physics.world.bounds);

    this.physics.add.overlap(this.avatar, this.sadness, this.getSad, null, this);
    this.physics.add.collider(this.avatar, this.happiness);
    this.physics.add.collider(this.sadness, this.happiness);
    this.physics.add.collider(this.happiness, this.happiness);
    this.physics.add.collider(this.avatar, this.walls); //cant go through walls


    this.cursors = this.input.keyboard.createCursorKeys();
  }

  getSad(avatar, sadness){
    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.sadness.setPosition(x, y);
  }

  update(){
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
  }

}
