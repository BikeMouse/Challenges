/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
    let a = num.toString().split('');
    let b = [];
    let s = '0';
    let counter = a.length-1;
    for (let i = 0; i < a.length; i++){
      b.push(Number(`${a[i]}${s.repeat(counter)}`));
      counter--
    };
    return b.filter((e)=> e !== 0 ).join(' + ')
}