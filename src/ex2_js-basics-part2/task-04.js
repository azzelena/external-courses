var arr;
var i = 0;
var j;
function areTheSame (arr) {
    for(i; i < arr.length; i++) {
        for(j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            } else {
                return false;
            }
        }
    }
}
module.exports = areTheSame;
