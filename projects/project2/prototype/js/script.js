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
  width: 1100,
  height: 600,
  physics: {
    default: `arcade`,
    arcade: {
      gravity: { y: 600},
      debug: true
    }
  },
  scene: [Boot, Play, End]
};

let game = new Phaser.Game(config);
