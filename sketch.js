var gameState = "introduction"

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);

  if(gamesState === "introduction"){
    text("Stick Figure Adventure!!!", 0,200)
    
  }
  drawSprites();
}
