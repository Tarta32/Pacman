class Fantome {
    x;
    y;
    direction;

    constructor(x,y,direction){
        this.x=x;
        this.y=y;
        this.direction=direction;
    }
    affiche(num){
        let elem = document.createElement("div")
        document.getElementById("pacman").appendChild(elem)
        elem.className = "fantome"+(num % 4)
        elem.style.gridColumnStart = this.x
        elem.style.gridRowStart = this.y
    }

    teleport(){
        if (this.x < 1){
            this.x = 19
        }
        if (this.x > 19){
            this.x = 1
        }
        if (this.y < 1){
            this.y = 22
        }
        if (this.y > 22){
            this.y = 1
        }
    }

    collision(pacman){
        if(pacman.pacman[this.y-1][this.x-1] == 0){
            if (this.direction == 0){
                this.x = this.x-1
           }
           else if (this.direction == 1){
            this.x = this.x+1
           }
           else if(this.direction == 2){
            this.y = this.y-1
           }
       
           else if(this.direction == 3){
            this.y = this.y+1
           }
        }
    }

    deplace(){

        this.direction = getRandomInt(4)
        if(this.direction == 0){
            this.x = this.x+1
        }
        else if (this.direction == 1){
            this.x = this.x-1
        }
        else if(this.direction == 2){
            this.y = this.y+1
        }
    
        else if(this.direction == 3){
            this.y = this.y-1
        }
    }

    loose(mangeur){
        if (this.x == mangeur.x && this.y == mangeur.y){
            setTimeout(() => {
                alert("Asta la vista baby !")
            }, 20);
            
            clearInterval(interval)
        }
    
    }
}