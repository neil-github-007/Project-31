const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var maxDrops = 10;

var dropsArray = [];
var umbrella; 
var boy, boyAnimation;
var thunder, thunder2, thunder3, thunder4;

function preload(){
    boyAnimation = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png",
                                "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png");

    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png"); 
    thunder3 = loadImage("3.png"); 
    thunder4 = loadImage("4.png");                             
}

function setup(){
    createCanvas(400, 700);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella();

    boy = createSprite(200, 590, 10, 10);
    boy.addAnimation("walking", boyAnimation);
    boy.scale = 0.3;
}

function draw(){
   background("black");
   
   Engine.update(engine);

    for(var j = 0; j<maxDrops; j++) {
        dropsArray.push(new Drops(random(0,400), random(0, 40)));
        dropsArray[j].display(); 
    }

    spawnThunder();
    drawSprites();
} 

function spawnThunder() {
    if(frameCount % 60 === 0) {
        var rand = Math.round(random(1,4));
        thunder = createSprite(random(10, 370), random(10, 30), 10, 10);

        switch(rand) {
            case 1: thunder.addImage(thunder1);
                break;
            case 2: thunder.addImage(thunder2);
                break;
            case 3: thunder.addImage(thunder3);
                break;
            case 4: thunder.addImage(thunder4);
                break;
            default: break;    
        }
        thunder.scale = random(0.3, 0.6);
        thunder.lifetime = 5;
    }
}

