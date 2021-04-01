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
  width: 800,
  height: 600,
  physics: {
    default: `arcade`
  },
  scene: [Boot, Play]
};

let game = new Phaser.Game(config);
