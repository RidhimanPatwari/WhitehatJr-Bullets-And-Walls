var bullet, speed, weight;
var wall, thickness;
var damage;

function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(223, 321));
  weight = Math.round(random(30, 52));
  thickness = Math.round(random(22, 83));

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = 80, 80, 80;

  bullet = createSprite(50, 200, 50, 5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  
  damage = (0.5 * weight * speed * speed)/ (thickness * thickness * thickness);
}

function draw() {
  background("black");  
  
  // make bullet stop if touching wall

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    if (damage <= 10) {
      wall.shapeColor = "green";
    } else {
      wall.shapeColor = "red";
    }
  }

  drawSprites();
}








function hasCollided(arg0, arg1) {
  arg0RightEdge = arg0.x + arg0.width;
  arg1LeftEdge = arg1.x;
  if (arg0RightEdge >= arg1LeftEdge) {
    return true;
  }
  return false;
}