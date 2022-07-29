/*
A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.


*/

function stockList(listOfArt, listOfCat){
    let count = {};
    //Filling the count object with the letters from listOfCat and setting the count value to 0
    for (let i = 0; i < listOfCat.length; i++){
      if (!count[listOfCat[i][0]]){
        count[listOfCat[i][0]] = 0
      }
    };
    for (const key in count){
      for (let j = 0; j < listOfArt.length; j ++){
        if (listOfArt[j][0] == key){
          count[key] += (Number(listOfArt[j].split(' ')[1]))
        }
      }
    }
    let result = '';
    let hasBooks = [];
    for (const key in count){
      if (count[key]){
        hasBooks.push(true);
      } else {
        hasBooks.push(false)
      }
       result += `(${key} : ${count[key]}) - `;
    };
    return hasBooks.includes(true)? result.slice(0,result.length-3) : ''
}