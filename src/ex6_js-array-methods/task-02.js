'use strict';
var i = 0;
function some(arr,callback) {
    for(i; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            return true;
        }
    } return false;
}
module.exports = some;
console.log(some([1,2,3],isPositive));