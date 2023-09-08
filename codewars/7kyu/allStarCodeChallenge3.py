# Create a function that takes a string argument and returns that same
# string with all vowels removed (vowels are "a", "e", "i", "o", "u").

# Example (Input --> Output)

# "drake" --> "drk"
# "aeiou" --> ""
# remove_vowels("drake") // => "drk"
# remove_vowels("aeiou") // => ""

def remove_vowels(strng):
    strng = strng.lower()
    output = ''
    for i in range(len(strng)):
        if strng[i] != 'a' and strng[i] != 'e' and strng[i] != 'i' and strng[i] != 'o' and strng[i] != 'u':
            output += strng[i]
    return output