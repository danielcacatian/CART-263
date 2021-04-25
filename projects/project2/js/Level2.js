class Level2 extends Phaser.Scene {

  constructor(){
    super({
      key: `level2`
    });
  }

// CREATE FUNCTION ////////////////////////////////////////////////////////////
// Contains the setup of different sprites
  create(){
    // Variables ////////////////////////////////////////////////////////////
    // Boxxy
    this.boxxyX = 600; //Boxxy's spawnpoint (X)
    this.boxxyY = 625; //Boxxy's spawnpoint (y)
    // Conny
    this.connyX = this.cameras.main.worldView.x + this.cameras.main.width / 2 + 50; //Conny's spawnpoint (X)
    this.connyY = 100; //Conny's spawnpoint (y)
    // Box
    this.boxX = this.cameras.main.worldView.x + this.cameras.main.width / 2 - 40;
    this.boxY = 100;
    // Floor
    this.floorX = 100;
    this.floorY = 950;
    this.floorScale = 8;
    // Platforms
    this.centerX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
    this.centerY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
    // Button
    this.buttonSX = 1000;
    this.buttonSY = 650;
    // Door
    this.doorX = 100;
    this.doorY = 500;
    // Dialogue
    this.connyDialogue = `You freed me! Thank you!`;
    // Instructions
    let instructionsStyle = {
      fontFamily: `EnterCommand`,
      fontSize: `30px`,
      color: `#ffff`,
      align: `center`
    };

    // Button ////////////////////////////////////////////////////////////
    this.buttons = this.physics.add.staticGroup();
    this.buttonS = this.buttons.create(this.buttonSX, this.buttonSY, `buttonS`); //square button (for Boxxy)

    // Door ////////////////////////////////////////////////////////////
    this.door = this.physics.add.sprite(this.doorX, this.doorY, `door`);
    this.createAnimations();

    // Box ////////////////////////////////////////////////////////////
    this.box = this.physics.add.sprite(this.boxX, this.boxY, `box`);
    this.box.setCollideWorldBounds(true);
    this.box.setDragX(1000);

    // Boxxy ////////////////////////////////////////////////////////////
    this.boxxy = this.physics.add.sprite(this.boxxyX, this.boxxyY, `boxxy`);
    this.boxxy.setCollideWorldBounds(true);
    this.boxxy.setBounce(0.2);
    // Conny ////////////////////////////////////////////////////////////
    this.conny = this.physics.add.sprite(this.connyX, this.connyY, `conny`);
    this.conny.setCollideWorldBounds(true);
    this.conny.setBounce(0.2);

    // Platforms ////////////////////////////////////////////////////////////
    // Horizontal
    this.platformsH = this.physics.add.staticGroup();
    this.platformsH.create(this.floorX, this.floorY, `platformH`).setScale(this.floorScale).refreshBody(); //floor
    this.platformsH.create(0, 650, `platformH`).setScale(2).refreshBody();
    this.dissapearingPlatform = this.physics.add.staticSprite(this.centerX, 200, `platformH`).setScale(0.75).refreshBody();

    // Vertical
    this.platformsV = this.physics.add.staticGroup();
    this.platformsV.create(this.centerX - 127, 90, `platformV`).setScale(0.5).refreshBody();
    this.platformsV.create(this.centerX + 127, 90, `platformV`).setScale(0.5).refreshBody();

    // Collision ////////////////////////////////////////////////////////////
    this.physics.add.collider(this.boxxy, this.platformsH);
    this.physics.add.collider(this.boxxy, this.platformsV);
    this.physics.add.collider(this.conny, this.platformsH);
    this.physics.add.collider(this.conny, this.platformsV);
    this.physics.add.collider(this.conny, this.dissapearingPlatform);
    this.physics.add.collider(this.box, this.platformsH);
    this.physics.add.collider(this.box, this.dissapearingPlatform);
    this.physics.add.collider(this.door, this.platformsH);
    this.physics.add.collider(this.boxxy, this.box);
    this.physics.add.collider(this.conny, this.box);

    // Screenwipe ////////////////////////////////////////////////////////////
    this.transitionStart = this.add.sprite(this.centerX, this.centerY, `platformH`).setScale(12);
    this.transitionEnd = this.add.sprite(this.centerX, this.centerY*3, `platformH`).setScale(12);

    // Dialogue ////////////////////////////////////////////////////////////
    this.dialogueBox = this.add.image(this.centerX, this.centerY - 200, `dialogue`);
    this.connyText = this.add.text(this.centerX - 100, this.centerY - 275, this.connyDialogue,{
      fontFamily: `EnterCommand`,
      fontSize: `40px`,
      color: `#ffff`,
      fontStyle: `bold`,
      lineSpacing: 10
    });
    this.dialogueClose = this.add.text(this.centerX + 200, 320, `Press 'S' to close`, {
      fontFamily: `EnterCommand`,
      fontSize: `30px`,
    })
    this.dialogueBox.alpha = 0;
    this.dialogueClose.alpha = 0;
    this.connyText.alpha = 0;

    // Instructions ////////////////////////////////////////////////////////////
    this.moveInstructions = this.add.text(this.connyX, 550, `Use ARROWkeys to control
Conny`, instructionsStyle).setOrigin(0.5);
    this.interactInstructions = this.add.text(this.connyX, 550, `Use E to talk
to Conny`, instructionsStyle).setOrigin(0.5);
    this.exitText = this.add.text(this.doorX, this.doorY - 100, `↓EXIT↓`, {
      fontFamily: `EnterCommand`,
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
    if(!this.talking){
      if(this.keyboard.A.isDown){ // left
        this.boxxy.setVelocityX(-200);
        this.boxxy.play(`boxxy-moving-left`, true);
      }
      else if(this.keyboard.D.isDown){ // right
        this.boxxy.setVelocityX(200);
        this.boxxy.play(`boxxy-moving-right`, true);
      }
      if(this.keyboard.W.isDown && this.boxxy.body.onFloor()){ // jump
        this.boxxy.setVelocityY(-300);
      }
    }
    if (this.boxxy.body.velocity.x === 0) { // idle
      this.boxxy.play(`boxxy-idle`, true);
    }
    // Conny
    this.conny.setVelocityX(0);
    if(this.connyFreed && !this.talking){
      if(this.cursors.left.isDown){ // left
        this.conny.setVelocityX(-200);
        this.conny.play(`conny-moving-left`, true);
      }
      else if(this.cursors.right.isDown){ // right
        this.conny.setVelocityX(200);
        this.conny.play(`conny-moving-right`, true);
      }
      if(this.cursors.up.isDown && this.conny.body.onFloor()){ // jump
        this.conny.setVelocityY(-300);
      }
    }
    if (this.conny.body.velocity.x === 0) { // idle
      this.conny.play(`conny-idle`, true);
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
      this.scene.start(`level3`);
    }
    // Level restart ////////////////////////////////////////////////////////////
    if(this.keyboard.R.isDown){
      this.scene.restart();
      this.exitOpen = false;
    }
    // Instructions ////////////////////////////////////////////////////////////
    if(this.conny.x > 500 && this.conny.x < 800 && this.connyFreed){
      this.moveInstructions.alpha = 1;
    }
    else{
      this.moveInstructions.alpha = 0;
    }

    // Overlap //////////////////////////////////////////////////////////////////
    // Entered door
    if(this.doorOpen){
      this.exitOpen = true;
      this.dissapearingPlatform.destroy();
      this.exitText.alpha = 1;
      this.interactInstructions.alpha = 1;
    }
    this.doorOpen = false;
    this.connyR = false;
    this.physics.add.overlap(this.boxxy, this.door, this.exit, null, this);
    this.physics.add.overlap(this.conny, this.door, this.atDoor, null, this);

    // Buttons are pressed at the same time
    this.boxxyR = false;
    this.physics.add.overlap(this.boxxy, this.buttonS, this.boxxyReady, null, this);

    // Talk to Conny
    if(this.talking){
      this.dialogueBox.alpha = 1;
      this.connyText.alpha = 1;
      this.dialogueClose.alpha = 1;
    }
    else{
      this.physics.add.overlap(this.boxxy, this.conny, this.talk, null, this);
    }
    // exit out of dialogue
    if(this.keyboard.S.isDown && this.talking){
      this.talking = false;
      this.dialogueBox.alpha = 0;
      this.dialogueClose.alpha = 0;
      this.connyText.alpha = 0;
      this.connyText.setText(`How do we get out of here?`);
    }
    else if(this.keyboard.S.isDown && !this.connyR){
      this.talking = false;
      this.dialogueBox.alpha = 0;
      this.connyText.alpha = 0;
    }

  }// update() end

// MISCELLANEOUS FUNCTIONS /////////////////////////////////////////////////////
// When the SQUARE button is pushed
  boxxyReady(){
    this.buttonPushed = false;
    if(!this.buttonPushed){
      this.boxxyR = true;
      if(this.keyboard.E.isDown && this.boxxyR){
        this.buttonPushed = true;
        this.door.play(`door-open`);
        this.doorOpen = true;
      }
    }
  }

  atDoor(){
    this.connyR = true;
  }

// Door opens
  exit(){
    if(this.exitOpen){
      if(this.keyboard.E.isDown && this.connyR){
        this.talking = false;
        this.levelCompleted = true;
      }
      // At the exit without conny
      else if(this.keyboard.E.isDown && !this.connyR){
        this.talking = true;
        this.connyText.setText(`Wait for me!`);
      }
    }
  }

// Talking to Conny
  talk(){
    if(this.keyboard.E.isDown && !this.talking && !this.connyR){
      this.interactInstructions.alpha = 0;
      this.talking = true;
      this.connyFreed = true;
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
    // Conny animation
    this.anims.create({
      key: `conny-idle`,
      frames: this.anims.generateFrameNumbers(`conny`, {
        start: 0,
        end: 1
      }),
      frameRate: 2,
    });

    this.anims.create({
      key: `conny-moving-right`,
      frames: this.anims.generateFrameNumbers(`conny`, {
        start: 2,
        end: 3
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: `conny-moving-left`,
      frames: this.anims.generateFrameNumbers(`conny`, {
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
