'use strict';

function binaryCount(number){
  return number.toString(2).split('').filter( item => item === '1' ).length;
}

console.log(binaryCount(4), 1);
console.log(binaryCount(15), 4);
console.log(binaryCount(1), 1);
console.log(binaryCount(1022), 9);