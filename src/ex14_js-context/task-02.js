var hangman = new Hangman('webpurple');
function Hangman(input) {
    this.guess = function (letter) {
        var position = this.input.indexOf(letter);
        if(position !== -1){
            this.result = this.input.split('').map(function (item,i){
                if(item === letter){
                    return letter;
                }
                return this.result[i];
            }, this);
            this.message = this.result.join('');
            if (this.result.indexOf('_') === -1){
                this.message = this.message + ' | You won!';
            }
        } else {
            this.numberOfErrors = this.numberOfErrors - 1;
            this.errorSymbols.push(letter);
            this.message = 'wrong letter,  errors left: ' + this.numberOfErrors + ' | ' + this.errorSymbols;
            if(this.numberOfErrors == 0) {
                console.log('Oops, attempts ended :(');
            }
        }
        console.log(this.message);
        return this;
    };
    this.getGuessedString = function () {
        console.log(this.result.join(''));
        return this;
    };
    this.getErrorsLeft = function () {
        console.log(this.numberOfErrors);
        return this;
    };
    this.getWrongSymbols = function () {
        console.log(this.errorSymbols);
        return this;
    };
    this.startAgain = function (inputSecond) {
        this.input = inputSecond;
        this.numberOfErrors = 6; 
        this.errorSymbols = [];
        this.result = [];
        this.message = '';
        for (var i = 0; i < inputSecond.length; i++){
            this.result.push('_');
        } 
     return this;
    }
    this.startAgain(input);
}
 hangman.guess('w'); // "w________"
 hangman.guess('e'); // "we______e"
 hangman.guess('a'); // "wrong letter, errors left 5 | a"
 hangman.guess('k'); // "we_p__p_e"
 hangman.guess('n'); // "wrong letter, errors left 4 | a,k"
 hangman.guess('p') // "webp___p_e"
   .guess('c') // "webp__ple"
   .getErrorsLeft() // 4
   .getWrongSymbols() // [a,k]
   .guess('q') // "webpu_ple"
   .guess('x'); // "webpurple | You won!"
module.exports = new Hangman; 
