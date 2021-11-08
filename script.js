let pacman= new Pacman()

let mangeur= new Mangeur(6,2,0)

let tableFantome=[new Fantome(10,11,3)]


let score = 0

let pacman2 = JSON.parse(JSON.stringify(pacman))
let tableFantome2 = JSON.parse(JSON.stringify(tableFantome))

document.body.addEventListener("keyup", changeDirection)
document.querySelector(".rejouer").addEventListener("click",rejouer)
document.querySelector("#nb_fantome").addEventListener("click",nb_fantome)

let interval = setInterval(tourDeJeu,400)

function nb_fantome(){
    let nb = document.querySelector(".nb_fantome").value
    tableFantome=[]
    mangeur.x = 6
    mangeur.y = 2
    mangeur.direction = 0
    pacman = new Pacman()
    score = 0


    for (let i = 0 ; i < nb ; i++ ){
        tableFantome.push(new Fantome(10,11,3))
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
function win(){
    let gagne = true
    for (let i=0; i<22; i++){
        for(let j=0; j<19; j++){
            if(pacman.pacman[i][j] == 2){
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
    pacman = new Pacman()
    tableFantome=[]
    for (i=0; i < tableFantome2.length; i++){
        tableFantome.push(new Fantome(10,11,0))
    }
    mangeur.x = 6
    mangeur.y = 2
    mangeur.direction = 0
    score = 0
    clearInterval(interval)
    interval = setInterval(tourDeJeu,400);
}
function tourDeJeu(){
    pacman.affiche();
    mangeur.deplace();
    mangeur.teleport();
    mangeur.collision(pacman);
    mangeur.mangerBonbon(pacman);
    mangeur.affiche();
    for(i = 0; i < tableFantome.length; i++){
        tableFantome[i].loose(mangeur);
        tableFantome[i].deplace(); 
        tableFantome[i].collision(pacman);
        tableFantome[i].teleport();
        tableFantome[i].affiche(i);
        tableFantome[i].loose(mangeur);
       
        
    }
    setTimeout(win,100);   
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }