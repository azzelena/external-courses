"use strict";
function findPropinPrototype(propName,obj){
        if(!objPrototype.hasOwnProperty(propName) && propName in obj) {
        return obj[propName]; 
    }
  return undefined;
}
module.exports = findPropinPrototype;