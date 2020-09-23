class Game {
    constructor(){
    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function (data){
            gameState = data.val();
        });
    }

    updateState(state){
      var store = database.ref("/");
      store.update({
          gameState : state
      })
    }

    start(){
        if(gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
            car1 = createSprite(width/2-300,300,10,10);
            car2 = createSprite(width/2-100,300,10,10);
            car3 = createSprite(width/2+100,300,10,10);
            car4 = createSprite(width/2+300,300,10,10);
            cars = [car1,car2,car3,car4];
        }
    }

    play(){
        form.hide();
        textSize(20);
        fill("Black");
        text("Game Started",20,20);
        Player.getPlayerInfo();
        if(playerInfo!==undefined){
            var posY=50;
            var carIndex = 0;
            for(var Plr in playerInfo){
                posY = windowHeight-150 - playerInfo[Plr].distance;
                cars[carIndex].y=posY;
                if(Plr==="Player"+player.index){
                    cars[carIndex].shapeColor="Red";
                    camera.position.x=width/2;
                    camera.position.y=cars[carIndex].y+10;
                }else{
                    cars[carIndex].shapeColor="Blue";
                }
                carIndex+=1;
            }
        }
        if(keyWentDown(UP_ARROW)){
            player.distance+=50;
            player.update();
        }

        drawSprites();
    }
}