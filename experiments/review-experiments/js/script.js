/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

"use strict"

//CONSTANTS////////////////////////////////////////////////////////////////////
// //const = constant
// //examples
// const PI = 3.14159; //value
// const I_LOVE_TO_LEARN = true; //true or false
// const MY_FAVORITE_PROGRAMMING_LANGUAGE = `JavaScript`; //string
//
// //variables
// let numCircles = 10;
// let circleAlpha = 50;
// let circleSizeIncrease = 50;
// // into constants
// const NUM_CIRCLES = 10;


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);

} //setup end

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

//OBJECT PARAMETERS////////////////////////////////////////////////////////////////////
  let config = {
    x: 250,
    y: 250,
    width: 200,
    height: 200,
    fillColor: {
      r: 255,
      g: 255,
      b: 0,
    },
    mode: CENTER
  }

  drawFancyRect(config);


//CONSTANTS////////////////////////////////////////////////////////////////////
//   circleAlpha = map(mouseX, 0, width, 10, 100);
//   circleSizeIncrease = map(mouseY, 0, height, 10, 100);
//
//   for (let i = 0; i < NUM_CIRCLES; i++) {
//     push();
//     fill(255, circleAlpha);
//     ellipse(width/2, height/2, i * circleSizeIncrease);
//     pop();
//   }
} // draw end


//OBJECT PARAMETERS////////////////////////////////////////////////////////////////////
function drawFancyRect({ x, y, width, height, fillColor, mode }) {
  push();
  fill(fillColor.r, fillColor.g, fillColor.b);
  rectMode(mode);
  rect(x, y, width, height);
  pop();
}


//FIRST-CLASS FUNCTIONS////////////////////////////////////////////////////////////////////
//putting a function inside a variable
let hello = function () {
  alert(`Hello!`);
};
//hello and not hello() -> parentheses call the function immediately
// setTimeout(hello, 5000);
//OR
//function inside function call
setTimeout(function () {
  alert(`Wassup`);
}, 5000);

//examples
// let addingFunction = add;
//
// let result = add(1, 10);
//
// alert(`The result is ${result}!`);
//
// function add(a,b) {
//   return a + b;
// }
