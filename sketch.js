var moving, fixed

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor = "yellow";

  moving = createSprite(500,200,60,30);
  moving.shapeColor = "blue";
}

function draw() {
  background(0);
  
  moving.x = mouseX
  moving.y = mouseY
  console.log(moving.x - fixed.x)

  if(moving.x - fixed.x < fixed.width/2 + moving.width/2 && fixed.x - moving.x < fixed.width/2 + moving.width/2
    && moving.y - fixed.y < fixed.height/2 + moving.height/2 && fixed.y - moving.y < fixed.height/2 + moving.height/2){
    moving.shapeColor = "red";
  }
  else{
    moving.shapeColor = "blue";
  }
  drawSprites();
}