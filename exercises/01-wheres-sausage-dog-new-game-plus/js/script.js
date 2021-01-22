/**************************************************
Exercise 01: Catch the Annoying Dog
Daniel Cacatian

Here is a description of this template p5 project.
**************************************************/

"use strict";

let annoyingDogImageAwake = undefined; //Image of dog (not asleep)
let annoyingDogImageSleep = undefined; //Image of dog asleep
let annoyingDog = undefined;

function preload() {
  annoyingDogImageAwake = loadImage(`assets/images/doggo.png`);
  annoyingDogImageSleep = loadImage(`assets/images/doggoSleep.png`);
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  //Spawns the dog randomly everytime
  let x = random(0, width-50);
  let y = random(0, height-50);
  let annoyingDogImage = annoyingDogImageAwake;
  annoyingDog = new AnnoyingDog(x, y, annoyingDogImage);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  annoyingDog.display();
  sleepy();

}

//EXTRA FUNCTIONS//////////////////////////////////////////////////////////
//Mouse pressed function (user clicks on dog)
function mousePressed(){
  annoyingDog.mousePressed();

  if(annoyingDog.missed){
    let x = random(0, width-50);
    let y = random(0, height-50);
    let annoyingDogImage = annoyingDogImageAwake;
    annoyingDog = new AnnoyingDog(x, y, annoyingDogImage);
  }
}

//Dog falls asleep in 10secs
function sleepy(){
  setTimeout( function () {
    let annoyingDogImage = annoyingDogImageSleep;
    annoyingDog = new AnnoyingDog(annoyingDog.x, annoyingDog.y, annoyingDogImage);
  }, 10000);
}
