/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

"use strict";

//RESPONSIVEVOICE////////////////////////////////////////////////////////////////////
let phrase = `Hello, world!`;
let saying = ``//Track what is currently being said

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

}//setup() end

// draw()
//
// Description of draw() goes here.
function draw() {
  background(255);

//RESPONSIVEVOICE////////////////////////////////////////////////////////////////////
  push();
  textSize(32);
  textAlign(CENTER);
  text(saying, width/2, height/2);
  pop();

}//draw() end

//RESPONSIVEVOICE////////////////////////////////////////////////////////////////////
//test
function mousePressed(){
  // responsiveVoice.speak("hello world", "UK English Male", {volume: 1});
  // responsiveVoice.speak("string", "voice", {parameter});
  // responsiveVoice.speak(`REEEEEEEEEEEEEE`, "UK English Male", {
  //   pitch: 2,
  //   rate: 0.2,
  //   volume: 1
  // });

  responsiveVoice.speak(phrase, `UK English Male`, {
    onstart: showSpeaking,
    onend: hideSpeaking
  });
}

function showSpeaking(){
  saying = phrase;
}

function hideSpeaking() {
  saying = ``;
}
