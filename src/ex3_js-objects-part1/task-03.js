"use strict";
var key;
var flaq = false;
    function doesThisPropertyExist(str, obj) {
        for(key in obj) {
            if(key === str) {
                flaq = true;
            } else {
                flaq = false;
            }
        }
        return flaq;
    }
    module.exports = doesThisPropertyExist;
