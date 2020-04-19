const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var option={
        restitution:1.0
    }
ball=Bodies.circle(200,200,30,option)
    var ground_options ={
        isStatic: true
    }
    ball1=Bodies.rectangle(300,100,40,40,option)

   World.add(world,ball1)

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    World.add(world,ball)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER)
    fill ("white")
    rect(ground.position.x,ground.position.y,400,20);
    circle(ball.position.x,ball.position.y,30)
    rect(ball1.position.x,ball1.position.y,40,40)

}