'use strict';
const WIDTH = 60;
const HEIGHT = 52;
const X = 1.5;
const Y = Math.cos(Math.PI/6);

const alphabet = 'ABCDEFGHIJKLMPONQRSTUVWXYZ';
const number = '0123456789';
const fa = a =>  alphabet.indexOf(a);
const map = alphabet.split('').map( (item,i) => {
  return number.split('').map( j => {
    return {name:item + j};
  });
});

map.forEach( (item, i) => {
  item.forEach( (it, j) => {
    cook(it, i, j);
  });
});

function cook(obj, i, j){
  let N  = null; 
  let S  = null;
  let NW = null;
  let SW = null;
  let NE = null;
  let SE = null;
  const a = i % 2;
  obj.left = i * X;
  obj.top = (j * 2 + a ) * Y ;
  
  if ( map[i][j-1] )                 N = map[i][j-1]; 
  if ( map[i][j+1] )                 S = map[i][j+1]; 
  if ( map[i-1] && map[i-1][j-1+a] ) NE = map[i-1][j-1+a];
  if ( map[i-1] && map[i-1][j+a] )   SE = map[i-1][j+a];
  if ( map[i+1] && map[i+1][j-1+a] ) NW = map[i+1][j-1+a];
  if ( map[i+1] && map[i+1][j+a] )   SW = map[i+1][j+a];

  obj.x = i;
  obj.y = j;
  obj['N'] = N;
  obj['S'] = S;
  obj['NW'] = NW;
  obj['SW'] = SW;
  obj['NE'] = NE;
  obj['SE'] = SE;
  
  obj.find = function(enemy,count){
    // console.log(this.name);
    if (enemy === this.name ) return count;
    count ++;
    const x = this.x;
    const y = this.y;
    const ex = fa(enemy.split('')[0]);
    const ey = enemy.split('')[1];

    if ( ex === x && ey >  y )        { return  this['S'].find(enemy,count);} // S
    if ( ex === x && ey <  y )        { return  this['N'].find(enemy,count);} // N
    if ( ex >   x && y - ey >=  1-a ) { return this['NW'].find(enemy,count);} // NW
    if ( ex >   x && y - ey <   1-a ) { return this['SW'].find(enemy,count);} // SW
    if ( ex <   x && y - ey >=  1-a ) { return this['NE'].find(enemy,count);} // NE
    if ( ex <   x && y - ey <   1-a ) { return this['SE'].find(enemy,count);} // SE
    
  }

  obj.DOM = createDOM(obj,i,j);
  document.body.appendChild(obj.DOM);
} 

function createDOM(obj,i,j){
  
  let div = document.createElement('div');
  div.__source__ = obj;
  div.className = 'HEX';
  div.innerHTML = obj.name;
  div.title = obj.top + ',' + obj.left;
  div.style.width = WIDTH / 2 + 'px';
  div.style.height = HEIGHT + 'px';
  div.style.left = WIDTH * i * 0.8 + 2 + WIDTH / 3+ 'px';
  div.style.top = (HEIGHT + 2 ) * j + ( (i % 2) * HEIGHT / 2 ) + 50 + 'px';
  div.onclick = function(){
    var obj = this.__source__;
    obj['N'].DOM.className = 'HEX red';
    obj['S'].DOM.className = 'HEX red';
    obj['NE'].DOM.className = 'HEX red';
    obj['NW'].DOM.className = 'HEX red';
    obj['SW'].DOM.className = 'HEX red';
    obj['SE'].DOM.className = 'HEX red';
  }
  return div;
}

// console.log(map);

function findEnemy(you, dir, enemy) {
  const yx = fa(you.split('')[0]);
  const yy = you.split('')[1];
  const ex = fa(enemy.split('')[0]);
  const ey = enemy.split('')[1];
  const me = map[yx][yy];
  const en = map[ex][ey];
  const back = me.find(enemy, 0);
  const _angle = angle(me, en);
  const direction = enemyDirection(dir, _angle);
  // console.log(back,_angle,direction);
  return [direction,back];
}

function angle(me,en){
  let deg =  Math.round(Math.atan((en.top-me.top)/(en.left-me.left)) / Math.PI * 180) ;
  if ( en.left >= me.left  && deg < 0 ) deg = 360 + deg;
  if ( en.left < me.left ) deg = 180 + deg;
  return deg; 
}

