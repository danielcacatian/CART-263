"use strict";

/**
Bubble Popper+
Daniel Cacatian

An expansion of the activity 4: Bubble Popper
by Pippin Barr
*/

// The user's webcam
let video = undefined;
// The Handpose model
let handpose = undefined;
// The current set of predicitions
let predictions = [];
//The bubble
let bubble = undefined;
let bubbleSFX = undefined;
//The fish
let fish = undefined;
let fishSFX = undefined;
//Score
let score = 11;

let state = `loading`;

/**
Description of preload()
*/
function preload() {
  bubbleSFX = loadSound(`assets/sounds/pop.mp3`);
  fishSFX = loadSound(`assets/sounds/stab.mp3`);
}

/**
Description of setup
*/
function setup() {
  createCanvas(640, 480);

  //Access user's webcam
  video = createCapture(VIDEO);
  video.hide();

  //Load the handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    console.log(`Model loaded.`);
    state = `title`;
  });

  // Listen for predictions
  handpose.on(`predict`, function(results) {
    console.log(results);
    predictions = results;
  });

  // Our bubble
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    maxSize: 100,
    minSize: 25,
    vx: 0,
    vy: -2,
    maxSpeed: -4,
    minSpeed: -2
  };

  // Our fish
  fish = {
    x: 0,
    y: random(height),
    size: 50,
    maxSize: 100,
    minSize: 50,
    vx: 3,
    vy: 0,
    maxSpeed: 6,
    minSpeed: 3,
  };

} //setup()


/**
Description of draw()
*/
function draw() {
  background(0, 119, 190);

  if (state === `loading`) {
    loading();
  } else if (state === `title`) {
    title();
  } else if (state === `instructions`) {
    instructions();
  } else if (state === `simulation`) {
    simulation();
  } else if (state === `win`) {
    win();
  } else if (state === `lose`) {
    lose();
  }

} //draw()

//STATE FUNCTIONS/////////////////////////////////////////////////////////
//Loading state
function loading() {
  displayText(`Loading ml5 Handpose...`, width / 2, height / 2, 32, CENTER, CENTER, BOLD);
}

//Title state
function title() {
  //Bubble
  bubble.x = width / 2;
  bubble.y = height / 2;
  displayBubble();
  //Title
  displayText(`Bubble Popper+`, width / 2, height / 2, 54, CENTER, CENTER, BOLD);
  displayText(`Press 'SPACE' to continue`, width / 2, height / 2 + 100, 18, CENTER, CENTER, NORMAL);
}

//Instructions state
function instructions() {
  //Controls
  displayText(`INSTRUCTION:

- Pop 10 bubbles with your
index finger to win

- DONT pop the orange fish that
swims across or you lose!`,
    25, height / 2, 24, LEFT, CENTER, BOLD);
  //Cursor
  displayPin();
  displayText(`Pop to START`, width / 4 * 3.25, height / 4 * 2.75, 18, CENTER, CENTER, NORMAL);
  //Bubble
  bubble.x = width / 4 * 3.25;
  bubble.y = height / 2;
  displayBubble();
}

//Simulation state
function simulation() {
  // Score
  displayText(`${score}`, width / 2, height / 2, 64, CENTER, CENTER, BOLD)
  if (score === 0) {
    state = `win`;
  }

  //Pin
  displayPin();
  //Bubble
  displayBubble();
  //Fish
  displayFish();
  //Velocity of objects
  velocity()

  // Resets bubble/fish if out of bounds
  if (bubble.y < 0 - bubble.size / 2) {
    bubbleReset();
  } else if (fish.x > width + fish.size / 2) {
    fishReset();
  }

}

//Win state
function win() {
  //Text
  displayText(`YOU WON!`, width / 2, height / 2, 64, CENTER, CENTER, BOLD);
  displayText(`Press 'SPACE' to restart if you wish`, width / 2, height / 2 + 100, 18, CENTER, CENTER, NORMAL);
}

//Lose state
function lose() {
  //Text
  displayText(`YOU LOST!`, width / 2, height / 2, 64, CENTER, CENTER, BOLD);
  displayText(`Press 'SPACE' to restart if you wish`, width / 2, height / 2 + 100, 18, CENTER, CENTER, NORMAL);
}

//ADDITIONAL FUNCTIONS/////////////////////////////////////////////////////////
// Function to display pin
function displayPin() {
  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    // Pin body
    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(2);
    line(baseX, baseY, tipX, tipY);
    pop();

    // Pin head
    push();
    noStroke();
    fill(255, 0, 0);
    ellipse(baseX, baseY, 20);
    pop();

    // Check bubble popping
    let d = dist(tipX, tipY, bubble.x, bubble.y);
    if (d < bubble.size / 2) {
      if (state === `instructions`) {
        state = `simulation`;
      } else if (state === `simulation`) {
        bubbleReset();
        score--;
        //Play sound effect
        if (!bubbleSFX.isPlaying()) {
          bubbleSFX.play();
        }
      }
    }

    // Check fish getting pocked
    let d2 = dist(tipX, tipY, fish.x, fish.y);
    if (d2 < fish.size / 2) {
      state = `lose`;
      //Play sound effect
      if (!fishSFX.isPlaying()) {
        fishSFX.play();
      }
    }

  }
}

// Function to display bubble
function displayBubble() {
  push();
  noFill();
  stroke(190, 231, 255);
  strokeWeight(4);
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
}

// Function to display fish
function displayFish() {
  push();
  fill(255, 153, 19);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

// Function to add movement to the fish/bubble
function velocity() {
  //Move the BUBBLE
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  //Move the FISH
  fish.x += fish.vx;
  fish.y += fish.vy;
}

// Function that resets bubble
function bubbleReset() {
  bubble.x = random(width);
  bubble.y = height + bubble.size / 2;
  bubble.size = random(bubble.minSize, bubble.maxSize);
  bubble.vy = random(bubble.maxSpeed, bubble.minSpeed);
}

// Function that resets fish
function fishReset() {
  fish.x = 0 - fish.size / 2;
  fish.y = random(height);
  fish.size = random(fish.minSize, fish.maxSize);
  fish.vx = random(fish.minSpeed, fish.maxSpeed);
}

//Function to easily add text
function displayText(string, x, y, size, align1, align2, style) {
  push();
  textStyle(style);
  textAlign(align1, align2);
  textSize(size);
  fill(255);
  text(string, x, y);
  pop();
}

//Function that contains key presses
function keyPressed() {
  //Press SPACE to continue
  if (keyCode === 32 && state === `title`) {
    state = `instructions`;
  } else if (keyCode === 32 && state === `win` || state === `lose`) {
    state = `instructions`;
    score = 11;
    //Reset everything
    fish.x = 0 - fish.size / 2;
    fish.y = random(height);
    bubble.x = random(width);
    bubble.y = height + bubble.size / 2;
  }
}
