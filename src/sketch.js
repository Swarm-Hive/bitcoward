p = [];
let timer = 5;
boundary_distance = 50;

function setup() {
  createCanvas(1080, 960);
  v = new Vehicle(width / 2, height / 2);
  current = createVector(0,0);
  previous = createVector(0,0);
  }

  function mouseClicked(){
  
      v = new Vehicle(mouseX,mouseY);
      p.push(v);
      
  }

  var pts = [];
function mousePressed()
{ if (mouseButton === CENTER){
    if (pts.length == 4) {
        pts = [];
    }
    pts.push([mouseX, mouseY])
}
}


  function draw() {
    background(51);
   
 
    for (let i=0; i<p.length;i++){
      setInterval(p[i].randomize(),2000);
      p[i].update();
      p[i].display();
    }

    for (var i=0; i < pts.length-1; ++i) {
      line(pts[i][0], pts[i][1], pts[i+1][0], pts[i+1][1]);
  }

  var close = pts.length == 4;
  if (close) {
      
      line(pts[pts.length-1][0], pts[pts.length-1][1], pts[0][0], pts[0][1]); 
  }
  else if (pts.length > 0) {
      
      line(pts[pts.length-1][0], pts[pts.length-1][1], mouseX,mouseY); 
  }

  }
 