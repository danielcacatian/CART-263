class Play extends Phaser.Scene {

  constructor(){
    super({
      key: `play`
    });
  }

  create(){
    // Boxxy & Conny
    this.boxxy = this.physics.add.sprite(100, 100, `boxxy`);
    this.conny = this.physics.add.sprite(200, 100, `conny`);
    this.boxxy.setCollideWorldBounds(true);
    this.conny.setCollideWorldBounds(true);
    this.boxxy.setBounce(0.2);
    this.conny.setBounce(0.2);

    // Platforms
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(100, 750, `platform`).setScale(8).refreshBody();
    this.platforms.create(150, 300, `platform`);
    this.platforms.create(1200, 475, `platform`).setScale(2).refreshBody();

    // Collision
    this.physics.add.collider(this.boxxy, this.platforms);
    this.physics.add.collider(this.conny, this.platforms);


    // Level layout
    // With mapeditor.org (DOESN'T WORK PROPERLY)
    // this.map = this.add.tilemap(`prototype-map`);
    // this.level = this.map.addTilesetImage(`tiles`, `tiles`); // tileset
    // // Level layers
    // this.platforms = this.map.createStaticLayer(`Platforms`, [this.level], 0, 0).setDepth(-1);
    //Collisions
    // this.platforms.setCollisionByExclusion(-1, true);

    // register keyboard commands
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keyboard = this.input.keyboard.addKeys(`W, A, D`);

  }

  update(){


    // Boxxy controls
    this.boxxy.setVelocityX(0);
    // left & right
    if(this.cursors.left.isDown){
      this.boxxy.setVelocityX(-200);
    }
    else if(this.cursors.right.isDown){
      this.boxxy.setVelocityX(200);
    }
    // jump
    if(this.cursors.up.isDown){
      this.boxxy.setVelocityY(-200);
    }

    // Conny controls
    this.conny.setVelocityX(0);
    // left & right
    if(this.keyboard.A.isDown){
      this.conny.setVelocityX(-200);
    }
    else if(this.keyboard.D.isDown){
      this.conny.setVelocityX(200);
    }
    // jump
    if(this.keyboard.W.isDown){
      this.conny.setVelocityY(-200);
    }

  }

}
