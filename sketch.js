const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    log1=new Log(225+80+30,330,150,PI/2)
    box1 = new Box(200+80+30,350,50,50);
    box2 = new Box(300+80+30,350,50,50);
   
    pig1=new Pig(250+80+30,350)
    
    log2=new Log(250+80+30,290,155,PI/2)
    box3 = new Box(200+80+30,310,50,50);
    box4 = new Box(300+80+30,310,50,50);
    box5 = new Box(250+80+30,260,50,50);
    pig2=new Box(250+80+30,310,50,50)
    log3=new Box (225+80+30,260,50,50)
    log4=new Box(275+80+30,260,50,50)
    pil1=new Box(300,330,40,250)
    pil2=new Box(430,330,40,250)
    ground = new Ground(400,390,800,30)

}

function draw(){
    background("skyblue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    log1.display();
    box1.display();
    box2.display();
    pig1.display();
    ground.display();
    log2.display();
    box3.display();
    box4.display();
    pig2.display();
    log3.display();
    box5.display();
    log4.display();
   pil1.display();
   pil2.display();

}