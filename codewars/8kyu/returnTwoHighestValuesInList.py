# In this kata, your job is to return the two distinct highest values 
# in a list. If there're less than 2 unique values, return as many of them, as 
# possible.

# The result should also be ordered from highest to lowest.

# Examples:

# [4, 10, 10, 9]  =>  [10, 9]
# [1, 1, 1]  =>  [1]
# []  =>  []

def two_highest(arg1):
    if len(arg1) == 0:
        return []
    unique = []
    for i in arg1:
        if i not in unique:
            unique.append(i)
    if len(unique) == 1:
        return unique
    unique.sort()
    result = unique[-2:]
    return [result[1],result[0]]