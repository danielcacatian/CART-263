class Play extends Phaser.Scene {

  constructor(){
    super({
      key: `play`
    });
  }

  create(){
    this.map = this.add.tilemap(`prototype-map`);

    this.level = this.map.addTilesetImage(`tiles`, `tiles`); // tileset

    //layers
    this.mainLayer = this.map.createLayer(`Platforms`, [this.level], 0, 0).setDepth(-1);

  }

  update(){

  }

}
