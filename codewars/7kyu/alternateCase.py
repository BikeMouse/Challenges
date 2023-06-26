#Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD


def alternate_case(s):
    output = ''
    for i in range(len(s)):
        if s[i] == s[i].upper():
            output += s[i].lower()
        elif s[i] == s[i].lower():
            output += s[i].upper()
        else:
            output += s[i]
    return output