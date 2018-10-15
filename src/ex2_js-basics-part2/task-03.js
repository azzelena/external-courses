function evenOrOdd(arr) {
var even = 0;
var odd = 0;
var nulls = 0;
var i = 0;
    for(i; i < arr.length; i++) {
        if(arr[i] % 2 === 0 && arr[i] !== 0 && arr[i] !== null) {
            even++;
        } else if(arr[i] % 2 !== 0) {
            odd++;
        } else if(arr[i] === 0) {
            nulls++;
        } 
    }
    return ([even, odd, nulls]);
}
console.log(evenOrOdd([1,0]));
module.exports = evenOrOdd;