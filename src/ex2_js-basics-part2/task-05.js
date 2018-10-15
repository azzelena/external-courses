var arr;
var i = 0;
function maxElem(arr) {
    var max = 0;
    for(i; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
module.exports = maxElem;