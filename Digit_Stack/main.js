'use strict';

function digitStack(commands){
  let sum = 0;
  let array = [];
  if ( commands.length === 0 ) return sum;
  
  const cook = command => {
    const cmd = command.split(' ')[0];
    const num = Number(command.split(' ')[1]);
    if ( cmd === 'PUSH') {
      array.push(num);
    }
    if ( cmd === 'POP' ) {
      if ( array.length > 0 ) {
        sum += array.pop();
      } 
    }
    if ( cmd === 'PEEK' ) {
      if ( array.length > 0 ) {
        sum += array[array.length - 1];
      }
    }
  }

  commands.forEach(cook);

  return sum;
}

console.log(digitStack(["PUSH 3", "POP", "POP", "PUSH 4", "PEEK","PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"]),8, "Example")