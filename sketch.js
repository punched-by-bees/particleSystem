// let Particles = [];
// let beetle = [];

// function setup() {
//   createCanvas(800, 800);

//   for (var i = 0; i < 100; i++) {
//     particles.push(new Particle);
//   }
  
  
// }

// function draw(){
//   background(0);
//   beetle = loadImage('beetleGuy.png');
//   for (var i = 0; i < particles.length; i++) {
//       particles.push(new Particle);
//   }

// //myParticle.move();
// //myParticle.display();

// }

// class Particle {
//   constructor(){
//     this.x = random(width);
//     this.y = random(height);
//     this.size = size;
//     this.xspeed = random(-1, 1);
//     this.yspeed = random(-1, 1);
//   }

// display{
//   image(beetleGuy, this.x, this.y, this.size, this.size
//   ellipse(this.x, this.y, this.size, this.size);
//    }
//    move(){
//       this.x = this.x + this.xSpeed;
//       this.y = this.y + this.ySpeed;
//       if(this.x > width || this.x <0){
//         this.x = random(width);
//       if (this.y > heigth || this.y < 0){
//       }
//         this.y = random(height);
//       }
//       }

// }

// }
// //let thing = {x: 430, y: 200, size: 100, xspeed: -0.6, yspeed: 0.345};

let particles = [];
let croissants = [];
let wind; 
let gravity; 

let myBoolean;


function setup(){
  createCanvas(800, 800);
  croissants[0] = loadImage('assets/croissant1.png');
  croissants[1] = loadImage('assets/croissant2.png');
  wind = createVector(0.1, 0);
  gravity = createVector(0, 0.1);

  for (var i = 0; i < 100; i++) {
    particles.push(new Particle(i));
  }

}


let timer = 0;
let counted = false;

function draw(){
  background(0);
  gravity.y = map(mouseY, 0, width, 0, 0.1);
  wind.x = map(mouseX, 0, width, -0.1, 0.1);
  //print(gravity.y);
 
      
  for (var i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
  }

  // myParticle.move();
  // myParticle.display();
  
}

class Particle {
    constructor(index_){ //what data our objects have
      this.location = createVector(random(width), random(height));
      this.velocity = p5.Vector.random2D(); //instead of xSpeed and ySpeed
      this.velocity.mult(random(-1, 1));
      this.size = 25;
      this.image = int(random(2));
      this.index = index_;
    }

    display(){
      imageMode(CENTER);
      image(croissants[this.image], this.location.x, this.location.y, this.size, this.size);
    }

    move(){
        this.velocity.add(gravity);
        this.velocity.add(wind);
        this.location.add(this.velocity);

        let colliding = this.amIColliding();

        if(colliding){
          //print("collision!")
          this.velocity.x = this.velocity.x * -1;
          this.velocity.y = this.velocity.y * -1;
        }

        if (this.location.x > width || this.location.x < 0){
          this.velocity.x = this.velocity.x * -1;
        }
        if (this.location.y > height || this.location.y < 0){
          this.velocity.y = this.velocity.y * -1;
        }
       //print(this.velocity.x);
    }

    amIColliding(){
      //how big is our croissant? 10 pixels 10 pixels?
      let hitbox = 10;
      for (var i = 0; i < particles.length; i++) {
          if( i != this.index){
            let xIsTooClose = false;
            let yIsTooClose = false;
            //some particle's X AND that same particle's Y are close to my X And my Y
            //is X close?
            if ((abs(this.location.x - particles[i].location.x)) <= hitbox){
              xIsTooClose = true;
            }
            if ((abs(this.location.y - particles[i].location.y)) <= hitbox){
              yIsTooClose = true;
            }
            if(xIsTooClose && yIsTooClose){
              return true;
            }

          }
      }
    }

}


//each particle is something like:
//let thing = {x: 430, y: 200, size: 100, xSpeed: -0.6, ySpeed: 0.345};