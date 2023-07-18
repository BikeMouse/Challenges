/*
If you like Taco Bell, you will be familiar with their signature doritos locos taco. They're very good.

Why can't everything be a taco? We're going to attempt that here, turning every word we find into the taco bell recipe with each ingredient.

We want to input a word as a string, and return a list representing that word as a taco.

Key

all vowels (except 'y') = beef

t = tomato

l = lettuce

c = cheese

g = guacamole

s = salsa

NOTE
We do not care about case here. 'S' is therefore equivalent to 's' in our taco.

Ignore all other letters; we don't want our taco uneccesarily clustered or else it will be too difficult to eat.

Note that no matter what ingredients are passed, our taco will always have a shell.


*/

function tacofy(word) {
    let taco = ['shell']
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if ((word[i] == 'a') || (word[i] == 'e') || (word[i] == 'i') || (word[i] == 'o') || (word[i] == 'u')) {
            taco.push('beef')
        } else if (word[i] == 't') {
            taco.push('tomato')
        } else if (word[i] == 'l') {
            taco.push('lettuce')
        } else if (word[i] == 'c') {
            taco.push('cheese')
        } else if (word[i] == 'g') {
            taco.push('guacamole')
        } else if (word[i] == 's') {
            taco.push('salsa')
        }
    };
    taco.push('shell')
    return taco
}