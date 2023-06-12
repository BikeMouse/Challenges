##The method is supposed to remove even numbers from the list and return a list that contains the odd numbers.

##However, there is a bug in the method that needs to be resolved.



def kata_13_december(lst): 
    output = []
    for i in lst:
        if i % 2 != 0:
            output.append(i)
    return output