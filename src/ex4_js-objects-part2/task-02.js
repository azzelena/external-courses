var max = 0;
var i = 0;
function maxElem(arr) {
    for(i; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxElem([1,-100,100]));