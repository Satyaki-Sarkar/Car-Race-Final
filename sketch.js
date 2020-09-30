var gameState=0;
var playerCount=0;
var database;
var game, form, player;
var playerInfo, carsAtEnd;
var car1, car2, car3, car4;
var car1image,car2image,car3image,car4image,groundImage,trackImage;

var cars = [];

function preload()
{
  car1image=loadImage("images/car1.png");
  car2image=loadImage("images/car2.png");
  car3image=loadImage("images/car3.png");
  car4image=loadImage("images/car4.png");
  groundImage=loadImage("images/ground.png");
  trackImage=loadImage("images/track.jpg");
}

function setup()
{
  createCanvas(windowWidth-150,windowHeight-150);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}
    
function draw()
{
  if(playerCount===4 && gameState===0){
    game.updateState(1);
  }

  if(gameState===1){
    clear();
    game.play();
  }

  if(gameState===2){
    game.end();
  }
}