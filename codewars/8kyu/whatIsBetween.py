# Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

def between(a,b):
    output = []
    for e in range(a,b+1):
        output.append(e)
    return output