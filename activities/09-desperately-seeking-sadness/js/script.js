"use strict";

/**
Desperately Seeking Sadness
Pippin Barr

An emoji n search of satisfying sadness in a world of positivity
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
