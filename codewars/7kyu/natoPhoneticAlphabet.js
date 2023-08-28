/*
Complete the function nato that takes a word in parameter and returns a string that spells the word using the NATO phonetic alphabet.

There should be a space between each word in the returned string, and the first letter of each word should be capitalized.

For those of you that don't want your fingers to bleed, this kata already has a dictionary typed out for you.

Examples
"hi"      -->  "Hotel India"
"abc"     -->  "Alpha Bravo Charlie"
"babble"  -->  "Bravo Alpha Bravo Bravo Lima Echo"
"Banana"  -->  "Bravo Alpha November Alpha November Alpha"
*/

function nato(word) {
    word = word.toUpperCase()
    let output = ''
    for (let i = 0; i < word.length; i++) {
        if (word[i] >= 'A' && word[i] <= 'Z') {
            output += `${LETTERS[word[i]]} `
        } else {
            output += word[i]
        }
    }
    return output.slice(0, output.length - 1)
}