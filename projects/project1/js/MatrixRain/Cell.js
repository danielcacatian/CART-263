//Cell class
//by co-dart
//https://github.com/co-dart/Matrix_Digital_Rain
class Cell {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.symbol = this.getRandomSymbol();
    this.brightness = 0;
    this.litTimer = 0;
  }

  getRandomSymbol() {
    return String.fromCharCode(random(12448, 12543));
  }

  brighten() {
    this.brightness = 100;
  }

  update() {
    if (random() < symbolSwapProb) {
      this.symbol = this.getRandomSymbol();
    }
    if (this.brightness > 0) {
      this.brightness = 80;
      this.litTimer =  (this.litTimer + 1) % brightTime;

      if (this.litTimer === 0) {
        this.brightness = 0;
      }
    }
  }

  draw(color) {
    push();
    fill(color);
    text(this.symbol, this.x, this.y);
    pop();
  }
}
