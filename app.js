// ##############################################
// global variables
// ##############################################
let cpuMoves = []
let playerMoves = [1,2,3,4]
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
const cpuStatusText = document.querySelector("#cpu-status-text")
const playerStatusText = document.querySelector("#player-status-text")

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
    // check against computer move
})
playerSecondTile.addEventListener('click', () => {
    playerSecondTile.classList.toggle('activate-tile')
    setTimeout(()=>{
        playerSecondTile.classList.toggle('activate-tile')
    }, 500)
    playerMoves.push(2)
    console.log(`Player picked tile 2`)
    console.log(`playerMoves array = ${playerMoves}`)
    // add to playerMove array
    // check against computer move
})
playerThirdTile.addEventListener('click', () => {
    playerThirdTile.classList.toggle('activate-tile')
    setTimeout(()=>{
        playerThirdTile.classList.toggle('activate-tile')
    }, 500)
    playerMoves.push(3)
    console.log(`Player picked tile 3`)
    console.log(`playerMoves array = ${playerMoves}`)
    // add to playerMove array
    // check against computer move
})
playerFourthTile.addEventListener('click', () => {
    playerFourthTile.classList.toggle('activate-tile')
    setTimeout(()=>{
        playerFourthTile.classList.toggle('activate-tile')
    }, 500)
    playerMoves.push(4)
    console.log(`Player picked tile 4`)
    console.log(`playerMoves array = ${playerMoves}`)
    // add to playerMove array
    // check against computer move
})

cpuStatusText.addEventListener('click', ()=>{
    console.log('clicked on cpuStatusText')
    cpuStatusText.classList.toggle('bold')
})
    
// ##############################################
// functions - working
// ##############################################

function computerTurn(){
playerStatusText.classList.toggle("hide")
console.log(`computer's turn now.`)
console.log(`generating random numbers for computer's moves`)

// generate 4 random numbers and push them into the cpuMoves array
    for (let i=0;i<=1;i++) {
        cpuMoves.push(Math.floor(Math.random()*4)+1)
    }
    for (let i=0;i<=1;i++) {
        console.log(`Computer move ${i+1}: ${cpuMoves[i]}`)
    }
    console.log(`end of computerTurn()`)
}

const playerTurn = async(computerMovesArr, playerMovesArr) => {
    // notify user that it's Player's turn by unhiding Player text
    console.log(`playerTurn starting`)
    console.log(`running slowDown for playerTurn`)
    await slowDown((computerMovesArr.length*3000)) // <- waits 3 seconds for each move the computer has
    cpuStatusText.classList.toggle("hide")
    playerStatusText.classList.toggle("hide")
console.log(`Player turn should start now`)
console.log(`playerMoves:${playerMovesArr}`)
// cpuStatusText.classList.toggle(`your-turn`)
// playerStatusText.classList.toggle(`your-turn`)
}
// get inputs based on which buttons are clicked by user


// ##############################################
// functions - NOT working
// ##############################################

// function compareTurns(){
// compare user moves to CPU's moves
//     console.log(`Testing Moves now...`)
//     for (let i=0;i<=cpuMoves.length-1;i++) {
//         console.log(`Computer ${i+1}: ${cpuMoves[i]} | Player ${i+1}: ${playerMoves[i]}`)
//     if (cpuMoves[i] === playerMoves[i]) {
//         console.log(`Move ${i+1} matches`)
//         continue
//     } 
//     else {
//         console.log(`Game Over`)
//         break
//         } 
//     } console.log(`You win!`)
//     console.log(`End of compareTurns function.`)
// }

// ##############################################
// testing
// ##############################################
// function resolveAfter2Seconds(anyVar) {
//     return new Promise (resolve => {
//         setTimeout(()=>{
//             console.log(`setTimeout between animate and playerturn`)
//             resolve(anyVar)},
//             ((cpuMoves.length)*2000))
//     })
// }


computerTurn()
animateCPUMoves(cpuMoves)
// resolveAfter2Seconds()
playerTurn(cpuMoves, playerMoves)