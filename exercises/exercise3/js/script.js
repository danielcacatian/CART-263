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
  //makes name uppercase
  spyProfile.name = name.toUpperCase();
  if (state === `login` || state === `error`) {
    state = `brief`;

    //Generates the brief
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
  //makes password lowercase
  spyProfile.password = password.toLowerCase();
  console.log(spyProfile.password);
  if (state === `login` || state === `error`) {
    state = `brief`;

    //Load localStorage
    let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
    if (spyProfile.password === data.password) {
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
    } else {
      state = `error`;
      //ResponseVoice
      responsiveVoice.speak(`ERROR 4.O4. Password not registered. Please say a registered password. Or state your name`, "UK English Male", {
        pitch: 0.75,
        rate: 1
      });
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
