/**************************************************
Exercise 02: Slamina+
Daniel Cacatian

Added additional content to the Activity: Slamina by Pippin Barr
**************************************************/

//Animal names
const animals =  [
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

let currentAnimal = ``;
let currentAnswer = ``;
let score = 0;

let currentTime = 0;
let timeLimit = 60 * 60;//1min time limit

// setup()
//
// setup() contains annyang commands
function setup() {
  createCanvas(windowWidth, windowHeight);

  if (annyang) {
    let commands = {
      'I think it is *animal': guessAnimal
    };
    annyang.addCommands(commands);
    annyang.start();

    textSize(32);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
  }

}//setup() end

// draw()
//
// draw() displays information on score and whether the player got the answer right or wrong
function draw() {
  background(0);

  //Display answer
  //Answer is correct!
  if (currentAnswer === currentAnimal) {
    fill(0, 255, 0);
    addScore();
  }
  //Answer is wrong!
  else {
    fill(255, 0, 0);
  }
  text(currentAnswer, width/2, height/2);

  //Score
  displayText(`Current score: `+score, 200, 100, 32, BOLD);

}//draw() end

//ADDITONAL FUNCTIONS////////////////////////////////////////////////////////////
//User can click with the mouse to skip
function mousePressed(){
  skip();
}

//Function that skips the prompt
function skip(){
  currentAnimal = random(animals);
  let reverseAnimal = reverseString(currentAnimal);
  responsiveVoice.speak(reverseAnimal);

  loop();
}

//Ensures the answer is in lowercase
function guessAnimal(animal){
  currentAnswer = animal.toLowerCase();
  console.log(currentAnswer);
}

//Function reverses the provided string
function reverseString(string){
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
function addScore(){
  noLoop();
  score++;
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
