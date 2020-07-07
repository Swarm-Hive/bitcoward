let p = [];
function setup(){
  createCanvas(1000,1000);
  

}
function mousePressed() {
  let lol = new part();
  lol.x = mouseX;
  lol.y = mouseY;
  p.push(lol);
  // prevent default
  return false;
}

function draw(){
  background(0);
  
  for (let i=0; i<p.length;i++){
    p[i].update();
    p[i].show();
  }
}

class part {
  constructor(){
    this.x = 300;
    this.y = 380;
    this.vx = random(-5,5);
    this.vy = random(-5,5);
    
  }
  update(){
    
    this.x+=this.vx;
    this.y+=this.vy;
  }
  show(){
    stroke(255);
    fill(255,10);
    ellipse(this.x,this.y,16)
  }
}