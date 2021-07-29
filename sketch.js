var box=createsprite(200,200,10,10);

function setup() {
  createCanvas(400,400);
var box= createsprite(200,200,10,10);
box.scale = 0.5;
}

function draw() 
{
  background(30);
}

if(keyIsDown(DOWN_ARROW))
{
  background ('blue')
}

if(keyIsDown(RIGHT_ARROW))
{
  background ('green')
}

if (keyIsDown(LEFT_ARROW))
{
  background('red')
}

if(keyIsDown(UP_ARROW))
{
  background('yellow')
}

drawSprite()