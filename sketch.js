
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,690,1600,20);
	base1 = new Ground(890, 545, 350,10);
	box1 = new Box(890,445, 40,60);
	box2 = new Box(850, 445, 40,60);
	box3 = new Box(810, 445, 40,60);
	box4 = new Box(770, 445, 40,60);
	box5 = new Box(930,445,40,60);
	box6 = new Box(970, 445, 40,60);
	box7 = new Box(1010, 445, 40,60); 
	box8 = new Box(890, 345, 40,60);
	box9 = new Box(850, 345, 40,60);
	box10 = new Box(810, 345,40,60);
	box11 = new Box(930, 345,40,60);
	box12 = new Box(970, 345,40,60);
	box13 = new Box(890, 245, 40,60);
	box14 = new Box(850,245,40,60);
	box15 = new Box(930,245,40,60);
	box16 = new Box(890,145,40,60);
	polygon = new Polygon(200,200,50,50);

	slingShot = new SlingShot(polygon.body, {x:200, y: 525});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  background(0);

  ground.display();
  base1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display(); 
  box13.display();
  box14.display();
  box15.display(); 
  box16.display();
  polygon.display();

 
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	slingShot.fly();
}



