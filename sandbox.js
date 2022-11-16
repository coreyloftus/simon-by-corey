let cpuMoves = [1,1]
let playerMoves = [1,4]

function compareTurns(arr1, arr2){
    console.log(`Testing Moves now...`)
    for (let i=0;i<=arr1.length-1;i++) {
        console.log(`Computer ${i+1}: ${arr1[i]} | Player ${i+1}: ${arr2[i]}`)
            if (arr1[i] !== arr2[i]) {
                    console.log(`Game Over`)
                    break
            }
            else {
              console.log(`else condition`)  
              console.log(`Move ${i+1} matches`)
                continue
            }
              console.log(`You win!`)
            } 
            console.log(`End of compareTurns function.`)
}


compareTurns(cpuMoves, playerMoves)