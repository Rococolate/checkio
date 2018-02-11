"use strict";

function powerSupply(network, power_plants) {
    function delRepeat(array){
      return array.reduce( (pre,cur) => pre.indexOf(cur) === -1 ? [...pre,cur] : [...pre],[]);
    }

    const power_plants_array = [];
    const _network = delRepeat(network.reduce( (pre,cur) => [...pre,...cur],[]));
    for ( let name in power_plants ) {
        power_plants_array.push({
            name:name,
            level:power_plants[name],
        })
    }

    function findContact(network,name,arr){
        if (arr.length === 0) return [name];
        // console.log(arr);
        const _pre = arr.reduce( (pre,cur) => {
            return [...pre,...cur]
        },[]);
        return network.filter( item => {
            return _pre.indexOf(item[0]) !== -1 || _pre.indexOf(item[1]) !== -1; 
        }).reduce( (pre,cur) => [...pre,...cur],[]);
        
    }

    function findPowerSupply(network,name,level){
        if ( level === 0 ) return [name];
        const level_area = [...Array(level),''].map(item => []);
        const power_supply = level_area.reduce( (pre,cur) => {
            return [...pre,findContact(network,name,pre)]
        },[]);
        // console.log(power_supply);
        return power_supply[power_supply.length -1];
        // console.log(level_area.length,level_area);
    }

    const has_power_supply = power_plants_array.map( item => findPowerSupply(network,item.name,item.level)).reduce( (pre,cur) => [...pre,...cur],[]);
    // console.log(has_power_supply);
    // console.log(_network);
    return _network.filter( item => has_power_supply.indexOf(item) === -1);
}


    console.log(
        powerSupply([['p1', 'c1'], ['c1', 'c2']], {'p1': 1}).sort(),
        ['c2'],
        "one blackout"
    )
    console.log(
        powerSupply([['c0', 'c1'], ['c1', 'p1'], ['c1', 'c3'], ['p1', 'c4']], {'p1': 1}).sort(),
        ['c0', 'c3'].sort(),
        "two blackout"
    )
    console.log(
        powerSupply([['p1', 'c1'], ['c1', 'c2'], ['c2', 'c3']], {'p1': 3}).sort(),
        [],
        "no blackout"
    )
    console.log(
        powerSupply([['c0', 'p1'], ['p1', 'c2']], {'p1': 0}).sort(),
        ['c0', 'c2'].sort(),
        "weak power-plant"
    )
    console.log(
        powerSupply([['p0', 'c1'], ['p0', 'c2'], ['c2', 'c3'], ['c3', 'p4'], ['p4', 'c5']],
          {'p0': 1, 'p4': 1}).sort(),
        [],
        "cooperation"
    )
    console.log(
        powerSupply([['c0', 'p1'], ['p1', 'c2'], ['c2', 'c3'], ['c2', 'c4'], ['c4', 'c5'],
                     ['c5', 'c6'], ['c5', 'p7']],
                     {'p1': 1, 'p7': 1}).sort(),
        ['c3', 'c4', 'c6'].sort(),
        "complex cities 1"
    )
    console.log(
        powerSupply([['p0', 'c1'], ['p0', 'c2'], ['p0', 'c3'],
                       ['p0', 'c4'], ['c4', 'c9'], ['c4', 'c10'],
                       ['c10', 'c11'], ['c11', 'p12'], ['c2', 'c5'],
                       ['c2', 'c6'], ['c5', 'c7'], ['c5', 'p8']],
                      {'p0': 1, 'p12': 4, 'p8': 1}).sort(),
        ['c6', 'c7'].sort(),
        "complex cities 2"
    )
    console.log(
        powerSupply([['c1', 'c2'], ['c2', 'c3']], {}).sort(),
        ['c1', 'c2', 'c3'].sort(),
        "no power plants"
    )
    console.log(
        powerSupply([['p1', 'c2'], ['p1', 'c4'], ['c4', 'c3'], ['c2', 'c3']],
                    {'p1': 1}).sort(),
        ['c3'],
        "circle"
    )
    console.log(
        powerSupply([['p1', 'c2'], ['p1', 'c4'], ['c2', 'c3']], {'p1': 4}).sort(),
        [],
        "more than enough"
    )
    console.log("Push!! Push Check NOW!!");
