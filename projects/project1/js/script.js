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

let question = 1;

//Secret button
let secretX = undefined;
let secretY = undefined;
let secretWidth = 250;
let secretHeight = 100;

//Call
let call;
let callImage = undefined;
//Line #
let morpheusLine = 1;
//Morpheus
let morpheusImage = undefined;
let redPillImage = undefined;
let redPillPicked = false;
let bluePillImage = undefined;
let bluePillPicked = false;
let morpheusImageOpacity = 0;
let redPillImageOpacity = 255;
let bluePillImageOpacity = 255;

let typewriter;

//Matrix rain variables
//by co-dart
//https://github.com/co-dart/Matrix_Digital_Rain
let cells = [];
let drops = [];
let cellSize = 15;
let numRows;
let numCols;
let symbolSwapProb = 0.01;
let dropTimeout = 2;
let maxOffscreen = 100;
let brightTime = 60;

//Timer
let timer = 0;

//Colors
let bg = 255;
const GREEN_COLOR = `#66ff66`;

let state = `intro`;

//Sounds
let callSound = undefined;
let callJoin = undefined;
let callDisconnected = undefined;
let digitalSound = undefined;


/******************************************************************************
PRELOADS ALL THE IMAGES AND SOUNDS USED IN THIS PROJECT
*//////////////////////////////////////////////////////////////////////////////
function preload() {
  //Images
  callImage = loadImage(`assets/images/call.jpg`);
  morpheusImage = loadImage(`assets/images/morpheus.png`);
  redPillImage = loadImage(`assets/images/redPill.png`);
  bluePillImage = loadImage(`assets/images/bluePill.png`);

  //Sounds
  callSound = loadSound(`assets/sounds/callSFX.mp3`);
  callJoin = loadSound(`assets/sounds/joinSFX.mp3`);
  callDisconnected = loadSound(`assets/sounds/disconnectedSFX.mp3`);
  digitalSound = loadSound(`assets/sounds/digitalSFX.mp3`);

}//preload() end


/******************************************************************************
CONTAINS THE CANVAS PROPERTIES AND THE STARTING SETUP FOR THE OBJECT-
ORIENTATED-PROGRAMS
*//////////////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);

  OOPSetup();
  matrixRainSetup();

}//setup() end

//Matrix rain setup by Emilie Xie
function matrixRainSetup(){
  numRows = ceil(height / cellSize);
  numCols = ceil(width / cellSize);

  for (let i = 0; i < numRows; i++){
    let newRow = [];
    for (let j = 0; j < numCols; j++) {
      newRow.push(new Cell(j * cellSize, i * cellSize));
    }
    cells.push(newRow);
  }

  for (let j = 0; j < numCols; j++) {
    drops.push(new Drop(j));
  }
}

// Position setup for the answers including the OOP
function OOPSetup(){
  //Answers positions
  answersX = width/2-250;
  answerAy = height/2-150;
  answerBy = height/2;
  answerCy = height/2+150;
  answerDy = height/2+300;

  //Typewriter.js
  typewriter = new Typewriter();
  //Call.js
  call = new Call(width/2, height/2, callImage);
  //Multiple choice answers (Answer.js)
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
CONTAINS THE BACKGROUND AND CALLS THE STATE FUNCTIONS
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
  else if(state === `end`){
    end();
  }
  else if(state === `secret`){
    secret();
  }
  else if(state === `theMatrix`){
    theMatrix();
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
  if(question === 10 && morpheusLine === 5){
    timer++;
    if(timer >= 60){
      call.display();
      //SFX
      if(!callSound.isPlaying()){
        callSound.play();
        callSound.loop();
      }
    }
  }
  else if(question === 10 && morpheusLine === 7){
    theAnswer();
  }
}

//Into the Matrix
function unknown(){
  typewriter.display();
  displayText(currentInput+`_`, 150, 180, 32, LEFT, TOP, BOLD, GREEN_COLOR);
}

//Finished quiz
function end(){
  typewriter.display();
}

//Secret
function secret(){
  morpheusAppears();
  morpheusImageOpacity += 2.5;
    //Blue pill is displayed
    if(morpheusLine >= 10){
      bluePill();
    }
    //Red pill is displayed
    if(morpheusLine >= 11){
      redPill();
    }
  typewriter.display();
}

//Matrix rain
function theMatrix(){
  drops.forEach(drop => {
  drop.update();
  drop.brightenCell();
  });

cells.forEach(row => {
  row.forEach(cell => {
    cell.draw(GREEN_COLOR);
    cell.update();

    });
  });
  displayText(`THE END?`, width/2, height/2, 200, CENTER, CENTER, BOLD, 0);

}

/******************************************************************************
THIS SECTION CONTAINS FUNCTIONS USED TO DISPLAY DIFFERENT
SPECIFIC ELEMENTS TO PREVENT CLUTTER
*//////////////////////////////////////////////////////////////////////////////

// Displays Morpheus (images)
function morpheusAppears(){
  //Morpheus
  push();
  imageMode(CENTER);
  tint(255, morpheusImageOpacity);
  image(morpheusImage, width/2, height/2);
  pop();
}

// Displays the blue pill
function bluePill(){
  if(!redPillPicked){
    push();
    imageMode(CENTER);
    image(bluePillImage, width/2, height/2);
    pop();
  }
}

//Displays the red pill
function redPill(){
  if(!bluePillPicked){
    push();
    imageMode(CENTER);
    image(redPillImage, width/2, height/2);
    pop();
  }
}

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
  else if(question === 7.2){
    answerAText = `nowhere`;
    answerBText = `nowhere`;
    answerCText = `nowhere`;
    answerDText = `nowhere`;
  }
  else if(question === 8){
    answerAText = `water`;
    answerBText = `fire`;
    answerCText = `earth`;
    answerDText = `air`;
  }
  else if(question === 9 || question === 10 ){
    answerAText = `yes`;
    answerBText = `no`;
    answerCText = `i don't know`;
    answerDText = `maybe`;
  }
}

