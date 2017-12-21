$(document).ready(function() {

var questionOne = {
    question: "What is the answer to QuestionOne?",
    answers: {
        a: "seven",
        b: "six",
        c: "fourteen",
        d: "twenty",
        answer: "seven",
    }
};

var questionTwo = {
    question: "What is the answer to QuestionTwo?",
    answers: {
        a: "seven",
        b: "six",
        c: "fourteen",
        d: "twenty",
        answer: "seven",
    }
};
var questionThree = {
    question: "What is the answer to QuestionThree?",
    answers: {
        a: "seven",
        b: "six",
        c: "fourteen",
        d: "twenty",
        answer: "seven",
    }
};
var questionFour = {
    question: "What is the answer to questionFour?",
    answers: {
        a: "seven",
        b: "six",
        c: "fourteen",
        d: "twenty",
        answer: "seven",
    }
};
console.log(questionOne.answers.a)
var questionArray = [questionOne.question, questionTwo.question, questionThree.question, questionFour.question] 
// console.log(questionArray[2].toString());
$("#questionsdiv").html(questionOne.question);
$("#answerone").html(questionOne.answers.a);
$('#answertwo').html(questionOne.answers.b);
$('#answerthree').html(questionOne.answers.c);
$('#answerfour').html(questionOne.answers.d);
});
 
