p = [];
function setup() {
  createCanvas(1080, 960);
  v = new Vehicle(width / 2, height / 2);
  }

  function mouseClicked(){
      console.log(mouseX,mouseY);
      let v = new Vehicle(mouseX,mouseY);
      p.push(v);
  }
  function draw() {
    background(51);
    for (let i=0; i<p.length;i++){
      p[i].update();
      p[i].display();
    }

  }


class Vehicle {
  constructor(x, y) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, -2);
    this.position = createVector(x, y);
    this.r = 6;
    this.maxspeed = 8;
    this.maxforce = 0.2;
  }

 
  update() {

    this.velocity.add(this.acceleration);

    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);

    this.acceleration.mult(0);
  }

  applyForce(force) {

    this.acceleration.add(force);
  }
  display() {
    // Draw a triangle rotated in the direction of velocity
    let theta = this.velocity.heading() + PI / 2;
    fill(127);
    stroke(200);
    strokeWeight(1);
    push();
    translate(this.position.x, this.position.y);
    rotate(theta);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);
    pop();
  }
}