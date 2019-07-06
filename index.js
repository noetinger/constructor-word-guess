var Word = require('./Word.js');
var inquirer = require('inquirer');
var wordBank = ["apple", "banana", "orange", "strawberry"];
var finalWord;
var displayWord = "";
var lettersLeft;
var lives = 5;

//New GameFunction
function newGame() {
    console.log("New Game Started")
    //Generate random word
    var wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
    //set Final Word as the random word via Word function
    finalWord = new Word(wordToGuess);
    lettersLeft = finalWord.letterArr.length;
    //console.log(finalWord)
};

//Game over function
function gameOver() {
    console.log("Game Over");
    //Ask if thet want to play again
    inquirer.prompt([{
        type: "confirm",
        name: "playAgain",
        message: "Play again?",
    }]).then(function (response) {
        //if they do - start new game.
        if (response.playAgain) {
            newGame();
            print();
            promptGuess();
        //if they dont, quit.
        } else {
            console.log("Thanks for playing!")
        };
    })

}
//Prompt for guess function
function promptGuess() {
    inquirer.prompt([{
        name: "ask",
        message: "Guess a letter."
    }]).then(function (response) {
        var input = response.ask
        //if they still have lives
        if (lives > 0) {
            //if they entered only one letter - check the letter
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
            //If they enter no letters - enter a letter
            } else if (input.length === 0) {
                console.log("Please choose a letter.");
                promptGuess()
            //if they enter too many letters - only one at a time
            } else {
                console.log("Choose only one letter at a time.")
                promptGuess();
            }
        //If they have no lives - game over
        } else {
            gameOver();
        }
    })
};

function display() {
    //console.log(finalWord);
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