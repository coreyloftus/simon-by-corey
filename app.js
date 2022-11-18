let cpuMoves = []
let playerMoves = []
let gameLevel = 1
const bannerColors = [`blue`, `red`,`green`,`orange`]
let bannerCounter = 0

const banner1 = setInterval(function (){
    statusText.innerText=`4 rounds to win`
    statusBar.classList.add(bannerColors[bannerCounter])
    }, 1000)
    
const banner2 = setInterval(function(){
    statusText.innerText=`Click to play`
    statusBar.classList.remove(bannerColors[bannerCounter])
    if (bannerCounter === 3){
        bannerCounter = 0
        } else {
    bannerCounter++
        }
    }, 2000)
banner1
banner2


function slowDown (time) {
    return new Promise((resolve) => setTimeout(resolve, time))
}

const animateCPUMoves = async (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (cpuMoves[i] === 1) {
            await slowDown(1500)
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
    clearInterval(banner1)
    clearInterval(banner2)
    statusBar.classList.remove(bannerColors[bannerCounter])
    cpuMoves = []
    gameRound()
}
function gameRound(){
    playerMoves = []
    generateComputerMove()
    statusText.innerHTML="CPU"
    animateCPUMoves(cpuMoves)
    playerTurn(cpuMoves, playerMoves)
}
function generateComputerMove() {
    cpuMoves.push(Math.floor(Math.random()*4)+1)
    console.log(`cpu Moves: ${cpuMoves}`)
}
const playerTurn = async(computerMovesArr) => {
    await slowDown((computerMovesArr.length*2000))
    statusText.innerHTML = "Player"
    addPlayerTileListeners()
}
function compareMove () {
    if (playerMoves.length === 1) {
        if (playerMoves[0] === cpuMoves[0]) {
            tileClick.play()
                if (playerMoves.length === gameLevel) {
                    gameLevel++
                    gameRound()
                }  
                } else {
                gameOver()
                }
    }
    if (playerMoves.length === 2) {
        if (playerMoves[0] === cpuMoves[0]) {
            tileClick.play()
            if (playerMoves[1] === cpuMoves[1]) {
                tileClick.play()
                if (playerMoves.length === gameLevel) {
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
            tileClick.play()
            if (playerMoves[1] === cpuMoves[1]) {
                tileClick.play()
                if (playerMoves[2] === cpuMoves[2]) {
                    tileClick.play()
                    if (playerMoves.length === gameLevel) {
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
            tileClick.play()
            if (playerMoves[1] === cpuMoves[1]) {
                tileClick.play()
                if (playerMoves[2] === cpuMoves[2]) {
                    tileClick.play()
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
    statusText.innerText= `🫣 game over 🫣`
    errorSound.play()
    playerFirstTile.removeEventListener('click', playerClickedOne)
    playerSecondTile.removeEventListener('click', playerClickedTwo)
    playerThirdTile.removeEventListener('click', playerClickedThree)
    playerFourthTile.removeEventListener('click', playerClickedFour)
    setTimeout(()=>{
        statusText.innerHTML = `click to play again`
        statusBar.addEventListener('click', playGame)
    },3000)
}

function youWin() {
    statusText.innerText=`🎉🕺 you win 🕺🎉`
    playerFirstTile.removeEventListener('click', playerClickedOne)
    playerSecondTile.removeEventListener('click', playerClickedTwo)
    playerThirdTile.removeEventListener('click', playerClickedThree)
    playerFourthTile.removeEventListener('click', playerClickedFour)
    setTimeout(()=> {
        statusText.innerHTML = `click to play again`
        statusBar.addEventListener('click', playGame)
    },3000)
}

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

const errorSound = document.querySelector('#audio-error')
const tileClick = document.querySelector('#audio-tile-click')

const addPlayerTileListeners = () => {
playerFirstTile.addEventListener('click', playerClickedOne)
playerSecondTile.addEventListener('click', playerClickedTwo)
playerThirdTile.addEventListener('click', playerClickedThree)
playerFourthTile.addEventListener('click', playerClickedFour)
}
// end of line.