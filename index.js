const Word = require('./word.js');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const wordBank = ['dog', 'cat', 'fish'];
const selectedWord = new Word();
let wins = 0;
let displayWord;

function startGame() {
    const randomIndex = Math.floor(Math.random() * wordBank.length);
    selectedWord.populateLetters(wordBank[randomIndex]);
    showPuzzle(selectedWord);
    askLetter();
}

function askLetter() {
    rl.question('Guess a letter...', function (guess) {
        selectedWord.guessLetter(guess);
        showPuzzle(selectedWord);
        if (displayWord.indexOf("_") > -1) {
            askLetter(selectedWord);
        } else {
            console.log("You Won!")
            console.log("Game will start again momentarily")
            wins++
            console.log(wins);
            setTimeout(startGame, 3000);
        };
    })
}

function showPuzzle(word) {
    displayWord = word.getPuzzle()
    console.log(displayWord);
}

startGame();