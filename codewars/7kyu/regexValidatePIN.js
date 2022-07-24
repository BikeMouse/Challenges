/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
*/

function validatePIN (pin) {
    let input = [...pin];
    let charCode = [];
    let result = [];
    input.forEach((e)=>{
      charCode.push(e.charCodeAt())
    });
    if ((charCode.length < 4)||(charCode.length == 5)||(charCode.length > 6)){
      return false;
    } else {
      for (let i = 0; i < charCode.length; i++){
        if ((charCode[i] >= 48)&&(charCode[i] <= 57)){
          result.push(true);
        } else {
          result.push(false);
        }
      };
    };
    return result.includes(false)?false:true
}