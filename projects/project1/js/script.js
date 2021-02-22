"use strict";

/**
The Matrix
Daniel Cacatian

This project 1 will be based off the famous scene from The Matrix which
featured Neo discovering the Matrix. It won't be an accurate representation, but
it will be heavily inspired from that scene and I will attempt to make the
individual feel like, the one, Neo.
*/

//Inputs
let userName = ``;
let currentInput = ``;
let answer = undefined;

let typewriter;

let answers = [];
let answerA = undefined;
let answerB = undefined;
let answerC = undefined;
let answerD = undefined;

//Colors
let bg = 255;

let state = `1`;

/******************************************************************************
Description of preload
*//////////////////////////////////////////////////////////////////////////////
function preload() {

}//preload() end


/******************************************************************************
Description of setup
*//////////////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);

  typewriter = new Typewriter();
  //Multiple choice answers
  answerA = new AnswerA(width/2-250, height/2-50);
  answers.push(answerA);
  answerB = new AnswerB(width/2-250, height/2+50);
  answers.push(answerB);
  answerC = new AnswerC(width/2-250, height/2+150);
  answers.push(answerC);
  answerD = new AnswerD(width/2-250, height/2+250);
  answers.push(answerD);

}//setup() end


/**
Description of draw()
*/
function draw() {
  background(bg);

  for (let i = 0; i < answers.length; i++){
    let answer = answers[i];
    answer.display();
    answer.hover();

    if(answerA.selected){
      state = `2`;
    }
  }

  if(state === `1`){
    //What is your name
    displayText(`What is your name?`, width/2, height/4, 64, CENTER, CENTER, NORMAL)
    //Input field
    displayText(currentInput, width/2, height/2, 64, CENTER, CENTER, BOLD)
  }
  else if(state === `2`){
    typewriter.display();
  }

}//draw() end

/******************************************************************************
This section contains additional functions such as key presses,
display functions, etc.
*//////////////////////////////////////////////////////////////////////////////

//Function to easily add text
function displayText(string, x, y, size, align1, align2, style) {
  push();
  textStyle(style);
  textAlign(align1, align2);
  textSize(size);
  fill(0);
  text(string, x, y);
  pop();
}

function keyTyped(){
  currentInput += key;
}

function keyPressed(){
  if (keyCode === 8){
    currentInput = ``;
  }
  else if(keyCode === 13){
    userName = currentInput;
    typewriter.typewrite(`Wake up, ${userName}...`, 200, 200);
    state = `2`;
  }
}

function mousePressed(){
  answerA.mousePressed();
  answerB.mousePressed();
  answerC.mousePressed();
  answerD.mousePressed();
}
