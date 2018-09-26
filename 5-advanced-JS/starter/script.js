var score = 0;
(function promptQuestion () {
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
    this.displayScore = function(){
        console.log('Your current score is: ' + score);
    };

}

var arrayOfQuestions = [];
arrayOfQuestions.push (new Question ('Who is the best programmer ?', ['me', 'you'], 1));
arrayOfQuestions.push (new Question ('Why are you doing this?', ['because','dunno'], 2));
arrayOfQuestions.push (new Question ('Where do you live?', ['here', 'there', 'nowhere'], 3));

var selectedQuestion = arrayOfQuestions[(Math.floor(Math.random() *10) +1) % arrayOfQuestions.length];
selectedQuestion.display(); 
var userAnswer = prompt('Please select the correct answer by typing the number');

Question.prototype.check = function (userAnswer){
    if (userAnswer == this.correctAnswer){
        score += 1;
        console.log ('correct');
        selectedQuestion.displayScore();
     }else{
        console.log('wrong');
        selectedQuestion.displayScore();
     }
};

selectedQuestion.check(userAnswer);

if (userAnswer !=='exit'){
    promptQuestion();
}

})();