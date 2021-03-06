"use strict";







function findNearEnemy(enemies,point){
  const row_letter = '87654321';
  const col_letter = 'abcdefgh';
  const loactionToStr = (i,j) => col_letter[j]+row_letter[i];
  const formatLocation = (str) => {
    return {
      i:row_letter.indexOf(str[1]),
      j:col_letter.indexOf(str[0]),
    }
  }
  const L = formatLocation(point);
  const A = [];
  for (let i = L.i ; i >= 0 ; i --){ // N
    if (enemies.indexOf(col_letter[L.j]+row_letter[i]) !== -1) {A.push(loactionToStr(i,L.j));break;}
  }
  for (let i = L.i ; i < 8 ; i ++){ // S
    if (enemies.indexOf(col_letter[L.j]+row_letter[i]) !== -1) {A.push(loactionToStr(i,L.j));break;}
  }
  for (let j = L.j ; j >= 0 ; j --){ // W
    if (enemies.indexOf(col_letter[j]+row_letter[L.i]) !== -1) {A.push(loactionToStr(L.i,j));break;}
  }
  for (let j = L.j ; j < 8 ; j ++){ // E
    if (enemies.indexOf(col_letter[j]+row_letter[L.i]) !== -1) {A.push(loactionToStr(L.i,j));break;}
  }
  return A;
}

function removeEnemies(enemies,remove){
  return enemies.filter((item) => {
    return remove.indexOf(item) === -1;
  });
}

function formatArray(arr){
  const a = [];
  for (let i = 0; i < arr.length; i ++){
    if (arr[i].length >0) {
      for (let j = 0 ; j < arr[i].length ; j ++){
        if (arr[i][j].length >0) a.push(arr[i][j]);
      }
    }
  }
  return a;  
}

function berserkRook(marbles, enemies) {
  const _marbles = marbles;
  let answer = marbles;
  let a = [marbles];
  let b = [];
  for(let i = 0 ; true; i++){
    for(let j = 0; j < a.length ; j ++ ){
      let l = a[j].length;
      let arr_item = a[j][l-2] + a[j][l-1];
      let _next = findNearEnemy(removeEnemies(enemies,a[j]),arr_item).map(it => a[j]+','+it);
      b.push(_next);
    }
    a = formatArray(b);
    b = null;
    b = [];
    a.forEach(item => {
      let l = item.length;
      if (l > answer.length) answer = item;
    });
    if (i > 100000) break;
    if (a.length === 0 ) break;
  }
  answer = answer.split(',').filter(item => item !== _marbles);
  return answer.length;
}

console.log(berserkRook('d5', [
  // 'a1','a2','a3','a4','a5','a6','a7','a8',
  // 'b1','b2','b3','b4','b5','b6','b7','b8',
  'c1','c2','c3','c4','c5','c6','c7','c8',
  'd1','d2','d3','d4',     'd6','d7','d8',
  'e3','e4','e5','e6','e7','e8',
  // 'e1','e2','e3','e4','e5','e6','e7','e8',
  // 'f1','f2','f3','f4','f5','f6','f7','f8',
  // 'g1','g2','g3','g4','g5','g6','g7','g8',
  // 'h1','h2','h3','h4','h5','h6','h7','h8',
]), 5, "First");
// console.log(berserkRook('d3', ['d6', 'b6', 'c8', 'g4', 'b8', 'g6']), 5, "First");
// console.log(berserkRook('a2', ['f6', 'f2', 'a6', 'f8', 'h8', 'h6']), 6, "Second");
// console.log(berserkRook('a2', ['f6', 'f8', 'f2', 'a6', 'h6']), 4, "Third");
// console.log(berserkRook('c5', ['h5']), 1, "Third");
// console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
