/**************************************************
Exercise 02: Slamina+
Daniel Cacatian

Added additional content to the Activity: Slamina by Pippin Barr
**************************************************/

"use strict";

//Animal names
const animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];

const BG_COLOR = `#119851`;

let currentAnimal = ``;
let currentAnswer = ``;
let score = 0;
let correctSFX = undefined;
let wrongSFX = undefined;


let timeLimit = 60; //1min time limit
let start = false;

let state = `title`;

function preload() {
  //Sounds
  correctSFX = loadSound(`assets/sounds/correct.mp3`);
  wrongSFX = loadSound(`assets/sounds/wrong.mp3`);
}


// setup()
//
// setup() contains annyang commands
function setup() {
  createCanvas(windowWidth, windowHeight);

  //Annyang commands
  if (annyang) {
    let commands = {
      'I think it is *animal': guessAnimal
    };
    annyang.addCommands(commands);
    annyang.start();

    textSize(74);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
  }

} //setup() end


// draw()
//
// draw() displays information on score and whether the player got the answer right or wrong
function draw() {
  background(BG_COLOR);

  //States
  if (state === `title`) {
    title()
  } else if (state === `controls`) {
    controls();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `end`) {
    end();
  }


} //draw() end

//STATES//////////////////////////////////////////////////////////////////////
//Title screen state////////////////////////////////////////////////////////////
function title() {
  //Title
  displayText(`- SLAMINA+ -
the animal guessing game`, width / 2, height / 2, 74, BOLD);
  //Instructions
  displayText(`Press 'any key' to continue`, width / 2, height - 200, 32, NORMAL);
}

//Controls state////////////////////////////////////////////////////////////
function controls() {
  //Text
  displayText(`- CONTROLS -`, width / 2, 300, 74, BOLD);
  //Controls
  displayText(`GOAL: Guess as many animals as possible within the time limit

- Make sure you ENABLED your microphone

- To guess, say: "I think it is [animal name]"

- Use 'mouse click' to either skip or move onto the next prompt`, width / 2, 550, 32, NORMAL);
  //Instructions
  displayText(`Press 'any key' to START`, width / 2, height - 100, 32, NORMAL);

}

//Simulation state////////////////////////////////////////////////////////////
function simulation() {
  //Click to begin
  if (!start) {
    displayText(`Use 'mouse click' to begin!
(listen carefully)`, width / 2, height / 2, 32, NORMAL);
  }
  //Display answer
  //Answer is correct!
  if (currentAnswer === currentAnimal && start) {
    fill(0, 255, 0); //Answer turns green
  }
  //Answer is wrong!
  else {
    fill(255, 0, 0); //Answer turns red
  }
  text(currentAnswer, width / 2, height / 2); //Displays the guessed answer

  //Score
  displayText(`Current score: ` + score, 200, 100, 32, NORMAL);

  //Timer
  displayText(`Time: ` + timeLimit, width - 200, 100, 32, NORMAL);
  if (frameCount % 60 == 0 && timeLimit > 0 && start) {
    timeLimit--;
  }
  //Time's up
  if (timeLimit === 0) {
    state = `end`;
  }

}

//End state////////////////////////////////////////////////////////////
function end() {
  //Your score
  displayText(`FINAL SCORE: ` + score, width / 2, height / 2 - 100, 74, BOLD);
  //Restart
  displayText(`To restart press 'ENTER'`, width / 2, height / 2 + 100, 32, NORMAL);
}


//ADDITONAL FUNCTIONS////////////////////////////////////////////////////////////
//Mouse click function
function mousePressed() {
  //User skips prompt
  if (state === `simulation`) {
    skip();
    start = true;
  }
}

//Function that skips the prompt
function skip() {
  currentAnimal = random(animals);
  let reverseAnimal = reverseString(currentAnimal);
  responsiveVoice.speak(reverseAnimal, "UK English Male", {
    volume: 2
  });
}

//Ensures the answer is in lowercase
function guessAnimal(animal) {
  currentAnswer = animal.toLowerCase();
  console.log(currentAnswer);
  //If answer is CORRECT
  if (currentAnswer === currentAnimal) {
    score++;
    //Play sound effect
    if (!correctSFX.isPlaying()) {
      correctSFX.play();
    }
  } else {
    //If answer is WRONG
    //Play sound effect
    if (!wrongSFX.isPlaying()) {
      wrongSFX.play();
    }
  }
}

//Function reverses the provided string
function reverseString(string) {
  //Split the string into an array of characters
  let characters = string.split('');
  //Reverse the array of characters
  let reverseCharacters = characters.reverse();
  //Join the array of characters back into a string
  let result = reverseCharacters.join('');
  //Return the result
  return result;
}

//Score function (adds points by 1)
// function addScore() {
//   noLoop();
//   score++;
// }

//Time goes down
function timerDecrease() {
  timeLimit--;
}

//Text function
function displayText(string, x, y, size, style) {
  push();
  textStyle(style);
  textAlign(CENTER, CENTER);
  textSize(size);
  fill(255);
  text(string, x, y);
  pop();
}

//Key press function
function keyPressed() {
  if (state === `title`) {
    state = `controls`;
  } else if (state === `controls`) {
    state = `simulation`;
  } else if (state === `end` && keyCode === ENTER) {
    location.reload();
  }
}
