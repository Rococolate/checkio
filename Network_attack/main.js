"use strict";

function capture(data) {
    const time = 0;
    const security_data = data.map( (item,index) => item[index] );
    // console.log(security_data);

    function findCaptured(security_data) {
        return security_data.reduce( (pre,cur,index) => cur === 0 ? [...pre,index] : [...pre] ,[]);
    }

    function findSpread(captured,data){
        return captured.reduce( (pre,cur) => {
          return data.reduce( (_pre,_cur,index) => {
            return _cur[cur] === 1 && _pre.indexOf(index) === -1 ? [..._pre,index] : [..._pre];
          },pre);
        },[]);
    }

    function checkFinish(spread,security_data) {
        return spread.reduce( (pre,cur) => {
            return pre + security_data[cur];
        },0);
    }

    function changeSecurityData(spread,security_data) {
        return spread.reduce( (pre,cur) => {
            if ( pre[cur] > 0 ) pre[cur] = --pre[cur];
            return pre;
        },[...security_data]);
    }

    function loop(time,security_data,data){
        const captured = findCaptured(security_data);
        const spread = findSpread(captured,data);
        // console.log(captured,spread);
        // console.log(security_data,checkFinish(spread,security_data));
        if ( checkFinish(spread,security_data) === 0 ) return time;
        const next_security_data = changeSecurityData(spread,security_data);
        // console.log(time,next_security_data);
        return loop(++time,next_security_data,data);
    }

    return loop(time,security_data,data);
}


    console.log(capture( [[0, 1, 0, 1, 0, 1],
                          [1, 8, 1, 0, 0, 0],
                          [0, 1, 2, 0, 0, 1],
                          [1, 0, 0, 1, 1, 0],
                          [0, 0, 0, 1, 3, 1],
                          [1, 0, 1, 0, 1, 2]]), 8, "Base example");
    console.log(capture( [[0, 1, 0, 1, 0, 1],
                          [1, 1, 1, 0, 0, 0],
                          [0, 1, 2, 0, 0, 1],
                          [1, 0, 0, 1, 1, 0],
                          [0, 0, 0, 1, 3, 1],
                          [1, 0, 1, 0, 1, 2]]), 4, "Low security");
    console.log(capture( [[0, 1, 1],
                          [1, 9, 1],
                          [1, 1, 9]]), 9, "Small");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
