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
function randomQuestion() {
    var questionArray = [questionOne.question, questionTwo.question, questionThree.question, questionFour.question]


}
$("#questionsdiv").html(questionOne.question);

console.log(questionOne.question);;
});
