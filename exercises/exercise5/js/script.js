/**
Haiku Generator++
Daniel Cacatian

Add-on to Activity 6 by Pippin Barr.
*/

"use strict";

let fiveSyllableLines = [
  `O, to be a tree`,
  `The cat does not know`,
  `We are all forests`,
  `You have done your best`,
  `They are all gone now`
];

let sevenSyllableLines = [
  `Say the things left unsaid`,
  `Never believe the wind's lies`,
  `The autumn stretches its legs`,
  `Nothing can satisfy you`,
  `They will not come back again`
];


let line1 = random(fiveSyllableLines);
let line2 = random(sevenSyllableLines);
let line3 = random(fiveSyllableLines);

let line1P = document.getElementById(`line-1`);
let line2P = document.getElementById(`line-2`);
let line3P = document.getElementById(`line-3`);

line1P.innerText = line1;
line2P.innerText = line2;
line3P.innerText = line3;

line1P.addEventListener(`click`, lineClicked);
line2P.addEventListener(`click`, lineClicked);
line3P.addEventListener(`click`, lineClicked);

line1P.addEventListener(`mouseenter`, hover);
line2P.addEventListener(`mouseenter`, hover);
line3P.addEventListener(`mouseenter`, hover);

line1P.addEventListener(`mouseleave`, noHover);
line2P.addEventListener(`mouseleave`, noHover);
line3P.addEventListener(`mouseleave`, noHover);

function lineClicked(event){
  fadeOut(event.target, 1);
}

function hover(event){
  event.target.style[`color`] = `#55a355`;
}

function noHover(event){
  event.target.style[`color`] = `black`;
}

function fadeOut(element, opacity){
  opacity -= 0.01;
  element.style[`opacity`] = opacity;
  if (opacity > 0){
    requestAnimationFrame(function(){
      fadeOut(element, opacity);
    });
  }
  else {
    setNewLine(element);
    fadeIn(element, 0);
  }
}

function fadeIn(element, opacity){
  opacity += 0.01;
  element.style[`opacity`] = opacity;
  if(opacity < 1){
    requestAnimationFrame(function(){
      fadeIn(element, opacity);
    });
  }
}

function setNewLine(element){
  if(element === line1P || element === line3P){
    element.innerText = random(fiveSyllableLines);
  }
  else if(element === line2P){
    element.innerText = random(sevenSyllableLines);
  }
}

function random(array){
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}
