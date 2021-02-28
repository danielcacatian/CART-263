//Cell class
//by co-dart
//https://github.com/co-dart/Matrix_Digital_Rain
class Drop {
  constructor(col) {
    this.row = 0;
    this.col = col;
    this.dropTimeout = 0;
    this.offScreenTimeout = floor(random(maxOffscreen));
    this.offScreen = true;
  }

  update() {
    if (this.offScreen) {
      this.offScreenTimeout = (this.offScreenTimeout + 1) % maxOffscreen;

      if (this.offScreenTimeout === 0){
        this.offScreen = false;
      }
    } else {
      this.dropTimeout = (this.dropTimeout + 1) % dropTimeout;

      if (this.dropTimeout === 0){
        this.row++;
      }

      if (this.row === numRows){
        this.row = 0;
        this.offScreen = true;
        this.offScreenTimeout = floor(random(maxOffscreen));
      }
    }
  }

  brightenCell() {
    if (!this.offScreen)
     cells[this.row][this.col].brighten();
  }
}
