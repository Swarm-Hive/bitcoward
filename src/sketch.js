/*
 * @Author: Zitian(Daniel) Tong, Krishna Prasad
 * @Date: 2020-07-09 22:30:47
 * @LastEditTime: 2020-07-09 22:47:36
 * @LastEditors: Zitian(Daniel) Tong
 * @Description: main js file, run here
 * @FilePath: /bitcoward/src/sketch.js
 */ 

p = [];         // bot list
obstacles = []; // obstacles list
let timer = 5;
boundary_distance = 50;

// set up function - only run at beginning
function setup() {
  createCanvas(1080, 960);
  v = new bot(width / 2, height / 2);
}

// create bot when mouse clicked
function mouseClicked(){
  console.log(mouseX,mouseY);
  v = new bot(mouseX,mouseY);
  p.push(v);
}

// create obstacles when keyTyped
function keyTyped(){
  if  (key === 'p'){
    console.log('Key P been pressed, adding obstacle at x - '
                + mouseX, ' y - ' + mouseY);
    // define square location
    squareX = mouseX;
    squareY = mouseY;
    squareL = random(100);
    squareH = random(50);
    obstacles.push(createVector(squareX, squareY, createVector(squareL, squareH)));
  }
}

// continuing loop
function draw() {
  // background
  background(51);

  // obstacles update
  for (let i=0; i<obstacles.length; i++){
    fill(255, 204, 0);
    rect(obstacles[i].x, obstacles[i].y, obstacles[i].z.x, obstacles[i].z.y);
  }


  // swarm update
  for (let i=0; i<p.length;i++){
    setInterval(p[i].randomize(),2000);
    p[i].update();
    p[i].display();
  }
}