//Display secret button to reach secret ending
function theAnswer(){
  secretX = width/4*2.75;
  secretY = height/6*1.25;

  push();
  noFill();
  noStroke();
  rectMode(CENTER);
  rect(secretX, secretY, secretWidth, secretHeight);
  pop();
}

//Alert to say you picked the wrong answer
function warning(){
  alert(`Please pick the correct answer.`);
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

/******************************************************************************
THIS SECTION CONTAINS THE KEY PRESSES AND MOUSE CLICK FUNCTIONS
*//////////////////////////////////////////////////////////////////////////////

//Function to type your own input
function keyTyped(){
  //Excludes ENTER key
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

Press 'ENTER' to begin.`, width/2, height/4, 0, 54, NORMAL, CENTER);
  }
    // Questionnaire begins
    else if(state === `instructions`){
      state = `questions`;
      typewriter.typewrite(`Q1. What is 2+2?`, width/2, height/6, 0, 54, NORMAL, CENTER);
    }
    //Reply to unknown (line 2)
    else if(state === `unknown` && morpheusLine === 1){
      currentInput = ``;
      morpheusLine++;
      typewriter.typewrite(`The Matrix has you...

>`, 100, 100, GREEN_COLOR, 32, BOLD, LEFT);
      //SFX
      digitalSound.play();
    }
    //Reply to unknown (line 3)
    else if(state === `unknown` && morpheusLine === 2){
      currentInput = ``;
      morpheusLine++;
      typewriter.typewrite(`Follow the white rabbit.

>`, 100, 100, GREEN_COLOR, 32, BOLD, LEFT);
    //SFX
    digitalSound.play();
    }
    //Back to question 6
    else if(state === `unknown` && morpheusLine === 3){
      bg = 255;
      state = `questions`;
      question = 6;
      typewriter.typewrite(`Q6. How many hours are there in a day?`, width/2, height/6, 0, 54, NORMAL, CENTER);
    }
    //Reply to unknown (line 4)
    else if(state === `unknown` && morpheusLine === 4){
      currentInput = ``;
      morpheusLine++;
      typewriter.typewrite(`But we will be in touch soon...

>`, 100, 100, GREEN_COLOR, 32, BOLD, LEFT);
    //SFX
    digitalSound.play();
    }
    //Reply to unknown (line 5)
    else if(state === `unknown` && morpheusLine === 5){
      bg = 255;
      state = `questions`;
      question = 7.2;
      typewriter.typewrite(`Where did you run off to?`, width/2, height/6, 0, 54, NORMAL, CENTER);
    }
  }
  //Any KEY presses
  if(state === `secret`){
    if(morpheusLine === 8){
      morpheusLine++;
      typewriter.typewrite(`Unfortunately, I cannot tell you what it is exactly...
But I can show you. There won't be any turning back after this however.`, width/2, 50, GREEN_COLOR, 32, BOLD, CENTER);
  responsiveVoice.speak(`Unfortunately, I cannot tell you what it is exactly. But I can show you. There won't be any turning back after this however.`
  , "UK English Male", {
    pitch: 0.75,
    rate: 1
  });
    }
    //Blue pill appears
    else if(morpheusLine === 9){
      morpheusLine++;
      typewriter.typewrite(`You can take the blue pill. You go back and
believe whatever you want to believe...`,
  width/2, 50, GREEN_COLOR, 32, BOLD, CENTER);
  responsiveVoice.speak(`You can take the blue pill. You go back and believe whatever you want to believe...`
  , "UK English Male", {
    pitch: 0.75,
    rate: 1
  });
    }
    //Red pill appears
    else if(morpheusLine === 10){
      morpheusLine++;
      typewriter.typewrite(`Or you take the red pill. You stay in wonderland.
And I'll show you how deep the rabbit hole goes.`,
  width/2, 50, GREEN_COLOR, 32, BOLD, CENTER);
  responsiveVoice.speak(`Or you take the red pill. You stay in wonderland. And I'll show you how deep the rabbit hole goes.`
  , "UK English Male", {
    pitch: 0.75,
    rate: 1
  });
    }
    //The choice is yours
    else if(morpheusLine === 11){
      morpheusLine++;
      typewriter.typewrite(`The choice is yours...`,
  width/2, 50, GREEN_COLOR, 32, BOLD, CENTER);
  responsiveVoice.speak(`The choice is yours...`
  , "UK English Male", {
    pitch: 0.75,
    rate: 1
  });
    }
    //Picked the BLUE pill
    else if(morpheusLine === 13){
      typewriter.typewrite(`Q10. Do you believe everything around you is real?`, width/2, height/6, 0, 54, NORMAL, CENTER);
      question = 10;
      state = `questions`;
      bg = 255;
    }
    //Picked the RED pill
    else if(morpheusLine === 14){
      state = `theMatrix`;
    }
  }
}

