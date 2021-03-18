"use strict";

let secretsRevealed = 0;

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

//Lose screen pops up
function draw(){
  if(secretsRevealed <= 10){
    $(`#lose-screen`).hide();
  }
  else {
    $(`#lose-screen`).show();
  }
}
