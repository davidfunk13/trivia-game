$(document).ready(function() {

var questionOne = {
    question: "What is the answer to QuestionOne?",
    possibleAnswers = ["seven", "six", "fourteen", "twenty"],
    correct: 0,
    
};

var questionTwo = {
    question: "What is the answer to QuestionTwo?",
        possibleAnswers = ["seven", "six", "fourteen", "twenty"],
        correct: 0,
};
var questionThree = {
    question: "What is the answer to QuestionThree?",
        possibleAnswers = ["seven", "six", "fourteen", "twenty"],
        correct: 0,
};
var questionFour = {
    question: "What is the answer to questionFour?",
        possibleAnswers = ["seven", "six", "fourteen", "twenty"],
        correct: 0,
};
var questionArray = [questionOne.question, questionTwo.question, questionThree.question, questionFour.question] 
$("#questionsdiv").html(questionOne.question);

});
 
