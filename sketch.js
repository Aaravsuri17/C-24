const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    bird = new Bird(10,10)
    box1 = new Box(700,350,70,70);
    box2 = new Box(900,350,70,70);
    pig1 = new Pig(800,350)
    log1 = new Log(800,280,280,PI/2)
    box3 = new Box(700,260,70,70);
    box4 = new Box(900,260,70,70);
    pig2 = new Pig(800,260)
    log2 = new Log(800,240,280,PI/2)
    box5 = new Box(800,180,70,70)
    log3 = new Log(770,150,140,PI/8)
    log4 = new Log(830,150,140,-PI/8)
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    bird.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
    ground.display();
}