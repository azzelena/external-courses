"use strict";
var key;
var newProp;
function doesThisPropertyExistinObject(str, obj) {
    for(key in obj) {
        if(key !== str) {
            newProp = obj;
            newProp[str] = 'new';
        } else if(key === str) {
            newProp = obj;
        }
    }
    return newProp;
}
module.exports = doesThisPropertyExistinObject;