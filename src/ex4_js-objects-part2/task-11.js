"use strict";
var arr;
var result = {};
var i = 0;
function findNumbers(str) {
  arr = str.split('');
  for(i; i < arr.length; i++) {
    if(result[arr[i]] !== undefined) {
      result[arr[i]]++;
    } else {
      result[arr[i]] = 1;
    }
  } for(var key in result) {
          if(result.hasOwnProperty(key)) {
            console.log(key + ' ' + result[key]); 
          }
  }
}
module.exports = findNumbers;
