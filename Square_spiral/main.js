"use strict";

function findDistance(first, second) {
    const f = handle(first);
    const s = handle(second);
    return compute(f,s);
}

function handle(number){
    const n = Math.abs(parseInt(number));
    const fn = (x) => (x*2+1);
    const fn2 = (x) => (x*2+1)*(x*2+1);
    if ( n === 1 ) return {j:1,x:0,y:0}
    for (let i = 0; i < fn2(n) ; i++) {
        if ( n > fn2(i) && n <= fn2(i+1) ) {
            const j = fn(i+1);
            const a = fn(i+1) -1;
            const m = fn2(i+1);
            let x = 0;
            let y = 0;
            const q = ~~((m - n) / a);
            const o = (m - n) % a;
            if ( q === 0 ) { x = 0 ; y = o}
            if ( q === 1 ) { x = a ; y = o}
            if ( q === 2 ) { x = a - o ; y = a}
            if ( q === 3 ) { y = a - o ; x = 0}
            return {j,x,y}
        } 
    }
    return {j:1,x:0,y:0}
}

function compute(f,s){
    // console.log(f)
    // console.log(s)
    let a;
    let b;
    const m = Math.abs(f.j-s.j) / 2; 
    if ( f.j >= s.j ) {
        a = {x:f.x,y:f.y}
        b = {x:s.x+m,y:s.y+m}
    } else {
        a = {x:s.x,y:s.y}
        b = {x:f.x+m,y:f.y+m}
    }

    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) ;
}


    console.log(findDistance(73, 91), 18, "1st example");
    console.log(findDistance(1, 9), 2, "1st example");
    console.log(findDistance(9, 1), 2, "2nd example");
    console.log(findDistance(10, 25), 1, "3rd example");
    console.log(findDistance(5, 9), 4, "4th example");
    console.log(findDistance(26, 31), 5, "5th example");
    console.log(findDistance(50, 16), 10, "6th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
