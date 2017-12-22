$(document).ready(function () {

    var rightAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;


    var triviaQuestions = [{
            question: "What is the answer to QuestionOne?",
            possibleAnswers: ["seven", "six", "fourteen", "twenty"],
            correct: 0,

        },
        {
            question: "What is the answer to QuestionTwo?",
            possibleAnswers: ["seven", "six", "fourteen", "twenty"],
            correct: 0,
        },
        {
            question: "What is the answer to QuestionThree?",
            possibleAnswers: ["seven", "six", "fourteen", "twenty"],
            correct: 0,
        },
        {
            question: "What is the answer to questionFour?",
            possibleAnswers: ["seven", "six", "fourteen", "twenty"],
            correct: 0,
        }
    ];
    console.log(triviaQuestions[0].question);
    console.log(triviaQuestions[0].possibleAnswers)
    //question one work
    $('#questionsdiv').html(triviaQuestions[0].question);
    //for loop that prints questions
    for (var i = 0; i < 4; i++) {
        $('#answer'+ i).html(triviaQuestions[0].possibleAnswers[i]);
    }
function startGame() {
    $('#questionsdiv').html(triviaQuestions[0].question);
}

//what to do next?

// Hide everything and do a start game function? press start to start?
// timer implemetation
// correct answer confirmation


});
