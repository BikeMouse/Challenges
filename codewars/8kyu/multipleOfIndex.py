# Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

def multiple_of_index(arr):
    output = []
    for i in range(len(arr)):
        if i == 0 and arr[i] == 0:
            output.append(arr[i])
        elif i != 0:
            if arr[i]%i == 0:
                output.append(arr[i])
    return output