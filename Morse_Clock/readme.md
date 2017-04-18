# [Morse Clock](https://js.checkio.org/mission/morse-clock/)

![Morse Clock](https://js-static.checkio.org/media/task/media/26fec33151af4b5ea47449aed3f3b167/title.png)

"di-dah di-di-di-dit di-dah-dah di-dah-dah-dah dah-di-dit dah-di-di-dah", sound of Morszelizer clanked out loud.

"What're you doing?" Nikola asked curiously.

I'm sending our time logs for the last expedition to headquarters, but it's not an easy task..." Stephen grumbled, "Can you imagine that with all the computer power at our disposal, I STILL have to convert this message to Morse-code with only an on/off button... Hrmph... what a pain." He grumbled at the inconvenience.

"Let me look at it." Nikola offered his help, "It looks like a pretty easy solution, we could automate the process."

"Oh.. you hero of my day." Stephen started excitedly. "So, how do we start it?"

"With JavaScript!" Nikola exclaimed.

Help Stephen to create a module for converting a normal time string to a morse time string. As you can see in the illustration, a gray circle means on, while a white circle means off. Every digit in the time string contains a different number of slots. The first digit for the hours has a length of 2 while the second digit for the hour has a length of 4. The first digits for the minutes and seconds have a length of 3 while the second digits for the minutes and seconds have a length of 4. Every digit in the time is converted to binary representation. You will convert every on (or 1) signal to dash ("-") and every off (or 0) signal to dot (".").

![Morse Clock](https://js-static.checkio.org/media/task/media/26fec33151af4b5ea47449aed3f3b167/morse_clock.png)

An time string could be in the follow formats: "hh:mm:ss", "h:m:s" or "hh:m:ss". The "missing" digits are zeroes. For example, "1:2:3" is the same as "01:02:03".

The result will be a morse time string with specific format:

"h h : m m : s s"

where each digits represented as sequence of "." and "-"

**Input:**  A normal time string as a string (unicode).

**Output:** The morse time string as a string.

**Example:**

```
morseClock("10:37:49") == ".- .... : .-- .--- : -.. -..-"
morseClock("21:34:56") == "-. ...- : .-- .-.. : -.- .--."
morseClock("00:1:02") == ".. .... : ... ...- : ... ..-."
morseClock("23:59:59") == "-. ..-- : -.- -..- : -.- -..-"  
```

**How it is used:**  Did you see the binary clocks task earlier? This is can be a fun gift for any geek. We tried to combine the old good Morse code with a binary clock in this task, and now you can create the new more complex binary clock, which doesn't show time -- but makes morse style bips and beeps. ;-)

**Precondition:**

time_string contains correct time.
