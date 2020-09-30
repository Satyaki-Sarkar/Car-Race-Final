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
            car1.addImage("Car1",car1image);
            car2 = createSprite(width/2-100,300,10,10);
            car2.addImage("Car2",car2image);
            car3 = createSprite(width/2+100,300,10,10);
            car3.addImage("Car3",car3image);
            car4 = createSprite(width/2+300,300,10,10);
            car4.addImage("Car4",car4image);
            cars = [car1,car2,car3,car4];
        }
    }

    play(){
        form.hide();
        textSize(20);
        fill("Black");
        text("Game Started",20,20);
        Player.getPlayerInfo();
        player.readPlayerCountAtEnd();

        if(keyWentDown(UP_ARROW)){
            player.distance+=50;
            player.update();
        }

        if(playerInfo!==undefined){
            var posY=50;
            var carIndex = 0;
            background(groundImage);
            image(trackImage,0,-height*4,width,height*5);
            for(var Plr in playerInfo){
                posY = windowHeight-150 - playerInfo[Plr].distance;
                cars[carIndex].y=posY;
                if(Plr==="Player"+player.index){
                    fill("Red");
                    ellipse(cars[carIndex].x,cars[carIndex].y,80,80);
                    camera.position.x=width/2;
                    camera.position.y=cars[carIndex].y+10;
                }else{
                    cars[carIndex].shapeColor="Blue";
                }
                carIndex+=1;
            }
        }

        if(player.distance>=3350){
            player.rank=carsAtEnd + 1;
            player.updatePlayersAtEnd();
            gameState=2;
        }

        drawSprites();
    }

    end(){
        // textSize(20);
        // fill("White");
        // text("GAME OVER",windowWidth/2,-windowHeight*4+50);
        // text(player.rank,windowWidth/2,-windowHeight*4);
        var gameOver = createElement("H1");
        gameOver.position((width/2)-50,height/2);
        gameOver.html("GAME OVER");
        var rank = createElement("H1");
        rank.position((width/2)-50,height/2+50);
        rank.html(player.rank);

    }
}