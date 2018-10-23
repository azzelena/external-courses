"use strict";
var res;
function reverseString(str) {
    res = str.split('').reverse().join('');
    return res;
}
module.exports = reverseString;
console.log(reverseString('abc'));