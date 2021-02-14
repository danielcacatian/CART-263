/**

ObjectDetector Framework
Pippin Barr

A skeleton framework for using ml5.js's ObjectDetector feature. Includes a
loading screen followed by a live webcam feed with all recognized objects
outlined and labelled with a name and confidence rating.

*/

"use strict";

// Current state of program
let state = `loading`; // loading, running
// User's webcam
let video;
// The name of our model
let modelName = `CocoSsd`;
// ObjectDetector object (using the name of the model for clarity)
let cocossd;
// Handpose object (using the name of the model for clarity)
let handpose;
// The current set of predictions made by CocoSsd once it's running
let predictions = [];

/**
Starts the webcam and the ObjectDetector
*/
function setup() {
  createCanvas(640, 480);

//ml5.js HANDPOSE/////////////////////////////////////////////////////////////////////////////
  // Start webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();

  // Start the Handpose model and switch to our running state when it loads
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    // Switch to the running state
    state = `running`;
  });

  // Listen for prediction events from Handpose and store the results in our
  // predictions array when they occur
  handpose.on(`predict`, function(results) {
    predictions = results;
  });


//ml5.js OBJECT DETECTOR/////////////////////////////////////////////////////////////////////////////
  // // Start webcam and hide the resulting HTML element
  // video = createCapture(VIDEO);
  // video.hide();
  //
  // // Start the CocoSsd model and when it's ready start detection
  // // and switch to the running state
  // cocossd = ml5.objectDetector('cocossd', {}, function() {
  //   // Ask CocoSsd to start detecting objects, calls gotResults
  //   // if it finds something
  //   cocossd.detect(video, gotResults);
  //   // Switch to the running state
  //   state = `running`;
  // });
}//setup() end

//ml5.js OBJECT DETECTOR/////////////////////////////////////////////////////////////////////////////
// /**
// Called when CocoSsd has detected at least one object in the video feed
// */
// function gotResults(err, results) {
//   // If there's an error, report it
//   if (err) {
//     console.error(err);
//   }
//   // Otherwise, save the results into our predictions array
//   else {
//     predictions = results;
//   }
//   // Ask CocoSsd to detect objects again so it's continuous
//   cocossd.detect(video, gotResults);
// }

/**
Handles the two states of the program: loading, running
*/
function draw() {

  if (state === `loading`) {
    loading();
  }
  else if (state === `running`) {
    running();
  }

}//draw() end

//ml5.js HANDPOSE/////////////////////////////////////////////////////////////////////////////
/**
Displays a simple loading screen with the loading model's name
*/
function loading() {
  background(255);

  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Loading ${modelName}...`, width / 2, height / 2);
  pop();
}

/**
Displays the webcam.
If there is a hand it outlines it and highlights the tip of the index finger
*/
function running() {
  // Display the webcam with reveresd image so it's a mirror
  let flippedVideo = ml5.flipImage(video);
  image(flippedVideo, 0, 0, width, height);

  // Check if there currently predictions to display
  if (predictions.length > 0) {
    // Technically there will only be ONE because it only detects ONE hand
    // Get the hand predicted
    let hand = predictions[0];
    // Highlight it on the canvas
    highlightHand(hand);
  }
}

/**
Provided with a detected hand it highlights the tip of the index finger
*/
function highlightHand(hand) {
  // Display a circle at the tip of the index finger
  let index = hand.annotations.indexFinger[3];
  let indexX = index[0];
  let indexY = index[1];
  push();
  fill(255, 255, 0);
  noStroke();
  ellipse(indexX, indexY, 50);
  pop();
}

//ml5.js OBJECT DETECTOR/////////////////////////////////////////////////////////////////////////////
/**
Displays a simple loading screen with the loading model's name
*/
// function loading() {
//   background(255);
//
//   push();
//   textSize(32);
//   textStyle(BOLD);
//   textAlign(CENTER, CENTER);
//   text(`Loading ${modelName}...`, width / 2, height / 2);
//   pop();
// }
//
// /**
// Displays the webcam.
// If there are currently objects detected it outlines them and labels them
// with the name and confidence value.
// */
// function running() {
//   // Display the webcam
//   image(video, 0, 0, width, height);
//
//   // Check if there currently predictions to display
//   if (predictions) {
//     // If so run through the array of predictions
//     for (let i = 0; i < predictions.length; i++) {
//       // Get the object predicted
//       let object = predictions[i];
//       if (object.label === `cup`) {
//         push();
//         fill(0);
//         rect(object.x, object.y, object.width, object.height);
//         pop();
//       }
//       else{
//         // Highlight it on the canvas
//         highlightObject(object);
//       }
//     }
//   }
// }
//
// /**
// Provided with a detected object it draws a box around it and includes its
// label and confidence value
// */
// function highlightObject(object) {
//   // Display a box around it
//   push();
//   noFill();
//   stroke(255, 255, 0);
//   rect(object.x, object.y, object.width, object.height);
//   pop();
//   // Display the label and confidence in the center of the box
//   push();
//   textSize(18);
//   fill(255, 255, 0);
//   textAlign(CENTER, CENTER);
//   text(`${object.label}, ${object.confidence.toFixed(2)}`, object.x + object.width / 2, object.y + object.height / 2);
//   pop();
// }
