var calculator = new Calculator();
    function Calculator() {
        this.add = function(num){
            if(num !== undefined){
             this.result += num;
            }
          return this;
        };
        this.subtract = function(num){
            if(num !== undefined){
             this.result -= num;
            }
         return this;
     };
        this.multiply = function(num){
         if(num !== undefined){
             this.result *= num;
            }
         return this;
     };
        this.divide = function(num){
         if(num !== 0 && num !== undefined){
             this.result /= num;
            }
         return this;
     };
        this.getResult = function(){
         return this.result;
     };
        this.reset = function(){
         this.result = 0;
         return this;
     };
        this.setState = function(num){
         if(num !== undefined) {
             this.result = num;  
            }
         return this;
     };
     this.fetchData = function(callback){
             this.result = 500;
              callback(this.getResult());
         return this;
     };
 };
 module.exports = Calculator();