var ball
function setup() {
  createCanvas(1800, 1800);
  ball = createSprite(100,100,25,25)
}

function draw() {
  background("yellow");
  drawSprites()
  if (keyDown(LEFT_ARROW)) {
    ball.x = ball.x + 1
  }
  if (keyDown(RIGHT_ARROW)) {
    ball.x = ball.x - 1
  }
  if (keyDown(UP_ARROW)) {
    ball.y = ball.y + 1
  }
  if (keyDown(DOWN_ARROW)) {
    ball.y = ball.y - 1
  }
}
