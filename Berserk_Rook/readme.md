# [Berserk Rook](https://js.checkio.org/mission/berserk-rook/)

![Berserk Rook](https://js-static.checkio.org/media/task/media/aaeadc1ba38346c2a105cabfe9ee5022/title.png)

As you may know, chess is an ancient game for which almost everyone has at least a basic understanding of the rules. Chess is a two-player strategy game played on a checkered game board laid out in eight rows (called ranks and denoted with numbers 1 to 8) and eight columns (called files and denoted with letters a to h) of squares. Each square of the chessboard is identified by a unique coordinate pair â a letter and a number (ex, "a1", "h8", "d6").

For this mission let's look at rooks, a dangerous shock unit which can be used for a swift thrust or for a dense defence. The rook moves horizontally or vertically, through any number of unoccupied squares, but may not leap over other pieces. As with capturing using any other unit, the rook captures by occupying the square on which the target enemy piece sits.

For this mission you have one berserk rook facing off against an army of enemy rooks. The berserk rook can only move if it will capture an enemy unit. So on each turn it will move and capture until there are no enemy targets left where it will take one "empty" step and stop.

You are given the position of your berserk rook and the positions of the enemy rooks. Your goal is capture as many units as possible without stopping. Each move in your sequence should capture an enemy unit. The result will be the maximum possible number of enemy rooks captured.



![example](https://js-static.checkio.org/media/task/media/aaeadc1ba38346c2a105cabfe9ee5022/rooks.png)


**Input:** Two arguments. Berserk rook position as a string and enemy rook positions as a set of strings.

**Output:** The maximum possible number of captured enemy rooks as an integer.

**Example:**

```
berserkRook('d3', ['d6', 'b6', 'c8', 'g4', 'b8', 'g6']) == 5
berserkRook('a2', ['f6', 'f2', 'a6', 'f8', 'h8', 'h6']) == 6
berserkRook('a2', ['f6', 'f8', 'f2', 'a6', 'h6']) == 4
```

**How it is used:**  For chess and any almost any other game it's important to think several steps forward. Here we have created a simple situation illustrating this concept. The basic idea is to think about optimisation problems using models.


**Precondition:** 0 < enemies ≤ 8


