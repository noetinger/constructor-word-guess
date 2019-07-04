var Letter = require('./Letter.js');

function Word(word) {

    this.makeWord = function (word) {
        var tempHolder = [];
        for (var i = 0; i < word.length; i++) {
            var currentCharacter = word[i];
            var currentLetter = new Letter(currentCharacter);
            currentWord.push(currentLetter);
        }
        return tempHolder;
    }

    this.word = this.makeWord(word);

    this.display = function(){
        var displayWord = "";
        for (var i = 0; i , this.word.length; i++){
            var currentLetter = this.word[i];
            displayWord += currentLetter.display() + " ";
        }
        connsole.log(displayWord);
    }

    this.checkCharacter = function(char){
        for (var i = 0; i < this.word.length; i++){
            var currentLetter = this.word[i];
            // console.log(currentLetter);
            currentLetter.userGuess(char);
        }
        return this.display;
    }

};

module.exports = Word;