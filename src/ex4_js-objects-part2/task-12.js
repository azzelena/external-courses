"use strict";
function roundingNum(num1,num2) {
  var res = +(num1 + num2).toFixed(3);
  return res;
}
module.exports = roundingNum;