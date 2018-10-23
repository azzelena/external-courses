"use strict";
function stringLength(str,num) {
    if(str.length > num) {
       return str.substr(-str.length,str.length - num) + '…';
    } 
    return str;
}
module.exports = stringLength;
console.log(stringLength('abcdefg',5));