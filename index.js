var Letter = require('./Letter.js');
var Word = require('./Word.js');
var inquirer = require('inquirer');

function newGame (){
    //Word Bank
    var wordBank = ["apple","banana","orange","strawberry"];
    //Choose random word to guess
    var wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
    //put wordToGuess into new Word function
    var word = new Word(wordToGuess);
    //display the word
    word.display();
    //input word into guess function
    playerGuess(word);
};


//User guess function
    //Prompt for a guess/letter (inquirer)
    //then takes in guess
        //pass guess thru word.check function
        //displays word
        //repeats function until no letters left

//Call new game
newGame();