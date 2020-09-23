var gameState=0;
var playerCount=0;
var database;
var game, form, player;
var playerInfo;
var car1, car2, car3, car4;

var cars = [];

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
  if(playerCount===4){
    game.updateState(1);
  }

  if(gameState===1){
    clear();
    game.play();
  }
}