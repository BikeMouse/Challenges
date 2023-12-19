const { readFileSync } = require("node:fs")

function main() {
    let file
    try {
        file = readFileSync("advent2Sample.txt", { encoding: "utf-8" })
    } catch (error) {
        console.log(error)
    }
    /*
    Determine which games would have been possible if the bag had been loaded with only
    12 red cubes, 13 green cubes, and 14 blue cubes. What is the sum of the IDs of those games?
    */
   let rawArr = file.split('\n')
   let games = []
   for (let i = 0; i < rawArr.length; i++){
    games.push(rawArr[i].split(':')[1])
   }
   let possibles = []
   let sum = 0
   for (let i = 0; i < games.length; i++){
    let a = games[i].split(';')
    let blue = [];
    let red = [];
    let green = [];
    for (let j = 0; j < a.length; j++){
        let b = a[j].split(',')
        for (let o = 0; o < b.length; o++){
            if (b[o].endsWith('blue')){
                blue.push(b[o])
            } else if (b[o].endsWith('red')){
                red.push(b[o])
            } else if (b[o].endsWith('green')){
                green.push(b[o])
            }
        }
    }
    let blues = [];
    let reds = [];
    let greens = [];
    for (let u = 0; u < blue.length; u++){
        blue[u] = blue[u].slice(1)
        for (let y = 0; y < blue[u].length; y++){
            if (blue[u][y] == ' '){
                blues.push(Number(blue[u].slice(0,y)))
            }
        }
    }
    for (let u = 0; u < red.length; u++){
        red[u] = red[u].slice(1)
        for (let y = 0; y < red[u].length; y++){
            if (red[u][y] == ' '){
                reds.push(Number(red[u].slice(0,y)))
            }
        }
    }
    for (let u = 0; u < green.length; u++){
        green[u] = green[u].slice(1)
        for (let y = 0; y < green[u].length; y++){
            if (green[u][y] == ' '){
                greens.push(Number(green[u].slice(0,y)))
            }
        }
    }
    if (blues.every((e)=> e <= 14) == true && reds.every((e)=> e <= 12) == true && greens.every((e)=> e <= 13) == true){
        possibles.push(i+1)
        }
    blues.sort((q,w)=> w-q)
    reds.sort((q,w)=> w-q)
    greens.sort((q,w)=> w-q)
    let power = [reds[0],greens[0],blues[0]]
    sum += power.reduce((acc,c)=>acc*c,1)
    console.log(sum)
   }
   console.log(possibles.reduce((acc,c)=> acc+c,0))
}

main()