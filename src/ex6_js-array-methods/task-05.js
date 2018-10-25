'use strict'
 function mapMethod (arr, callback) {
  var res = [];
     for (var i = 0; i < arr.length; i++) {
     res.push(callback(arr[i], i, arr));
   }
   return res;
 }
 module.exports = mapMethod;