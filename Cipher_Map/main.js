"use strict";

function recallPassword(grille, password){
    const PW = password.map(item => {
        return item.split('');
    });
    const GL0 = grille.map(item => {
        return item.split('');
    });
    const GL1 = array45(GL0);
    const GL2 = array45(GL1);
    const GL3 = array45(GL2);
    return [ GL0, GL1, GL2, GL3 ].reduce((acc,pre) => {
        return acc + pre.reduce((ac,pr,i) => {
            return ac + pr.reduce((a,p,j) => {
                const l = p === 'X' ? PW[i][j] : '';
                return a + l;
            },'');
        },'');
    },'');
}

function array45(array){
    const arr = array.map(item => {
        return item.map(it => it);
    });

    arr.forEach((item,i) => {
        item.forEach((it,j) => {
            arr[i][j] = array[array.length - 1 - j ][i]
        }); 
    });
    return arr;
}


    console.log(recallPassword(
        ['X...',
         '..X.',
         'X..X',
         '....'],
        ['itdf',
         'gdce',
         'aton',
         'qrdi']) === 'icantforgetiddqd', "First Example");
    console.log(recallPassword(
        ['....',
         'X..X',
         '.X..',
         '...X'],
        ['xhwc',
         'rsqx',
         'xqzz',
         'fyzr']) === 'rxqrwsfzxqxzhczy', "Second Example");
