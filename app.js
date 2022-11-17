// ##############################################
// declarations
let cpuMoves = []
let playerMoves = []
let gameLevel = 4

function slowDown (time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

const animateCPUMoves = async (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (cpuMoves[i] === 1) {
            await slowDown(1000)
            cpuFirstTile.classList.toggle('activate-tile')
            setTimeout(()=>{
                cpuFirstTile.classList.toggle('activate-tile')
                }, 1000)
            } if (cpuMoves[i] === 2) {
                await slowDown(1500)
                cpuSecondTile.classList.toggle(`activate-tile`)
                setTimeout(()=>{
                    cpuSecondTile.classList.toggle(`activate-tile`)
                },1000)
            } if (cpuMoves[i] === 3) {
                await slowDown(1500)
                cpuThirdTile.classList.toggle(`activate-tile`)
                setTimeout(()=>{
                    cpuThirdTile.classList.toggle(`activate-tile`)
                },1000)
            } if (cpuMoves[i]=== 4) {
                await slowDown(1500)
                cpuFourthTile.classList.toggle(`activate-tile`)
                setTimeout(()=>{
                    cpuFourthTile.classList.toggle(`activate-tile`)
                },1000)
            } 
        }
    }
    
function playerClickedOne () {
    playerFirstTile.classList.toggle('activate-tile')
    // removes activate-tile after animation completes
    setTimeout(()=>{
        playerFirstTile.classList.toggle('activate-tile')
    }, 500)
    playerMoves.push(1)
    console.log(`Player picked tile 1`)
    console.log(`playerMoves array = ${playerMoves}`)
    compareMove()
}
function playerClickedTwo () {
    playerSecondTile.classList.toggle('activate-tile')
    setTimeout(()=>{
        playerSecondTile.classList.toggle('activate-tile')
    }, 500)
    playerMoves.push(2)
    console.log(`Player picked tile 2`)
    console.log(`playerMoves array = ${playerMoves}`)
    compareMove()
}
function playerClickedThree () {
    playerThirdTile.classList.toggle('activate-tile')
    setTimeout(()=>{
        playerThirdTile.classList.toggle('activate-tile')
    }, 500)
    playerMoves.push(3)
    console.log(`Player picked tile 3`)
    console.log(`playerMoves array = ${playerMoves}`)
    compareMove()
}
function playerClickedFour () {
    playerFourthTile.classList.toggle('activate-tile')
    setTimeout(()=>{
        playerFourthTile.classList.toggle('activate-tile')
    }, 500)
    playerMoves.push(4)
    console.log(`Player picked tile 4`)
    console.log(`playerMoves array = ${playerMoves}`)
    compareMove()
}

function playGame(){
    statusBar.removeEventListener('click', playGame)
    playerMoves = []
    cpuMoves = []
    computerTurn()
    animateCPUMoves(cpuMoves)
    playerTurn(cpuMoves, playerMoves)
    }

function computerTurn() {
statusText.innerHTML="CPU"
    for (let i = 0; i < gameLevel;i++) {
        cpuMoves.push(Math.floor(Math.random()*gameLevel)+1)
    }
    for (let i = 0; i < gameLevel; i++) {
        console.log(`Computer move ${i+1}: ${cpuMoves[i]}`)
    }
}

const playerTurn = async(computerMovesArr, playerMovesArr) => {
    console.log(`running slowDown for playerTurn`)
    await slowDown((computerMovesArr.length*1600)) // <- waits X milliseconds for each move the computer has
    console.log(`playerTurn starting`)
    statusText.innerHTML = "Player"
    addPlayerTileListeners()
    // console.log(`playerMoves:${playerMovesArr}`)
}

function compareMove () {
    if (playerMoves.length === 1) {
        if (playerMoves[0] !== cpuMoves[0]) {
            gameOver()
        }    
    }
    if (playerMoves.length === 2) {
        if (playerMoves[1] !== cpuMoves[1]) {
            gameOver()
        }
    }
    if (playerMoves.length === 3){
        if (playerMoves[2] !== cpuMoves[2]) {
            gameOver()
        }
    }
    if (playerMoves.length === 4) {
        if (playerMoves[3] === cpuMoves[3]) {
            youWin()
        }
    }
}

function gameOver () {
    statusText.innerHTML= `game over, man`
    playerFirstTile.removeEventListener('click', playerClickedOne)
    playerSecondTile.removeEventListener('click', playerClickedTwo)
    playerThirdTile.removeEventListener('click', playerClickedThree)
    playerFourthTile.removeEventListener('click', playerClickedFour)
    setTimeout(()=>{
        statusText.innerHTML = `click to play again`
        statusBar.addEventListener('click', playGame)
    },2000)
}

function youWin() {
    statusText.innerHTML=`you win, YATTTTAAA~~~~~!!!`
    playerFirstTile.removeEventListener('click', playerClickedOne)
    playerSecondTile.removeEventListener('click', playerClickedTwo)
    playerThirdTile.removeEventListener('click', playerClickedThree)
    playerFourthTile.removeEventListener('click', playerClickedFour)
    setTimeout(()=> {
        statusText.innerHTML = `click to play again`
        statusBar.addEventListener('click', playGame)
    },2000)
}
// ##############################################
// getters & setters
const cpuFirstTile = document.querySelector("#cpu-first-tile")
const cpuSecondTile = document.querySelector("#cpu-second-tile")
const cpuThirdTile = document.querySelector("#cpu-third-tile")
const cpuFourthTile = document.querySelector("#cpu-fourth-tile")
const playerFirstTile = document.querySelector("#player-first-tile")
const playerSecondTile = document.querySelector("#player-second-tile")
const playerThirdTile = document.querySelector("#player-third-tile")
const playerFourthTile = document.querySelector("#player-fourth-tile")

const statusText = document.querySelector("#status-text")
const statusBar = document.querySelector("#status-bar")
statusBar.addEventListener('click', playGame)

const addPlayerTileListeners = () => {
playerFirstTile.addEventListener('click', playerClickedOne)
playerSecondTile.addEventListener('click', playerClickedTwo)
playerThirdTile.addEventListener('click', playerClickedThree)
playerFourthTile.addEventListener('click', playerClickedFour)
}
// ##############################################
// end of line.