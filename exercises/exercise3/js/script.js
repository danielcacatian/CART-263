"use strict";

/**
Spy Profile Generator+
Daniel Cacatian

This exercise will mostly operate like the activity assigned
by Pippin Barr with some modifications and improvements.
*/

let spyProfile = {
  name: `**REDACTED**`,
  password: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  task: `**REDACTED**`,
};

let nounData = undefined;
let objectData = undefined;
let tarotData = undefined;
let actionData = undefined;
let countryData = undefined;

/**
Description of preload
*/
function preload() {
  nounData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/words/personal_nouns.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
  actionData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/words/verbs.json`);
  countryData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/geography/countries.json`);

}//preload() end


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);


  generateSpyProfile();

}//setup() end

//Fills in the profile prompts with random data
function generateSpyProfile(){

  spyProfile.name = prompt(`Agent! What is your name?!`);
  spyProfile.alias = random(nounData.personalNouns);
  spyProfile.secretWeapon = random(objectData.objects);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);
  let action = random(actionData.verbs);
  spyProfile.task = action.present;
  spyProfile.location = random(countryData.countries);

  localStorage.setItem(`spy-profile-data`,JSON.stringify(spyProfile));
}

/**
Description of draw()
*/
function draw() {
  background(0);

  //Name
  displayText(`Welcome... ${spyProfile.name}`, 100, 64);
  //Alias
  displayText(`Codename: Agent ${spyProfile.alias}`, 175, 32);
  //Profile info
  displayText(`BRIEFING

Secret Weapon: ${spyProfile.secretWeapon}

Mission: Your mission, if you choose to accept it, is to ${spyProfile.task} at the location listed below.

Location: ${spyProfile.location}



...Good luck agent ${spyProfile.alias}.`,
300, 32 )


}//draw() end

//EXTRA FUNCTIONS////////////////////////////////////////////////////////////////
//Function to display text
function displayText(string, y, size) {
  push();
  textFont(`Courier, monospace`);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  textSize(size);
  fill(255, 170, 0);
  text(string, 100, y, width/2-50);
  pop();
}
