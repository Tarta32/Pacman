class Pacman{
    pacman
    constructor(){
        this.pacman=[
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
            ]
    }
   

        affiche(){
            document.getElementById("pacman").innerHTML=""
            for (let i=0; i<22; i++){
            for(let j=0; j<19; j++){
                let elem = document.createElement("div")
                elem.style.gridRowStart = i+1
                elem.style.gridColumnStart = j+1
                document.getElementById("pacman").appendChild(elem)
                if (this.pacman[i][j] == 0){
                    elem.className = "mur";
                }
                   else if (this.pacman[i][j] == 1){
                        elem.className = "sol";
                    }
                        else {
                            elem.className = "bonbon"
                        }
                }
                    
        
            }
        }

}
