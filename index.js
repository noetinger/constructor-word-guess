var Word = require('./Word.js');
var inquirer = require('inquirer');
var wordBank = ["apple", "banana", "orange", "strawberry"];
var finalWord;
var displayWord = "";
var lettersLeft;
var lives = 5;

function newGame() {
    console.log("New Game Started")
    var wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
    finalWord = new Word(wordToGuess);
    lettersLeft = finalWord.letterArr.length;
    //console.log(finalWord)
};

function gameOver() {
    console.log("Game Over");
    inquirer.prompt([{
        type: "confirm",
        name: "playAgain",
        message: "Play again?",
    }]).then(function (response) {
        if (response.playAgain) {
            newGame();
            print();
            promptGuess();
        } else {
            console.log("Thanks for playing!")
        };
    })

}

function promptGuess() {
    inquirer.prompt([{
        name: "ask",
        message: "Guess a letter."
    }]).then(function (response) {
        var input = response.ask
        if (lives > 0) {
            if (input.length === 1) {
                finalWord.checkGuess(input);
                displayWord = finalWord.createWordString()

                if (finalWord.compare === displayWord) {
                    console.log("Sorry, there is no " + input)
                    lives--
                    console.log("You have " + lives + " left.")
                    if (lives === 0) {
                        gameOver()
                    } else {
                        print()
                        promptGuess()
                    }
                } else {
                    console.log("Good choice!")
                    lettersLeft--
                    print()
                    if (lettersLeft === 0) {
                        console.log("Excellent Job! Here is another word - ")
                        newGame();
                        print();
                        promptGuess();
                    } else {
                        promptGuess();
                    }
                }
            } else if (input.length === 0) {
                console.log("Please choose a letter.");
                promptGuess()
            } else {
                console.log("Choose only one letter at a time.")
                promptGuess();
            }
        } else {
            gameOver();
        }
    })
};

function display() {
    displayWord = finalWord.createWordString();
    console.log(displayWord);
    finalWord.compare = displayWord;
};

function print() {
    console.log("\n");
    console.log("****************");
    display();
    console.log("\n****************");
    console.log("\n");
}
newGame()
print()
promptGuess();