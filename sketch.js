//namespacing
const Engine=Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var engine, world

var object

function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world= engine.world

  
 /* var ground_options={
    isStatic: true
  }
  ground=Bodies.rectangle(400,380,800,20,ground_options)
  World.add(world,ground)*/

  ground= new Ground(400, 390,800, 20);
  
  box1=new Box(250,250,60,60);
  box2=new Box(270,140,60,80)
}

function draw() {
  background(255,255,255);  
  //refreshing the physical properties.
  Engine.update(engine)
  rectMode(CENTER)
  
  //body
  //rect(object.position.x, object.position.y, 50,50)
  /*rect(ground.position.x, ground.position.y, 800,20)*/
  ground.display();
  
  box1.display();
  box2.display();
}



