/**************************************************
Activity 02: Where is Sausage Dog
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

"use strict";

//constants
const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100;

let animalImages = [];
let animals = [];

let sausageDogImage = undefined;
let sausageDog = undefined;

function preload() {
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++){
    let animalImage = loadImage(`assets/images/animal${i}.png`);
    animalImages.push(animalImage);
  }

  sausageDogImage = loadImage(`assets/images/sausage-dog.png`)
}

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create the animals
  for (let i = 0; i < NUM_ANIMALS; i++){
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImages);
    let animal = new Animal(x, y, animalImage);
    animals.push(animal);
  }

  let x = random(0,width);
  let y = random(0, height);
  sausageDog = new SausageDog(x, y, sausageDogImage);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(255, 255, 0);

  for (let i = 0; i < animals.length; i++){
    animals[i].update();
  }

  sausageDog.update();
}

function mousePressed(){
  sausageDog.mousePressed();
}
