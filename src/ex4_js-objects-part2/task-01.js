"use strict";
var res = 0;
function findPropinPrototype(propName,obj){
    var objPrototype = Object.create(obj);
    objPrototype.myName = 'Elena';
    objPrototype.age = '25';
    for(propName in objPrototype) {
        if(objPrototype.hasOwnProperty(propName)) {
          res = res + 1;  
         }
     }
  return res;
}
module.exports = findPropinPrototype;
console.log(findPropinPrototype('age',{'name': 'Elena', 'age': '21'}));