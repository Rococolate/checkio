# [Wall Keeper](https://js.checkio.org/mission/wall-keeper/)

In this time, you need to implement the solver of [Lights Out](https://en.wikipedia.org/wiki/Lights_Out_(game)) the puzzle.

rule of the puzzle :

- This puzzle uses 5x5 grid. Each panel has two state ( light on or off ).
- if you click a panel, the panel and adjacent (4 directions) panels will flip. ( on <=> off )
- The goal is all panels lights off.


![Wall Keeper](https://js-static.checkio.org/media/task/media/a9ed004e21c343a2adbb27d45a828c15/illustration.png)

**Input:**  ON-state panels as a list of Integers.

**Output:** Clicked panels as a list of Integers.


**Example:**

```
wallKeeper([5, 7, 13, 14, 18]) == [2, 6, 7, 8, 10, 12, 15, 18, 24, 25]
```

**How it is used:** Get the puzzle's automatic answer.

**Precondition:** all([1 <= p <= 25 for p in on_panels])
It does not have to be the shortest answer
