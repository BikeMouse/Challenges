/*
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).


*/

function DNAStrand(dna){
    //A - T     C - G
    let a = [...dna];
    let b = [];
    a.forEach((e)=>{
      if (e == 'A'){
        e = 'T'
        b.push(e);
      } else if (e == 'T'){
        e = 'A'
        b.push(e);
      } else if (e == 'C'){
        e = 'G'
        b.push(e);
      } else if (e == 'G'){
        e = 'C'
        b.push(e);
      }
    });
    return b.join('');
}