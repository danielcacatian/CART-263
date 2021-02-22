class AnswerB extends Answer {

  constructor(x, y){
    super(x, y)

    this.answerFill = 255;
    this.selected = false;
  }

  update(){
    super.update();
  }

  hover(){
    super.hover();
  }

  mousePressed(){
    if(this.answerFill === 0){
      this.selected = true;
    }
    else{
      this.selected = false;
    }
  }

}
