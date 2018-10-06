var delitel;
var res;
function isSimpleOrCompound (num) {
    if(num <= 1000) {
if((num % 2 === 0) && (num !== 2)) {
    res = 'Число ' + num + ' - составное число';
}
else if(num === 2) {
    res = 'simple';
}
else {
           delitel = Math.round(Math.sqrt(num));
            if(num % delitel === 0) {
                res = 'Число ' + num + ' - составное число';
            }
            else if(num % delitel !== 0) {
                res = 'Число ' + num + ' - простое число';
            }
}
}
    else {
        res = 'Данные неверны';
    }
    return res;
}
console.log(isSimpleOrCompound(1400));
module.exports = isSimpleOrCompound;