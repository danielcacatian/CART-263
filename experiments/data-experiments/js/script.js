"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

//WEB STOAGE API/////////////////////////////////////////////////////////////////////////
let clicks = 0;
let gameData = {
  highScore: 0
};

let userData = {
  name: `stranger`
};


//JSON/////////////////////////////////////////////////////////////////////////
let tarotData = undefined;
let fortune = `No fortune found yet...`

let jokeText = ``; // The current joke.
let jokeData = undefined; // The loaded joke data

/**
Description of preload
*/
function preload() {
//JSON/////////////////////////////////////////////////////////////////////////
  //load with raw file
  tarotData = loadJSON(`assets/data/tarot_interpretations.json`)
  //Or with a URL
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`)
  jokeData = loadJSON(`https://official-joke-api.appspot.com/jokes/programming/random`);


}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

//WEB STOAGE API/////////////////////////////////////////////////////////////////////////
  //Name storage
  let data = JSON.parse(localStorage.getItem(`example-user-data`));
  if (data !== null){
    userData.name = data.name;
  }
  else {
    userData.name = prompt(`What's your name?`);
    localStorage.setItem(`example-user-data`, JSON.stringify(userData));
  }

  //Click storage game
  // let data = JSON.parse(localStorage.getItem(`click-attack-game-data`));
  // if (data !== null) {
  //   gameData = data;
  // }


//JSON/////////////////////////////////////////////////////////////////////////
  // // We get the joke object as the first element of the array
  // let joke = jokeData[0];
  // // Set the joke text as the setup and punchline properties together
  // jokeText = `${joke.setup}\n\n${joke.punchline}`;
  //                       // \n = new line

}//setup() end


/**
Description of draw()
*/
function draw() {
  background(255);

//WEB STOAGE API/////////////////////////////////////////////////////////////////////////
  //Name
  push();
  textSize(64);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(0);
  text(`Howdy, ${userData.name}!`, width/2, height/2);
  pop();

  //Number of clicks
  // push();
  // textSize(64);
  // textAlign(CENTER, CENTER);
  // textStyle(BOLD);
  // fill(0);
  // text(clicks, width/2, height/2);
  // pop();

  //Highscore
  // push();
  // textSize(32);
  // textAlign(LEFT, TOP);
  // textStyle(BOLD);
  // fill(0);
  // text(`High score: ${gameData.highScore}`, 100, 100);
  // pop();

//JSON/////////////////////////////////////////////////////////////////////////
//Json test
  // push();
  // textSize(32);
  // textAlign(CENTER);
  // fill(0);
  // text(fortune, width/2, height/2);
  // pop();

  // Display the current joke
  // push();
  // fill(255, 255, 0);
  // textSize(32);
  // textAlign(CENTER, CENTER);
  // rectMode(CENTER);
  // text(jokeText, width / 2, height / 2, width / 2, height / 2);
  // pop();

}//draw() end

//WEB STOAGE API/////////////////////////////////////////////////////////////////////////
// function mousePressed(){
//   clicks++;
//
//   if(clicks > gameData.highScore){
//     gameData.highScore = clicks;
//     localStorage.setItem(`click-attack-game-data`, JSON.stringify(gameData));
//   }
// }
//
// function keyPressed(){
//   if (key === `c`){
//     localStorage.removeItem(`click-attack-game-data`);
//   }
// }

//JSON/////////////////////////////////////////////////////////////////////////
// function mousePressed(){
//   loadJSON(`assets/data/tarot_interpretations.json`, tarotLoaded);
// }
//
// function tarotLoaded(data){
//   tarotData = data;
//   let card = random(tarotData.tarot_interpretations);
//   fortune = random(card.fortune_telling);
// }
