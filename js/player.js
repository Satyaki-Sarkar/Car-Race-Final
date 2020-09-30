class Player {
    constructor(){
        this.name="";
        this.distance=0;
        this.index=null;
        this.rank=0;
    }
    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function (data){
            playerCount = data.val();
        });
    }

    readPlayerCountAtEnd(){
        var carsAtEndRef = database.ref("carsAtEnd");
        carsAtEndRef.on("value",function(data){
            carsAtEnd = data.val();
        });
    }

    updateCount(count){
      var store = database.ref("/");
      store.update({
          playerCount : count
      });
    }

    update(){
        var node = "Players/Player" + this.index;
        database.ref(node).set({
            name : this.name,
            distance : this.distance
        });
    }

    updatePlayersAtEnd(){
        var store = database.ref('/');
        store.update({
            carsAtEnd : this.rank
        });
    }

    static getPlayerInfo()
    {
        var playerInfoRef= database.ref("Players");
        playerInfoRef.on("value",function(data)
        {
            playerInfo = data.val();
        });
    }
}