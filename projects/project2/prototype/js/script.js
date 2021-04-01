"use strict";

/**
The Perfect Pair - PROTOTYPE
Daniel Cacatian

This is a prototype for Project 2: The Perfect Pair.
It will consists of 1 level that covers some aspects for
the finished project.
*/

let config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 700,
  physics: {
    default: `arcade`,
    arcade: {
      gravity: { y: 300},
      debug: false
    }
  },
  scene: [Boot, Play]
};

let game = new Phaser.Game(config);
