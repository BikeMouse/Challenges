/*
Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3
*/

function strCount(obj) {
    let result = 0;
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value == 'string') {
            result++
        } else if (Array.isArray(value)) {
            let flat = value.flat(10)
            for (let i = 0; i < flat.length; i++) {
                if (typeof flat[i] == 'string') {
                    result++
                } else if (typeof (flat[i]) == 'object' && flat[i] !== null) {
                    result += strCount(flat[i])
                }
            }
        } else if (typeof (value) == 'object' && value !== null) {
            result += strCount(value)
        }
    }
    return result
};