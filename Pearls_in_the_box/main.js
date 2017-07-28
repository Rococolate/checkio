"use strict";
function boxProbability(marbles, step) {
    const PWB = pwb(marbles);
    const arr = split([{p:1,w:PWB.w.length,b:PWB.b.length}],step - 1);
    const p = probability(arr);
    return Number(p.toFixed(2));
}

function split(arr, step){
    if ( step === 0 ) return arr;
    const res = [];
    arr.forEach((cur)=>{
        if (cur.w > 0) {
            res.push({
                p:cur.p * ( cur.w / ( cur.w + cur.b ) ),
                w:cur.w - 1,
                b:cur.b + 1,
            });
        }
        if (cur.b > 0) {
            res.push({
                p:cur.p * ( cur.b / ( cur.w + cur.b ) ),
                w:cur.w + 1,
                b:cur.b - 1
            });
        }
    });
    return split(res,--step);
}

function probability(arr){
    return arr.reduce((acc,cur)=>{
        return acc + cur.p * ( cur.w / ( cur.w + cur.b ) );
    },0);
}

function pwb(marbles){
    const w = [];
    const b = [];
    marbles.split("").forEach(item => {
        if (item === "w") w.push(item);
        if (item === "b") b.push(item);
    });

    return {
        w,
        b,
    }
}



    // console.log(boxProbability('bbw', 3), 0.48, "First");
    // console.log(boxProbability('wwb', 3), 0.52, "Second");
    // console.log(boxProbability('www', 3), 0.56, "Third");
    // console.log(boxProbability('bbbb', 1), 0, "Fifth");
    // console.log(boxProbability('wwbb', 4), 0.5, "Sixth");
    // console.log(boxProbability('bwbwbwb', 5), 0.48, "Seventh");
    console.log(boxProbability('www', 20));
