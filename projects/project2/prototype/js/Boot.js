class Boot extends Phaser.Scene {

  constructor(){
    super({
      key: `boot`
    });
  }

  preload(){
    // Sprites
    // Boxxy
    this.load.spritesheet(`boxxy`, `assets/images/boxxy.png`, {
      frameWidth: 64,
      frameHeight: 64,
    });
    // Conny
    this.load.spritesheet(`conny`, `assets/images/conny.png`, {
      frameWidth: 64,
      frameHeight: 64,
    });
    this.load.image(`box`, `assets/images/box.png`);
    this.load.image(`buttonS`, `assets/images/buttonS.png`);
    this.load.image(`buttonT`, `assets/images/buttonT.png`);
    this.load.image(`platform`, `assets/images/platform.png`)


    // // Tileset images for the tilemap
    // this.load.image(`tiles`, `assets/images/tiles.png`);
    // // Load tilemap (Tiled JSON)
    // this.load.tilemapTiledJSON(`prototype-map`, `assets/maps/prototype-map.json`);

    this.load.on(`complete`, () => {
      this.scene.start(`play`);
    })
  }

  create(){

  }

  update(){

  }

}
