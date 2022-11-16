// ##############################################
// global variables
// ##############################################
let cpuMoves = []
let playerMoves = []
const slowDown = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}
const animateCPUMoves = async (arr) => {
    console.log(`animating computer's moves now...`)
    for (let i = 0; i < arr.length; i++) {
        if (cpuMoves[i] === 1) {
            await slowDown(2000)
            cpuFirstTile.classList.toggle('activate-tile')
            setTimeout(()=>{
                cpuFirstTile.classList.toggle('activate-tile')
                }, 1000)
            } if (cpuMoves[i] === 2) {
                await slowDown(2000)
                cpuSecondTile.classList.toggle(`activate-tile`)
                setTimeout(()=>{
                    cpuSecondTile.classList.toggle(`activate-tile`)
                },1000)
            } if (cpuMoves[i] === 3) {
                await slowDown(2000)
                cpuThirdTile.classList.toggle(`activate-tile`)
                setTimeout(()=>{
                    cpuThirdTile.classList.toggle(`activate-tile`)
                },1000)
            } if (cpuMoves[i]=== 4) {
                await slowDown(2000)
                cpuFourthTile.classList.toggle(`activate-tile`)
                setTimeout(()=>{
                    cpuFourthTile.classList.toggle(`activate-tile`)
                },1000)
            } 
        }
        // await slowDown(1000)
        // console.log(`running slowDown for animateCPUMoves`)
        // await slowDown(1000)
        // console.log(`3...`)
        // await slowDown(1000)
        // console.log(`2...`)
        // await slowDown(1000)
        // console.log(`1...`)
        // await slowDown(1000)
        // console.log(`animateCPUMoves complete`)
    }
    

// ##############################################
// getters & setters
// ##############################################


// tiles
// ##############################################
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
// const cpuStatusText = document.querySelector("#cpu-status-text")
// const playerStatusText = document.querySelector("#player-status-text")

// player tile listeners
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
    
// ##############################################
// functions - working
// ##############################################

function computerTurn(){
statusText.innerHTML="CPU"
console.log(`computer's turn now.`)
console.log(`generating random numbers for computer's moves`)
// generate 2 random numbers and push them into the cpuMoves array
    for (let i=0;i<=1;i++) {
        cpuMoves.push(Math.floor(Math.random()*4)+1)
    }
    for (let i=0;i<=1;i++) {
        console.log(`Computer move ${i+1}: ${cpuMoves[i]}`)
    }
    console.log(`end of computerTurn()`)
}

const playerTurn = async(computerMovesArr, playerMovesArr) => {
    console.log(`playerTurn starting`)
    console.log(`running slowDown for playerTurn`)
    await slowDown((computerMovesArr.length*3000)) // <- waits 3 seconds for each move the computer has
    statusText.innerHTML="Player"
    // playerStatusText.classList.toggle("hide")
console.log(`Player turn should start now`)
console.log(`playerMoves:${playerMovesArr}`)
}

compareMove = () => {
    if (playerMoves.length === cpuMoves.length) {
        if (playerMoves[playerMoves.length-1] !== cpuMoves[cpuMoves.length-1]) {
            gameOver()
        } else if (playerMoves[playerMoves.length-1] === cpuMoves[cpuMoves.length-1]){
        youWin()
        }
    }
    // check last item in each array
    // if playerArray.length is less than cpuMoves.length
    // at any given point, compare the last items of each to determine if game should continue or end
    // if at the last item in computerArray, win
    // check against computer move
}

gameOver= ()=> {
    statusText.innerHTML= `game over, man`
}

youWin= ()=> {
    statusText.innerHTML=`you win, YATTTTAAAAAAAA`
}

// ##############################################
// functions - NOT working
// ##############################################




// ##############################################
// testing
// ##############################################


computerTurn()
animateCPUMoves(cpuMoves)
playerTurn(cpuMoves, playerMoves)