/*
Enjoying your holiday, you head out on a scuba diving trip!

Disaster!! The boat has caught fire!!

You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

Go to work!
*/

function fireFight(s) {
    let output = '';
    let sen = s.split(' ');
    for (let i = 0; i < sen.length; i++) {
        if (sen[i] === 'Fire') {
            output += '~~ ';
        } else {
            output += `${sen[i]} `;
        };
    };
    return output.slice(0, output.length - 1);
}