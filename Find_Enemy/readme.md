# [Find Enemy](https://js.checkio.org/mission/find-enemy/)

The mission is in Collecting Mode. In order to see solutions of other users, you should share your own solutions first. You will see solutions of other users through Random Review only.

**Find distance and direction to enemy in a HEX-grid**

**HEX-grid**

![HEX-grid](https://js-static.checkio.org/media/task/media/6295f059ad25454795538034cd280758/grid.png)

**Absolute Directions**

![Absolute Directions](https://js-static.checkio.org/media/task/media/6295f059ad25454795538034cd280758/directions.png)

**Relative Directions**

* if your absolute directions is "N"

![Relative Directions](https://js-static.checkio.org/media/task/media/6295f059ad25454795538034cd280758/relative_directions.png)

**Input:** three arguments, your corrent coordinates, your current absolute direction, enemy's coordinates.

**Output:** list, relative direction to the enemy and distance to the enemy .

**Example:**

```
findEnemy('B2', 'S', 'B4') == ['F', 2]

```

![example](https://js-static.checkio.org/media/task/media/6295f059ad25454795538034cd280758/example.png)

**How it is used:**

War-game design using hex-grid

**Precondition:**
'A1' ≤ coordinates ≤ 'Z9'.
direction in ('N', 'NE', 'SE', 'S', 'SW', 'NW').
your coordinates ≠ enemy's coordinates.

