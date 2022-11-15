# simon-by-corey

Simon Pseudocode

    Game Logic

    WIN CONDITIONS
        - player successfully replicates 3 rounds

    ONE ROUND
        - COMPUTER (simon’s) PHASE
            - computer generates sequence of 4 random numbers b/w 1-4
            - numbers correspond to colored div tiles
            - each one lights up in sequence

        PLAYER PHASE
        - player must enter the same 4 number sequence
        game checks for accuracy each time a number is entered
        - IF player enters a wrong number, gameOver
        ELSE go on to next round

    STRETCH GOALS
        - each div tile makes a sound when it lights up
        - difficulty mode options (easy is 4 tiles, medium is 5, hard is 6)
        - opening splash screen made of up tiles that spell "SIMON"
        - game over screen made up of tiles that spells "GAME OVER"
