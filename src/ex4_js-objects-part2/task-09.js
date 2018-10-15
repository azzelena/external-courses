"use strict";
var res;
var arr;
function stringIntoString(str1,str2,num) {
    arr = str1.split(' ');
    arr.splice(num+1, 0, str2);
    res = arr.join(' ');
    return res;
}
module.exports = stringIntoString;
console.log(stringIntoString('I am cool','very',1));