
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball, backgroundImg;
var ground;
var wedge;
var angle=60;
var poly;
var boxes=[];

function preload(){
 backgroundImg = loadImage("background.png")
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var option={
    isStatic:true
  };
  ground=Bodies.rectangle(100,300,400,20,option);
  fill("yellow");
  World.add(world,ground);
  //box1 = new Box(200,100,50,50);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mousePressed(){
  boxes.push(
    new Box(mouseX,mouseY,50,50)
    
    )
}

function draw() 
{
  background(127);
  image(backgroundImg,0,0,width,height);
  rect(ground.position.x,ground.position.y,400,10);
  Engine.update(engine);
 for(var i=0;i<boxes.length;i++) {
 boxes[i].show();}
  
  
}

