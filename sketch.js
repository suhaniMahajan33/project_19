var sky,skyImg;
var rocket,rocketImg;
var rock,rockImg;

function preload(){
skyImg=loadImage("sky.png");
rocketImg=loadImage("rocket.png");
rockImg=loadImage("rock.png");
}

function setup() {
createCanvas(600,600);

 sky=CreateSprite(300,300,4,4);
 sky.addImage(skyImg);

 rocket=CreateSprite(300,50,);
 rocket.addImage(rocketImg);
}


function draw() {
 background(0);
 sky.velocityY = 3 
   if (sky.y < 0){
      sky.x = sky.width/2;
    }

    rocket.x = World.mouseX

drawSprites();

}

function createRocks(){
    var rock = createSprite(0,Math.round(random(20, 370)), 10, 10);
    rock.addImage(rockImg);
    rock.velocityY= 3;
    rock.lifetime = 150;
    rock.scale = 0.1;
    redB.add( red );

}