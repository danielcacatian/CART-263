"use strict";

/**
The Perfect Pair
Daniel Cacatian

A puzzle game where you control two players that
also includes a small narrative experience.
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
  scene: [Boot, Title, Context, Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8, Good, Bad]
};

let game = new Phaser.Game(config);
