const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, myworld;
var object;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    myworld = engine.world;
    var options = {
        isStatic: true
    }
    object = Bodies.rectangle(200,200,50,50,options);
   
    World.add(myworld, object);
}

function draw(){
    background(0);
    Engine.update(engine);
 
    rectMode(CENTER);
    fill(255);
    rect(object.position.x, object.position.y, 50, 50);
}