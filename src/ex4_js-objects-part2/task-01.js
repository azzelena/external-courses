"use strict";
function findPropinPrototype(propName,obj){
        if(!objPrototype.hasOwnProperty(propName) && propName in obj) {
        return obj[propName]; 
    }
  
}
module.exports = findPropinPrototype;
console.log(findPropinPrototype('age',{'name': 'Elena', 'age': '21'}));