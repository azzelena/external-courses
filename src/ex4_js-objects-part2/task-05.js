"use strict";
function findStr(str,substring) {
    var lowerStr = str.toLowerCase();
    return (~lowerStr.indexOf(substring) && lowerStr !== '' || lowerStr === substring)
} 
module.exports = findStr;
console.log(findStr('Cats','cats'));