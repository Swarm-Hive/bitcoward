/*
 * @Author: Zitian(Daniel) Tong, Krishna Prasad
 * @Date: 2020-07-09 22:30:47
 * @LastEditTime: 2020-07-09 22:48:25
 * @LastEditors: Zitian(Daniel) Tong
 * @Description: bot class
 * @FilePath: /bitcoward/src/bot.js
 */ 

class bot {
    constructor(x, y) {
      this.acceleration = createVector(0, 0);
      this.velocity = createVector(0, -2);
      this.position = createVector(x, y);
      this.r = 6;
      this.maxspeed = 8;
      this.maxforce = 0.2;
      
    }
    randomize(){
      let external_force = null;
      let x = random(-4,4)
      let y = random(-4,4)
      external_force = createVector(x,y);
      external_force.normalize();
      let speed = random(-10,10);
      external_force.mult(10);
      external_force.sub(this.velocity);
      external_force.limit(this.maxforce);
      this.applyForce(external_force);
  
  
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
    
  
    boundary(){
      let external_force = null;
  
      
      if (this.position.x < boundary_distance){
        external_force = createVector(this.maxspeed, this.velocity.y);
        console.log(this.velocity.x);
      } 
      
      else if (this.position.x > width - boundary_distance){
        external_force = createVector(-this.maxspeed, this.velocity.y);
        console.log(this.velocity.x);
      }
      
  
      if (this.position.y < boundary_distance){
        external_force = createVector(this.velocity.x, this.maxspeed);
        console.log(this.velocity.x);
      }
      
      else if (this.position.y > height - boundary_distance){
        external_force = createVector(this.velocity.x, -this.maxspeed);
        console.log(this.velocity.x);
      }
  
      
      if (external_force !== null){
        external_force.normalize();
        external_force.mult(this.maxspeed);
        external_force.sub(this.velocity);
        external_force.limit(this.maxforce);
        this.applyForce(external_force);
      }
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
      this.boundary();
      endShape(CLOSE);
      pop();
    }
  
  }