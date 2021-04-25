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
      debug: true
    }
  },
  scene: [Boot, Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8, End]
};

let game = new Phaser.Game(config);
