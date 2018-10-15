var arr;
function arrayFunc(arr) { 
 var l = arr.length;  
   for(i = 0; i < arr.length; i++) { 
    console.log(arr[i]);
    }
    console.log(l);
};
console.log(arrayFunc([1,2]));
module.exports = arrayFunc;