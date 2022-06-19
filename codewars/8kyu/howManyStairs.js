/*
Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.
*/

function stairsIn20(s){
    const a1 = s[0].reduce((c,acc)=>c+acc,0);
    const a2 = s[1].reduce((c,acc)=>c+acc,0);
    const a3 = s[2].reduce((c,acc)=>c+acc,0);
    const a4 = s[3].reduce((c,acc)=>c+acc,0);
    const a5 = s[4].reduce((c,acc)=>c+acc,0);
    const a6 = s[5].reduce((c,acc)=>c+acc,0);
    const a7 = s[6].reduce((c,acc)=>c+acc,0);
    return ((a1+a2+a3+a4+a5+a6+a7)*20);
}