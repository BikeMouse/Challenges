const { readFileSync } = require("node:fs")

function main() {
    let file
    try {
        file = readFileSync("advent4Sample.txt", { encoding: "utf-8" })
    } catch (error) {
        console.log(error)
    }
    let arr = file.split('\n')
    // removing 'card #:'
    for (let i = 0; i < arr.length; i++){
        let a = arr[i].indexOf(':')
        arr[i] = arr[i].slice(a+2)
    }
    console.log(arr)
    // separating winning numbers from numbers owned
    let pointsArr = []
    for (let i = 0; i < arr.length; i++){
        let winning = arr[i].split(' | ')[0]
        let own = arr[i].split('|')[1]
        let matches = 0
        let points = 0
        // getting the numbers and put empty elements to the back
        winning = winning.split(' ').sort((a,b)=>b - a)
        own = own.split(' ').sort((a,b)=>b - a)
        // removing empty elements
        for (let j = 0; j < winning.length; j++){
            if (winning[j] == ''){
                winning = winning.slice(0,j)
            }
        }
        console.log('winning',winning)
        for (let j = 0; j < own.length; j++){
            if (own[j] == ''){
                own = own.slice(0,j)
            }
        }
        console.log('own',own)
        // getting matches
        for (let j = 0; j < own.length; j++){
            if (winning.includes(own[j])){
                matches++
                if (points == 0){
                    points = 1
                } else {
                    points *= 2
                }
            }
        }
        console.log('matches',matches)
        console.log('points',points)
        pointsArr.push(points)
    }
    console.log(pointsArr.reduce((acc,c)=>acc+c,0))
}

main()