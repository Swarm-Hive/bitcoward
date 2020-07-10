p = [];
let timer = 5;
boundary_distance = 50;

function setup() {
  createCanvas(1080, 960);
  v = new Vehicle(width / 2, height / 2);
  }

  function mouseClicked(){
      console.log(mouseX,mouseY);
      v = new Vehicle(mouseX,mouseY);
      p.push(v);
  }
  function draw() {
    background(51);
    for (let i=0; i<p.length;i++){
      setInterval(p[i].randomize(),2000);
      p[i].update();
      p[i].display();
    }

  }


