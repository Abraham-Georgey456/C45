var bg, bg_img, lander, lander_img, ground;
var vX = 0;
var vY = 0;
var g= 0.05;
function preload(){
  bg_img = loadImage("bg.png");
  lander_img = loadImage("normal.png");
}
 
function setup() {
  createCanvas(1000,700); 
  frameRate(80);
  lander = createSprite(100,50,50,50);
  lander.addImage(lander_img)
  lander.scale = 0.1
  
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background("blue");
  image(bg_img,0,0);
  push();
  fill(255);
  text("Vertical Velocity: "+ round(vY),800,75);
  pop();
  vY += g;
  lander.position.y += vY;
 drawSprites();
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    upward_Thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
  }
}

function upward_Thrust(){
   vY -=1
}
