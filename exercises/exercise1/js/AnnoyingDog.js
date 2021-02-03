class AnnoyingDog {

  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.image = image;

    this.caught = false;
    this.missed = false;
    this.asleep = false;
  }

  display() {
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y);
    pop();
  }

  mousePressed() {
    if (mouseX > this.x - this.image.width / 2 &&
      mouseX < this.x + this.image.width / 2 &&
      mouseY > this.y - this.image.height / 2 &&
      mouseY < this.y + this.image.height / 2 &&
      !this.asleep) {
      this.missed = true;
    } else if (mouseX > this.x - this.image.width / 2 &&
      mouseX < this.x + this.image.width / 2 &&
      mouseY > this.y - this.image.height / 2 &&
      mouseY < this.y + this.image.height / 2 &&
      this.asleep) {
      this.caught = true;
    }
  }
}
