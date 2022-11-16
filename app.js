// global variables
let cpuMoves = [1,2]
let playerMoves = [1,2]


// getters & setters

    // tiles
    const cpuFirstTile = document.querySelector("#cpu-first-tile")
    const cpuSecondTile = document.querySelector("#cpu-second-tile")
    const cpuThirdTile = document.querySelector("#cpu-third-tile")
    const cpuFourthTile = document.querySelector("#cpu-fourth-tile")

    const playerFirstTile = document.querySelector("#player-first-tile")
    const playerSecondTile = document.querySelector("#player-second-tile")
    const playerThirdTile = document.querySelector("#player-third-tile")
    const playerFourthTile = document.querySelector("#player-fourth-tile")

    // if computerMove[0] = 1, 
    // toggle('activate-tile') for tile 1
    
    cpuFirstTile.addEventListener('click',() =>{
        console.log(`cpu tile 1 clicked`)
        cpuFirstTile.classList.toggle('activate-tile')
        setTimeout(() =>{
            cpuFirstTile.classList.toggle('activate-tile')
        },500)
    } )
    cpuSecondTile.addEventListener('click',() =>{
        console.log(`cpu tile 2 clicked`)
        cpuSecondTile.classList.toggle(`activate-tile`)
        setTimeout(()=>{
            cpuSecondTile.classList.toggle('activate-tile')
        },500)
    })
    cpuThirdTile.addEventListener('click', ()=>{
    console.log(`cpu tile 3 clicked`)
    cpuThirdTile.classList.toggle(`activate-tile`)
    setTimeout(()=>{
        cpuThirdTile.classList.toggle(`activate-tile`)
    },500)
    })
    cpuFourthTile.addEventListener('click', ()=>{
    console.log(`cpu tile 4 clicked`)
    cpuFourthTile.classList.toggle(`activate-tile`)
    setTimeout(()=>{
        cpuFourthTile.classList.toggle(`activate-tile`)
    },500)
    })

    playerFirstTile.addEventListener('click', () => {
        console.log(`player tile 1 clicked`)
        playerFirstTile.classList.toggle('activate-tile')
        // removes activate-tile after animation completes
        setTimeout(()=>{
        	playerFirstTile.classList.toggle('activate-tile')
        }, 500)
        // add to playerMove array
        // check against computer move
    })
    playerSecondTile.addEventListener('click', () => {
        console.log(`player tile 2 clicked`)
        playerSecondTile.classList.toggle('activate-tile')
        setTimeout(()=>{
            playerSecondTile.classList.toggle('activate-tile')
        }, 500)
        // add to playerMove array
        // check against computer move
    })
    playerThirdTile.addEventListener('click', () => {
        console.log(`player tile 3 clicked`)
        playerThirdTile.classList.toggle('activate-tile')
        setTimeout(()=>{
            playerThirdTile.classList.toggle('activate-tile')
        }, 500)
        // add to playerMove array
        // check against computer move
    })
    playerFourthTile.addEventListener('click', () => {
        console.log(`player tile 4 clicked`)
        playerFourthTile.classList.toggle('activate-tile')
        setTimeout(()=>{
            playerFourthTile.classList.toggle('activate-tile')
        }, 500)
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