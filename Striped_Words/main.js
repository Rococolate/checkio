"use strict";


function stripedWords(text){
  return text.split(/[^A-Za-z0-9]/).reduce( (pre,cur) => isStripedWords(cur) ? [...pre,cur] : [...pre] ,[]).length;
  // return text.split(/[^A-Za-z0-9]/).reduce( (pre,cur) => isStripedWords(cur) ? [...pre,cur] : [...pre] ,[]);  
}

function isStripedWords(word){
  
  if ( word === "" ) return false;
  if ( (/\d/g).test(word) ) return false;
  if ( word.length <= 1 ) return false;

  const odd = word.split("").reduce( (pre,cur,index) => index % 2 === 1 ? [...pre,checkVowels(cur)] : [...pre] , []).sort();
  const even = word.split("").reduce( (pre,cur,index) => index % 2 === 0 ? [...pre,checkVowels(cur)] : [...pre] , []).sort();

  if ( odd[0] !== odd[odd.length - 1] ) return false;
  if ( even[0] !== even[even.length - 1] ) return false;
  if ( odd[0] === even[0] ) return false;

  return true;
}

function checkVowels(letter){
  const vowels = "aeiouyAEIOUY";
  if ( vowels.indexOf(letter) !== -1 ) return 1;
  return 0;
}


    console.log(stripedWords("1st 2a ab3er root rate"), 1);
    console.log(stripedWords("My name is ..."), 3, "All words are striped");
    console.log(stripedWords("Hello world"), 0, "No one");
    console.log(stripedWords("A quantity of striped words."), 1, "Only of");
    console.log(stripedWords("Dog,cat,mouse,bird.Human."), 3, "Dog, cat and human");
