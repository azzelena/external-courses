"use strict";
var result;
var arr;
function lowerCamelCase(str) {
    arr = str.split(' ');
for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toLowerCase() + arr[i].slice(1);
}
for (var i = 1; i < arr.length; i++) { 
	arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
result = arr.join('');
return result;
}
module.exports = lowerCamelCase;
console.log(lowerCamelCase('Text Object'));