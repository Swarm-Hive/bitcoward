
height = 1000;
width = 1000;
const flock = [];
function setup() {
  createCanvas(1000, 1000);
  
  x = width / 2;
  y = height/2;
  frameRate(30)
  background(51);
  
 
}
function mouseClicked() {
  x = mouseX;
  y = mouseY;
  
  // prevent default
  lol = [mouseX,mouseY]
  flock.push(lol)
  return [mouseX, mouseY];
}
function draw() {
  
  stroke(50);
  fill(200);
  
  for (bots in flock){
    console.log(flock[bots]);
    x = flock[bots][0];
    y = flock[bots][1];
    ellipse(x, y, 24, 24);
    x = x +random(-10,10);
    y = y +random(-10,10);
  }
  
  
 
  }
