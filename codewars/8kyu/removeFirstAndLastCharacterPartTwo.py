# You are given a string containing a sequence of character sequences
# separated by commas.

# Write a function which returns a new string containing the same character
# sequences except the first and the last ones but this time separated by spaces.

# If the input string is empty or the removal of the first and last items
# would cause the resulting string to be empty, return 
# an empty value (represented as a generic value None in the examples below).

# Examples
# "1,2,3"      =>  "2"
# "1,2,3,4"    =>  "2 3"
# "1,2,3,4,5"  =>  "2 3 4"

# ""     =>  None
# "1"    =>  None
# "1,2"  =>  None


def array(string):
    arr = string.split(',')
    if len(arr) <= 2: return None
    result = []
    for i in range(len(arr)):
        if i != 0 and i != len(arr)-1:
            result.append(arr[i])
    result = ' '.join(result)
    return result