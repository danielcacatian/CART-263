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

//Q&A
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

let question = 5;

//Morpheus lines
let morpheusLine = 1;

let typewriter;

//Colors
let bg = 255;
const GREEN_COLOR = `#66ff66`;

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
  else if(state === `unknown`){
    unknown();
  }

}//draw() end

/******************************************************************************
THIS SECTION CONTAINS THE FUNCTIONS FOR THE DIFFERENT STATES
*//////////////////////////////////////////////////////////////////////////////

//Intro state
function intro(){
  //What is your name
  displayText(`What is your name?`, width/2, height/4, 64, CENTER, CENTER, NORMAL, 0);
  //Input field
  push();
  noFill();
  strokeWeight(4);
  stroke(50);
  rectMode(CENTER);
  rect(width/2, height/2, 800, 150);
  pop();
  displayText(currentInput+`_`, width/2-350, height/2, 64, LEFT, CENTER, BOLD, 0);
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

//Into the Matrix
function unknown(){
  typewriter.display();
  displayText(currentInput+`_`, 150, 180, 32, LEFT, TOP, BOLD, GREEN_COLOR);
}

/******************************************************************************
This section contains additional functions such as key presses,
display functions, etc.
*//////////////////////////////////////////////////////////////////////////////

// Allows the user to select their answer
function answerSelection(){
  for (let i = 0; i < answers.length; i++){
    let answer = answers[i];
    answer.update();
    answer.hover();

  }
}

// Displays the answers (changes every question)
function answerText(){
  //Answer A
  displayText(answerAText, answersX+100, answerAy, 54, LEFT, CENTER, NORMAL, 0);
  //Answer B
  displayText(answerBText, answersX+100, answerBy, 54, LEFT, CENTER, NORMAL, 0);
  //Answer C
  displayText(answerCText, answersX+100, answerCy, 54, LEFT, CENTER, NORMAL, 0);
  //Answer D
  displayText(answerDText, answersX+100, answerDy, 54, LEFT, CENTER, NORMAL, 0);

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
  else if(question === 3){
    answerAText = `plasma`;
    answerBText = `gas`;
    answerCText = `solid`;
    answerDText = `liquid`;
  }
  else if(question === 4){
    answerAText = `gravitational`;
    answerBText = `magnetic`;
    answerCText = `air resistance`;
    answerDText = `electrical`;
  }
  else if(question === 5){
    answerAText = `air resistance`;
    answerBText = `electrical`;
    answerCText = `gravitational`;
    answerDText = `magnetic`;
  }
  else if(question === 5.2){
    answerAText = ` ̷̫͑`;
    answerBText = ` ̵͕͌`;
    answerCText = `-̵̳͊`;
    answerDText = `/̴̥̇`;
  }
  else if(question === 6){
    answerAText = `30`;
    answerBText = `24`;
    answerCText = `50`;
    answerDText = `12`;
  }
  else if(question === 7){
    answerAText = `monkey`;
    answerBText = `white rabbit`;
    answerCText = `shark`;
    answerDText = `cat`;
  }

}

//Function to type your own input
function keyTyped(){
  if(keyCode === 13){
  }
  else{
    currentInput += key;
  }
}

//Key press function
function keyPressed(){
  //BACKSPACE key
  if (keyCode === 8){
    currentInput = ``; //Deletes the entire input
  }
  //ENTER key
  if (keyCode === 13){
    if(state === `intro`){
      // Display instructions after user typed name.
      userName = currentInput;
      state = `instructions`;
      typewriter.typewrite(`Welcome ${userName}...

This questionnaire will determine
if you're compliant. It is absolutely
necessary for you to answer them correctly.

Press 'ENTER' to begin.`, width/2, height/4, 75, 0, 54, NORMAL, CENTER);
  }
    // First question
    else if(state === `instructions`){
      state = `questions`;
      typewriter.typewrite(`Q1. What is 2+2?`, width/2, height/6, 75, 0, 54, NORMAL, CENTER);
    }
    //Reply to unknown (line 2)
    else if(state === `unknown` && morpheusLine === 1){
      currentInput = ``;
      morpheusLine++;
      typewriter.typewrite(`The Matrix has you...

>`, 100, 100, 200, GREEN_COLOR, 32, BOLD, LEFT);
    }
    //Reply to unknown (line 3)
    else if(state === `unknown` && morpheusLine === 2){
      currentInput = ``;
      morpheusLine++;
      typewriter.typewrite(`Follow the white rabbit.

>`, 100, 100, 200, GREEN_COLOR, 32, BOLD, LEFT);
    }
    //Back to question 6
    else if(state === `unknown` && morpheusLine === 3){
      bg = 255;
      state = `questions`;
      question = 6;
      typewriter.typewrite(`Q6. How many hours are there in a day?`, width/2, height/6, 75, 0, 54, NORMAL, CENTER);
    }
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

    //Question 1
    if(question === 1){
      if(answerC.selected){
        question++;
        typewriter.typewrite(`Q2. What color is the sky?`, width/2, height/6, 75, 0, 54, NORMAL, CENTER);
      }
      else if(answerA.selected || answerB.selected || answerD.selected){
        state = `error`;
      }
    }
    //Question 2
    else if(question === 2){
      if(answerD.selected){
        question++;
        typewriter.typewrite(`Q3. What matter is water?`, width/2, height/6, 75, 0, 54, NORMAL, CENTER);
      }
      else if(answerA.selected || answerB.selected || answerC.selected){
        state = `error`;
      }
    }
    //Question 3
    else if(question === 3){
      if(answerD.selected){
        question++;
        typewriter.typewrite(`Q4. What force brings objects to fall downwards?`, width/2, height/6, 75, 0, 54, NORMAL, CENTER);
      }
      else if(answerA.selected || answerB.selected || answerC.selected){
        state = `error`;
      }
    }
    //Question 4
    else if(question === 4){
      if(answerA.selected){
        question++;
        typewriter.typewrite(`Q5. What force brings objects to fall naturally?`, width/2, height/6, 75, 0, 54, NORMAL, CENTER);
      }
      else if(answerB.selected || answerC.selected || answerD.selected){
        state = `error`;
      }
    }
    //Question 5
    else if(question === 5){
      if(answerC.selected){
        question = 5.2;
        typewriter.typewrite(`Q6. How man̷̲͛ỵ̴͠ ̶̀`, width/2, height/6, 75, 0, 54, NORMAL, CENTER);
        setTimeout(noLoop, 500);
      }
    }
    //Question 5.2
    else if(question === 5.2){
      state = `unknown`;
      currentInput = ``;
      loop();
      bg = 0;
      typewriter.typewrite(`Hello, ${userName}...

>`, 100, 100, 200, GREEN_COLOR, 32, BOLD, LEFT);
    }
    //Question 6
    else if(question === 6){
      if(answerB.selected){
        question++;
        typewriter.typewrite(`Q7. What animal has claws and a long tail?`, width/2, height/6, 75, 0, 54, NORMAL, CENTER);
      }
      else if(answerA.selected || answerC.selected || answerD.selected){
        state = `error`;
      }
    }
    //Question 7
    else if(question === 7){
      if(answerD.selected){
        question++;
        typewriter.typewrite(`Q8. What do humans breath?`, width/2, height/6, 75, 0, 54, NORMAL, CENTER);
      }
      else if(answerB.selected){
        state = `unknown`;
        morpheusLine = 4;
        currentInput = ``;
        loop();
        bg = 0;
        typewriter.typewrite(`We don't have much time. You're in danger...

>`, 100, 100, 200, GREEN_COLOR, 32, BOLD, LEFT);
      }
      else if(answerA.selected || answerC.selected){
        state = `error`;
      }
    }
  }
}


//Function to easily add text
function displayText(string, x, y, size, align1, align2, style, color) {
  push();
  textStyle(style);
  textFont(`Courier`);
  textAlign(align1, align2);
  textSize(size);
  fill(color);
  text(string, x, y);
  pop();
}
