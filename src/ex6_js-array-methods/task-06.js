'use strict';
function reduceMethod (arr, callback, initialValue) {
var previous; 
var i = 0;
 if (initialValue === undefined) {
   previous = arr[i]; i++;
  } else if (initialValue !== undefined) {
   previous = initialValue;
   } for (i; i < arr.length; i++) {
        previous = callback(previous, arr[i], i, arr);
     }
     return previous;
 }
 module.exports = reduceMethod;