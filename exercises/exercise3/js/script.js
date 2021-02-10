"use strict";

/**
Spy Profile Generator+
Daniel Cacatian

This exercise will mostly operate like the activity assigned
by Pippin Barr with some modifications and improvements.
*/

let spyProfile = {
  name: ``,
  alias: ``,
  secretWeapon: ``,
  task: ``,
  password: ``,
};

let nounData = undefined;
let objectData = undefined;
let tarotData = undefined;
let actionData = undefined;
let countryData = undefined;

let state = `start`;

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

  //Annyang commands
  if (annyang) {
    let commands = {
      'My name is *name': nameInput,
    };
    annyang.addCommands(commands);
    annyang.start();

  }


  generateSpyProfile();

}//setup() end

//Fills in the profile prompts with random data
function generateSpyProfile(){

  spyProfile.alias = random(nounData.personalNouns);
  spyProfile.secretWeapon = random(objectData.objects);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);
  let action = random(actionData.verbs);
  spyProfile.task = action.present;
  spyProfile.location = random(countryData.countries);

  // localStorage.setItem(`spy-profile-data`,JSON.stringify(spyProfile));
}

/**
Description of draw()
*/
function draw() {
  background(0);

  if(state === `start`){
    start();
  }
  else if(state === `brief`){
    brief();
  }

}//draw() end

//STATE FUNCTIONS////////////////////////////////////////////////////////////////
//Start-screen state//////////////////////////////////////////////////////////////
function start(){
  //Say name
  displayText(`State your name
to receive briefing...`, width/2, height/2, 64, CENTER, CENTER)
  //Instructions
  displayText(`Say: my name is [name]...`, width/2, height/2+150, 32, CENTER, CENTER)

}

//Briefing document//////////////////////////////////////////////////////////////
function brief(){
  //Name
  displayText(`Welcome... ${spyProfile.name}`, 100, 100, 64, LEFT, TOP);
  //Alias
  displayText(`Codename: Agent ${spyProfile.alias}`, 100, 175, 32, LEFT, TOP);
  //Profile info
  displayText(`BRIEFING

Secret Weapon: ${spyProfile.secretWeapon}

Mission: Your mission, if you choose to
accept it, is to ${spyProfile.task} at the location
listed below:

Location: ${spyProfile.location}

You can reconsult the briefing with this
Password: ${spyProfile.password}

...Good luck agent ${spyProfile.alias}.`,
100, 300, 32, LEFT, TOP);
}


//EXTRA FUNCTIONS////////////////////////////////////////////////////////////////
//Function to display text
function displayText(string, x, y, size, align1, align2) {
  push();
  textFont(`Courier, monospace`);
  textStyle(BOLD);
  textAlign(align1, align2);
  textSize(size);
  fill(255, 170, 0);
  text(string, x, y);
  pop();
}

//Input name with voice (makes it uppercase)
function nameInput(name){
  spyProfile.name = name.toUpperCase();
  if(state === `start`){
    state = `brief`;
  }
}
