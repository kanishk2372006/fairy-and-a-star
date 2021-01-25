var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	engine=Engine.create();
	world= engine.world;
	createCanvas(800, 750);

	// fairyVoice.play();
	var Option = {
		isStatic:true
	  }
fairy=Bodies.rectangle(130, 520,20,10,Option);
World.add(world,fairy)

var options={
isStatic:true
}
	star = Bodies.circle(650,30,5,options);
	World.add(world,star)
	
	

	
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);

	Engine.run(engine);

}


function draw() {
	Engine.update(engine);
  background(bgImg);
  
rect(fairy.position.x,fairy.position.y,20,10)
ellipse(starBody.position.x,starBody.position.y,30);
ellipse(star.position.x,star.position.y,30);
keyPressed();
fairy.position.x=mouseX
if(fairy.position.x<650){
	starBody :isStatic=false
 
		



}
  drawSprites();

}

function keyPressed() {



}
