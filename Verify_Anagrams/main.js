"use strict";

function verifyAnagrams(first_word, second_word){
  const f = x => x.toLocaleLowerCase().replace(/\s/g,"").split("").sort().join("");
  return format(first_word) === format(second_word);
}


    console.log(verifyAnagrams("Programming", "Gram Ring Mop"), true, "Gram of code");
    console.log(verifyAnagrams("Hello", "Ole Oh"), false, "Hello! Ole Oh!");
    console.log(verifyAnagrams("Kyoto", "Tokyo"), true, "The global warming crisis of 3002");
    console.log(verifyAnagrams("Kings Lead Hat","Talking Heads"), true, "The global warming crisis of 3002");
