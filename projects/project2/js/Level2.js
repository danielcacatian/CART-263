class Level2 extends Phaser.Scene {

  constructor(){
    super({
      key: `level2`
    });
  }

  create(){
    //Variables ///////////////////////////////////////////////////////////////
    // Boxxy
    this.boxxyX = 125; //Boxxy's spawnpoint (X)
    this.boxxyY = 625; //Boxxy's spawnpoint (y)
    // Box
    this.boxX = 400;
    this.boxY = 625;
    // Floor
    this.floorX = 100;
    this.floorY = 950;
    this.floorScale = 8;
    // Platforms
    this.centerX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    this.centerY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    // Button
    this.buttonSX = 1150;
    this.buttonSY = 525;


    // Boxxy ///////////////////////////////////////////////////////////////
    this.boxxy = this.physics.add.sprite(this.boxxyX, this.boxxyY, `boxxy`);
    this.boxxy.setCollideWorldBounds(true);
    this.boxxy.setBounce(0.2);

    // Box ///////////////////////////////////////////////////////////////
    this.box = this.physics.add.sprite(this.boxX, this.boxY, `box`);
    this.box.setCollideWorldBounds(true);
    this.box.setDragX(1000);

    //Button ///////////////////////////////////////////////////////////////
    this.buttons = this.physics.add.staticGroup();
    this.buttonS = this.buttons.create(this.buttonSX, this.buttonSY, `buttonS`); //square button (for Boxxy)

    // Platforms ///////////////////////////////////////////////////////////////
    // Horizontal
    this.platformsH = this.physics.add.staticGroup();
    this.platformsH.create(this.floorX, this.floorY, `platformH`).setScale(this.floorScale).refreshBody(); //floor
    this.platformsH.create(-775, 190, `platformH`).setScale(6).refreshBody();
    this.platformsH.create(1400, 675, `platformH`).setScale(3).refreshBody();
    // Vertical
    this.platformsV = this.physics.add.staticGroup();
    this.platformsV.create(this.boxX, 125, `platformV`);
    this.platformsV.create(this.boxX, 435, `platformV`);

    // Collision ///////////////////////////////////////////////////////////////
    // Boxxy collisions
    this.physics.add.collider(this.boxxy, this.platformsH);
    this.physics.add.collider(this.boxxy, this.platformsV);
    this.physics.add.collider(this.box, this.platformsH);
    this.physics.add.collider(this.boxxy, this.box);

    // Screenwipe //////////////////////////////////////////////////////////////
    this.transitionStart = this.add.sprite(this.centerX, this.centerY, `platformH`).setScale(12);
    this.transitionEnd = this.add.sprite(this.centerX, this.centerY*3, `platformH`).setScale(12);
    this.transitionRestart = this.add.sprite(this.centerX, this.centerY*3, `platformH`).setScale(12);

    // register keyboard commands
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keyboard = this.input.keyboard.addKeys(`W, A, D, E, R`);

  }// create() end

  update(){
    // Controls ////////////////////////////////////////////////////////////////
    // Boxxy
    this.boxxy.setVelocityX(0);
    // left & right
    if(this.keyboard.A.isDown){
      this.boxxy.setVelocityX(-200);
    }
    else if(this.keyboard.D.isDown){
      this.boxxy.setVelocityX(200);
    }
    // jump
    if(this.keyboard.W.isDown && this.boxxy.body.onFloor()){
      this.boxxy.setVelocityY(-300);
    }

    // Level started ////////////////////////////////////////////////////////
    if(!this.levelCompleted){
      this.transitionStart.y -= 25;
    }
    if(this.transitionStart.y === -1000){
      this.transitionStart.destroy();
    }
    // Level completed ////////////////////////////////////////////////////////
    if(this.levelCompleted){
      this.transitionEnd.y -= 25;
    }
    if(this.transitionEnd.y === this.centerY){
      this.scene.start(`level3`);
    }
    // Level restart //////////////////////////////////////////////////////////
    if(this.keyboard.R.isDown){
      this.transitionRestart.y -= 25;
    }
    if(this.transitionEnd.y === this.centerY){
      this.scene.start(`level2`);
    }

    // Buttons are pressed at the same time
    this.boxxyR = false;
    this.physics.add.overlap(this.boxxy, this.buttonS, this.boxxyReady, null, this);
  }// update() end

  boxxyReady(boxxy, buttonS){
    if(!this.levelCompleted){
      this.levelCompleted = false;
      this.boxxyR = true;
      if(this.keyboard.E.isDown && this.boxxyR){
        this.levelCompleted = true;
      };
    }
  }

}
