# Write a simple function to check if the string contains the word hallo in different languages.

def validate_hello(greetings):
    greetings = greetings.lower()
    lang = ['hello','ciao','salut','hallo','hola','ahoj','czesc']
    if greetings.__contains__(lang[0]):
        return True
    elif greetings.__contains__(lang[1]):
        return True
    elif greetings.__contains__(lang[2]):
        return True
    elif greetings.__contains__(lang[3]):
        return True
    elif greetings.__contains__(lang[4]):
        return True
    elif greetings.__contains__(lang[5]):
        return True
    elif greetings.__contains__(lang[6]):
        return True
    else:
        return False