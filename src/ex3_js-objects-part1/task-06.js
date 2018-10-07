function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
 }
 module.exports = deepClone;
 console.log(deepClone({1: 'qq', 2: 'ff'}));
