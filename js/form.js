//doccument object model (dom)
class Form{
    constructor(){
        this.input = createInput('Input Your Name');
        this.input.position(width/2-50,height/2-100);

        this.button = createButton('Click here to enter');
        this.button.position(width/2-25,height/2+100);

        this.greeting = createElement('H3');
        this.greeting.position((width/2)-50,height/2);
    }

    display(){
        var title = createElement('H1');
        title.html('Car Racing Game');
        title.position(width/2-100,10);

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