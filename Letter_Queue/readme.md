# [Letter Queue](https://js.checkio.org/mission/letter-queue/)

In computer science, a queue is a particular kind of data type in which the entities in the collection are kept in order and the principal operations on the collection are the addition of entities to the rear terminal position (enqueue or push), and removal of entities from the front terminal position (dequeue or pop). This makes the queue a First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed. This is equivalent to the requirement that once a new element is added, all elements that were added before have to be removed before the new element can be removed.

We will emulate the queue process with Python. You are given a sequence of commands:
- "PUSH X" -- enqueue X, where X is a letter in uppercase.
- "POP" -- dequeue the front position. if the queue is empty, then do nothing.
The queue can only contain letters.

You should process all commands and assemble letters which remain in the queue in one word from the front to the rear of the queue.

Let's look at an example, here’s the sequence of commands:
["PUSH A", "POP", "POP", "PUSH Z", "PUSH D", "PUSH O", "POP", "PUSH T"]

|Command|Queue| Note|
|:......:|:......:|:.......:|
|PUSH A|  A |Added "A" in the empty queue|
|POP|   |Removed "A"|
|POP|   |The queue is empty already|
|PUSH Z|  Z|| 
|PUSH D|  ZD||  
|PUSH O|  ZDO|| 
|POP| DO||  
|PUSH T|  DOT| The result|

**Input:** A sequence of commands as a list of strings.

**Output:** The queue remaining as a string.


**Example:**


```
letterQueue(["PUSH A", "POP", "POP", "PUSH Z", "PUSH D", "PUSH O", "POP", "PUSH T"]) == "DOT"
letterQueue(["POP", "POP"]) == ""
letterQueue(["PUSH H", "PUSH I"]) == "HI"
letterQueue([]) == ""

```

**How it is used:**  Queues provide services in computer science, transportation, and operations research where various entities such as data, objects, persons, or events are stored and held to be processed later. In these contexts, the queue performs the function of a buffer.

**Precondition:** 
0 ≤ len(commands) ≤ 30;
all(re.match("\APUSH [A-Z]\Z", c) or re.match("\APOP\Z", c) for c in commands)


