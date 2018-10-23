"use strict";
var key;
function keysAndProperties(obj) {
    for(key in obj) {
        if(obj.hasOwnProperty(key)) {
          console.log('Key: ' + key + ' property: ' + obj[key]);         
        }
    }
}
module.exports = keysAndProperties;