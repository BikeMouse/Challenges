# This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

# Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

def derive(coefficient, exponent):
    num = str(coefficient*exponent)
    newExponent = str(exponent-1)
    return num+'x^'+newExponent