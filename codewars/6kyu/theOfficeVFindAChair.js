/*
So you've found a meeting room - phew! You arrive there ready to present, and find that someone has taken one or more of the chairs!! You need to find some quick.... check all the other meeting rooms to see if all of the chairs are in use.

Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.

Find the spare chairs from the array of meeting rooms. Each meeting room tuple will have the number of occupants as a string. Each occupant is represented by 'X'. The room tuple will also have an integer telling you how many chairs there are in the room.

You should return an array of integers that shows how many chairs you take from each room in order, up until you have the required amount.

example:

[['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:

result -> [0, 1, 3] no chairs free in room 0, take 1 from room 1, take 3 from room 2. no need to consider room 3 as you have your 4 chairs already.

If you need no chairs, return "Game On". If there aren't enough spare chairs available, return "Not enough!".
*/

function meeting(x, need) {
    let taken = 0;
    let result = [];
    if (need === 0) {
        return 'Game On';
    } else {
        for (let i = 0; i < x.length; i++) {
            let available = x[i][1] - x[i][0].length;
            if (available < 0) {
                result.push(0);
            } else {
                taken += available;
                if (taken >= need) {
                    available = available - (taken - need);
                    result.push(available);
                    return result;
                } else {
                    result.push(available);
                };
            };
        };
        return taken < need ? 'Not enough!' : result;
    };
}