var Letter = require('./Letter.js');
var Word = require('./Word.js');
var inquirer = require('inquirer');

function newGame() {
    //Word Bank
    var wordBank = ["apple", "banana", "orange", "strawberry"];
    //Choose random word to guess
    var wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
    //put wordToGuess into new Word function
    var word = new Word(wordToGuess);
    //display the word
    word.display();
    //input word into guess function
    playerGuess(word);
};


//player guess function
function playerGuess(word) {
    //Prompt for a guess/letter (inquirer)
    inquirer.prompt[({
        name: "guess",
        message: "Guess a letter!",
        type: "input",
    //takes in guess
    })].then(function (letter) {
        //checks the guess
        word.checkCharacter(letter);
        //displays the word
        word.display();
        //repeats function
        playerGuess(word);
    });
};

//Call new game
newGame();