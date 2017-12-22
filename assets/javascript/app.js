$(document).ready(function () {
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;


    var triviaQuestions = [{
            question: "What is the answer to QuestionOne?",
            possibleAnswers: ["seven", "six", "fourteen", "twenty"],
            correct: "seven",

        },
        {
            question: "What is the answer to QuestionTwo?",
            possibleAnswers: ["seven", "six", "fourteen", "twenty"],
            correct: "seven",
        },
        {
            question: "What is the answer to QuestionThree?",
            possibleAnswers: ["seven", "six", "fourteen", "twenty"],
            correct: "seven",
        },
        {
            question: "What is the answer to questionFour?",
            possibleAnswers: ["seven", "six", "fourteen", "twenty"],
            correct: "seven",
        }
    ];
    // variable with value = to index of triviaQuestions.question (ie Q1, Q2, Q3, Q4)
    //will be incremented (++) to display a new question.
    var currentQuestion = 0;
    //function that prints the current question to the page, takes an argument of "current question"
    function startGame () {
        printCurrentQuestion(currentQuestion);
        printAnswerButtons(0);
    }
    // **** uncomment to print question to page startgame function below
    // startGame();
    function printCurrentQuestion(currentQuestion) {
        $('#questionsdiv').text(triviaQuestions[currentQuestion].question);
    }
    // printCurrentQuestion(currentQuestion);

    //function that prints answers on buttons. Takes argument 'indexOfQuestion'
    function printAnswerButtons(indexOfQuestion) {
        for (var i = 0; i < 4; i++) {
            var button = $("<button>");
            button.addClass("button");
            button.text(triviaQuestions[indexOfQuestion].possibleAnswers[i]);
            $("#questionsdiv").append(button);
        }
    };
    // printAnswerButtons(0);

    //button on click functions.
    $(document).on("click", ".button", function () {
        var answer = $(this).text();
        console.log(answer);
    })



// function startGame() {
// $('#questionsdiv').html(triviaQuestions[0].question);
// }

//what to do next?

// Hide everything and do a start game function? press start to start?
// timer implemetation
// correct answer confirmation


});
