"use strict";

function goodRadix(number){
    if ( number === "" ) return 0;
    const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberArray = String(number).toUpperCase().split("").reverse().map((item)=>alphabet.indexOf(item));
    const sortNumberArray = [...numberArray].sort((a,b)=>b-a);
    // console.log(numberArray)
    // console.log(sortNumberArray)
    if ( sortNumberArray[0] < 0 || sortNumberArray[sortNumberArray.length - 1] < 0 ) return 0;
    const k = Number(sortNumberArray[0]) + 1;
    return find(numberArray, k);
}

function find(numberArray,k){
    // console.log(k);
    if ( k > 36 || k < 1 ) return 0;

    const decimalValue = numberArray.reduce((acc,cur,index)=>{
        return acc + cur * Math.pow(k,index);
    },0);
    // console.log(decimalValue);
    if ( decimalValue % ( k - 1 ) === 0 ) return k;
    return find(numberArray,++k);

}
// console.log(goodRadix("A23B"));
    console.log(goodRadix("18"), 10, "Simple decimal");
    console.log(goodRadix("1010101011"), 2, "Any number is divisible by 1");
    console.log(goodRadix("222"), 3, "3rd test");
    console.log(goodRadix("A23B"), 14, "It's not a hex");
    console.log(goodRadix("IDDQD"), 0, "k is not exist");
    // console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
