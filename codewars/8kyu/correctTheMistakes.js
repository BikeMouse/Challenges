/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

function correct(string){
	// string - includes 5 for S, 0 for O and 1 for I
  // returned corrected string
  // L0ND0N -> LONDON
  let a = string.split('');
  let corrected = ['S','O','I'];
  for (let i = 0; i < a.length; i++){
    if (a[i] == '5'){
      a[i] = corrected[0];
    }else if (a[i]=='0'){
      a[i] = corrected[1];
    }else if (a[i]=='1'){
      a[i] = corrected[2];
    }
  }
  return a.join('');
}