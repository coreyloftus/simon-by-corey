// global variables
let cpuMoves = [1,2]
let playerMoves = [1,2]


// getters & setters
const cpuFirstTile = document.querySelector("#cpu-first-tile")
const cpuSecondTile = document.querySelector("cpu-second-tile")
const cpuThirdTile = document.querySelector("cpu-third-tile")
const cpuFourthTile = document.querySelector("cpuFourthTile")

const playerFirstTile = document.querySelector("#player-first-tile")
const playerSecondTile = document.querySelector("#player-second-tile")
const playerThirdTile = document.querySelector("#player-third-tile")
const playerFourthTile = document.querySelector("#player-fourth-tile")

cpuFirstTile.addEventListener('click', () => {
    console.log(`${this} button clicked`)
 })

 

// testing
// gameRound()

// functions


function gameRound() {
    // computerTurn()
    // playerTurn()
    compareTurns()
}


function computerTurn(){
// notify user that it's the CPU's turn by unhiding CPU text
// generate 4 random numbers and push them into the cpuMoves array
    for (let i=0;i<=3;i++) {
        cpuMoves.push(Math.floor(Math.random()*4)+1)
    }
    for (let i=0;i<=3;i++) {
        console.log(`Computer move ${i+1}: ${cpuMoves[i]}`)
    }
}

function playerTurn(){
// notify user that it's Player's turn by unhiding Player text
    // get inputs based on which buttons are clicked by user
//
}

function compareTurns(){
// compare user moves to CPU's moves
    console.log(`Testing Moves now...`)
    for (let i=0;i<=cpuMoves.length-1;i++) {
        console.log(`Computer ${i+1}: ${cpuMoves[i]} | Player ${i+1}: ${playerMoves[i]}`)
    if (cpuMoves[i] === playerMoves[i]) {
        console.log(`Move ${i+1} matches`)
        continue
    } 
    else {
        console.log(`Game Over`)
        break
        } 
    } console.log(`You win!`)
    console.log(`End of compareTurns function.`)
}