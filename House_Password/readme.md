# [House Password](https://js.checkio.org/mission/house-password/)

Stephan and Sophia forget about security and use simple passwords for everything. Help Nikola develop a password security check module. The password will be considered strong enough if its length is greater than or equal to 10 symbols, it has at least one digit, as well as containing one uppercase letter and one lowercase letter in it. The password contains only ASCII latin letters or digits.


**Input:** A password as a string (Unicode for python 2.7).


**Output:** Is the password safe or not as a boolean or any data type that can be converted and processed as a boolean. In the results you will see the converted results.

**Example:**


```
housePassword('A1213pokl') == false
housePassword('bAse730onE') == true
housePassword('asasasasasasasaas') == false
housePassword('QWERTYqwerty') == false
housePassword('123456123456') == false
housePassword('QwErTy911poqqqq') == true
```

**How it is used:**  If you are worried about the security of your app or service, you can check your users' passwords for complexity. You can use these skills to require that your users passwords meet more conditions (punctuations or unicode).


**Precondition:** re.match("[a-zA-Z0-9]+", password)
0 < len(password) ≤ 64



