var rectm,rectf;


function setup() {
  createCanvas(800,400);
  rectm = createSprite(200, 200, 50, 50);
  rectm.shapeColor = "red";
  rectf = createSprite(600, 200, 50, 500);
  rectf.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  rectm.velocityX = 5;
  
if (rectm.x- rectf.x<rectm. width/2+rectf.width/2 && 
  rectf.x- rectm.x<rectm. width/2+rectf.width/2 &&
  rectm.y- rectf.y<rectm. height/2+rectf.height/2 &&
  rectf.y- rectm.y<rectm. height/2+rectf.height/2){
  rectf.shapeColor = "blue";
  rectm.shapeColor = "blue";



}
else{
  rectf.shapeColor = "yellow";
  rectm.shapeColor = "yellow";



}



if (rectm.isTouching(rectf)){

rectm.velocityX = 0;

}

  drawSprites();


}