let pacman=[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
[0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
[0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
[0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
[0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
[0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
[2,2,2,2,2,2,2,0,1,1,1,0,2,2,2,2,2,2,2],
[0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
[0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
[0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
[0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
[0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0],
[0,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,0],
[0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
[0,2,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,2,0],
[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
let mangeur={
    x:6,
    y:2,
    direction:0
}

let fantome={
    x:10,
    y:11,
    direction:3
}

let score = 0

document.body.addEventListener("keyup", changeDirection)

let interval = setInterval(tourDeJeu,400)

function afficheGrille(){
    document.getElementById("pacman").innerHTML=""
    for (let i=0; i<22; i++){
    for(let j=0; j<19; j++){
        let elem = document.createElement("div")
        elem.style.gridRowStart = i+1
        elem.style.gridColumnStart = j+1
        document.getElementById("pacman").appendChild(elem)
        if (pacman[i][j] == 0){
            elem.className = "mur";
        }
           else if (pacman[i][j] == 1){
                elem.className = "sol";
            }
                else {
                    elem.className = "bonbon"
                }
        }
            

    }
}

function afficheMangeur(){
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

function afficheFantome(){
    let elem = document.createElement("div")
    document.getElementById("pacman").appendChild(elem)
    elem.className = "fantome"
    elem.style.gridColumnStart = fantome.x
    elem.style.gridRowStart = fantome.y
}

function deplaceMangeur(){
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
function deplaceFantome(){

    fantome.direction = getRandomInt(4)
    if(fantome.direction == 0){
        fantome.x = fantome.x+1
    }
    else if (fantome.direction == 1){
        fantome.x = fantome.x-1
    }
    else if(fantome.direction == 2){
        fantome.y = fantome.y+1
    }

    else if(fantome.direction == 3){
        fantome.y = fantome.y-1
    }
}

function changeDirection(event){
    if (event.code === 'KeyW'){
        mangeur.direction = 3
    }

    else if(event.code === 'KeyS'){
        mangeur.direction = 2
    }
    
    else if(event.code === 'KeyA'){
        mangeur.direction = 1
    }
    else if(event.code === 'KeyD'){
        mangeur.direction = 0
    }
}

function collision(){
    if(pacman[mangeur.y-1][mangeur.x-1] == 0){
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

function collisionFantome(){
    if(pacman[fantome.y-1][fantome.x-1] == 0){
        if (fantome.direction == 0){
            fantome.x = fantome.x-1
       }
       else if (fantome.direction == 1){
            fantome.x = fantome.x+1
       }
       else if(fantome.direction == 2){
            fantome.y = fantome.y-1
       }
   
       else if(fantome.direction == 3){
            fantome.y = fantome.y+1
       }
    }
}

function mangerBonbon(){
    if(pacman[mangeur.y-1][mangeur.x-1] == 2){
        pacman[mangeur.y-1][mangeur.x-1] = 1
        score = score+5
        document.querySelector(".score").innerHTML= score
        }
}

function teleport(){
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

function win(){
    let gagne = true
    for (let i=0; i<22; i++){
        for(let j=0; j<19; j++){
            if(pacman[i][j] == 2){
                gagne = false
            }
        }
    }
    if (gagne){
        alert("Victoire");
        clearInterval(interval)
    }    
}
function tourDeJeu(){
    afficheGrille();
    deplaceFantome();
    collisionFantome();
    afficheFantome();
    deplaceMangeur();
    teleport();
    collision();
    mangerBonbon();
    afficheMangeur();
    setTimeout(win,100);
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }