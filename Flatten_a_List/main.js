"use strict";

function flatList(array){
  return array.reduce((pre,cur) => !Array.isArray( cur ) ? [...pre,cur] : [...pre,...flatList(cur)],[]); 
}

    console.log(flatList([1, 2, 3]), [1, 2, 3], "First");
    console.log(flatList([1, [2, 2, 2], 4]), [1, 2, 2, 2, 4], "Second");
    console.log(flatList([[[2]], [4, [5, 6, [6], 6, 6, 6], 7]]), [2, 4, 5, 6, 6, 6, 6, 6, 7], "Third");
    console.log(flatList([-1, [1, [-2], 1], -1]), [-1, 1, -2, 1, -1], "Four");
