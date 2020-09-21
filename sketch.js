var gameState=0;
var playerCount=0;
var database;
var game, form, player;
var playerInfo;

function setup()
{
  createCanvas(500,500);

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