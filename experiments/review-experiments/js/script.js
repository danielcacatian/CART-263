/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

"use strict"

//const = constant
//examples
const PI = 3.14159; //value
const I_LOVE_TO_LEARN = true; //true or false
const MY_FAVORITE_PROGRAMMING_LANGUAGE = `JavaScript`; //string

//variables
let numCircles = 10;
let circleAlpha = 50;
let circleSizeIncrease = 50;
// into constants
const NUM_CIRCLES = 10;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  circleAlpha = map(mouseX, 0, width, 10, 100);
  circleSizeIncrease = map(mouseY, 0, height, 10, 100);

  for (let i = 0; i < NUM_CIRCLES; i++) {
    push();
    fill(255, circleAlpha);
    ellipse(width/2, height/2, i * circleSizeIncrease);
    pop();
  }
}
