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
//*************************************************************************** */
console.log('*******pip pip ************************');

var john = {
    name: 'John',
    mass: 120,
    height: 1.70,
    bmi: function (){
        this['bmiIndex'] = this.mass / (this.height * this.height);
        return this.bmiIndex;
    }
};

var mark = {
    name: 'Mark',
    mass: 120,
    height : 1.70,
    bmi: function () {
        this.bmiIndex = this.mass / (this.height * this.height);
        return this.bmiIndex;
    }
};

console.log(john, mark);

if (john.bmi() > john.bmi()){
    console.log('Higher BMI has ' + john.name +' with BMI: ' + john.bmiIndex);
}
else if (mark.bmiIndex > john.bmiIndex){
    console.log('Higher BMI has ' + mark.name +' with BMI: ' + mark.bmiIndex);
}
else{
    console.log('It is a draw witt BMI: ' + john.bmiIndex);
}


//*********************************************************************************
console.log ("****************FINAL PART I ********************");

var john = {
    bills: [124, 48, 268, 180, 42],
    calculate_tip: function (){
        var tips = [];
        var sums = [];
        for( var i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 50){
                tips[i] = 0.2 * this.bills[i];
                sums[i] = tips[i] + this.bills [i];
            }else if (this.bills[i] >= 50 && this.bills [i] < 200){
                tips[i] = 0.15 * this.bills[i];
                sums[i] = tips[i] + this.bills [i];
            }else{
                tips[i] = 0.1 * this.bills[i];
                sums[i] = tips[i] + this.bills [i];
            }
        }
        this.tips = tips;
        this.sums = sums;
        console.log(this.tips, this.sums);

    }
};

var mark = {
    bills: [77, 375, 110, 45],
    calculate_tip: function (){
        var tips = [];
        var sums = [];
        for( var i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 100){
                tips[i] = 0.2 * this.bills[i];
                sums[i] = tips[i] + this.bills [i];
            }else if (this.bills[i] >= 100 && this.bills [i] < 300){
                tips[i] = 0.1 * this.bills[i];
                sums[i] = tips[i] + this.bills [i];
            }else{
                tips[i] = 0.25 * this.bills[i];
                sums[i] = tips[i] + this.bills [i];
            }
        }
        this.tips = tips;
        this.sums = sums;
        console.log(this.tips, this.sums);

    }
};
john.calculate_tip();
mark.calculate_tip();

function calculate_average (tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
        sum += tips[i];
    }
    return sum / tips.length;
};

if (calculate_average(john.tips) > calculate_average(mark.tips)){
    console.log('John\'s family paid the larger tip');
}else{
    console.log('Mark\'s fasmily paid the larger tip' );
}
