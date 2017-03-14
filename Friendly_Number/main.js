'use strict';

function friendlyNumber(number, options){
  const defaults = {
    base : 1000,
    decimals : 0,
    suffix : '',
    powers : ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'],
  }
  let option = Object.assign({}, defaults);
  if ( typeof options === 'object' ) {
    Object.assign(option, options);
  }
  loop(number, 0);
  return String(number);
  function loop(num, count){
    if ( Math.abs(num) < option.base || count >= option.powers.length - 1 ) {
      number = toFixed(num, option.decimals) + option.powers[count] + option.suffix;
    } else {
      loop(num/option.base, ++count);
    }
  }
  function toFixed(num, decimals){
    if ( decimals === 0 ) return String(num).split('.')[0];
    return num.toFixed(decimals);
  }
}

console.log(friendlyNumber(102), '102', "102");
console.log(friendlyNumber(10240), '10k', "10k");
console.log(friendlyNumber(12341234, {decimals: 1}), '12.3M', "12.3M");
console.log(friendlyNumber(12461, {decimals: 1}), '12.5k', "12.5k");
console.log(friendlyNumber(1024000000, {base: 1024, suffix: 'iB'}), '976MiB', "976MiB");
console.log(friendlyNumber(12000000, {decimals : 3}), '12.000M', "12.000M");
console.log(friendlyNumber(-150, {base: 100, powers : ['', 'd', 'D']}), '-1d', "-1d");
console.log(friendlyNumber(-155, {decimals : 1, base: 100, powers : ['', 'd', 'D']}), '-1.6d', "-1.6d");
console.log(friendlyNumber(255000000000, {powers : ['', 'k', 'M']}), '255000M', "255000M");

if ( typeof module === 'object' ) {
  module.exports = friendlyNumber;
}

