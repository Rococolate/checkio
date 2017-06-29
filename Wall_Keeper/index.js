'use strict';

function wallKeeper(on_panels,level=5){
  const matrix = translate(on_panels,level)
  const firstRow = firstRowFactory(matrix[0].length);
  const answer = [];
  firstRow.forEach(item => {
    let a = check(item,matrix);
    if ( a.count === 0 ) answer.push(a.list);
  });
  // console.log(JSON.stringify(answer));
  return answer;
}

function translate(on_panels,level){
  const matrix = [];
  for(var i = 0 ; i < level ; i ++ ){
    matrix[i] = []
    for(var j = 0 ; j < level ; j ++ ){
      matrix[i][j] = 0;
    }
  }
  on_panels.forEach(item => {
    let i = ~~ ((item - 1) / level);
    let j = (item - 1) % level;
    matrix[i][j] = 1;
  });

  return matrix;
}

function firstRowFactory(level){
  const firstRow = [
    [...(Array(level).join(',').split(',').map(()=>0))]
  ];

  let max = level;
  function loop() {
    for(let i = 0 ; i < max ; i ++ ){
      let row = [];
      for(let j = 0 ; j < level ; j ++ ){
        let num = 0;
        if ( j >= i && j <= (level - max + i) ) num = 1;
        row.push(num);
      }
      firstRow.push(row);
    } 
    max --;
    if ( max === 0 ) return;
    loop();
  }
  loop();
  return firstRow;
}

function check(firstRow,input){
  const array = input.map(ele => ele.map(item => item));
  const l = [];
  firstRow.forEach((ele,index) => {
    if (ele === 1) {click(array,0,index) ; l.push(index + 1);}
  });
  
  for(let i = 0 ; i < array.length - 1 ; i ++){
    array[i].forEach((ele,index)=>{
      if (ele === 1) {click(array,i+1,index) ; l.push(array[i].length * (i + 1) + index + 1);}
    });
  }

  return {
    count:counter(array),
    list:[...l]
  }
}

function click (array,i,j) {
  if (array[i] && typeof(array[i][j]) === 'number' ) array[i][j] = Number(!array[i][j]);
  if (array[i] && typeof(array[i][j - 1]) === 'number' ) array[i][j - 1] = Number(!array[i][j - 1]);
  if (array[i] && typeof(array[i][j + 1]) === 'number' ) array[i][j + 1] = Number(!array[i][j + 1]);
  if (array[i - 1] && typeof(array[i - 1][j]) === 'number' ) array[i - 1][j] = Number(!array[i - 1][j]);
  if (array[i + 1] && typeof(array[i + 1][j]) === 'number' ) array[i + 1][j] = Number(!array[i + 1][j]);
}

function counter(array){
  var count = 0;
  for(var i = 0 ; i < array.length ; i ++ ){
    for(var j = 0 ; j < array[i].length ; j ++ ){
      count += array[i][j];
    }
  }
  return count;
}
export default wallKeeper;
