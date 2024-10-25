def disemvowel(string):
        
    s = ""
    for c in string:
        if c.lower() not in "aeiou":
            s += c
    return s