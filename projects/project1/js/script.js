"use strict";

/**
The Matrix
Daniel Cacatian

This project 1 will be based off the famous scene from The Matrix which
featured Neo discovering the Matrix. It won't be an accurate representation, but
it will be heavily inspired from that scene and I will attempt to make the
individual feel like, the one, Neo.
*/

let typewriter;

/******************************************************************************
Description of preload
*//////////////////////////////////////////////////////////////////////////////
function preload() {

}//preload() end


/******************************************************************************
Description of setup
*//////////////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);

  typewriter = new Typewriter();

}//setup() end


/**
Description of draw()
*/
function draw() {
  background(0);
  typewriter.display();

}//draw() end

/******************************************************************************
This section contains additional functions such as key presses,
display functions, etc.
*//////////////////////////////////////////////////////////////////////////////

function keyPressed(){
  typewriter.typewrite(`Wake up, Neo...`, 200, 200);
}
