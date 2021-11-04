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

let tableFantome=[{
    x:10,
    y:11,
    direction:3
}]


let score = 0

let pacman2 = JSON.parse(JSON.stringify(pacman))
let tableFantome2 = JSON.parse(JSON.stringify(tableFantome))

document.body.addEventListener("keyup", changeDirection)
document.querySelector(".rejouer").addEventListener("click",rejouer)
document.querySelector("#nb_fantome").addEventListener("click",nb_fantome)

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

function nb_fantome(){
    let nb = document.querySelector(".nb_fantome").value
    tableFantome=[]
    mangeur.x = 6
    mangeur.y = 2
    mangeur.direction = 0
    pacman = JSON.parse(JSON.stringify(pacman2))
    score = 0


    for (let i = 0 ; i < nb ; i++ ){
        tableFantome.push({
            x:10,
            y:11,
            direction:3
        })
    }
    
}

function afficheFantome(num){
    let elem = document.createElement("div")
    document.getElementById("pacman").appendChild(elem)
    elem.className = "fantome"+(num % 4)
    elem.style.gridColumnStart = tableFantome[num].x
    elem.style.gridRowStart = tableFantome[num].y
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
function deplaceFantome(num){

    tableFantome[num].direction = getRandomInt(4)
    if(tableFantome[num].direction == 0){
        tableFantome[num].x = tableFantome[num].x+1
    }
    else if (tableFantome[num].direction == 1){
        tableFantome[num].x = tableFantome[num].x-1
    }
    else if(tableFantome[num].direction == 2){
        tableFantome[num].y = tableFantome[num].y+1
    }

    else if(tableFantome[num].direction == 3){
        tableFantome[num].y = tableFantome[num].y-1
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

function collisionFantome(num){
    if(pacman[tableFantome[num].y-1][tableFantome[num].x-1] == 0){
        if (tableFantome[num].direction == 0){
            tableFantome[num].x = tableFantome[num].x-1
       }
       else if (tableFantome[num].direction == 1){
        tableFantome[num].x = tableFantome[num].x+1
       }
       else if(tableFantome[num].direction == 2){
        tableFantome[num].y = tableFantome[num].y-1
       }
   
       else if(tableFantome[num].direction == 3){
        tableFantome[num].y = tableFantome[num].y+1
       }
    }
}

function mangerBonbon(){
    if(pacman[mangeur.y-1][mangeur.x-1] == 2){
        pacman[mangeur.y-1][mangeur.x-1] = 1
        score = score+5
        document.querySelector(".score").innerHTML= score*tableFantome.length
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

function teleportFantome(num){
    if (tableFantome[num].x < 1){
        tableFantome[num].x = 19
    }
    if (tableFantome[num].x > 19){
        tableFantome[num].x = 1
    }
    if (tableFantome[num].y < 1){
        tableFantome[num].y = 22
    }
    if (tableFantome[num].y > 22){
        tableFantome[num].y = 1
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

function rejouer(){
    pacman = JSON.parse(JSON.stringify(pacman2))
    tableFantome = JSON.parse(JSON.stringify(tableFantome2))
    mangeur.x = 6
    mangeur.y = 2
    mangeur.direction = 0
    score = 0
    clearInterval(interval)
    interval = setInterval(tourDeJeu,400);
}

function loose(num){
    if (tableFantome[num].x == mangeur.x && tableFantome[num].y == mangeur.y){
        setTimeout(() => {
            alert("Perdu")
        }, 20);
        
        clearInterval(interval)
    }

}
function tourDeJeu(){
    afficheGrille();
    deplaceMangeur();
    teleport();
    collision();
    mangerBonbon();
    afficheMangeur();
    for(i = 0; i < tableFantome.length; i++){
        loose(i);
        deplaceFantome(i); 
        collisionFantome(i);
        teleportFantome(i);
        afficheFantome(i);
        loose(i);
       
        
    }
    
    setTimeout(win,100);
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }