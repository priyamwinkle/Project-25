const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var trash1,paper,ground,barrier1,barrier2;

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//trash1=new Dustbin(1500,610,20,100);
	trash1=new Dustbin(1610,600,200,20);
	//trash3=new Dustbin(1720,610,20,100);
	paper=new Paper(50,650,30);
	ground=new Ground(1000,680,2000,20);
	barrier1=new Barrier(1680,550,20,200);
	barrier2=new Barrier(1530,600,20,200);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

 
  //trash2.display();
  //trash3.display();
  barrier1.display();
  barrier2.display();
  paper.display();
  trash1.display();
  ground.display();
 
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:220,y:-220});
	}
}




