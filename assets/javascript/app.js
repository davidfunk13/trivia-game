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
    // variable with value = to index of triviaQuestions.question (ie Q1, Q2, Q3, Q4)
    //will be incremented (++) to display a new question.
    var currentQuestion = 0;
    //function that prints the current question to the page, takes an argument of "current question"
    $('.start-game').on("click", function () {
        printCurrentQuestion(currentQuestion);
        printAnswerButtons(0);
        $('.start-game').addClass("hidden");
        $('#questionsdiv').removeClass("hidden");
        $('#buttonsdiv').removeClass("hidden");
        
    })

    function printCurrentQuestion(currentQuestion) {
        $('#questionsdiv').text(triviaQuestions[currentQuestion].question);
    }

    //function that prints answers on buttons. Takes argument 'indexOfQuestion'
    function printAnswerButtons(indexOfQuestion) {
        for (var i = 0; i < 4; i++) {
            var button = $("<button>");
            button.addClass("button");
            button.addClass("choice-buttons");
            button.attr("data-index", i);
            button.text(triviaQuestions[indexOfQuestion].possibleAnswers[i]);
            $("#buttonsdiv").append(button);
        }
    };
    //button on click functions.
    $(document).on("click", ".button", function () {
        var answerText = $(this).text();
        var answerDataValue = $(this).attr("data-index");
        var answerIndex = parseInt(answerDataValue)
        if (triviaQuestions[currentQuestion].correct === answerIndex) {
            alert("right answer yadig");
        }
        if (triviaQuestions[currentQuestion].correct !== answerIndex) {
            alert("WRONG!!")
        }

        console.log({
            "users choice": answerText
        }, {
            "index Data Value assigned to choice": answerDataValue
        }, {
            "Correct answer's index": triviaQuestions[currentQuestion].correct
        }, {
            "users choice data attr string parsed to int": answerIndex
        });
    })

});
