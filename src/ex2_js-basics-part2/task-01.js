function numberOrString(num) {
    var type;
    if(typeof num === 'string') {
        type = 'string';
    } else if(typeof num === 'number') {
        type = 'number';
    } 
    return type;
}
module.exports = numberOrString;
