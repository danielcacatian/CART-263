class Boot extends Phaser.Scene {

  constructor(){
    super({
      key: `boot`
    });
  }

  preload(){
    // Tileset images for the tilemap
    this.load.image(`tiles`, `assets/images/tiles.png`);
    // Load tilemap (Tiled JSON)
    this.load.tilemapTiledJSON(`prototype-map`, `assets/maps/prototype-map.json`);

    this.load.on(`complete`, () => {
      this.scene.start(`play`);
    })
  }

  create(){

  }

  update(){

  }

}
