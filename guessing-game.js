function guessingGame() {
    let rand = Math.floor(Math.random() * 100);
    let count = 0;
    let gameOver = false;
    return function guess(num) {
        count++;
        if (num < rand) {
            return `${num} is too low!`
        }
        else if (num > rand) {
            return `${num} is too high!`
        }
        else if (gameOver) {
            return `The game is over, you already won!`
        }
        else {
            gameOver = true;
            return `You win! You found ${rand} in ${count} guesses.`
        }
    }
}


module.exports = { guessingGame };
