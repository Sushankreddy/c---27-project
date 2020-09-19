
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var floor1;
var bob1,bob2,bob3,bob4,bob5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 =new bob1(310,450,20);
	bob2 = new bob1(310,450,20);
	bob3 = new bob1(310,450,20);
	bob4 = new bob1(310,450,20);
	bob5 = new bob1(310,450,20);
	


	 floor1_options = {
		isStatic: true
	}

	this.body = Bodies.rectangle(400,300,200,50,floor1_options);
	World.add(world,floor1);


	Engine.run(engine); 
 
}


function draw() {
  rectMode(CENTER);
  background(0);
circle(400,350,50);

line(floor1.x,fllor1.y,bob1.x,bob1.y);
line(floor1.x,fllor1.y,bob2.x,bob2.y);
line(floor1.x,fllor1.y,bob2.x,bob3.y);
line(floor1.x,fllor1.y,bob2.x,bob4.y);
line(floor1.x,fllor1.y,bob2.x,bob5.y);

  drawSprites();
 
}



