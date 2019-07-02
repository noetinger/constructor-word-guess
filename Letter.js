var Letter = function (character){
    this.character = character;
    this.guessed = false;
    this.display = function (){
        if(guessed === true){
            return this.character;
        }
        else {
            return "_";
        };
    };
    this.userGuess = function (input){
        if(input === this.character){
            this.guessed = true;
        }
        else {
            return false;
        };
    };

};

module.exports = Letter;