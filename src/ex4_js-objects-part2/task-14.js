"use strict";
function randomMinMaxNum(min,max) {
    return Math.floor(Math.random() * (max - min + min) + 1);
}
module.exports = randomMinMaxNum;
console.log(randomMinMaxNum(1,20));