function enemyDirection(dir, enemyAngle){
  if ( dir === 'N' ) {
    switch(true) {
      case (enemyAngle <= 30  || enemyAngle >= 330): return 'R';
      case (enemyAngle <= 210 && enemyAngle >= 150): return 'L';
      case (enemyAngle >  210 && enemyAngle <  330): return 'F';
      case (enemyAngle >  30  && enemyAngle <  150): return 'B';
    }
  }
  if ( dir === 'NE' ) {
    switch(true) {
      case (enemyAngle <= 90  && enemyAngle >= 30 ): return 'R';
      case (enemyAngle <= 270 && enemyAngle >= 210): return 'L';
      case (enemyAngle >  270 || enemyAngle <  30 ): return 'F';
      case (enemyAngle >  90  && enemyAngle <  210): return 'B';
    }
  }
  if ( dir === 'SE' ) {
    switch(true) {
      case (enemyAngle <= 150 && enemyAngle >= 90 ): return 'R';
      case (enemyAngle <= 330 && enemyAngle >= 270): return 'L';
      case (enemyAngle >  330 || enemyAngle <  90 ): return 'F';
      case (enemyAngle >  150 && enemyAngle <  270): return 'B';
    }
  }
  if ( dir === 'S' ) {
    switch(true) {
      case (enemyAngle <= 210 && enemyAngle >= 150): return 'R';
      case (enemyAngle <= 30  || enemyAngle >= 330): return 'L';
      case (enemyAngle >  30  && enemyAngle <  150): return 'F';
      case (enemyAngle >  210 && enemyAngle <  330): return 'B';
    }
  }
  if ( dir === 'SW' ) {
    switch(true) {
      case (enemyAngle <= 270 && enemyAngle >= 210): return 'R';
      case (enemyAngle <= 90  && enemyAngle >= 30 ): return 'L';
      case (enemyAngle >  90  && enemyAngle <  210): return 'F';
      case (enemyAngle >  270 || enemyAngle <  30 ): return 'B';
    }
  }
  if ( dir === 'NW' ) {
    switch(true) {
      case (enemyAngle <= 330 && enemyAngle >= 270): return 'R';
      case (enemyAngle <= 150 && enemyAngle >= 90 ): return 'L';
      case (enemyAngle >  150 && enemyAngle <  270): return 'F';
      case (enemyAngle >  330 || enemyAngle <  90 ): return 'B';
    }
  }
}

console.log("'G5', 'N', 'Q0' : ", findEnemy('G5', 'N', 'Q0') );
console.log("'G5', 'N', 'G3' : ", findEnemy('G5', 'SW', 'G3') );
console.log("'G5', 'N', 'H3' : ", findEnemy('G5', 'SW', 'H3') );
console.log("'G5', 'N', 'I4' : ", findEnemy('G5', 'SW', 'I4') );
console.log("'G5', 'N', 'I5' : ", findEnemy('G5', 'SW', 'I5') );
console.log("'G5', 'N', 'I6' : ", findEnemy('G5', 'SW', 'I6') );
console.log("'G5', 'N', 'H6' : ", findEnemy('G5', 'SW', 'H6') );
console.log("'G5', 'N', 'G7' : ", findEnemy('G5', 'SW', 'G7') );
console.log("'G5', 'N', 'F6' : ", findEnemy('G5', 'SW', 'F6') );
console.log("'G5', 'N', 'E6' : ", findEnemy('G5', 'SW', 'E6') );
console.log("'G5', 'N', 'E5' : ", findEnemy('G5', 'SW', 'E5') );
console.log("'G5', 'N', 'E4' : ", findEnemy('G5', 'SW', 'E4') );
console.log("'G5', 'N', 'F3' : ", findEnemy('G5', 'SW', 'F3') );
console.log("'G5', 'N', 'J6' : ", findEnemy('G5', 'N', 'J6') );
console.log("'I6', 'N', 'I5' : ", findEnemy('I6', 'N', 'I5') );
console.log("'I6', 'N', 'J5' : ", findEnemy('I6', 'N', 'J5') );
console.log("'I6', 'N', 'J6' : ", findEnemy('I6', 'N', 'J6') );
console.log("'I6', 'N', 'I7' : ", findEnemy('I6', 'N', 'I7') );
console.log("'I6', 'N', 'H6' : ", findEnemy('I6', 'N', 'H6') );
console.log("'I6', 'N', 'H5' : ", findEnemy('I6', 'N', 'H5') );
console.log("'I6', 'N', 'I6' : ", findEnemy('I6', 'N', 'I6') );


