class Mangeur {
    x;
    y;
    direction

    constructor (x,y,direction){
        this.x=x;
        this.y=y;
        this.direction=direction;
    }

    affiche(){
        let elem = document.createElement("div")
        document.getElementById("pacman").appendChild(elem)
        elem.className = "mangeur"
        elem.style.gridColumnStart = mangeur.x
        elem.style.gridRowStart = mangeur.y
        if (mangeur.direction == 0){
            elem.style.transform = "rotate(0deg)"
       }
       else if (mangeur.direction == 1){
            elem.style.transform = "rotate(180deg)"
       }
       else if(mangeur.direction == 2){
            elem.style.transform = "rotate(90deg)"
       }
    
       else if(mangeur.direction == 3){
            elem.style.transform = "rotate(270deg)"
       }
    
    }

    deplace(){
        if (mangeur.direction == 0){
             mangeur.x = mangeur.x+1
        }
        else if (mangeur.direction == 1){
            mangeur.x = mangeur.x-1
        }
        else if(mangeur.direction == 2){
            mangeur.y = mangeur.y+1
        }
    
        else if(mangeur.direction == 3){
            mangeur.y = mangeur.y-1
        }
    
    }

    teleport(){
        if (mangeur.x < 1){
            mangeur.x = 19
        }
        if (mangeur.x > 19){
            mangeur.x = 1
        }
        if (mangeur.y < 1){
            mangeur.y = 22
        }
        if (mangeur.y > 22){
            mangeur.y = 1
        }
    }

    collision(pacman){
        if(pacman.pacman[mangeur.y-1][mangeur.x-1] == 0){
            if (mangeur.direction == 0){
                mangeur.x = mangeur.x-1
           }
           else if (mangeur.direction == 1){
               mangeur.x = mangeur.x+1
           }
           else if(mangeur.direction == 2){
               mangeur.y = mangeur.y-1
           }
       
           else if(mangeur.direction == 3){
               mangeur.y = mangeur.y+1
           }
        }
    }

    mangerBonbon(pacman){
        if(pacman.pacman[mangeur.y-1][mangeur.x-1] == 2){
            pacman.pacman[mangeur.y-1][mangeur.x-1] = 1
            score = score + 5*(tableFantome.length)
            document.querySelector(".score").innerHTML= score
            }
    }

}

