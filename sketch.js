
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var life=3
var score1=0
var gameState="start"
function preload()
{
bgimg=loadImage("bg3.png")	
jungle=loadImage("jungle1.jpg")
}

function setup() {
	createCanvas(displayWidth,displayHeight);


	engine = Engine.create();
    
    world = engine.world;
    bg1=createSprite(displayWidth/2,displayHeight/2,displayWidth*2,displayHeight)
    bg1.addImage(bgimg)
    bg1.velocityX=-1
    bg1.scale=4
    // bg2=createSprite(displayWidth/2,displayHeight/2,displayWidth*2,displayHeight)
    // bg2.addImage(jungle)
    
    // bg2.visible=false
	//Create the Bodies Here.
player1=createSprite(50,height-100,50,50)
ground=createSprite(displayWidth/2,displayHeight,displayWidth,20)
  Engine.run(engine);
  obstacleg=new Group()
 
}


function draw() {
  rectMode(CENTER);
  if (gameState==="start"){
background(0)
textSize(50)
fill("white")
text("DAYZ AFTER",displayWidth/2-200,displayHeight/2)
textSize(30)
text("press ENTER to start the game",width/2-250,height/2+50)
if (keyDown("enter")){
  gameState="city"
}
  }
  if (gameState==="city"){

  
  background(0);
  if(bg1.x<0){
      bg1.x=width/2
  }
//   if(keyDown(LEFT_ARROW)){
//       player1.x=player1.x-5
//   }
//   if(keyDown(RIGHT_ARROW)){
//     player1.x=player1.x+5
// }
if(keyDown("space")&& player1.y >=730){
    player1.velocityY=-10
}
player1.velocityY= player1.velocityY+0.5
player1.collide(ground)
obstacle()
  drawSprites();
  score1=score1+Math.round(getFrameRate()/60)
 textSize(20)
 fill("white")
  text("Life:"+life,width-250,50)
 
   text("Distance:"+score1,width-250,100)
if(obstacleg.isTouching(player1)){
  life=life-1
  obstacleg.destroyEach()
}
 if (life===0){
   gameState="end"
 }
 if (score1=500){
   gameState="jungle"
 }
}
if (gameState==="end"){
  background(0)
  clear()
  textSize(50)
  text("GAME OVER!!",width/2-200,height/2)
  textSize(30)
  text("PRESS R to restart",width/2-170,height/2+100)
  if (keyDown("r")){
    gameState="start"
  }
}
// if (gameState==="jungle"){
//   clear()
//   bg2.visible=true
//   bg2.velocityX=-1
//   if(bg2.x<0){
//     bg2.x=width/2
// }
// drawSprites()
// }

}
function obstacle(){
  if (frameCount%100===0){
    obs=createSprite(displayWidth,height-30,50,50)
    obs.velocityX=-(5+frameCount/60)
    obstacleg.add(obs)
  }

}


