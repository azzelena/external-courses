"use strict";
function Calculator() {
 var operations = {
     '+': function add(num1, num2) {
    var addRes = num1 + num2;
    return addRes;
     },
     '-': function substract(num1, num2) {
    var substractRes = num1 - num2;
    return substractRes;
     },
     '/': function divide(num1, num2) {
    var divideRes = num1 / num2;
    return divideRes;
     },
     '*': function multiply(num1, num2) {
    var multiplyRes = num1 * num2;
    return multiplyRes;
     }
   };
   this.calculate = function(str) {
     var arr = str.split(' ');
     num1 = +arr[0];
     oper = arr[1];
     num2 = +arr[3];

      if(!operations[oper] || isNaN(num1) || isNaN(num2)) {
        return NaN;
      }
      return operations[oper](num1,num2);
   }
}
   module.exports = Calculator;