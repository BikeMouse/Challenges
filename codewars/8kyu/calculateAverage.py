# Write a function which calculates the average of the numbers in a given list.

# Note: Empty arrays should return 0.

def find_average(numbers):
    if len(numbers) == 0: return 0
    sum = 0
    for i in range(len(numbers)):
        sum += numbers[i]
    return sum/len(numbers)