# [What is wrong with this family?](https://js.checkio.org/mission/wrong-family/)

Michael always knew that there was something wrong with his family. Many strangers were introduced to him as part of his family.

Michael should figure this out. He spent almost a month parsing family archives. He has all father-son connections of his entire family collected in one place.

With all that data Michel can easily understand who the strangers are. Or maybe the only stranger in this family is Michael? Let’s see.

You have a list of family relationships between father and son. Every element on this list has two elements. The first is the father's name, the second is a son’s name. All names in the family are unique. Check if the family tree is correct. There are no strangers in the family tree. All connections in the family are natural.

![What is wrong with this family?](https://js-static.checkio.org/media/task/media/eab48e48b8fa481eaf70ebe5ac99ee42/schema.png)

**Input:**  list of lists. Every element has two strings. List has at least one element

**Output:** bool. Is family tree correct.

**Example:**

```
isFamily([
  ['Logan', 'Mike']
]) == true
isFamily([
  ['Logan', 'Mike'],
  ['Logan', 'Jack']
]) == true
isFamily([
  ['Logan', 'Mike'],
  ['Logan', 'Jack'],
  ['Mike', 'Alexander']
]) == true
isFamily([
  ['Logan', 'Mike'],
  ['Logan', 'Jack'],
  ['Mike', 'Logan']
]) == false  // Can you be a father for your father?
isFamily([
  ['Logan', 'Mike'],
  ['Logan', 'Jack'],
  ['Mike', 'Jack']
]) == false  // Can you be a father for your brather?
isFamily([
  ['Logan', 'William'],
  ['Logan', 'Jack'],
  ['Mike', 'Alexander']
]) == false  // Looks like Mike is stranger in Logan's family 
```

**Precondition:** 1 <= len(tree) < 100
