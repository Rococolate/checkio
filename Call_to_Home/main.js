"use strict";

function totalCost(calls){
  const callsObj = {};
  const allDate = [];
  const formatMinutes = x => Math.ceil(Number(x)/60);
  calls.sort().forEach( item => {
    const [date, time, duration] = item.split(" ");
    if (!callsObj[date]) {
      allDate.push(date);
      callsObj[date] = []
    };
    callsObj[date].push(formatMinutes(duration));
  });
  return allDate.reduce((pre,cur) => pre + oneDayCost(callsObj[cur]) ,0);
}

function oneDayCost(arr){
  let oneCoinMinutes = 100;
  // console.log(arr);
  return arr.reduce((pre,cur)=>{
    let cost;
    if ( oneCoinMinutes <= 0 ) return pre + (cur * 2);
    if ( oneCoinMinutes - cur < 0 ) {
      cost = oneCoinMinutes + ( cur - oneCoinMinutes ) * 2;
      oneCoinMinutes = oneCoinMinutes - cur;
      return pre + cost;
    }
    if ( oneCoinMinutes > 0 ) {
      cost = cur;
      oneCoinMinutes = oneCoinMinutes - cur;
      return pre + cost;
    }
  },0);
}


    console.log(totalCost(["2014-01-01 01:12:13 181",
                       "2014-01-02 20:11:10 600",
                       "2014-01-03 01:12:13 6009",
                       "2014-01-03 12:13:55 200"]), 124, "Base example");
    console.log(totalCost(["2014-02-05 01:00:00 1",
                       "2014-02-05 02:00:00 1",
                       "2014-02-05 03:00:00 1",
                       "2014-02-05 04:00:00 1"]), 4, "Short calls but money...");
    console.log(totalCost(["2014-02-05 01:00:00 60",
                       "2014-02-05 02:00:00 60",
                       "2014-02-05 03:00:00 60",
                       "2014-02-05 04:00:00 6000"]), 106, "Precise calls");
