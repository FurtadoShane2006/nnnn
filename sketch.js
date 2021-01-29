
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	mango1=new mango(1100,100,30);
	m2=new mango(1200,250,30);
	m3=new mango(1000,100,30);
	m4=new mango(1000,250,30);
	m5=new mango(900,200,30);

	s1=new Stone(120,120);

	ss1=new SlingShot(s1.body,{x:240,y:420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  textSize(20);
  fill("black");
  text("PRESS 'SPACE' TO START AGAIN",30,40);

  treeObj.display();

  mango1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();

  s1.display();

  ss1.display();

  groundObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(s1.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
	ss1.fly();
}

function keyPressed(){
	if(keyCode===32){
		ss1.comeBack(s1);
	}
}