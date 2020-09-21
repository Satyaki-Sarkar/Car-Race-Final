//doccument object model (dom)
class Form{
    constructor(){
        this.input = createInput('Input Your Name');
        this.input.position(490,80);

        this.button = createButton('Click here to enter');
        this.button.position(490,480);

        this.greeting = createElement('H3');
        this.greeting.position(490,250);
    }

    display(){
        var title = createElement('H1');
        title.html('Car Racing Game');
        title.position(470,20);

        this.button.mousePressed(() =>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index=playerCount;

            player.updateCount(playerCount);
            player.update();

            this.greeting.html("Hi " + player.name);
        });  
    }

    hide(){
        this.greeting.hide();
    }

}