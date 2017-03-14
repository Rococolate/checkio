'use strict';

const VOWELS = "aeiouy";

// 不用正则解法
function translate(phrase){
  let array = [];
  phrase.split('').forEach( item => {
    if ( VOWELS.indexOf(item) === -1 ) {
      array.push([item]);
    } else {
      if (array[array.length - 1] && array[array.length - 1][0] === item ) {
        array[array.length - 1].push(item);
      } else {
        array.push([item]);
      }
    }
  }); 
  return array.map( item => check(item) ).join('');
}

function check(array){
  if ( VOWELS.indexOf(array[0]) === -1 ) return array;
  let temp = [];
  array.forEach((item,index) => {
    if ( index % 3 === 2 ) temp.push(item);
  });
  return temp.join('');
}

// 正则解法（最简单）
// function translate(phrase){
//     return phrase
//         .replace(/([^aeiouy ])\w/g,'$1')  // 匹配 两位字符串 前一位是非aeiouy空格第二位是\w(等价于[A-Za-z0-9_]) 用()记录第一位的值，因为是第一个括号用$1表示替 , 然后这匹配到的 两位字符串 被 $1 replace
//         .replace(/([aeiouy]){3}/g,'$1'); // aeiouy 重复3次的 减成一位！
// }

console.log("hieeelalaooo",translate("hieeelalaooo"), "hello", "Hi!");
console.log("hoooowe yyyooouuu duoooiiine",translate("hoooowe yyyooouuu duoooiiine"), "how you doin", "Joey?");
console.log("aaa bo cy da eee fe",translate("aaa bo cy da eee fe"), "a b c d e f", "Alphabet");
console.log("sooooso aaaaaaaaa",translate("sooooso aaaaaaaaa"), "sos aaa", "Mayday, mayday");
console.log("o aaaaaaaa",translate("o aaaaaaaa"));


if ( typeof module === 'object' ) {
  module.exports = translate;
}
