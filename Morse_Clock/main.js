"use strict";
// my answer
function morseClock(data) {
  const hash = [2,4,3,4,3,4];
  const D = analyseData(data).reduce((acc,pre) => {
    return [...acc,pre.split('')[0],pre.split('')[1]];
  },[]);
  return D.reduce((acc,pre,idx) => {
    const l = (idx === 1 || idx === 3 ? ' : ' : ' ');
    return acc + selectMap(hash[idx])(Number(pre)) + l; 
  },'').trimRight();
}

function analyseData(data){
  let [ hh , mm , ss ] = data.split(':').map(Number);
  if ( hh < 10 ) hh = "0" + hh;
  if ( mm < 10 ) mm = "0" + mm;
  if ( ss < 10 ) ss = "0" + ss;
  return [ hh , mm , ss ].map(String);
}

function selectMap(num){
  switch(num) {
    case 2:
      return mapTable2;
      break;
    case 3:
      return mapTable3;
      break;
    case 4:
      return mapTable4;
      break;
    default:
      return mapTable4;
      break;
  }
}

function mapTable2(number){
  switch(number) {
    case 0:
      return '..';
      break;
    case 1:
      return '.-';
      break;
    case 2:
      return '-.';
      break;
    default: 
      return '..';
      break;
  }
}

function mapTable3(number){
  switch(number) {
    case 0:
      return '...';
      break;
    case 1:
      return '..-';
      break;
    case 2:
      return '.-.';
      break;
    case 3:
      return '.--';
      break;
    case 4:
      return '-..';
      break;
    case 5:
      return '-.-';
      break;
    case 6:
      return '--.';
      break;
    default: 
      return '...';
      break;
  }
}

function mapTable4(number){
  switch(number) {
    case 0:
      return '....';
      break;
    case 1:
      return '...-';
      break;
    case 2:
      return '..-.';
      break;
    case 3:
      return '..--';
      break;
    case 4:
      return '.-..';
      break;
    case 5:
      return '.-.-';
      break;
    case 6:
      return '.--.';
      break;
    case 7:
      return '.---';
      break;
    case 8:
      return '-...';
      break;
    case 9:
      return '-..-';
      break;
    default: 
      return '....';
      break;
  }
}

// the best answer 
// 
// function morseClock(a) {
//     var b = ".......-..-...--.-...-.-.--..----...-..-", c = "24-34-34";
//     return a                             // 00:1:02
//         .split(":")                      // ['00', '1', '02']
//         .map(a => ("0" + a).substr(-2))  // ['00', '01', '02']
//         .join(":").split("")             // ['0', '0', ':', '0', '1', ':', '0', '2']
//         .map((a, d) => b.substr(4 * (+a + 1) - c[d], c[d]) || ":")
//                                          // ['..', '....', ':', ...
//         .join(" ");
// }

    console.log(morseClock("10:37:49") === ".- .... : .-- .--- : -.. -..-", "1st");
    console.log(morseClock("21:34:56") === "-. ...- : .-- .-.. : -.- .--.", "2nd");
    console.log(morseClock("00:1:02") === ".. .... : ... ...- : ... ..-.", "3rd");
    console.log(morseClock("23:59:59") === "-. ..-- : -.- -..- : -.- -..-", "4th");
