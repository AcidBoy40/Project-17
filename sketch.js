var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var ground;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation( "run", monkey_running);
monkey.scale = 0.15;
  
ground = createSprite(400,350,900,10);
  
foodGroup = new Group();
obstacleGroup = new Group();

}


function draw() {
background("255");

ground.velocityX = -4;
ground.x = ground.width/2;

monkey.collide(ground);
if(keyDown("space")){
  monkey.velocityY = -12;
}
monkey.velocityY = monkey.velocityY + 0.8;
  
spawnFood();
spawnObstacles();
  
drawSprites();
}

function spawnFood(){
  if(frameCount % 80 === 0){
    var banana  = createSprite(300,300,10,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.09;
    banana.velocityX = -5;
    banana.lifetime = 60;
    foodGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(300,320,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -6;
    obstacle.lifetime = 60;
    obstacleGroup.add(obstacle);
  }
}






