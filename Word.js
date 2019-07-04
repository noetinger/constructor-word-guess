var Letter = require('./Letter.js');

function Word(word){
    this.letterArr = [];
    this.compare = "";
    for (var i = 0; i < word.length; i++){
        this.letterArr.push(new Letter(word[i]));
    };
    this.createWordString = function(){
        var finalString = "";
        for (var j = 0; j < this.letterArr.length; j++){
            finalString += this.letterArr[j].returnChar()+ " ";
        }
        return finalString;
    }
    this.checkGuess = function (input){
        for (var k = 0; k < this.letterArr.length; k++){
            this.letterArr[k].checkGuess(input);
        };
    };
}

module.exports = Word;