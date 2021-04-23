 class Level1 extends Phaser.Scene {

  constructor(){
    super({
      key: `level1`
    });
  }

// CREATE FUNCTION ////////////////////////////////////////////////////////////
// Contains the setup of different sprites
  create(){
    // Variables ////////////////////////////////////////////////////////////
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
    this.buttonSX = 1000;
    this.buttonSY = 525;
    // Door
    this.doorX = 1200;
    this.doorY = 500;
    // Instructions
    let instructionsStyle = {
      fontFamily: `monospace`,
      fontSize: `20px`,
      color: `#ffff`,
      align: `center`
    };

    // Box ////////////////////////////////////////////////////////////
    this.box = this.physics.add.sprite(this.boxX, this.boxY, `box`);
    this.box.setCollideWorldBounds(true);
    this.box.setDragX(1000);

    // Button ////////////////////////////////////////////////////////////
    this.buttons = this.physics.add.staticGroup();
    this.buttonS = this.buttons.create(this.buttonSX, this.buttonSY, `buttonS`); //square button (for Boxxy)

    // Door ////////////////////////////////////////////////////////////
    this.door = this.physics.add.sprite(this.doorX, this.doorY, `door`);
    this.createAnimations();

    // Boxxy ////////////////////////////////////////////////////////////
    this.boxxy = this.physics.add.sprite(this.boxxyX, this.boxxyY, `boxxy`);
    this.boxxy.setCollideWorldBounds(true);
    this.boxxy.setBounce(0.2);

    // Platforms ////////////////////////////////////////////////////////////
    // Horizontal
    this.platformsH = this.physics.add.staticGroup();
    this.platformsH.create(this.floorX, this.floorY, `platformH`).setScale(this.floorScale).refreshBody(); //floor
    this.platformsH.create(-775, 190, `platformH`).setScale(6).refreshBody();
    this.platformsH.create(1400, 675, `platformH`).setScale(3).refreshBody();
    // Vertical
    this.platformsV = this.physics.add.staticGroup();
    this.platformsV.create(this.boxX, 125, `platformV`);
    this.platformsV.create(this.boxX, 435, `platformV`);

    // Collision ////////////////////////////////////////////////////////////
    // Boxxy collisions
    this.physics.add.collider(this.boxxy, this.platformsH);
    this.physics.add.collider(this.boxxy, this.platformsV);
    this.physics.add.collider(this.box, this.platformsH);
    this.physics.add.collider(this.door, this.platformsH);
    this.physics.add.collider(this.boxxy, this.box);


    // Screenwipe ////////////////////////////////////////////////////////////
    this.transitionStart = this.add.sprite(this.centerX, this.centerY, `platformH`).setScale(12);
    this.transitionEnd = this.add.sprite(this.centerX, this.centerY*3, `platformH`).setScale(12);

    // Instructions ////////////////////////////////////////////////////////////
    this.moveInstructions = this.add.text(175, 500, `Use WAD to control
Boxxy`, instructionsStyle).setOrigin(0.5);
    this.interactInstructions = this.add.text(this.buttonSX, 450, `Use E to interact
and exit`, instructionsStyle).setOrigin(0.5);
    this.exitText = this.add.text(this.doorX, 400, `↓EXIT↓`, {
      fontSize: `30px`,
      color: `#ffff`,
      align: `center`,
      fontStyle: `bold`
    }).setOrigin(0.5);
    this.moveInstructions.alpha = 0;
    this.interactInstructions.alpha = 0;
    this.exitText.alpha = 0;

    // register keyboard commands
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keyboard = this.input.keyboard.addKeys(`W, A, S, D, E, R`);

  }// create() end

// UPDATE FUNCTION /////////////////////////////////////////////////////
// Contains the controls and events for the game
  update(){
    // Controls ////////////////////////////////////////////////////////////
    // Boxxy
    this.boxxy.setVelocityX(0);
    // left & right
    if(this.keyboard.A.isDown){
      this.boxxy.setVelocityX(-200);
      this.boxxy.play(`boxxy-moving-left`, true);
    }
    else if(this.keyboard.D.isDown){
      this.boxxy.setVelocityX(200);
      this.boxxy.play(`boxxy-moving-right`, true);
    }
    // jump
    if(this.keyboard.W.isDown && this.boxxy.body.onFloor()){
      this.boxxy.setVelocityY(-300);
    }
    // idle
    if (this.boxxy.body.velocity.x === 0) {
      this.boxxy.play(`boxxy-idle`, true);
    }

    // Level started ////////////////////////////////////////////////////////////
    if(!this.levelCompleted){
      this.transitionStart.y -= 25;
    }
    if(this.transitionStart.y === -1000){
      this.transitionStart.destroy();
    }
    // Level completed ////////////////////////////////////////////////////////////
    if(this.levelCompleted){
      this.transitionEnd.y -= 25;
    }
    if(this.transitionEnd.y === this.centerY){
      this.scene.start(`level2`);
    }
    // Level restart ////////////////////////////////////////////////////////////
    if(this.keyboard.R.isDown){
      this.scene.restart();
    }

    // Entered door
    if(this.doorOpen){
      this.exitOpen = true;
      this.exitText.alpha = 1;
    }
    this.doorOpen = false;
    this.physics.add.overlap(this.boxxy, this.door, this.exit, null, this);

    // Buttons are pressed at the same time
    this.boxxyR = false;
    this.physics.add.overlap(this.boxxy, this.buttonS, this.boxxyReady, null, this);

    // Instructions ////////////////////////////////////////////////////////////
    if(this.boxxy.x < this.boxX){
      this.moveInstructions.alpha = 1;
    }
    else {
      this.moveInstructions.alpha = 0;
    }
    if(this.boxxy.x > this.centerX && this.boxxy.x < 1100){
      this.interactInstructions.alpha = 1;
    }
    else {
      this.interactInstructions.alpha = 0;
    }

  }// update() end

// MISCELLANEOUS FUNCTIONS /////////////////////////////////////////////////////
// When the SQUARE button is pushed
  boxxyReady(){
    if(!this.buttonPushed){
      this.boxxyR = true;
      this.buttonPushed = false;
      if(this.keyboard.E.isDown && this.boxxyR){
        this.buttonPushed = true;
        this.door.play(`door-open`);
        this.doorOpen = true;
      };
    }
  }

// Door opens
  exit(){
    if(this.exitOpen){
      if(this.keyboard.E.isDown){
        this.levelCompleted = true;
      };
    }
  }

// Create animations
  createAnimations(){
    // Boxxy animation
    this.anims.create({
      key: `boxxy-idle`,
      frames: this.anims.generateFrameNumbers(`boxxy`, {
        start: 0,
        end: 1
      }),
      frameRate: 2,
    });

    this.anims.create({
      key: `boxxy-moving-right`,
      frames: this.anims.generateFrameNumbers(`boxxy`, {
        start: 2,
        end: 3
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: `boxxy-moving-left`,
      frames: this.anims.generateFrameNumbers(`boxxy`, {
        start: 4,
        end: 5
      }),
      frameRate: 10,
      repeat: -1
    });

    // Door animation
    this.anims.create({
      key: `door-open`,
      frames: this.anims.generateFrameNumbers(`door`, {
        start: 0, // 1st frame
        end: 4 // last frame
      }),
      frameRate: 10,
    });
  }
}
