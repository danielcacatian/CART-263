/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

"use strict";

//ANNYANG////////////////////////////////////////////////////////////////////
let on = false;
//The program's face
let face = `:-|`;

//RESPONSIVEVOICE////////////////////////////////////////////////////////////////////
let phrase = `Hello, world!`;
let saying = ``//Track what is currently being said

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

//ANNYANG////////////////////////////////////////////////////////////////////
  if (annyang) {
    //Create commands
    let commands = {
      //Turn light on/off commands
      'Turn the light on': function() {
        on = true;
      },
      'Turn the light off': function() {
        on = false;
      },
      //Love/hate commands
      'I love you': love,
      'I hate you': hate
    }
    //Add the commands and start annyang
    annyang.addCommands(commands);
    annyang.start();

  }
// //test
//   if (annyang) {
//     let commands = {
//       // must use '' for word commands
//       'hello': function() {
//         alert(`Howdy!`);
//       },
//       'goodbye': function() {
//         alert(`Ciao!`);
//       }
//     };
//     annyang.addCommands(commands);
//     annyang.start();
//   }

}//setup() end

// draw()
//
// Description of draw() goes here.
function draw() {

//ANNYANG////////////////////////////////////////////////////////////////////
  //If on is true, make the background white, otherwise make it black
  if (on) {
    background(255);
  }
  else {
    background(0);
  }

  push();
  translate(width/2, height/2);
  rotate(PI/2);
  textSize(400);
  textAlign(CENTER, CENTER);
  fill(255);
  text(face, 0, 0);
  pop();

//RESPONSIVEVOICE////////////////////////////////////////////////////////////////////
  // push();
  // textSize(32);
  // textAlign(CENTER);
  // text(saying, width/2, height/2);
  // pop();

}//draw() end

//ANNYANG////////////////////////////////////////////////////////////////////
function love() {
  face = `:-)`;
}

function hate() {
  face = `:-(`;
}

//RESPONSIVEVOICE////////////////////////////////////////////////////////////////////
//test
// function mousePressed(){
//   // responsiveVoice.speak("hello world", "UK English Male", {volume: 1});
//   // responsiveVoice.speak("string", "voice", {parameter});
//   // responsiveVoice.speak(`REEEEEEEEEEEEEE`, "UK English Male", {
//   //   pitch: 2,
//   //   rate: 0.2,
//   //   volume: 1
//   // });
//
//   responsiveVoice.speak(phrase, `UK English Male`, {
//     onstart: showSpeaking,
//     onend: hideSpeaking
//   });
// }
//
// function showSpeaking(){
//   saying = phrase;
// }
//
// function hideSpeaking() {
//   saying = ``;
// }
