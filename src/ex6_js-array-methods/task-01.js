'use strict';
function slice(arr, begin, end) {
    var res = [];
    var param1 = begin;
    var param2 = end; 
    var i = param1;
      if(begin < 0) {
        param1 = param1 + arr.length;
    } if(end < 0) {
        param2 = param2 + arr.length;
    } if(end === undefined) {
        param2 = arr.length;
    }
    for(i; i < param2; i++) {
        res.push(arr[i]);
    }
    return res;
}
module.exports = slice;
console.log(slice(['w','1','t','h','o'],1,4));