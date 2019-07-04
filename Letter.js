function Letter(character) {
    this.character = character;
    this.guessed = false;
    this.checkGuess = function (input) {
        if (input === this.character) {
            this.guessed = true;
        }
    };
    this.returnChar = function () {
        if (this.guessed === true) {
            return this.character;
        } else {
            return "_";
        };
    };
};

module.exports = Letter;