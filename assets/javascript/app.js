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
    $('#answerone').html(triviaQuestions[0].possibleAnswers[0]);
    $('#answertwo').html(triviaQuestions[0].possibleAnswers[1]);
    $('#answerthree').html(triviaQuestions[0].possibleAnswers[2]);
    $('#answerfour').html(triviaQuestions[0].possibleAnswers[3]);

    //question one control flow
correctAnswerCheck()


});
