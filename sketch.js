//Create variables here
var dog,happyDog,dogImage,happyDoyImage,foodS,foodStock;
var database;

function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png");
  happyDogImage=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);

  dog=createSprite(250,250,10,10);
  dog.addImage(dogImage);
  
  
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImage);
}
text("food remaining:"+foodS,200,220);
text("press up arrow to fed the dog",200,100);
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}



