const Letter = require('./Letter.js');

function Word() {
    this.lettersArr = [];
    this.getPuzzle = function () {
        const puzzle = [];
        for (let i = 0; i < this.lettersArr.length; i++) {
            const currentLetter = this.lettersArr[i];
            const character = currentLetter.getCharacter();
            puzzle.push(character);
        }
        return puzzle.join(' ');
    }
    this.guessLetter = function (character) {
        for (let i = 0; i < this.lettersArr.length; i++) {
            const currentLetter = this.lettersArr[i];
            currentLetter.checkGuess(character);
        }
    }
    this.populateLetters = function (word) { // 'dog'
        const letters = word.split(''); // ['d', 'o', 'g']
        for (let i = 0; i < letters.length; i++) {
            const currentLetter = new Letter(letters[i]);
            this.lettersArr.push(currentLetter);
        }
    }
}

module.exports = Word;

//const dog = new Word()
//const puzzle = dog.getPuzzle()
//console.log(puzzle)