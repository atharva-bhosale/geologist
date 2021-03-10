
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var platform
var hammer
var rubber
var stone
var iron
var sand1
var sand2
var sand3
var sand4


function preload()
{
	
}

function setup() {
	createCanvas(800, 550);
  fill(255);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  hammer1=new Hammer(200,200,80,20);

  rubber=new Rubber(200,50,80);

	stone=new Stone(400,200,40,40);

	iron=new Iron(600,50,60,30);

  sand1=new Sand(600,50,10);

	sand2=new Sand(620,50,10);

	sand3=new Sand(640,50,10);

	sand4=new Sand(660,50,10);

  platform=Bodies.rectangle(400, 550, 800, 40 , {isStatic:true} );
  World.add(world,platform);
 // platform.shapeColor="red";




 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
 // hammer1.x=mouseX;
 // hammer1.y=mouseY;
  
  
  

  //hammer.display();
  //platform.display();
  hammer1.display();
  rubber.display();
  stone.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();

  drawSprites();
  
}



