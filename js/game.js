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
            for(var Plr in playerInfo){
                if(Plr==="Player"+player.index){
                    fill("Red");
                }else{
                    fill(0);
                }
                text(playerInfo[Plr].name+":"+playerInfo[Plr].distance,20,posY);
                posY=posY+50;
            }
        }
        if(keyWentDown(UP_ARROW)){
            player.distance+=50;
            player.update();
        }
    }
}