class bot{
    constructor(){
        this.position = createVector(width/2,height/2);
        this.velocity = createVector();
    }

    show(){
        strokeWeight(16);
        stroke(255);
        point(this.position.x,this.position.y);
    }
}