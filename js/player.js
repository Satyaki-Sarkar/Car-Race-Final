class Player {
    constructor(){
        this.name="";
        this.distance=0;
        this.index=null;
    }
    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function (data){
            playerCount = data.val();
        });
    }

    updateCount(count){
      var store = database.ref("/");
      store.update({
          playerCount : count
      })
    }

    update(){
        var node = "Players/Player" + this.index;
        database.ref(node).set({
            name : this.name,
            distance : this.distance
        })
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