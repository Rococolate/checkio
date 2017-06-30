"use strict";

function letterQueue(commands){
  const f = (queue,command) => {
    let q;
    if ( Array.isArray(queue) ) q = [...queue];
    const [ c , data ] = command.split(" ");
    if ( c === "PUSH" ) return [...q,data];
    if ( c === "POP" && q && q[0] !== "" ) {q.shift(); return [...q]}
    return []; 
  };
  return commands.reduce((acc,cur) => f(acc,cur),[]).join("");
}

    console.log(letterQueue(["PUSH A", "POP", "POP", "PUSH Z", "PUSH D", "PUSH O", "POP", "PUSH T"]), "DOT", "dot example");
    console.log(letterQueue(["POP", "POP"]), "", "Pop, Pop, empty");
    console.log(letterQueue(["PUSH H", "PUSH I"]), "HI", "Hi!");
    console.log(letterQueue([]), "", "Nothing");
