#Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

#The Task
#Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
#Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

#Possible invalid inputs include:

#IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
#IP_ADDRESS_NOT_FOUND - ip address not in the database
#IP_ADDRESS_REQUIRED - no ip address was supplied

def greet(language):
    language = str(language)
    greets = ['Welcome','Vitejte','Velkomst','Welkom','Tere tulemast','Tervetuloa','Welgekomen','Bienvenue','Willkommen','Failte','Benvenuto','Gaidits','Laukiamas','Witamy','Bienvenido','Valkommen','Croeso']
    languages = ['english','czech','danish','dutch','estonian','finnish','flemish','french','german','irish','italian','latvian','lithuanian','polish','spanish','swedish','welsh']
    output = ''
    for i in range(len(languages)):
        if language.lower() == languages[i].lower(): output += greets[i]
    if len(output) == 0: return 'Welcome'
    return output