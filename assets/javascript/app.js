$(document).ready(function() {

var questionOne = {
    question: "How much wood would a woodchuck chuck if a woodchuck would chuck wood",
    answers: {
        a: "seven",
        b: "six",
        c: "fourteen",
        d: "twenty",
        answer: "seven",
    }
};

var questionTwo = {
    question: "Why",
    answers: {
        a: "seven",
        b: "six",
        c: "fourteen",
        d: "twenty",
        answer: "seven",
    }
};
var questionThree = {
    question: "How many times is too many",
    answers: {
        a: "seven",
        b: "six",
        c: "fourteen",
        d: "twenty",
        answer: "seven",
    }
};
var questionFour = {
    question: "Who dunnit",
    answers: {
        a: "seven",
        b: "six",
        c: "fourteen",
        d: "twenty",
        answer: "seven",
    }
};
var questionArray = [questionOne.question, questionTwo.question, questionThree.question, questionFour.question] 
// console.log(questionArray[2].toString());
$("#questionsdiv").html(questionOne.question);
});
 
