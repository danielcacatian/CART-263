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
let answersX = undefined;
let answerA = undefined;
let answerAy = undefined;
let answerAText = ``;
let answerB = undefined;
let answerBy = undefined;
let answerBText = ``;
let answerC = undefined;
let answerCy = undefined;
let answerCText = ``;
let answerD = undefined;
let answerDy = undefined;
let answerDText = ``;

let question = 1;

//Colors
let bg = 255;

let state = `intro`;

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

  answerSetup();

}//setup() end

// Position setup for the answers including the OOP
function answerSetup(){
  answersX = width/2-250;
  answerAy = height/2-150;
  answerBy = height/2;
  answerCy = height/2+150;
  answerDy = height/2+300;

  typewriter = new Typewriter();
  //Multiple choice answers
  answerA = new AnswerA(answersX, answerAy);
  answers.push(answerA);
  answerB = new AnswerB(answersX, answerBy);
  answers.push(answerB);
  answerC = new AnswerC(answersX, answerCy);
  answers.push(answerC);
  answerD = new AnswerD(answersX, answerDy);
  answers.push(answerD);
}

/******************************************************************************
Description of draw()
*//////////////////////////////////////////////////////////////////////////////
function draw() {
  background(bg);

  if(state === `intro`){
    intro();
  }
  else if(state === `instructions`){
    instructions();
  }
  else if(state === `questions`){
    questions();
  }

}//draw() end

/******************************************************************************
THIS SECTION CONTAINS THE FUNCTIONS FOR THE DIFFERENT STATES
*//////////////////////////////////////////////////////////////////////////////

//Intro state
function intro(){
  //What is your name
  displayText(`What is your name?`, width/2, height/4, 64, CENTER, CENTER, NORMAL);
  //Input field
  push();
  noFill();
  strokeWeight(4);
  stroke(50);
  rectMode(CENTER);
  rect(width/2, height/2, 800, 150);
  pop();
  displayText(currentInput+`_`, width/2, height/2, 64, CENTER, CENTER, BOLD);
}

//Instructions state
function instructions(){
  typewriter.display();
}

//Questions
function questions(){
  typewriter.display();
  answerSelection();
  answerText();
}

/******************************************************************************
This section contains additional functions such as key presses,
display functions, etc.
*//////////////////////////////////////////////////////////////////////////////

// Allows the user to select their answer
function answerSelection(){
  for (let i = 0; i < answers.length; i++){
    let answer = answers[i];
    answer.display();
    answer.hover();

  }
}

// Displays the answers (changes every question)
function answerText(){
  //Answer A
  displayText(answerAText, answersX+100, answerAy, 54, LEFT, CENTER, NORMAL);
  //Answer B
  displayText(answerBText, answersX+100, answerBy, 54, LEFT, CENTER, NORMAL);
  //Answer C
  displayText(answerCText, answersX+100, answerCy, 54, LEFT, CENTER, NORMAL);
  //Answer D
  displayText(answerDText, answersX+100, answerDy, 54, LEFT, CENTER, NORMAL);

  //Answer changes according to the question #
  if(question === 1){
    answerAText = `2`;
    answerBText = `5`;
    answerCText = `4`;
    answerDText = `6`;
  }
  else if(question === 2){
    answerAText = `green`;
    answerBText = `red`;
    answerCText = `black`;
    answerDText = `blue`;
  }

}

//Function to type your own input
function keyTyped(){
  currentInput += key;
}

//Key press function
function keyPressed(){
  //BACKSPACE key
  if (keyCode === 8){
    currentInput = ``; //Deletes the entire input
  }
  //ENTER key
  else if(keyCode === 13 && state === `intro`){
    // Display instructions after user typed name.
    userName = currentInput;
    state = `instructions`;
    typewriter.typewrite(`Welcome ${userName}...

This questionnaire will determine
if you're compliant. It is absolutely
necessary for you to answer them correctly.

Press 'ENTER' to begin.`, width/2, height/4, 75, 0, 54, NORMAL);
  }
  // First question
  else if(keyCode === 13 && state === `instructions`){
    state = `questions`;
    typewriter.typewrite(`Q1. What is 2+2?`, width/2, height/6, 75, 0, 54, NORMAL);
  }
}

//Mouse press function
function mousePressed(){

// Answer selection
  if(state === `questions`){
    answerA.mousePressed();
    answerB.mousePressed();
    answerC.mousePressed();
    answerD.mousePressed();

    if(answerC.selected && question === 1){
      question++;
      typewriter.typewrite(`Q2. What color is the sky?`, width/2, height/6, 75, 0, 54, NORMAL);
    }
    else if(answerD.selected && question === 2){
      question++;
      typewriter.typewrite(`Q3. What color is the sky?`, width/2, height/6, 75, 0, 54, NORMAL);
    }
  }
}

//Function to easily add text
function displayText(string, x, y, size, align1, align2, style) {
  push();
  textStyle(style);
  textFont(`Courier`);
  textAlign(align1, align2);
  textSize(size);
  fill(0);
  text(string, x, y);
  pop();
}
