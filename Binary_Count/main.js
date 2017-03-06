'use strict';

function binaryCount(number){
  // number.toString(2) 转换成二进制显示
  return number.toString(2).split('').filter( item => item === '1' ).length;
}

console.log(binaryCount(4), 1);
console.log(binaryCount(15), 4);
console.log(binaryCount(1), 1);
console.log(binaryCount(1022), 9);