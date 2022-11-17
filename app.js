// ##############################################
// declarations
let cpuMoves = []
let playerMoves = []
let gameLevel = 1

function slowDown (time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

const animateCPUMoves = async (arr) => {
    statusText.innerHTML="CPU"
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
    setTimeout(()=>{
        playerFirstTile.classList.toggle('activate-tile')
    }, 500)
    playerMoves.push(1)
    compareMove()
}
function playerClickedTwo () {
    playerSecondTile.classList.toggle('activate-tile')
    setTimeout(()=>{
        playerSecondTile.classList.toggle('activate-tile')
    }, 500)
    playerMoves.push(2)
    compareMove()
}
function playerClickedThree () {
    playerThirdTile.classList.toggle('activate-tile')
    setTimeout(()=>{
        playerThirdTile.classList.toggle('activate-tile')
    }, 500)
    playerMoves.push(3)
    compareMove()
}
function playerClickedFour () {
    playerFourthTile.classList.toggle('activate-tile')
    setTimeout(()=>{
        playerFourthTile.classList.toggle('activate-tile')
    }, 500)
    playerMoves.push(4)
    compareMove()
}
function playGame(){
    statusBar.removeEventListener('click', playGame)
    cpuMoves = []
    gameRound()
}
function gameRound(){
    playerMoves = []
    generateComputerMove()
    animateCPUMoves(cpuMoves)
    playerTurn(cpuMoves, playerMoves)
}
function generateComputerMove() {
    cpuMoves.push(Math.floor(Math.random()*4)+1)
    console.log(`cpu Moves: ${cpuMoves}`)
}
const playerTurn = async(computerMovesArr) => {
    await slowDown((computerMovesArr.length*1600))
    statusText.innerHTML = "Player"
    addPlayerTileListeners()
}
function compareMove () {
    if (playerMoves.length === 1) {
        if (playerMoves[0] === cpuMoves[0]) {
                if (playerMoves.length === gameLevel) {
                    console.log(`Correct! Next round starting.`)
                    gameLevel++
                    gameRound()
                }  
                } else {
                gameOver()
                }
    }
    if (playerMoves.length === 2) {
        if (playerMoves[0] === cpuMoves[0]) {
            if (playerMoves[1] === cpuMoves[1]) {
                if (playerMoves.length === gameLevel) {
                    console.log(`Correct! Next round starting.`)
                    gameLevel++
                    gameRound()
                }  
            }
        } else {
            gameOver()
    }
    }
    if (playerMoves.length === 3) {
        if (playerMoves[0] === cpuMoves[0]) {
            if (playerMoves[1] === cpuMoves[1]) {
                if (playerMoves[2] === cpuMoves[2]) {
                    if (playerMoves.length === gameLevel) {
                        console.log(`Correct! Next round starting.`)
                        gameLevel++
                        gameRound()
                    }  
                } else {
                    gameOver()
                }
            }
        }
    }
    if (playerMoves.length === 4) {
        if (playerMoves[0] === cpuMoves[0]) {
            if (playerMoves[1] === cpuMoves[1]) {
                if (playerMoves[2] === cpuMoves[2]) {
                    if (playerMoves[3] === cpuMoves[3]) {
                        if (playerMoves.length === gameLevel) {
                            youWin()
                        } else {
                            gameOver()
                        }
                    }
                }
            }
        }
    }
}

function gameOver () {
    statusText.innerHTML= `game over, bud`
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