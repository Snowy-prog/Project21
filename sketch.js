var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  wall = createSprite(1500,200,thickness,height/2);
  wall.width = thickness;
  wall.shapeColor = color(80,80,80);
  
  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

}

function draw() {
  background("black"); 

  //"wall.x-car.x < (car.width+wall.width)/2" errors with this code, would teleport car back to top left
  if(bullet.collide(wall)){
    bullet.velocity = 0;

    var damage = 0.5 * weight * speed * speed/(thickness *thickness* thickness);
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}