// global variables
let cpuMoves = [1,2,3,4]
let playerMoves = [1,2,3,4]

// getters & setters


// testing
gameRound()

// functions
function gameRound() {
// computerTurn()
// playerTurn()
compareTurns()
}

function computerTurn(){
    for (let i=0;i<=3;i++) {
        cpuMoves.push(Math.floor(Math.random()*4)+1)
    }
    for (let i=0;i<=3;i++) {
        console.log(`Computer move ${i+1}: ${cpuMoves[i]}`)
    }
}

function playerTurn(){
    for (let i=0;i<=3;i++) {
        playerMoves.push(Math.floor(Math.random()*4)+1)
    }
    for (let i=0;i<=3;i++) {
        console.log(`Player move ${i+1}: ${playerMoves[i]}`)
    }
}

function compareTurns(){
    console.log(`Testing Moves now...`)
    for (let i=0;i<=3;i++) {
        console.log(`Computer ${i+1}: ${cpuMoves[i]} | Player ${i+1}: ${playerMoves[i]}`)
    if (cpuMoves[i] !== playerMoves[i]) {
        console.log(`Game Over`)
        break
        }
    }
    console.log(`You matched them all!`)
}