"use strict";

function isFamily(tree) {
    const family = {};
    for( let ele of tree ) {
        if ( ele[0] === ele[1] ) return false;
        if ( !family[ele[0]] ) family[ele[0]] = {};
        if ( !family[ele[0]].son ) family[ele[0]].son = [];
        if ( family[ele[0]].son.find( (item => item === family[ele[1]]) ) === undefined ) family[ele[0]].son.push(ele[1]);
        if ( !family[ele[1]] ) family[ele[1]] = {};
        if ( !family[ele[1]].father ) family[ele[1]].father = [];
        if ( family[ele[1]].father.find( (item => item === family[ele[0]]) ) === undefined ) family[ele[1]].father.push(ele[0]);
    }
    let noFather = 0;
    console.log(family);
    for( let name in family ) {
        if ( family[name].father === undefined ) {
            noFather++;
        } else if ( family[name].father.length > 1 ) {
            return false;
        } else if ( family[name].son !== undefined && family[name].son.find((item) => item === family[name].father[0]) !== undefined ) {
            return false;
        }
    }
    if ( noFather === 1 ) return true;
    return false;
}

    console.log(isFamily([
        ["Logan","Mike"],["Alexander","Jack"],["Jack","Alexander"]
    ]) === false, 'loop');


    console.log(isFamily([
      ['Logan', 'Mike'],
      ['Mike', 'Jack'],
      ['Jack', 'Logan'],
    ]) === false, 'loop');

    console.log(isFamily([
      ["Logan","William"],["Logan","Jack"],["Mike","Mike"]
    ]) === false, 'loop');

    console.log(isFamily([
      ['Logan', 'Mike']
    ]) === true, 'One father, one son');
    console.log(isFamily([
      ['Logan', 'Mike'],
      ['Logan', 'Jack']
    ]) === true, 'Two sons');
    console.log(isFamily([
      ['Logan', 'Mike'],
      ['Logan', 'Jack'],
      ['Mike', 'Alexander']
    ]) === true, 'Grandfather');
    console.log(isFamily([
      ['Logan', 'Mike'],
      ['Logan', 'Jack'],
      ['Mike', 'Logan']
    ]) === false, 'Can you be a father for your father?');
    console.log(isFamily([
      ['Logan', 'Mike'],
      ['Logan', 'Jack'],
      ['Mike', 'Jack']
    ]) === false, 'Can you be a father for your brather?');
    console.log(isFamily([
      ['Logan', 'William'],
      ['Logan', 'Jack'],
      ['Mike', 'Alexander']
    ]) === false, 'Looks like Mike is stranger in Logan\'s family');
