"use strict";

const rows    = ['8', '7', '6', '5', '4', '3', '2', '1'];
const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

let map = rows.map( row => {
  return columns.map( col => {
    return {name:`${col}${row}`,value:0};
  });
});

function safePawns(data) {
  setMapAll(0);
  setMap(data);
  return checkSafe();
}

function setMapAll(num){
  map.forEach(item => {
    item.forEach(it => {
      it.value = num;
    });
  });
}

function setMap(array){
  array.forEach(item => {
    let j = columns.findIndex( value => value === item.split('')[0] );
    let i = rows.findIndex( value => value === item.split('')[1] );
    if ( i !== -1 && j !== -1 ) map[i][j].value = 1;
  });
}

function checkSafe(){
  let count = 0;
  map.forEach( (item,i) => {
    item.forEach( (it,j) => {
      if ( it.value === 0 ) return;
      if ( map[i + 1] && map[i + 1][j - 1] && map[i + 1][j - 1].value === 1 ) return count++;
      if ( map[i + 1] && map[i + 1][j + 1] && map[i + 1][j + 1].value === 1 ) return count++;
    });
  });
  return count;
}

console.log(safePawns(["b4", "d4", "f4", "c3", "e3", "g5", "d2"]), 6, "First");
console.log(safePawns(["b4", "c4", "d4", "e4", "f4", "g4", "e5"]), 1, "Second");

if ( typeof module === 'object' ) {
  module.exports = safePawns;
}
