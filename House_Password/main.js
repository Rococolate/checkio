"use strict";

function housePassword(data){

    if ( data.length < 10 ) return false;
    if ( data.search(/\d/) === -1 ) return false;
    if ( data.search(/[a-z]/) === -1 ) return false;
    if ( data.search(/[A-Z]/) === -1 ) return false;
 
    return true;
}

    console.log(housePassword("A1213pokl"), false, "1st example");
    console.log(housePassword("bAse730onE4"), true, "2nd example");
    console.log(housePassword("asasasasasasasaas"), false, "3rd example");
    console.log(housePassword("QWERTYqwerty"), false, "4th example");
    console.log(housePassword("123456123456"), false, "5th example");
    console.log(housePassword("QwErTy911poqqqq"), true, "6th example");
