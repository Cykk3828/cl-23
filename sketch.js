const Engine=Matter.Engine
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,box1,box2,ground;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
 
 world=engine.world;
 box2=new Box(175,180,50,50);
 box1=new Box(200,100,50,50);
 ground=new Ground(200,380,400,20);
}

function draw() {
  background("black");
Engine.update(engine);
   ground.display();   
box2.display();
  box1.display();
}