"use strict";
var i = 0;
var res;
function uppercaseFirstLetterOfWord(str) {
    var arr = str.split(' ');
    for(i; i < arr.length; i++) {
            if(arr[i].toLowerCase()){
               arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
               res = arr.join(' ').toString();  
            }
    }
    return res;
}
module.exports = uppercaseFirstLetterOfWord;
console.log(uppercaseFirstLetterOfWord('I am cool')); 