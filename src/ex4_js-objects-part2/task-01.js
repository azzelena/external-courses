"use strict";
var objPrototype;
function findPropinPrototype(propName,obj){
        if(!objPrototype.hasOwnProperty(propName) && propName in obj) {
        return obj[propName]; 
    }
  return undefined;
}
module.exports = findPropinPrototype;
