const Word = require('./word.js');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const wordBank = ['apple', 'banana', 'orange', 'peach', 'strawberry', 'blackberry', 'pineapple', 'coconut'];
const selectedWord = new Word();
let wins = 0;
let losses = 0;
let displayWord;
let guesses;

function startGame() {
    guesses = 12;
    const randomIndex = Math.floor(Math.random() * wordBank.length);
    selectedWord.populateLetters(wordBank[randomIndex]);
    showPuzzle(selectedWord);
    askLetter();
}

function askLetter() {
    rl.question('Guess a letter...\n', function (guess) {
        selectedWord.guessLetter(guess);
        showPuzzle(selectedWord);
        if (displayWord.indexOf("_") > -1 && guesses > 1) {
            askLetter(selectedWord);
            guesses--;
            console.log("You have " + guesses + " guesses remaining.")
        } else if (guesses === 1) {
            console.log("Sorry, you lost!")
            console.log("You ran out of guesses")
            losses++
            console.log("Wins: " + wins);
            console.log("Losses: " + losses);
            console.log("Game will start again momentarily")
            setTimeout(startGame, 2000);
        } else {
            console.log("You Won!")
            console.log("Game will start again momentarily")
            wins++
            console.log("Wins: " + wins);
            console.log("Losses: " + losses);
            setTimeout(startGame, 2000);
        };
    })
}

function showPuzzle(word) {
    displayWord = word.getPuzzle()
    console.log("\n")
    console.log("Name of a fruit!")
    console.log("Fruit: " + displayWord);
}

startGame();