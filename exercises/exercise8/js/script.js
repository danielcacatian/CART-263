"use strict";

/**
Desperately Seeking Sadness++
Daniel Cacatian

An add-on to the already existing activity of Desperately
Seeking Sadness by Pippin Barr
*/

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: `arcade`
  },
  scene: [Boot, Title, Instructions, Play]
};

let game = new Phaser.Game(config);
