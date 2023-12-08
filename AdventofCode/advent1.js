const { readFileSync } = require("node:fs")

function main() {
    let file
    try {
        file = readFileSync("advent1Sample.txt", { encoding: "utf-8" })
    } catch (error) {
        console.log(error)
    }
    let arr = file.split('\n')
    let nums = []
    for (let i = 0; i < arr.length; i++) {
        let a = []
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] >= '0' && arr[i][j] <= '9') {
                a.push(arr[i][j])
            } else {
                switch (arr[i][j]) {
                    case 'o':
                        if (arr[i].slice(j, j + 3) == 'one') a.push(1)
                        break
                    case 't':
                        if (arr[i].slice(j, j + 3) == 'two'){
                            a.push(2)
                        } else if (arr[i].slice(j, j + 5) == 'three'){
                            a.push(3)
                        }
                        break
                    case 'f':
                        if (arr[i].slice(j, j + 4) == 'four'){
                            a.push(4)
                        } else if (arr[i].slice(j, j + 4) == 'five'){
                            a.push(5)
                        }
                        break
                    case 's':
                        if (arr[i].slice(j, j + 3) == 'six'){
                            a.push(6)
                        } else if (arr[i].slice(j, j + 5) == 'seven'){
                            a.push(7)
                        }
                        break
                    case 'e':
                        if (arr[i].slice(j, j + 5) == 'eight') a.push(8)
                        break
                    case 'n':
                        if (arr[i].slice(j, j + 4) == 'nine') a.push(9)
                        break
                }
            }
        }
        let b = Number(`${a[0]}${a[a.length-1]}`)
        nums.push(b)
    }
    console.log(nums.reduce((acc,c)=>acc+c,0))
}

main()