/*
Task
The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information
Rules
1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

9–10: The date within the month of birth

11: The year digit from the year of birth (e.g. for 1987 it would be 7)

12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name

14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

15–16: Two computer check digits. We will always use "AA"
Your task is to code a UK driving license number using an Array of data. The Array will look like

data = ["John","James","Smith","01-Jan-2000","M"];
Where the elements are as follows

0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
4 = M-Male or F-Female
*/

function driver(data) {
    let sur = '';
    let decade = '';
    let month = '';
    let date = '';
    let year = '';
    let initials = '';
    let rest = '9AA';
    for (let i = 0; i < data.length; i++) {
        //Initials
        if (i == 0) initials += data[i][0].toUpperCase();
        if (i == 1) {
            if (data[i].length == 0) {
                initials += '9'
            } else {
                initials += data[i][0].toUpperCase();
            };
        };
        //Surname part
        if (i == 2) {
            if (data[i].length >= 5) {
                sur += data[i].slice(0, 5).toUpperCase();
            } else {
                let pad = 5 - data[i].length;
                sur += data[i].toUpperCase() + '9'.repeat(pad);
            };
        };
        if (i == 3) {
            let dateArray = data[i].split('-');
            //Decade digit
            decade += dateArray[dateArray.length - 1][2];
            //Month of birth
            let namedMonth = dateArray[1].slice(0, 3).toLowerCase();
            if (data[data.length - 1].toUpperCase() == 'M') {
                switch (namedMonth) {
                    case 'jan':
                        month += '01';
                        break;
                    case 'feb':
                        month += '02';
                        break;
                    case 'mar':
                        month += '03';
                        break;
                    case 'apr':
                        month += '04';
                        break;
                    case 'may':
                        month += '05';
                        break;
                    case 'jun':
                        month += '06';
                        break;
                    case 'jul':
                        month += '07';
                        break;
                    case 'aug':
                        month += '08';
                        break;
                    case 'sep':
                        month += '09';
                        break;
                    case 'oct':
                        month += '10';
                        break;
                    case 'nov':
                        month += '11';
                        break;
                    case 'dec':
                        month += '12';
                        break;
                };
            } else {
                switch (namedMonth) {
                    case 'jan':
                        month += '51';
                        break;
                    case 'feb':
                        month += '52';
                        break;
                    case 'mar':
                        month += '53';
                        break;
                    case 'apr':
                        month += '54';
                        break;
                    case 'may':
                        month += '55';
                        break;
                    case 'jun':
                        month += '56';
                        break;
                    case 'jul':
                        month += '57';
                        break;
                    case 'aug':
                        month += '58';
                        break;
                    case 'sep':
                        month += '59';
                        break;
                    case 'oct':
                        month += '60';
                        break;
                    case 'nov':
                        month += '61';
                        break;
                    case 'dec':
                        month += '62';
                        break;
                };
            };
            //Date within month
            date += dateArray[0];
            //Year digit
            year += dateArray[dateArray.length - 1][3]
        }
    }
    return `${sur}${decade}${month}${date}${year}${initials}${rest}`
}