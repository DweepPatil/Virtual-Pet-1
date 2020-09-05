var dog,dogImg,HdogImg,food,foodstock;
var database;
var button;


function preload()
{
 dogImg=loadImage("images/dog.png");
 HdogImg=loadImage("images/happyDog.png");
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250);
  dog.scale=0.5;
  dog.addImage(dogImg);

  
  
  database=firebase.database();

  foodstock=new Food();
  button=new Button();
  
}


function draw() {  
  background(123,234,224);
  textSize(30);
  fill("black");
  
  drawSprites();
 
  
  foodstock.getFood();
  if(food!==undefined){
  text("Food remaining: "+food,50,50);
  }
  if(food!==undefined){
  button.display();
  }
  
if(food!==undefined){
  fill("blue");
  stroke("green");
  textSize("30");
  text("Press Up arrow to feed your Pet!",300,400,200,200);
}
}
function keyPressed(){
if(keyCode===38){
 
  foodstock.updateFood(food-1);
  if(food!==0){
  dog.addImage(HdogImg);
  
  setTimeout(()=>(dog.addImage(dogImg)),1000)
  
  }
  
}
}



