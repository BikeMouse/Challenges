/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(s) {
	// s[0] 1x
  // s[1] 2x
  // s[2] 3x usw
  let sArray = s.split('');
  let newArray = [sArray[0]];
  for (let i = 1; i < sArray.length; i++){
    newArray.push(sArray[i].toUpperCase() + sArray[i].repeat(i).toLowerCase())
  }
  return newArray.join('-')
}