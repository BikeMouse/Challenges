/*
Alex is transitioning from website design to coding and wants to sharpen his skills with CodeWars.
He can do ten kata in an hour, but when he makes a mistake, he must do pushups. 
These pushups really tire poor Alex out, so every time he does them they take twice as long. 
His first set of redemption pushups takes 5 minutes.
Create a function, alexMistakes, that takes two arguments: the number of kata he needs to complete, and the time in minutes he has to complete them.
Your function should return how many mistakes Alex can afford to make.
*/

function alexMistakes(numberOfKata, timeLimit) {
    let timeLeft = timeLimit - ((60 / 10) * numberOfKata)
    let mistakes = 0
    let pushUp = 5
    for (let i = 1; i <= timeLeft; i++) {
        if (timeLeft - pushUp >= 0) {
            timeLeft = timeLeft - pushUp
            mistakes++
            pushUp = pushUp * 2
        }
    }
    return mistakes
}