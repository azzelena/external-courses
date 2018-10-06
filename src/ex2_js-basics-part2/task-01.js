var result;
function numberOrString(num) {
    if(typeof num === 'string') {
       result = 'string';
    } else if(typeof num === 'number') {
        result = 'number';
    } else {
        result = 'undefined';
    }
    return result;
}
module.exports = numberOrString;
