"use strict";
function uppercaseFirstLetter(str) {
    var res = str[0].toUpperCase() + str.slice(1);
    return res;
}
module.exports = uppercaseFirstLetter;
console.log(uppercaseFirstLetter('effflena'));