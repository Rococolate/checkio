# [Life Counter](https://js.checkio.org/mission/life-counter/)

![Life Counter](https://js-static.checkio.org/media/task/media/ffb30091a6844e11bd93758eabe33f20/title.png)

[The Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life), also known simply as Life, is a "game" or a cellular automaton devised by the British mathematician John Horton Conway in 1970. The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves or, for advanced players, by creating patterns with particular properties.

The universe within the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
- Any live cell with fewer than two live neighbours dies, as if caused by under-population.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overcrowding.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern (or 0th step) constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seedâbirths and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.

In this mission you should count how many live cell will be on the grid at the Nth tick. You are given an initial position (a fragment of the grid with live cells) as a matrix and a number of the tick N. The matrix is represented as a tuple of tuples where 1 is a live cell and 0 is a dead cell. Don't forget that the grid is infinite in each direction.

![Life Counter](https://js-static.checkio.org/media/task/media/ffb30091a6844e11bd93758eabe33f20/life.svg)

In this example the initial position will be represented as:

[[0, 1, 0, 0, 0, 0, 0],
 [0, 0, 1, 0, 0, 0, 0],
 [1, 1, 1, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 1, 1],
 [0, 0, 0, 0, 0, 1, 1],
 [0, 0, 0, 0, 0, 0, 0],
 [1, 1, 1, 0, 0, 0, 0],]
And if we need to count the live cells for the 4th step, then as we can see from the image above that the answer is 15.

**Input:**  Two arguments. An initial state as a tuple of tuples with integers (0 or 1) and a number for the tick (N) as an integer.

**Output:** The number of live cell for the Nth tick as an integer.



**Example:**

```
lifeCounter([[0, 1, 0, 0, 0, 0, 0],
             [0, 0, 1, 0, 0, 0, 0],
             [1, 1, 1, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 1, 1],
             [0, 0, 0, 0, 0, 1, 1],
             [0, 0, 0, 0, 0, 0, 0],
             [1, 1, 1, 0, 0, 0, 0],], 4) == 15
```

**How it is used:**  This game is an example of a cellular automaton. It's a good tool for modeling. You could add graphics and turn it into your own "Life" game if you wished.

**Precondition:** 0 < tick_n < 1000
3 ≤ len(state) ≤ 20
all(len(row) == len(state[0]) for row in state)
