/*var heighghtMark, massMark, heighghtJon, massJon;
heighghtMark = prompt("What is Marks height?");
massMark     = prompt("What is Marks mass ?");
heighghtJon  = prompt("What is johns height?");
massJon      = prompt("what is Johns mass?");

var bmiMark = massMark / (heighghtMark * heighghtMark);
var bmiJohn = massJon / (heighghtJon * heighghtJon);
var isMarkHigher = bmiJohn < bmiMark; 
console.log("Is Marks BMI higher than Johns? " + isMarkHigher);*/
//*************************************************************** *//
var game1John, game2John, game3John, game1Mike, game2Mike, game3Mike;
game1John = 10;
game2John = 10;
game3John = 10;
game1Mike = 10;
game2Mike = 10;
game3Mike = 10;
var averageJohn = (game1John + game2John + game3John) / 3;
var averageMike = (game1Mike + game2Mike + game3Mike) /3 ; 

if (averageJohn > averageMike){
    console.log("The winner is John with average score: " + averageJohn);
}else if (averageJohn< averageMike){
    console.log("The winner is Mike with average score: " + averageMike);
}else {
    console.log ("It is a tie with average score : " +averageJohn);
}
var averageMarry = (74 + 1655 + 176666.0) / 3;

switch (true) {
    case averageJohn > averageMarry && averageJohn > averageMike :
        console.log("The winner is John with average score: " + averageJohn);
        break;
    case averageMike > averageJohn && averageMike > averageMarry :
        console.log("The winner is Mike with average score: " + averageMike);
        break;
    case averageMarry > averageJohn && averageMarry > averageMike:
        console.log("The winner is Marry with average score: " + averageMarry);
        break;
    case averageMarry === averageJohn:
        console.log ("It is a tie with average score(John and Marry) : " +averageJohn);
        break;
    case averageMarry === averageMike:
        console.log ("It is a tie with average score(Marry and Mike) : " +averageMike);
        break;
    case averageJohn === averageMike:
        console.log ("It is a tie with average score (john and mike) : " +averageJohn);
        break;

}
//Tiping maschine 
console.log('********************************************');
function tip (bill) {
    if (bill < 50) {
        return bill * 0.2 ;
    }else if ( bill >= 50 && bill <= 200){
        return bill * 0.15;
    }else{
        return bill * 0.1;
    }
}
var bills = [124, 48, 268];
var tips = bills.map(tip);
var wholeAmount = bills.map (function(bill,number){
    return bill + tips[number];
});
console.log (tips);
console.log (wholeAmount);