//Mouse press function
function mousePressed(){
  // Call arrives
    if(morpheusLine === 5){
      call.mousePressed();
      //Answer the call
      if(call.callAccepted){
        morpheusLine++;
        responsiveVoice.speak(`Hello, ${userName}. Listen to me carefully. If you wish to make it out of here with your own free will, select "no".
         `, "UK English Male", {
          pitch: 0.75,
          rate: 1
        });
        //Play SFX
        callJoin.play();
        callSound.stop();
      }
      else if(call.callDeclined){
        morpheusLine--;
        //Play SFX
        callDisconnected.play();
        callSound.stop();
      }
    }

// Answer selection during questions state
  if(state === `questions`){
    answerA.mousePressed();
    answerB.mousePressed();
    answerC.mousePressed();
    answerD.mousePressed();

    switch(question){
      //Question 1
      case 1: if(answerC.selected){
        question++;
        typewriter.typewrite(`Q2. What color is the sky?`, width/2, height/6, 0, 54, NORMAL, CENTER);
      }
      else if(answerA.selected || answerB.selected || answerD.selected){
        warning();
      }
          break;
      //Question 2
      case 2: if(answerD.selected){
        question++;
        typewriter.typewrite(`Q3. What matter is water?`, width/2, height/6, 0, 54, NORMAL, CENTER);
      }
      else if(answerA.selected || answerB.selected || answerC.selected){
        warning();
      }
          break;
      //Question 3
      case 3: if(answerD.selected){
        question++;
        typewriter.typewrite(`Q4. What force brings objects to fall downwards?`, width/2, height/6, 0, 54, NORMAL, CENTER);
      }
      else if(answerA.selected || answerB.selected || answerC.selected){
        warning();
      }
          break;
      //Question 4
      case 4: if(answerA.selected){
        question++;
        typewriter.typewrite(`Q5. What force brings objects to fall naturally?`, width/2, height/6, 0, 54, NORMAL, CENTER);
      }
      else if(answerB.selected || answerC.selected || answerD.selected){
        warning();
      }
          break;
      //Question 5
      case 5: if(answerC.selected){
        question = 5.2;
        typewriter.typewrite(`Q6. How man̷̲͛ỵ̴͠ ̶̀`, width/2, height/6, 0, 54, NORMAL, CENTER);
      }
      else if(answerA.selected || answerB.selected || answerD.selected){
        warning();
      }
          break;
      //Question 5.2 (glitched)
      case 5.2:
        state = `unknown`;
        currentInput = ``;
        bg = 0;
        typewriter.typewrite(`Hello, ${userName}...

>`, 100, 100, GREEN_COLOR, 32, BOLD, LEFT);
        //SFX
        digitalSound.play();
          break;
      //Question 6
      case 6: if(answerB.selected){
        question++;
        typewriter.typewrite(`Q7. What animal has claws and a long tail?`, width/2, height/6, 0, 54, NORMAL, CENTER);
      }
      else if(answerA.selected || answerC.selected || answerD.selected){
        warning();
      }
          break;
      //Question 7
      case 7: if(answerD.selected){
        question++;
        typewriter.typewrite(`Q8. What do humans breath?`, width/2, height/6, 0, 54, NORMAL, CENTER);
      }
      else if(answerB.selected){
        state = `unknown`;
        morpheusLine = 4;
        currentInput = ``;
        bg = 0;
        typewriter.typewrite(`We don't have much time. You're in danger...

>`, 100, 100, GREEN_COLOR, 32, BOLD, LEFT);
        //SFX
        digitalSound.play();
      }
      else if(answerA.selected || answerC.selected){
        warning()
      }
          break;
      //Question 7.2
      case 7.2: if(answerA.selected || answerB.selected || answerC.selected || answerD.selected){
        question = 8;
        typewriter.typewrite(`Q8. What do humans breath?`, width/2, height/6, 0, 54, NORMAL, CENTER);
      }
          break;
      //Question 8
      case 8: if(answerD.selected){
        question++;
        typewriter.typewrite(`Q9. Do you believe you're dreaming?`, width/2, height/6, 0, 54, NORMAL, CENTER);
      }
      else if(answerA.selected || answerB.selected || answerC.selected){
        warning();
      }
          break;
      //Question 9
      case 9: if(answerB.selected){
        question++;
        typewriter.typewrite(`Q10. Do you believe everything around you is real?`, width/2, height/6, 0, 54, NORMAL, CENTER);
      }
      else if(answerA.selected || answerC.selected || answerD.selected){
        warning();
      }
          break;
      //Question 10 (last)
      case 10: if(answerA.selected){
        state = `end`;
        typewriter.typewrite(`Congratulations!

You completed the questionnaire.
We have all the data we need.

You can freely go on about your day now.
Thank you :)`, width/2, height/4, 0, 54, NORMAL, CENTER);
      }
      else if(answerB.selected && morpheusLine === 6){
        morpheusLine++
        typewriter.typewrite(`That was not the correct answer...`, width/2, height/6, 0, 54, NORMAL, CENTER);
        responsiveVoice.speak(`Good. Now, click on the word "answer" to find the answers that you seek.
         `, "UK English Male", {
          pitch: 0.75,
          rate: 1
        });
      }
      else if(answerB.selected || answerC.selected || answerD.selected){
        warning()
      }
    }
  }

  //Unlock secret ending
  if(mouseX >= secretX-secretWidth &&
    mouseX <= secretX+secretWidth &&
    mouseY >= secretY-secretHeight &&
    mouseY <= secretY+secretHeight && morpheusLine === 7){
    morpheusLine++
    state = `secret`;
    bg = 0;
    typewriter.typewrite(`Hello again, ${userName}. We finally meet. I know you have a lot of questions
about what the Matrix is.`, width/2, 50, GREEN_COLOR, 32, BOLD, CENTER);
    responsiveVoice.speak(`Hello again, ${userName}. We finally meet. I know you have a lot of questions about what the Matrix is.`,
      "UK English Male", {
      pitch: 0.75,
      rate: 1
    });
  }

  // Red pill or blue pill
  if(state === `secret` && morpheusLine === 12){
    //Picks BLUE PILL
    if(mouseX < width/2){
      morpheusLine++;
      bluePillPicked = true;
      typewriter.typewrite(`Farewell then, ${userName}.`, width/2, 50, GREEN_COLOR, 32, BOLD, CENTER);
      responsiveVoice.speak(`Farewell then, ${userName}.`,
        "UK English Male", {
        pitch: 0.75,
        rate: 1
      });
    }
    //Picks RED PILL
    else{
      morpheusLine = 14;
      redPillPicked = true;
      typewriter.typewrite(`Follow me then. Down the rabbit hole we go.`, width/2, 50, GREEN_COLOR, 32, BOLD, CENTER);
      responsiveVoice.speak(`Follow me then. Down the rabbit hole we go.`,
        "UK English Male", {
        pitch: 0.75,
        rate: 1
      });
    }
  }
}

/******************************************************************************
THIS SECTION CONTAINS FUNCTIONS USED DURING KEY PRESSES OR
MOUSE CLICKS (PREVENTS CLUTTER AND CONFUSION)
*//////////////////////////////////////////////////////////////////////////////
function selfWrittenText(string){
  typewriter.typewrite(string, width/2, 50, GREEN_COLOR, 32, BOLD, CENTER);
}

function morpheusVoice(string){
  responsiveVoice.speak(string,
    "UK English Male", {
    pitch: 0.75,
    rate: 1
  });
}
