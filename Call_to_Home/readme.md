# [Call to Home](https://js.checkio.org/mission/calls-home/)


Nicola believes that Sophia calls to Home too much and her phone bill is much too expensive. He took the bills for Sophia's calls from the last few days and wants to calculate how much it costs.

The bill is represented as an array with information about the calls. Help Nicola to calculate the cost for each of Sophia calls. Each call is represented as a string with date, time and duration of the call in seconds in the follow format:
```
"YYYY-MM-DD hh:mm:ss duration"
```
The date and time in this information are the start of the call.
Space-Time Communications Co. has several rules on how to calculate the cost of calls:

- First 100 (one hundred) minutes in one day are priced at 1 coin per minute;
- After 100 minutes in one day, each minute costs 2 coins per minute;
- All calls are rounded up to the nearest minute. For example 59 sec ≈ 1 min, 61 sec ≈ 2 min;
- Calls count on the day when they began. For example if a call was started 2014-01-01 23:59:59, then it counted to 2014-01-01;

For example:
```
2014-01-01 01:12:13 181
2014-01-02 20:11:10 600
2014-01-03 01:12:13 6009
2014-01-03 12:13:55 200
```

First day -- 181s≈4m -- 4 coins;
Second day -- 600s=10m -- 10 coins;
Third day -- 6009s≈101m + 200s≈4m -- 100 + 5 * 2 = 110 coins;
Total -- 124 coins.


**Input:** Information about calls as a tuple of strings.

**Output:** The total cost as an integer.

**Example:**


```
totalCost(["2014-01-01 01:12:13 181",
            "2014-01-02 20:11:10 600",
            "2014-01-03 01:12:13 6009",
            "2014-01-03 12:13:55 200"]) == 124
```

**How it is used:**  This mission will teach you how to parse and analyse various types data. Sometimes you don't need the full data and should single out only important fragments.

**Precondition:** 0 < len(calls) ≤ 30
0 < call_duration ≤ 7200
The bill is sorted by datetime.


