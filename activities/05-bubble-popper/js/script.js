"use strict";

/**
Title of Project
Author Name

Pop bubbles with your index finger
*/

// The user's webcam
let video = undefined;
// The Handpose model
let handpose = undefined;
// The current set of predicitions
let predictions = [];
//The bubble
let bubble = undefined;

/**
Description of setup
*/
function setup() {
  createCanvas(640, 480);

  //Access user's webcam
  video = createCapture(VIDEO);
  video.hide();

  //Load the handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    console.log(`Model loaded.`);
  });

  // Listen for predictions
  handpose.on(`predict`, function (results){
    console.log(results);
    predictions = results;
  });

  // Our bubble
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2
  };

}//setup()


/**
Description of draw()
*/
function draw() {
  background(0);

  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    displayPin(baseX, baseY, tipX, tipY);

    // Check bubble popping
    let d = dist(tipX, tipY, bubble.x, bubble.y);
    if (d < bubble.size/2) {
      bubbleReset();
    }
  }

  //Move the bubble
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  // Resets bubble if out of bounds
  if (bubble.y < 0){
    bubbleReset();
  }

  // Bubble
  displayBubble();

}//draw()

//ADDITIONAL FUNCTIONS/////////////////////////////////////////////////////////
// Function to display bubble
function displayBubble(){
  push();
  fill(0, 100, 200);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
}

// Function to display pin
function displayPin(baseX, baseY, tipX, tipY){
  // Pin body
  push();
  noFill();
  stroke(255, 255, 255);
  strokeWeight(2);
  line(baseX, baseY, tipX, tipY);
  pop();

  // Pin head
  push();
  noStroke();
  fill(255, 0, 0);
  ellipse(baseX, baseY, 20);
  pop();
}

// Function that resets bubble
function bubbleReset(){
    bubble.x = random(width);
    bubble.y = height;
}
