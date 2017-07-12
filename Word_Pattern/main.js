"use strict";

function checkCommand(pattern, command){
    const addZero = (x , y ) => { 
        let z = x;
        for(let i = 0 ; i < y ; i ++ ) {
            z = "0" + z;
        } 
        return z;
    }
    const f = c => c.replace(/\d/g,"_").replace(/[^0-9_]/g,"1").replace(/_/g,"0");
    const binary = addZero(pattern.toString(2),command.length - pattern.toString(2).length);
    const combination = f(command);
    return binary === combination;
}


/*best*/
//function checkCommand(pattern, command){
//    return pattern == parseInt(command.replace(/\d/g,'0').replace(/\D/g,'1'),2);
// }


    console.log(checkCommand(42, "12a0b3e4"), true, "42 is the answer");
    console.log(checkCommand(101, "ab23b4zz"), false, "one hundred plus one");
    console.log(checkCommand(0, "478103487120470129"), true, "Any number");
    console.log(checkCommand(127, "Checkio"), true, "Uppercase");
    console.log(checkCommand(7, "Hello"), false, "Only full match");
    console.log(checkCommand(8, "a"), false, "Too short command");
    console.log(checkCommand(5, "H2O"), true, "Water");
    console.log(checkCommand(42, "C2H5OH"), false, "Yep, this is not the Answer");
