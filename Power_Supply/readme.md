# [Power Supply](https://js.checkio.org/mission/power-supply/)

Several power plants in this area exploded last night. We don’t know why yet. Our engineering team is still trying to figure it out. I think it was some kind of a bug. I told them not to release anything only 5 minutes before leaving for the day.

Anyway…

For emergencies, we have a couple of mobile power stations. Help us to figure out which cities blacked out so we can send them there as soon as possible.

Fortunately, we still have the original plan of the electricity grid and already removed the blown up power plants from it. The updated plan now shows the remaining power plants, their supply range as well as their connections to the power grid. This should be enough for you to figure out which cities are not getting power.

You are given the power grid and power-plant's information (plant-number and supply-range). You should find out which cities blacked out. A power plant can supply itself and connected cities with power, but the range is limited.



![example](https://js-static.checkio.org/media/task/media/b256af8d119140f7add8e3e7556b4f09/example.png)


**Input:** Two arguments. The first one is the network, represented as a list of connections. Each connection is a list of two nodes that are connected. A city or power plant can be a node. Each city or power plant is a unique string. The second argument is a dict where keys are power plants and values are the power plant's range.

**Output:** A list of strings Each string is the name of a blacked out city.

**Example:**

```
powerSupply([['p1', 'c1'], ['c1', 'c2']], {'p1': 1}) == ['с2']
powerSupply([['c0', 'c1'], ['c1', 'p1'], ['c1', 'c3'], ['p1', 'c4']], {'p1': 1}) == ['c0', 'c3']
powerSupply([['p1', 'c1'], ['c1', 'c2'], ['c2', 'c3']], {'p1': 3}) == []
```

**How it is used:**  This concept shows how to model and examine various network configurations. The idea does not only apply to computer networks however, it can also be a model for the spread of disease or dissemination of rumors.


**Precondition:** required



