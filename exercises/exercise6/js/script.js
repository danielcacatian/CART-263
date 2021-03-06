"use strict";

let secretsRevealed = 0;
let end = false;
let bgMusic = undefined;

function preload(){
  bgMusic = loadSound(`assets/sounds/bgMusic.mp3`)
}

// Simulation
$(`.top-secret`).on(`click`,redact);
setInterval(revelation, 500);

function redact(event){
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);

  secretsRevealed--;
}

function revelation(){
  $(`.redacted`).each(attemptReveal);
}

function attemptReveal(){
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);

    secretsRevealed++;
  }
}

// Win screen pops up
$(`#win`).hide();
setTimeout(function (){
  $(`#win`).show();
  $(`#lose`).hide();
  end = true;
}, 20000) // If user hides the redacted info for 20secs, they WIN

function draw(){
  //Lose screen pops up
  if(secretsRevealed <= 8){
    $(`#lose`).hide();
  }
  else {
    $(`#lose`).show();
    $(`#win`).hide();
    $(`#secret-document`).hide();
    end = true;
  }

  //Song plays
  if (!bgMusic.isPlaying()) {
    bgMusic.play();
    bgMusic.loop();
  }
}

// Key presses
function keyPressed() {
  // Restart if player won/loss
  if (keyCode === 32 && end === true) {
    location.reload();
  }
}

// Background music
$(document).ready(function(){
  $(bgMusic) [0].play();
});
