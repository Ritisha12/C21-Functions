var movingrect,fixedrect
var ball1,ball2
function setup() {
  createCanvas(1400,600);
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor="pink"
  
  fixedrect=createSprite(500,450,50,50)
  fixedrect.shapeColor="pink"
  ball1=createSprite(500,500,25,25)
  ball1.shapeColor="white"
  ball2=createSprite(800,300,25,25)
  ball2.shapeColor="black"
}

function draw() {
  background("lightblue"); 
  //movingrect.x=mouseX
  //movingrect.y=mouseY
  ball1.x=mouseX
  ball1.y=mouseY
  if(isTouching(ball1,ball2)){
    ball1.shapeColor="green"
    ball2.shapeColor="green"
  }
  else{
  ball1.shapeColor="white"
  ball2.shapeColor="black"
  }
  if(isTouching(ball1,fixedrect)){
  text("ball1.isTouching fixedrect",300,300)
  }
  if(isTouching(movingrect,fixedrect)){
    movingrect.shapeColor="purple"
    fixedrect.shapeColor="purple"
  }
  else{
    movingrect.shapeColor="pink"
    fixedrect.shapeColor="pink"
  }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    &&object2.x-object1.x<object2.width/2+object1.width/2
    &&object1.y-object2.y<object2.height/2+object1.height/2
    &&object2.y-object1.y<object2.height/2+object1.height/2){
    return true
  }
  else{
   return false
   }
}