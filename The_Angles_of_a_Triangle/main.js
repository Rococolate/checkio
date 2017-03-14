'use strict';

function triangleAngles (a, b, c) {
  let A = 0;
  let B = 0;
  let C = 0;
  if ( a <= 0 || b <= 0 || c <= 0 ) return [A, B, C];
  if ( a + b <= c || b + c <= a || c + a <= b ) return [A, B, C];
  let _A = ( pow2(b) + pow2(c) - pow2(a) ) / (2 * b * c);
  let _B = ( pow2(c) + pow2(a) - pow2(b) ) / (2 * a * c);
  let _C = ( pow2(a) + pow2(b) - pow2(c) ) / (2 * a * b);
  A = (Math.acos( _A ) / Math.PI * 180).toFixed(2); 
  B = (Math.acos( _B ) / Math.PI * 180).toFixed(2); 
  C = (Math.acos( _C ) / Math.PI * 180).toFixed(2); 
  return [Math.round(A), Math.round(B), Math.round(C)].sort( (a,b) => a-b );
}

function pow2(x){
  return x * x;
}

console.log('triangleAngles (3, 4, 5):',triangleAngles (3, 4, 5));
console.log('triangleAngles (1, 1, 1):',triangleAngles (1, 1, 1));
console.log('triangleAngles (1, 1, 5):',triangleAngles (1, 1, 5));

if ( typeof module === 'object' ) {
  module.exports = triangleAngles;
}