class Answer {

  constructor(x, y){
    this.x = x;
    this.y = y;
    this.strokeFill = 0;
    this.strokeWeight = 3;
    this.answerFill = 255;
    this.size = 40;
    this.innerSize = 25;
  }

  update(){
    this.display();
  }

  display(){
    //Outer circle
    push();
    fill(255);
    stroke(this.strokeFill);
    strokeWeight(this.strokeWeight);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size);
    pop();
    //Outer circle
    push();
    noStroke();
    fill(this.answerFill);
    ellipse(this.x, this.y, this.innerSize);
    pop();
  }

  hover(){
    let d = dist(mouseX, mouseY, this.x, this.y);
    if(d < this.size/2){
      this.answerFill = 0;
    }
    else{
      this.answerFill = 255;
    }
  }

}
