// global variables
// ##############################################
let cpuMoves = []
let playerMoves = []
let gameLevel = 4

const slowDown = (time) => {
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
    
// functions

const playGame = () =>{
    statusBar.addEventListener('click',(null))
    playerMoves = []
    cpuMoves = []
    computerTurn()
    animateCPUMoves(cpuMoves)
    playerTurn(cpuMoves, playerMoves)
    }

function computerTurn(){
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
    console.log(`playerMoves:${playerMovesArr}`)
}

let compareMove = () => {
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
    // if ((playerMoves.length === cpuMoves.length) && (playerMoves[playerMoves.length-1] === cpuMoves[cpuMoves.length])) {
    //     youWin()
    // }
}

// upon tile click...
// if playerMoves array length is 1, check against cpuMoves[0]
// if playerMoves array length is 2, check against cpuMoves[1]

    // check last item in each array
    // if playerArray.length is less than cpuMoves.length
    // at any given point, compare the last items of each to determine if game should continue or end
    // if at the last item in computerArray, win
    // check against computer move
// }

let gameOver= ()=> {
    statusText.innerHTML= `game over, man`
    setTimeout(()=>{
        statusText.innerHTML = `click to play again`
        statusBar.addEventListener('click', playGame)
    },2000)
}

let youWin= ()=> {
    statusText.innerHTML=`you win, YATTTTAAA~~~~~!!!`
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

// status bar text
const statusText = document.querySelector("#status-text")
const statusBar = document.querySelector("#status-bar")
statusBar.addEventListener('click', playGame)

// player tile listeners
const addPlayerTileListeners = () => {
playerFirstTile.addEventListener('click', () => {
    playerFirstTile.classList.toggle('activate-tile')
    // removes activate-tile after animation completes
    setTimeout(()=>{
        playerFirstTile.classList.toggle('activate-tile')
    }, 500)
    playerMoves.push(1)
    console.log(`Player picked tile 1`)
    console.log(`playerMoves array = ${playerMoves}`)
    compareMove()
})
playerSecondTile.addEventListener('click', () => {
    playerSecondTile.classList.toggle('activate-tile')
    setTimeout(()=>{
        playerSecondTile.classList.toggle('activate-tile')
    }, 500)
    playerMoves.push(2)
    console.log(`Player picked tile 2`)
    console.log(`playerMoves array = ${playerMoves}`)
    compareMove()
})
playerThirdTile.addEventListener('click', () => {
    playerThirdTile.classList.toggle('activate-tile')
    setTimeout(()=>{
        playerThirdTile.classList.toggle('activate-tile')
    }, 500)
    playerMoves.push(3)
    console.log(`Player picked tile 3`)
    console.log(`playerMoves array = ${playerMoves}`)
    compareMove()
})
playerFourthTile.addEventListener('click', () => {
    playerFourthTile.classList.toggle('activate-tile')
    setTimeout(()=>{
        playerFourthTile.classList.toggle('activate-tile')
    }, 500)
    playerMoves.push(4)
    console.log(`Player picked tile 4`)
    console.log(`playerMoves array = ${playerMoves}`)
    compareMove()
})
}
const removePlayerTileListeners = () => {
    playerFirstTile.removeEventListener('click', () => {
        playerFirstTile.classList.toggle('activate-tile')
        // removes activate-tile after animation completes
        setTimeout(()=>{
            playerFirstTile.classList.toggle('activate-tile')
        }, 500)
        playerMoves.push(1)
        console.log(`Player picked tile 1`)
        console.log(`playerMoves array = ${playerMoves}`)
        compareMove()
    })
    playerSecondTile.removeEventListener('click', () => {
        playerSecondTile.classList.toggle('activate-tile')
        setTimeout(()=>{
            playerSecondTile.classList.toggle('activate-tile')
        }, 500)
        playerMoves.push(2)
        console.log(`Player picked tile 2`)
        console.log(`playerMoves array = ${playerMoves}`)
        compareMove()
    })
    playerThirdTile.removeEventListener('click', () => {
        playerThirdTile.classList.toggle('activate-tile')
        setTimeout(()=>{
            playerThirdTile.classList.toggle('activate-tile')
        }, 500)
        playerMoves.push(3)
        console.log(`Player picked tile 3`)
        console.log(`playerMoves array = ${playerMoves}`)
        compareMove()
    })
    playerFourthTile.removeEventListener('click', () => {
        playerFourthTile.classList.toggle('activate-tile')
        setTimeout(()=>{
            playerFourthTile.classList.toggle('activate-tile')
        }, 500)
        playerMoves.push(4)
        console.log(`Player picked tile 4`)
        console.log(`playerMoves array = ${playerMoves}`)
        compareMove()
    })  
}
// ##############################################
// end of line.