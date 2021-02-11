"use strict";

/**
Spy Profile Generator+
Daniel Cacatian

This exercise will mostly operate like the activity assigned
by Pippin Barr with some modifications and improvements.
*/

const GREEN_COLOR = `#34ff5d`;

let spyProfile = {
  name: `**REDACTED**`,
  alias: `**REDACTED**`,
  secretWeapon: `**REDACTED**`,
  task: `**REDACTED**`,
  location: `**REDACTED**`,
  password: `**REDACTED**`,
};

let button = {
  x: undefined,
  y: undefined,
  width: 300,
  height: 100
};

let nounData = undefined;
let objectData = undefined;
let tarotData = undefined;
let actionData = undefined;
let countryData = undefined;

let state = `login`;

/**PRELOAD()/////////////////////////////////////////////////////////////////////////
Loads the raw JSON files via URL
*/
function preload() {
  nounData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/words/personal_nouns.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
  actionData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/words/verbs.json`);
  countryData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/geography/countries.json`);

} //preload() end


/**SETUP()/////////////////////////////////////////////////////////////////////////
Contains the Annyang! commands
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  //Annyang commands
  if (annyang) {
    let commands = {
      'My name is *name': nameInput,
      'Password is *password': passwordInput
    };
    annyang.addCommands(commands);
    annyang.start();
  }

} //setup() end

//SETUP FUNCTIONS//////////////////////////////////////////////////////////////
//Input name with voice
function nameInput(name) {
  if(state === `login` || state === `error`){
  //makes name uppercase
  spyProfile.name = name.toUpperCase();

  //Generates the brief
  state = `brief`;
  generateSpyProfile();

  //Response voice welcomes the user
  responsiveVoice.speak(`Welcome, ${spyProfile.name}. Or should I call you: Agent ${spyProfile.alias}.
    Your mission. If you choose to accept it. Is to ${spyProfile.task} at this location. ${spyProfile.location}.
    Good luck, agent ${spyProfile.alias}`, "UK English Male", {
    pitch: 0.75,
    rate: 1
    });
  }
}

//Inputs password with voice
function passwordInput(password) {
  if (state === `login` || state === `error`) {
    //makes password lowercase
    spyProfile.password = password.toLowerCase();
    console.log(spyProfile.password);

    //If user attempts to say a password after cache has been cleared, they'll automatically be directed
    //to the error page without any password confirmation
    error404()

    //Load localStorage
    let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
    //Password exists
    if (spyProfile.password === data.password) {
      state = `brief`;

      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.task = data.task;
      spyProfile.location = data.location;
      spyProfile.password = data.password;

      //Response voice welcomes back the user
      responsiveVoice.speak(`Welcome back, Agent ${spyProfile.alias}.`, "UK English Male", {
        pitch: 0.75,
        rate: 1
      });
    }
    //Doesn't exist
    else{
      error404();
    }
  }
}

//Fills in the profile prompts with random data
function generateSpyProfile() {

  spyProfile.alias = random(nounData.personalNouns);
  spyProfile.secretWeapon = random(objectData.objects);
  let action = random(actionData.verbs);
  spyProfile.task = action.present;
  spyProfile.location = random(countryData.countries);
  let card = random(tarotData.tarot_interpretations);
  spyProfile.password = random(card.keywords);

  //Store information
  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));
}

/**DRAW()/////////////////////////////////////////////////////////////////////////
Contains the states with functions that display everything that is needed
*/
function draw() {
  background(0);

  if (state === `login`) {
    login();
  } else if (state === `brief`) {
    brief();
  } else if (state === `error`) {
    error();
  }

} //draw() end

//STATE FUNCTIONS////////////////////////////////////////////////////////////////
//login-screen state//////////////////////////////////////////////////////////////
function login() {
  //Say name
  displayText(`State your first name
to receive briefing...`, width / 2, height / 2, 64, CENTER, CENTER);
  //Instructions
  displayText(`Say: 'my name is [name]'
or
'Password is [password]' to revisit a brief`, width / 2, height / 2 + 200, 32, CENTER, CENTER);
}

//Briefing document//////////////////////////////////////////////////////////////
function brief() {
  //Name
  displayText(`Welcome... ${spyProfile.name}`, 100, 100, 64, LEFT, TOP);
  //Alias
  displayText(`Codename: Agent ${spyProfile.alias}`, 100, 175, 32, LEFT, TOP);
  //Profile info
  displayText(`BRIEFING---------------------

- Secret Weapon -
${spyProfile.secretWeapon}

- Mission -
Your mission, if you choose to
accept it, is to ${spyProfile.task} at this
location: ${spyProfile.location}

- Password -
${spyProfile.password}

...Good luck agent ${spyProfile.alias}.`,
    100, 300, 32, LEFT, TOP);

  //Terminate contract button
  button.x = width/8*6;
  button.y = height/2;
  displayButton(button.x, button.y);
}

//Error state//////////////////////////////////////////////////////////////////////////
function error() {
  //Error message
  displayText(`ERROR 404
Password not registered`, width / 2, height / 2, 64, CENTER, CENTER);
  //Error subtext message
  displayText(`Please say a registered password
or state your name`, width / 2, height / 2 + 200, 32, CENTER, CENTER);
}

//EXTRA FUNCTIONS////////////////////////////////////////////////////////////////////
//Function to display text
function displayText(string, x, y, size, align1, align2) {
  push();
  textFont(`Courier, monospace`);
  textStyle(BOLD);
  textAlign(align1, align2);
  textSize(size);
  fill(GREEN_COLOR);
  text(string, x, y);
  pop();
}

//Display a button to clear cache
function displayButton(x, y){
  push();
  rectMode(CENTER);
  strokeWeight(4);
  stroke(GREEN_COLOR);
  fill(0);
  rect(x, y, button.width, button.height);
  pop();

  //text
  displayText(`TERMINATE`, width/8*6, height/2, 32, CENTER, CENTER);
}

// Mouse click Function
function mousePressed(){
  //User terminates contract
  if(mouseX >= button.x-button.width/2 &&
    mouseX <= button.x+button.width/2 &&
    mouseY >= button.y-button.height/2 &&
    mouseY <= button.y+button.height/2 && state === `brief`){

      //ResponsiveVoice
      responsiveVoice.speak(`Terminating contract in Five... Four... Three... Two.... One...`, "UK English Male", {
        pitch: 0.75,
        rate: 1
      });
      // Terminates/Clear storage
      setTimeout(terminate, 5000);
  }
}

//Terminates/Clear cache
function terminate(){
  //Clears cache and reloads page
  localStorage.removeItem(`spy-profile-data`);

  location.reload();
}

//Function that leads to the error page
function error404(){
  state = `error`;
  //ResponsiveVoice
  responsiveVoice.speak(`ERROR 4.O4. Password not registered. Please say a registered password. Or state your name`, "UK English Male", {
    pitch: 0.75,
    rate: 1
  });
}
