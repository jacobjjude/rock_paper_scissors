// Computer randomly selects rock, paper or scissor
function computerPlays() {
    // Get a random number between 1-3
    let rand = Math.floor(Math.random() * 3 + 1)

    //Have random number decide rock, paper or scissors
    if (rand == 1) {
        return 'rock'
    } else if (rand == 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
// Player input
function playerPlays() {
    let choice = prompt('Choose rock, paper, or scissors: ').toLowerCase()
    return choice
}

// compare player input, computer input, declare winner
function round() {
    // assign functions to variables to make things easier
    let comp = computerPlays()
    let player = playerPlays()

    // compare the two inputs, declare winner
    if (comp === player) {
        return 'You tied! Try again'
    } else if (comp == 'rock' && player == 'scissors') {
        return 'You lose! Rock smashes scissors!'
    } else if (comp == 'paper' && player == 'rock') {
        return 'You lose! Paper covers rock!'
    } else if (comp == 'scissors' && player == 'paper') {
        return 'You lose! Scissors cuts paper'
    } else if (comp == 'rock' && player == 'paper') {
        return 'You win! Paper covers rock!'
    } else if (comp == 'paper' && player == 'scissors') {
        return 'You win! Scissors cuts paper'
    } else if (comp == 'scissors' && player == 'rock') {
        return 'You win! Rock smashes scissors'
    } else {
        return 'Uhhhh. Something went wrong, and I\'m not sure why'
    }
}

// function that calls round 5 times, keeps count, reports winner
function game() {
    let playerCount = 0
    let compCount = 0
    for (i = 0; i < 5; i++) {
        //call round()
        let game = round()

        // parse through possible endings, add to counts
        if (game == 'You tied! Try again') {
            //pass
        } else if (game == 'You lose! Rock smashes scissors!'){
            compCount++;
        } else if (game == 'You lose! Paper covers rock!') {
            compCount++;
        } else if (game == 'You lose! Scissors cuts paper'){
            compCount++;
        } else if (game == 'You win! Paper covers rock!') {
            playerCount++;
        } else if (game == 'You win! Scissors cuts paper') {
            playerCount++;
        } else if (game == 'You win! Rock smashes scissors') {
            playerCount++;
        } else {
            //pass
        }
        
    } //Conditional statements to prepare score, declare winner
    if (playerCount > compCount) {
        return `Player: ${playerCount}, Computer: ${compCount}. Player wins!`
    } else if (playerCount < compCount) {
        return `Player: ${playerCount}, Computer: ${compCount}. Computer wins!`
    } else {
        return 'Either you tied, or completely broke something. Either way, I\'m amazed'
    }
}