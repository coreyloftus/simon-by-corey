// ##############################################
// global variables
// ##############################################
let cpuMoves = [1,2,3,4]
let playerMoves = []
const slowDown = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}
const displayCPUMoves2 = async (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (cpuMoves[i] === 1) {
            console.log(`before slowDown`)
            await slowDown(2000)
            cpuFirstTile.classList.toggle('activate-tile')
            setTimeout(()=>{
                cpuFirstTile.classList.toggle('activate-tile')
                }, 1000)
                console.log(`after slowDown`)
            } if (cpuMoves[i] === 2) {
                await slowDown(2000)
                cpuSecondTile.classList.toggle(`activate-tile`)
                setTimeout(()=>{
                    cpuSecondTile.classList.toggle(`activate-tile`)
                },1000*(i+1))
            } if (cpuMoves[i] === 3) {
                await slowDown(2000)
                cpuThirdTile.classList.toggle(`activate-tile`)
                setTimeout(()=>{
                    cpuThirdTile.classList.toggle(`activate-tile`)
                },500)
            } if (cpuMoves[i]=== 4) {
                await slowDown(2000)
                cpuFourthTile.classList.toggle(`activate-tile`)
                setTimeout(()=>{
                    cpuFourthTile.classList.toggle(`activate-tile`)
                },500)
            } 
        }
    }
displayCPUMoves2

// function displayCPUMoves (arr) {
//     for (let i = 0; i < arr.length; i++) {
//     if (cpuMoves[i] === 1) {
//             cpuFirstTile.classList.toggle('activate-tile')
//             setTimeout(()=>{
//                 cpuFirstTile.classList.toggle('activate-tile')
//             }, 1000)
//         } else if (cpuMoves[i] === 2) {
//             cpuSecondTile.classList.toggle(`activate-tile`)
//             setTimeout(()=>{
//                 cpuSecondTile.classList.toggle(`activate-tile`)
//             },1000*(i+1))
//         } else if (cpuMoves[i] === 3) {
//             cpuThirdTile.classList.toggle(`activate-tile`)
//             setTimeout(()=>{
//                 cpuThirdTile.classList.toggle(`activate-tile`)
//             },500)
//         } else if (cpuMoves[i]=== 4) {
//             cpuFourthTile.classList.toggle(`activate-tile`)
//             setTimeout(()=>{
//                 cpuFourthTile.classList.toggle(`activate-tile`)
//             },500)
//         }
//     }
// }

// ##############################################
// getters & setters
// ##############################################

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

// ##############################################
// testing
// ##############################################
displayCPUMoves2(cpuMoves)

// ##############################################
// player tile listeners
// ##############################################
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
    
    // status bar text
    const cpuStatusText = document.querySelector("#cpu-status-text")
    const playerStatusText = document.querySelector("#player-status-text")

    cpuStatusText.addEventListener('click', ()=>{
        console.log('clicked on cpuStatusText')
        cpuStatusText.classList.toggle('bold')
    })
    
// ##############################################
// functions - working
// ##############################################
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


// ##############################################
// functions - NOT working
// ##############################################

// function gameRound() {
//     computerTurn()
//     playerTurn()
//     compareTurns()
// }


// function playerTurn(){
// notify user that it's Player's turn by unhiding Player text
    // get inputs based on which buttons are clicked by user
//
// }

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
