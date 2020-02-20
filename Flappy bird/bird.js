class bird{
    constructor(y){
        this.x=30;
        this.y=y;
    }

    show(){
        push();
        noFill();
        strokeWeight(2)
        stroke(255);
        ellipse(this.x,this.y,30,30);
        pop();
    }

    fall(){
        this.y+=4.9;
        this.y=constrain(this.y,15,height-15)
    }

    jump(){
        this.y-=13;
        this.y=constrain(this.y, 0, height-15)
    }
}