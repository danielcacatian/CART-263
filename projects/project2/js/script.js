"use strict";

/**
The Perfect Pair
Daniel Cacatian

A puzzle game where you control two players
*/

let config = {
  type: Phaser.AUTO,
  width: 1400,
  height: 750,
  physics: {
    default: `arcade`,
    arcade: {
      gravity: { y: 600},
      debug: false
    }
  },
  scene: [Boot, Level1, Level2 , End]
};

let game = new Phaser.Game(config);
