# Bird Language

The mission is in Collecting Mode. In order to see solutions of other users, you should share your own solutions first.

![enter image description here](https://js-static.checkio.org/media/task/media/a915602e547b44929080791968897169/byrd03.png)

Stephan has a friend who happens to be a little mechbird. Recently, he was trying to teach it how to speak basic language. Today the bird spoke its first word: "hieeelalaooo". This sounds a lot like "hello", but with too many vowels. Stephan asked Nikola for help and he helped to examine how the bird changes words. With the information they discovered, we should help them to make a translation module.

The bird converts words by two rules:

- after each consonant letter the bird appends a random vowel letter (l â la or le);
- after each vowel letter the bird appends two of the same letter (a â aaa);

**Vowels letters == "aeiouy".**

You are given an ornithological phrase as several words which are separated by white-spaces (each pair of words by one whitespace). The bird does not know how to punctuate its phrases and only speaks words as letters. All words are given in lowercase. You should translate this phrase from the bird language to something more understandable.

**Input:** A bird phrase as a string.

**Output:** The translation as a string.

**Example:**

```
translate("hieeelalaooo") == "hello"
translate("hoooowe yyyooouuu duoooiiine") == "how you doin"
translate("aaa bo cy da eee fe") == "a b c d e f"
translate("sooooso aaaaaaaaa") == "sos aaa"
    
```

**How it is used:** This a similar cipher to those used by children when they invent their own "bird" language. Now you will be ready to crack the code.

**Precondition:** re.match("\A([a-z]+\ ?)+(?<!\ )\Z", phrase)
A phrase always has the translation.
