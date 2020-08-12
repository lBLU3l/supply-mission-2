var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, side1, side2, bottom, bb, ss, ss2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottom = createSprite(400,height-50,200,20);
	bottom.shapeColor = ("red");

	side1 = createSprite(290, height-90,20,100);
	side1.shapeColor = ("red");

	side2 = createSprite(490, height-90,20,100);
	side2.shapeColor = ("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.1, isStatic:true});
	World.add(world, packageBody);
	
	ss = Bodies.rectangle(290, height-90,20,100,{isStatic:true})
	World.add(world, ss);
	
	ss2 = Bodies.rectangle(490, height-90,20,100,{isStatic:true})
	World.add(world, ss2);
	
	bb = Bodies.rectangle(400,height-50,200,20, {isStatic:true});
	World.add(world, bb);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  bottom.x= bb.position.x;
  bottom.y= bb.position.y;
  side1.x =ss.position.x;
  side1.y= ss.position.y;
  side2.x =ss2.position.x;
  side2.y= ss2.position.y;
  KeyPressed();
  drawSprites();
 
}

function KeyPressed() {
 if (keyDown (DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



