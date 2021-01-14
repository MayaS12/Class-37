class Form {
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
        this.title = createElement("h2");
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        this.title.html("Car Racing Game!");
        this.title.position(515,100);
        this.input.position(530,300);
        this.button.position(585,350);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCountP = playerCountP+1;
            player.index = playerCountP;
            player.updateCount(playerCountP);
            player.update();

            this.greeting.html("Hello "+player.name);
            this.greeting.position(550,300);
        })
    }
}