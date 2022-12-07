
var trex ,trex_running;
var ground, groundimage;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundimage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(100, 180, 20, 20);
  trex.addAnimation("running", trex_running);
  trex.scale = .5;

  ground = createSprite(300, 200, 600, 20);
  ground.addImage(groundimage);

}

function draw(){
  background("white")
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  trex.velocityY=trex.velocityY+1;
 trex.collide(ground);

  drawSprites();
}
