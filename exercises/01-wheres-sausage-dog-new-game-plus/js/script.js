/**************************************************
Exercise 01: Catch the Annoying Dog
Daniel Cacatian

Here is a description of this template p5 project.
**************************************************/

"use strict";

let annoyingDogImage = undefined; //Image of dog (not asleep)
let annoyingDog = undefined;

function preload() {
  annoyingDogImage = loadImage(`assets/images/doggo.png`);
  loadImage(`assets/images/doggoSleep.png`);
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  let x = random(0, width);
  let y = random(0, height);
  annoyingDog = new AnnoyingDog(x, y, annoyingDogImage);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  annoyingDog.display();

}
