function Letter(character) {
    this.character = character;
    this.isGuessed = false;
    this.getCharacter = function () {
        return this.isGuessed ? this.character : '_';
    };
    this.checkGuess = function (guess) {
        if (guess.toLowerCase() === this.character.toLowerCase()) {
            this.isGuessed = true;
        }
        return this.isGuessed;
    };
};

//tests:
//const letterA = new Letter('a');
//console.log(letterA);
//console.log('isGuessed defaults to false PASS:', letterA.isGuessed === false);

module.exports = Letter;