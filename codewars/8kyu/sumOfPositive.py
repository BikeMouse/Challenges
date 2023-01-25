# You get an array of numbers, return the sum of all of the positives ones.

# Example [1,-4,7,12] => 1 + 7 + 12 = 20

# Note: if there is nothing to sum, the sum is default to 0.

def positive_sum(arr):
    if len(arr) == 0: return 0
    sum = 0
    for i in range(len(arr)):
        if arr[i] > 0:
            sum += arr[i]
    return sum