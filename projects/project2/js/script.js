"use strict";

/**
The Perfect Pair
Daniel Cacatian

A puzzle game where you control two players
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
