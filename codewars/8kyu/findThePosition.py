# When provided with a letter, return its position in the alphabet.

# Input :: "a"

# Ouput :: "Position of alphabet: 1"

def position(alphabet):
    alphabet = alphabet.lower()
    num = ord(alphabet)-96
    return 'Position of alphabet: '+str(num)