class Call {

  constructor(x, y, image){
    this.x = x;
    this.y = y;
    this.image = image;
    this.width = 240;
    this.height = 330;

    //Button width/height
    this.buttonWidth = 220;
    this.buttonHeight = 40;

    //Accept call button position
    this.acceptY = y + 90;
    //Decline call button position
    this.declineY = y + 140;

    this.callAccepted = false;
    this.callDeclined = false;
  }

  display(){
    //Call
    push();
    imageMode(CENTER);
    image(this.image, this.x, this.y, this.width, this.height);
    pop();

    //Join/Decline buttons
    push();
    noFill();
    noStroke();
    rectMode(CENTER);
    //Accept button
    rect(this.x, this.acceptY, this.buttonWidth, this.buttonHeight);
    //Decline button
    rect(this.x, this.declineY, this.buttonWidth, this.buttonHeight);
    pop();
  }

  mousePressed(){
    //User clicks accept button
    if(mouseX >= this.x-this.buttonWidth/2 &&
      mouseX <= this.x+this.buttonWidth/2 &&
      mouseY >= this.acceptY-this.buttonHeight/2 &&
      mouseY <= this.acceptY+this.buttonHeight/2){
        this.callAccepted = true;
      }
      else if(mouseX >= this.x-this.buttonWidth/2 &&
        mouseX <= this.x+this.buttonWidth/2 &&
        mouseY >= this.declineY-this.buttonHeight/2 &&
        mouseY <= this.declineY+this.buttonHeight/2){
          this.callDeclined = true;
      }
  }

}
