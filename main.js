let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;
window.addEventListener("load", function(){
    setGame();
})

function setGame(){
    for(i = 0; i < 9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.querySelector("#board").appendChild(tile);
        tile.addEventListener("click", selectTile);
    }
    setInterval(setMole,1000);
    setInterval(setPlant,2000)
}

function getRandomTile(){
    let num = Math.floor(Math.random()*9);
    return num;
}

function setMole(){
    if (gameOver){
        return;
    }
    if (currMoleTile){
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png"

    let num = getRandomTile();

    if(currPlantTile && currPlantTile.id == num){
        return;
    }

    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant(){
    if(gameOver){
        return
    }
    if(currPlantTile){
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num  = getRandomTile();
    if(currMoleTile && currMoleTile.id == num){
        return;
    }
    
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameOver){
        return;
    }
    if(this == currMoleTile){
        score += 10;
        document.querySelector("#score").innerText = `Your Score: ${score.toString()}`;
    }else if(this == currPlantTile){
        document.querySelector("#board").innerHTML = `<h1>GAME OVER</h1>`
        //document.querySelector("#score").innerText = `GAME OVER: ${score.toString()}`;
        gameOver = true;
    }
}