"use strict";
var obj = {name: 'Elena', age: '21'};
var objPrototype = Object.create(obj);
var flaq = false;
function findPropertyInPrototype(propertyName,obj) {
    var key = propertyName;
    for(key in objPrototype) {
       if(objPrototype.hasOwnProperty(key)) {
        flaq = true;
       }
    }
    return flaq;
}
console.log(findPropertyInPrototype('nfame', obj));