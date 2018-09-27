
function Question (question, answers, correctAnswer) {
    this.question      = question;
    this.answers       = answers;
    this.correctAnswer = correctAnswer;
    this.display       = function (){
        
        console.log ('===================================');
        console.log (this.question);
        for (var i = 0; i < this.answers.length; i++){
           console.log( (i +1) + '. ' + this.answers[i]);
        }
    };

}

function score (){
    var sc = 0;
    return function(correct){
        if (correct){
            sc ++;
        }
        return sc;
    }
}
var keepScore = score();

var arrayOfQuestions = [];
arrayOfQuestions.push (new Question ('Who is the best programmer ?', ['me', 'you'], 1));
arrayOfQuestions.push (new Question ('Why are you doing this?', ['because','dunno'], 2));
arrayOfQuestions.push (new Question ('Where do you live?', ['here', 'there', 'nowhere'], 3));
(function promptQuestion () {
var selectedQuestion = arrayOfQuestions[(Math.floor(Math.random() *10) +1) % arrayOfQuestions.length];
selectedQuestion.display(); 
var userAnswer = prompt('Please select the correct answer by typing the number');

Question.prototype.check = function (userAnswer, callback){
        var sc;
    if (userAnswer == this.correctAnswer){
        console.log ('correct');
        sc = callback(true);
     }else{
        console.log('wrong');
        sc = callback (false);
     }
     this.displayScore(sc);
};

Question.prototype.displayScore = function(score){
    console.log('Your current score is ' + score);
}
selectedQuestion.check(userAnswer, keepScore);
if (userAnswer !== 'exit'){
    promptQuestion();
}
})();