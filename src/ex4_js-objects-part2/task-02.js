"use strict";
function emptyObj() {
    var names = Object.create(null);
return names;
}
module.exports = emptyObj;
console.log(emptyObj());
