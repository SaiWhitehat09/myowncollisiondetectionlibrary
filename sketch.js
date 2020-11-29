var fixedRect, movingRect,go1,go2,go3,go4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  go1 = createSprite(100,200,50,50);
  go1.shapeColor = "green";
  go1.debug = true;
  go2 = createSprite(100,300,50,50);
  go2.shapeColor = "green";
  go2.debug = true;
  go3 = createSprite(400,400,50,50);
  go3.shapeColor = "green";
  go3.debug = true;
  go4 = createSprite(200,200,50,50);
  go4.shapeColor = "green";
  go4.debug = true;


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (collisionCheck(movingRect,go2)){
    go2.shapeColor="red"
  movingRect.shapeColor="red"
  }
  else{
    go2.shapeColor="green"
    movingRect.shapeColor="green" 
  }
  drawSprites();
 
}

