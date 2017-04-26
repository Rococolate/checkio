"use strict";
const start = Date.now();
function lifeCounter(marbles, step) {
    if ( step <= 0 ) return counter(marbles);
    const nextGeneration = check(cook(marbles));
    return lifeCounter(nextGeneration,--step);
}

function counter(marbles){
  console.log('time:',Date.now() - start);
  return marbles.reduce((pre,ele) => pre.concat(ele) , [])
                .reduce((pre,ele) => pre + Number(ele) , 0);
}

function cook(marbles){
  const newMarbles = checkDirection(marbles);
  return newMarbles.map((ele,i) => {
    return ele.map((item,j) => {
      return rule(item, i, j, newMarbles);
    });
  });
}

function check(marbles){
  let [ left, right, bottom, top ] = [ 0, 0, 0, 0 ];
  let m = marbles.map((ele,i,array) => {
    return ele.map((item,j,arr) => {
      if ( i === 0 || i === 1 ) top += item;
      if ( i === array.length - 1 || i === array.length - 2 ) bottom += item;
      if ( j === 0 || j === 1 ) left += item;
      if ( j === arr.length - 1 || j === arr.length - 2 ) right += item;
      return item;
    });
  });
  if ( top === 0 ) m.shift();
  if ( bottom === 0 ) m.pop();
  if ( left === 0 ) m = m.map(item => {item.shift();return item});
  if ( right === 0 ) m = m.map(item => {item.pop();return item});
  
  return m;
}

function checkDirection(marbles){
  let need = false;
  const opt = {
    top:false,
    right:false,
    bottom:false,
    left:false
  }
  marbles.forEach((ele,i,array) => {
    ele.forEach((item,j,arr) => {
      if ( i === 0 && item === 1 ) { need = true; opt.top = true }
      if ( j === 0 && item === 1 ) { need = true; opt.left = true }
      if ( j === arr.length - 1 && item === 1 ) { need = true; opt.right = true }
      if ( i === array.length - 1 && item === 1 ) { need = true; opt.bottom = true }
    });
  });
  if ( need ) return newMb(marbles,opt);
  return marbles;
}

function newMb(marbles,opt){
  let m = marbles.map(ele => [...ele]);
  const before = Array(m[0].length).join(',').split(',').map(item => 0);
  const after  = Array(m[0].length).join(',').split(',').map(item => 0);
  if ( opt.top ) m = [after,...m];
  if ( opt.bottom ) m = [...m,before];
  if ( opt.left ) m = m.map(item => [0,...item]);
  if ( opt.right ) m = m.map(item => [...item,0]);
  return m;
  // return [after,...m,before].map(item => [0,...item,0]);
}

function rule(item, i, j, marbles){
  const neighbours = findNeighbours(marbles, i, j);
  if ( item === 0 ) {
    if ( neighbours === 3 ) {
      return 1;
    } else {
      return 0
    }
  }
  if ( item === 1 ) {
    if ( neighbours < 2 || neighbours >= 4 ) {
      return 0;
    } else {
      return 1;
    }
  }
}

function findNeighbours(marbles, i, j){
  return [
    find(marbles, i - 1, j - 1),
    find(marbles, i - 1, j    ),
    find(marbles, i - 1, j + 1),
    find(marbles, i    , j - 1),
    find(marbles, i    , j + 1),
    find(marbles, i + 1, j - 1),
    find(marbles, i + 1, j    ),
    find(marbles, i + 1, j + 1),
  ].reduce((pre,ele) => pre + ele ,0);
}

function find(marbles, i, j){
  if ( marbles[i] && marbles[i][j] ) return marbles[i][j];
  return 0;
}
    console.log(lifeCounter([ [0, 1, 0],
                              [0, 0, 1],
                              [1, 1, 1] ], 10000) , "Glider");

    // console.log(lifeCounter([ [0, 1, 0, 0, 0, 0, 0],
    //                           [0, 0, 1, 0, 0, 0, 0],
    //                           [1, 1, 1, 0, 0, 0, 0],
    //                           [0, 0, 0, 0, 0, 1, 1],
    //                           [0, 0, 0, 0, 0, 1, 1],
    //                           [0, 0, 0, 0, 0, 0, 0],
    //                           [1, 1, 1, 0, 0, 0, 0] ], 4) === 15, "Example");
    // console.log(lifeCounter([ [0, 1, 0, 0, 0, 0, 0],
    //                           [0, 0, 1, 0, 0, 0, 0],
    //                           [1, 1, 1, 0, 0, 0, 0],
    //                           [0, 0, 0, 0, 0, 1, 1],
    //                           [0, 0, 0, 0, 0, 1, 1],
    //                           [0, 0, 0, 0, 0, 0, 0],
    //                           [1, 1, 1, 0, 0, 0, 0] ], 15) === 14, "Little later");
    // console.log(lifeCounter([ [0, 1, 0],
    //                           [0, 0, 1],
    //                           [1, 1, 1] ], 50) === 5, "Glider");
    // console.log(lifeCounter([ [1, 1, 0, 1, 1],
    //                           [1, 1, 0, 1, 1],
    //                           [0, 0, 0, 0, 0],
    //                           [1, 1, 0, 1, 1],
    //                           [1, 1, 0, 1, 1] ], 100) === 16, "Stones");
