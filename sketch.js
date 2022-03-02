let Particles = [];
let beetle = [];

function setup() {
  createCanvas(800, 800);

  for (var i = 0; i < 100; i++) {
    particles.push(new Particle);
  }
  
  
}

function draw(){
  background(0);
  beetle = loadImage('beetleGuy.png');
  for (var i = 0; i < particles.length; i++) {
      particles.push(new Particle);
  }

//myParticle.move();
//myParticle.display();

}

class Particle {
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.size = size;
    this.xspeed = random(-1, 1);
    this.yspeed = random(-1, 1);
  }

display{
  image(beetleGuy, this.x, this.y, this.size, this.size
  ellipse(this.x, this.y, this.size, this.size);
   }
   move(){
      this.x = this.x + this.xSpeed;
      this.y = this.y + this.ySpeed;
      if(this.x > width || this.x <0){
        this.x = random(width);
      if (this.y > heigth || this.y < 0){
      }
        this.y = random(height);
      }
      }

}

}
//let thing = {x: 430, y: 200, size: 100, xspeed: -0.6, yspeed: 0.345};
