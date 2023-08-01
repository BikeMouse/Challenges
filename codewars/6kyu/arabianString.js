/*
You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

Don't presume the separators too much or you could be surprised.

For example: (Input --> Output)

"example name" --> "ExampleName"
"your-NaMe-here" --> "YourNameHere"
"testing ABC" --> "TestingAbc"
*/

function camelize(str) {
    let sideStep = ''
    for (let i = 0; i < str.length; i++) {
        if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
            sideStep += str[i].toLowerCase()
        } else if (str[i] >= '0' && str[i] <= '9') {
            sideStep += str[i]
        } else {
            sideStep += '-'
        }
    }
    sideStep = sideStep.split('-')
    let output = sideStep.map((e) => {
        if (e !== '') return e[0].toUpperCase() + e.slice(1)
    })
    return output.join('')
}