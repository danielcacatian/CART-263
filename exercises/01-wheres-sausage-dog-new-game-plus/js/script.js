/**************************************************
Exercise 01: Catch the Annoying Dog
Daniel Cacatian

Here is a description of this template p5 project.
**************************************************/

"use strict";

//Dog variables
let annoyingDogImageAwake = undefined; //Image of dog (not asleep)
let annoyingDogImageSleep = undefined; //Image of dog asleep
let annoyingDogBark = undefined; //Bark SFX
let annoyingDogSong = undefined; //Dog Song
let annoyingDog = undefined;
let annoyingDogTimer = 0; //Timer for the dog to fall asleep
let annoyingDogTimeout = 60 * 10; //Timer for the dog to fall asleep (60 * (the amount of seconds you wish))

//Hint timer
let hintTimer = 0;//Timer for the hint to popup
let hintPopup = 60 * 20;//Hint pops up afte 20 secs


//State
let state = `title`;

//Preload
function preload() {
  //Images
  annoyingDogImageAwake = loadImage(`assets/images/doggo.png`);
  annoyingDogImageSleep = loadImage(`assets/images/doggoSleep.png`);

  //Sounds
  annoyingDogBark = loadSound(`assets/sounds/bark.mp3`);
  annoyingDogSong = loadSound(`assets/sounds/dogSong.mp3`);
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  //Spawns the dog randomly everytime per refresh
  let x = random(0, width-50);
  let y = random(0, height-50);
  let annoyingDogImage = annoyingDogImageAwake;
  annoyingDog = new AnnoyingDog(x, y, annoyingDogImage);
}//setup() end

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  if(state === `title`){
    title();
  }
  else if(state === `simulation`){
    simulation();
  }
  else if(state === `end`){
    caught();
  }
}//draw() end

//STATES FUNCTIONS//////////////////////////////////////////////////////////
//Title state
function title(){
  //Text
  displayText(`CATCH THE ANNOYING DOG!`, width/2, height/2, 100, BOLD);
  displayText(`Press 'any key' to start`, width/2, height/2+100, 50, NORMAL);
  displayText(`Song: Toby Fox - Dogsong`, width/2, height-50, 25, NORMAL);
  //Song plays
  if(!annoyingDogSong.isPlaying()){
    annoyingDogSong.play();
    annoyingDogSong.loop();
  }
}

//Simulation state
function simulation(){
  //Displays the dog
  annoyingDog.display();
  //Sleepy function
  sleepy();
  //Dog timer goes up
  annoyingDogTimer++;
  //Hint pops up
  hintTimer++;
  if(hintTimer > hintPopup){
    displayText(`Hint: Wait for the dog to sleep...`, width/2, height-50, 25, NORMAL);
  }
}

//End state
function caught(){
  //Text
  displayText(`YOU CAUGHT THE ANNOYING DOG!`, width/2, height/2, 100, BOLD);
  displayText(`Press 'ENTER' if you wish to restart`, width/2, height/2+100, 50, NORMAL);
}

//MISCELLANEOUS FUNCTION//////////////////////////////////////////////////////////
//Mouse pressed function (user clicks on dog)
function mousePressed(){
  annoyingDog.mousePressed();

  //User attempts to catch the dog while awake
  if(annoyingDog.missed){
    let x = random(0, width-50);
    let y = random(0, height-50);
    let annoyingDogImage = annoyingDogImageAwake;
    annoyingDog = new AnnoyingDog(x, y, annoyingDogImage);
    //Reset timer
    annoyingDogTimer = 0;
    //Play sound effect
    if(!annoyingDogBark.isPlaying()){
      annoyingDogBark.play();
    }
  }
  //Dog caught successfuly
  else if(annoyingDog.caught && state === `simulation`){
    state = `end`;
    //Play sound effect
    if(!annoyingDogBark.isPlaying()){
      annoyingDogBark.play();
    }
  }
}

//Dog falls asleep function
function sleepy(){
  //Dog sleeps in 10 secs
  if(annoyingDogTimer === annoyingDogTimeout){
    let annoyingDogImage = annoyingDogImageSleep;
    annoyingDog = new AnnoyingDog(annoyingDog.x, annoyingDog.y, annoyingDogImage);
    annoyingDog.asleep = true;
  }
}

//Text function
function displayText(string, x, y, size, style){
  push();
  textStyle(style);
  textAlign(CENTER, CENTER);
  textSize(size);
  fill(255);
  text(string, x, y);
  pop();
}

//Key presses to switch states
function keyPressed(){
  //Press `any key to CONTINUE`
  if (state === `title`){
    state = `simulation`;
  }
  //Press `any key` to restart the game
  else if(state === `end` && keyCode === ENTER){
    location.reload();
  }
}
