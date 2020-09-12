
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}


function setup() {
	createCanvas(800, 700);
    
	engine = Engine.create();
	world = engine.world;
	ground= new Ground(400,695,800,20)
    paper= new Paper(100,690,20)
	//Create the Bodies Here.
	dusbinSprite=createSprite(width/2, 80, 10,10);
	dusbinSprite.scale=0.2
    dusbinSprite.shapeColor="red"
	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  drawSprites();
 
}
 function keyPressed(){
 if(keyCode===UP_ARROW){
 Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
 }
 }


