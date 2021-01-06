const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, ground2;
var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var box21, box22, box23, box24, box25;

function preload(){
   polygonImg=loadImage("polygon.png");
}

function setup() {
    createCanvas(2000, 800);
     engine = Engine.create();
     world = engine.world;
    
     // Block - 1
     ground1 = new Ground(900, 750, 550, 15);
     // Level - 1
     box1 = new Box(655, 650 ,60, 80);
     box2 = new Box(715, 650, 60, 80);
     box3 = new Box(775, 650, 60, 80);
     box4 = new Box(835, 650, 60, 80);
     box5 = new Box(895, 650, 60, 80);
     box6 = new Box(955, 650, 60, 80);
     box7 = new Box(1015, 650 ,60, 80);
     box8 = new Box(1075, 650, 60, 80);
     box9 = new Box(1135, 650, 60, 80);
     // Level - 2
     box10 = new Box(715, 600 ,60, 80);
     box11 = new Box(775, 600 ,60, 80);
     box12 = new Box(835, 600 ,60, 80);
     box13 = new Box(895, 600 ,60, 80);
     box14 = new Box(955, 600 ,60, 80);
     box15 = new Box(1015, 600 ,60, 80);
     box16 = new Box(1075, 600 ,60, 80);
     // Level - 3
     box17 = new Box(775, 550 ,60, 80);
     box18 = new Box(835, 550 ,60, 80);
     box19 = new Box(895, 550 ,60, 80);
     box20 = new Box(955, 550 ,60, 80);
     box21 = new Box(1015, 550 ,60, 80);
     // Level - 4
     box22 = new Box(835, 450 ,60, 80);
     box23 = new Box(895, 450 ,60, 80);
     box24 = new Box(955, 450 ,60, 80);
     // Level - 5
     box25 = new Box(895, 400, 60, 80);



     // Block - 2
     ground2 = new Ground(1600, 400, 320, 15);
     // Level - 1
     box26 = new Box(1470, 360, 60, 80);
     box27 = new Box(1530, 360, 60, 80);
     box28 = new Box(1590, 360, 60, 80);
     box29 = new Box(1650, 360, 60, 80);
     box30 = new Box(1710, 360, 60, 80);
     // Level - 2
     box31 = new Box(1530, 300, 60, 80);
     box32 = new Box(1590, 300, 60, 80);
     box33 = new Box(1650, 300, 60, 80);
     // Level - 3
     box34 = new Box(1590, 240, 60, 80);

  ball = Bodies.circle(80,530,20);
  slingshot = new SlingShot(this.ball,{x:200,y:300});
  
  World.add(world,ball);

     Engine.run(engine);
}
function draw() {
    background(0); 
    rectMode(CENTER);
    Engine.update(engine);
     // Block - 1
     ground1.display();
     // Level - 1
     fill("lightblue");
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     // Level - 2
     fill("lightpink");
     box10.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
     box15.display();
     box16.display();
     // Level - 3
     fill("lightgreen");
     box17.display();
     box18.display();
     box19.display();
     box20.display();
     box21.display();
     // Level - 4
     fill("white");
     box22.display();
     box23.display();
     box24.display();
     // Level - 5
     fill("red")
     box25.display();



     // Block - 2
     ground2.display();
     // Level - 1
     fill("lightgreen");
     box26.display();
     box27.display();
     box28.display();
     box29.display();
     box30.display();
     // Level - 2
     fill("lightpink")
     box31.display();
     box32.display();
     box33.display();
     // Level - 3
     fill("yellow");
     box34.display();
  

     imageMode(CENTER)
     image(polygonImg ,ball.position.x,ball.position.y,150,150);

}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32){
      slingshot.attach(this.ball);  
  }
}