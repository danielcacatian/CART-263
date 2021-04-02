class Play extends Phaser.Scene {

  constructor(){
    super({
      key: `play`
    });
  }

  create(){
    // Boxxy & Conny
    this.boxxy = this.physics.add.sprite(100, 400, `boxxy`);
    this.conny = this.physics.add.sprite(200, 400, `conny`);
    this.boxxy.setCollideWorldBounds(true);
    this.conny.setCollideWorldBounds(true);
    this.boxxy.setBounce(0.2);
    this.conny.setBounce(0.2);

    // Box
    this.box = this.physics.add.sprite(300, 200, `box`);
    this.box.setCollideWorldBounds(true);
    this.box.setDragX(1000);

    //Button
    this.buttons = this.physics.add.staticGroup();
    this.buttonT = this.buttons.create(100, 225, `buttonT`); //triangle button (for Conny)
    this.buttonS = this.buttons.create(1050, 375, `buttonS`); //triangle button (for Boxxy)

    // Platforms
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(100, 750, `platform`).setScale(8).refreshBody();
    this.platforms.create(150, 300, `platform`);
    this.platforms.create(1200, 475, `platform`).setScale(2).refreshBody();

    // Collision
    this.physics.add.collider(this.boxxy, this.platforms);
    this.physics.add.collider(this.conny, this.platforms);
    this.physics.add.collider(this.box, this.platforms);
    this.physics.add.collider(this.boxxy, this.box);
    this.physics.add.collider(this.conny, this.box);

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
    this.keyboard = this.input.keyboard.addKeys(`W, A, D, E`);

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
    if(this.cursors.up.isDown && this.boxxy.body.onFloor()){
      this.boxxy.setVelocityY(-300);
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
    if(this.keyboard.W.isDown  && this.conny.body.onFloor()){
      this.conny.setVelocityY(-400);
    }

    // Launch ability
    this.physics.add.overlap(this.boxxy, this.conny, this.launch, null, this);
    // Buttons are pressed at the same time
    this.physics.add.overlap(this.boxxy, this.buttonS, this.boxxyReady, null, this);
    this.physics.add.overlap(this.conny, this.buttonT, this.connyReady, null, this);
  }

  launch(boxxy, conny){
    if(this.cursors.space.isDown && this.conny.body.onFloor()){
      this.conny.setVelocityY(-600);
    }
  }

  boxxyReady(boxxy, buttonS){
    let boxxyR = true;
    if(boxxyR && connyR && this.keyboard.E.isDown){
      alert(`You completed the prototype!`);
    }
  }

  connyReady(conny, buttonT){
    let connyR = true;
    if(boxxyR && connyR && this.keyboard.E.isDown){
      alert(`You completed the prototype!`);
    }
    console.log(connyR)
  }

}
