"use strict";
var i = 0;
function reverseString(str) {
    for(i; i < str.length; i++) {
            var revStr = str.split('').reverse();
            var newStr = revStr.join('');
            var theLastSpace = newStr.replace(' ', '');
            var newStr2 = theLastSpace.split('');
            var revStr2 = newStr2.reverse().join('');
            var result = revStr2.replace(' ', '').toString();
    }
    return result;
}
module.exports = reverseString;
console.log(reverseString('123'));