class Play extends Phaser.Scene {

  constructor() {
    super({
      key: `play`
    })
  }

  create() {
    let style = {
      fontFamily: `Arial`,
      fontSize: `40px`,
      color: `#ffff`
    };
    let gameDescription = `Think of a number... wrong!`
    // this.add.text( x, y, `string`, {css})
    // Adds text into the scene
    // this.add.text(100, 100, gameDescription, style);

    // this.add.image(x, y, `image key`)
    // this.wall = this.physics.add.image(100, 100, `wall`);
    // this.wall.setImmovable(true); // makes it immovable in the physics world
    // setTint() = tints the color of a sprite (no `` needed)
    // this.wall.setTint(0xdd3333);

    // duplicates a sprite
    this.walls = this.physics.add.group({
      key: `wall`,
      immovable: true,
      quantity: 24
    });
    // apply functions to group
    this.walls.children.each(function(wall){
      let x = Math.random() * this.sys.canvas.width; // current width of the game
      let y = Math.random() * this.sys.canvas.height; // current height of the game
      wall.setPosition(x, y);
      wall.setTint(0xdd3333);
    }, this);

    this.collectables = this.physics.add.group({
      key: `wall`,
      immovable: true,
      quantity: 24
    });
    this.collectables.children.each(function(collectable){
      let x = Math.random() * this.sys.canvas.width;
      let y = Math.random() * this.sys.canvas.height;
      collectable.setPosition(x, y);
      collectable.setTint(0x33dd33);
    }, this);

    // this.add.sprite(x, y, `image key`)
    this.avatar = this.physics.add.sprite(200, 200, `avatar`);
    // this.physics = makes the object part of the physic simulation

    this.createAnimations();

    // collides with the avatar and the wall and makes it non-passable
    this.physics.add.collider(this.avatar, this.walls);
    // overlaps (object 1, object 2, function, null, this)
    this.physics.add.overlap(this.avatar, this.collectables, this.collectItem, null, this);

    // plays animation
    this.avatar.play(`avatar-idle`)

    // physics built-in functions
    this.avatar.setCollideWorldBounds(true); // cant go off canvas

    // to register keyboard commands
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  collectItem(avatar, collectable) {
    collectable.destroy();
  }

  update() {
    this.avatar.setVelocity(0); // allows movement

    if (this.cursors.left.isDown) {
      this.avatar.setVelocityX(-300);
    }
    else if (this.cursors.right.isDown) {
      this.avatar.setVelocityX(300);
    }

    if (this.cursors.up.isDown) {
      this.avatar.setVelocityY(-300);
    }
    else if (this.cursors.down.isDown) {
      this.avatar.setVelocityY(300);
    }

    // body = representation of the physics of the sprite
    if (this.avatar.body.velocity.x !== 0 || this.avatar.body.velocity.y !== 0) {
      this.avatar.play(`avatar-moving`, true); // true = if its playing, it does not reset on every frame
    }
    else {
      this.avatar.play(`avatar-idle`)
    }
  }

  createAnimations() {
      // create an animation
      this.anims.create({
        key: `avatar-idle`,                  // spritesheet name
        frames: this.anims.generateFrameNumbers(`avatar`, {
          start: 0, // 1st frame
          end: 0 // last frame
        }),
        frameRate: 24,
        repeat: -1 // loops infinitely
      });

    this.anims.create({
      key: `avatar-moving`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        start: 0, // 1st frame
        end: 6 // last frame
      }),
      frameRate: 24,
      repeat: -1 // loops infinitely
    });
  }
}
