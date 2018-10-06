function numberOrString(num) {
    if(typeof num === 'string') {
        return 'string';
    } else if(typeof num === 'number') {
        return 'number';
    }
}
console.log(numberOrString('gg'));