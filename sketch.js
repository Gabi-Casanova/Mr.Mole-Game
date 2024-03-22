
var backgroundImg


function preload(){
  var backgroundImg = loadImage(".assets/Dirt_ledges-removebg-preview.png");

}


function setup() {
  createCanvas(windowWidth,windowHeight);

  backgroundSprite = createSprite(0, 0, windowWidth, windowHeight);
  backgroundSprite.addImage("bg",backgroundImg);

}

function draw() 
{
  background(41);
  

  drawSprites();
}
