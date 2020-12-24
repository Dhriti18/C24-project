
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
function preload()
{
	
}

function setup() {
	createCanvas(800,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Box1=new Dustbin(450,420,20,120);
Box2=new Dustbin(700,420,20,120);
Box3=new Dustbin(575,470,270,20);
Ground=new Dustbin(400,480,800,10);

paper2=new Circle(100,200,70);
console.log(paper2);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Box1.display();

  Box2.display();
  Box3.display();
  Ground.display();

  paper2.display();
  drawSprites();
 
}function keyPressed(){
if(keyCode===UP_ARROW){

  Matter.Body.applyForce(paper2.body, paper2.body.position, {x:170,y:-170});

}

}



