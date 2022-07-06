function solution(str, ending){
    let result ='';
    for (let i = str.length-ending.length; i < str.length; i++){
      result += str[i];
    }
    return (result == ending ? true : false);
}