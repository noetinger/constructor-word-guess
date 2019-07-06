const Word = require('./Word.js');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const wordBank = ['apple', 'banana', 'orange', 'peach'];

function startGame() {
    const randomIndex = Math.floor(Math.random * wordBank.length);
    const selectedWord = new Word();
    selectedWord.populateLetters(wordBank[randomIndex]);
    showPuzzle(selectedWord);
    askLetter(selectedWord);
};

function askLetter() {
    rl.question('Guess a letter...', function (guess) {
        selectedWord.guessLetter(guess);
        showPuzzle(selectedWord);
        if (selectedWord.indexOf("_") > -1) {
            askLetter(selectedWord);
        } else {
            console.log("You Won!")
            console.log("Game will start again momentarily")
            setTimeout(startGame, 3000);
        };
    });
};

function showPuzzle(word) {
    console.log(word.getPuzzle());
};

startGame();