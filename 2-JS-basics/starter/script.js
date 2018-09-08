var heighghtMark, massMark, heighghtJon, massJon;
heighghtMark = prompt("What is Marks height?");
massMark     = prompt("What is Marks mass ?");
heighghtJon  = prompt("What is johns height?");
massJon      = prompt("what is Johns mass?");

var bmiMark = massMark / (heighghtMark * heighghtMark);
var bmiJohn = massJon / (heighghtJon * heighghtJon);
var isMarkHigher = bmiJohn < bmiMark; 
console.log("Is Marks BMI higher than Johns? " + isMarkHigher);