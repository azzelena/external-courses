"use strict";
var key;
var objectReference = {};
function copyObj(obj) {
    for(key in obj) {
        if(obj.hasOwnProperty(key)) {
        objectReference[key] = obj[key];
    }
    }
    return objectReference;
}
module.exports = copyObj;