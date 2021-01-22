/**************************************************
Exercise 01: Catch the Annoying Dog
Daniel Cacatian

Here is a description of this template p5 project.
**************************************************/

"use strict";

//Dog variables
let annoyingDogImageAwake = undefined; //Image of dog (not asleep)
let annoyingDogImageSleep = undefined; //Image of dog asleep
let annoyingDog = undefined;

//States
let state = `title`;

//Preload images
function preload() {
  annoyingDogImageAwake = loadImage(`assets/images/doggo.png`);
  annoyingDogImageSleep = loadImage(`assets/images/doggoSleep.png`);
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
  displayText(`Press 'any key' to start.`, width/2, height/2+100, 50, NORMAL);
}

//Simulation state
function simulation(){
  //Displays the dog
  annoyingDog.display();
  //Sleepy function
  sleepy();
}

//End state
function caught(){
  //Text
  displayText(`YOU CAUGHT THE ANNOYING DOG!`, width/2, height/2, 100, BOLD);
  displayText(`Press 'any key' if you wish to restart.`, width/2, height/2+100, 50, NORMAL);
}

//MISCELLANEOUS FUNCTION//////////////////////////////////////////////////////////
//Mouse pressed function (user clicks on dog)
function mousePressed(){
  annoyingDog.mousePressed();

  if(annoyingDog.missed){
    let x = random(0, width-50);
    let y = random(0, height-50);
    let annoyingDogImage = annoyingDogImageAwake;
    annoyingDog = new AnnoyingDog(x, y, annoyingDogImage);
  }
  else if(annoyingDog.caught){
    state = `end`;
  }
}

//Dog falls asleep in 10secs
function sleepy(){
  setTimeout( function () {
    let annoyingDogImage = annoyingDogImageSleep;
    annoyingDog = new AnnoyingDog(annoyingDog.x, annoyingDog.y, annoyingDogImage);
    annoyingDog.asleep = true;
  }, 10000);
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

function keyPressed(){
  //Press `any key to CONTINUE`
  if (state === `title`){
    state = `simulation`;
  }
  else if(state === `end`){
    location.reload();
  }
}
