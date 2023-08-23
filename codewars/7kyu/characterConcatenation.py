# Given a string, you progressively need to concatenate the first letter 
# from the left and the first letter to the right and "1", then the second 
# letter from the left and the second letter to the right and "2", and so on.

# If the string's length is odd drop the central element.

# For example:

# char_concat("abcdef")    == 'af1be2cd3'
# char_concat("abc!def")   == 'af1be2cd3' # same result

import math

def char_concat(word):
    output = ''
    first = ''
    second = ''
    a = 0
    if len(word) % 2 != 0:
        a = math.floor(len(word)/2)
        first = list(word[0:a])
        second = list(word[a+1:][::-1])
    else :
        print('grade')
        a = math.floor(len(word)/2)
        first = list(word[0:a])
        second = list(word[a:][::-1])
    for i in range(len(first)):
        output += first[i]
        output += second[i]
        output += str(i+1)
    return output