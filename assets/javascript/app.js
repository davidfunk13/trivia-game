//Remaining Tasks:

//Time Consuming tasks//
//----------------------//
// - Fix all bugs with timer.
//      - "staggered" timer when user clicks an answer and next question displays.
//      - same with incorrect answers
//----------------------//
// Easy Fixes //
//----------------------//
// - Add instructions.
// - Add actual questions and change correct answer index'
// - Add instructions
// - remove alerts, add actual conformation divs and hide/unhide toggle them for right and wrong answers etc.
//      - If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//      - If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
//      - If the player chooses the right answer, tell the player they selected the correct answer on the page. Wait a few seconds, show the next question.
//      - Add a div with hidden toggles to show when out of questions showing score, and offering a reset.
//----------------------//
$(document).ready(function () {
    //globals
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var noAnswer = 0;
    //Questions array of objects
    var triviaQuestions = [{
            question: "What is the greatest band in the world?",
            possibleAnswers: ["Electric Dream Machine", "Boyz II Men", "Chumbawamba", "Steve Winwood"],
            correct: 2,

        },
        {
            question: "Dennis is asshole. Why Charlie Hate?",
            possibleAnswers: ["Little green ghouls, man.", "Charlie-work", "Made him do the dishes.", "BECAUSE DENNIS IS A BASTARD MAN."],
            correct: 3,
        },
        {
            question: "What is the 'S' in the D.E.N.N.I.S. System?",
            possibleAnswers: ["Shenanigans", "Seperate Entirely", "Sensual Energy", "Signal Break Up"],
            correct: 1,
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
        printAnswerButtons(currentQuestion);
        showScoreboard();
        $('.start-game').addClass("hidden");
        $('#buttonsdiv').removeClass("hidden");
        // initiateTimer();
    })
    //unhides scoreboard initially, but also used as sort of a "refresh" function.
    function showScoreboard() {
        $('.scoreboard').removeClass("hidden");
        $('#rightanswers').html("Correct answers: " + rightAnswers);
        $('#wronganswers').html("Incorrect answers: " + wrongAnswers);
        $('#noanswer').html("Questions Timed Out: " + noAnswer);
        $('#questionsremaining').html();
    }
    //time in seconds, essentially.
    // var timeRemaining = 10;

    // var intervalVar
    //this variable is wrapped in a function to give us a function to call to start the timer, and to prevent it from just running on load.
    // function theTimer() {
        // intervalVar = setInterval(countDown, 1000);
    // }

    // function countDown() {
        // timeRemaining--;
        // $('#timer').html(timeRemaining);
        // if (timeRemaining === 0) {     
            // timeOut();
        // }
    // }
    //small function to call the timer to start
    // function initiateTimer() {
        // $('#timer').html(theTimer);
    // }
    //function incriments noAnswer by one, selects and prints the next question, refreshes the scoreboard, and restarts the timer if the timer runs out on the previous question.
    // function timeOut() {
        // clearInterval(intervalVar);
        // timeRemaining = 10;
        // alert("Time has run out.");
        // noAnswer++
        // currentQuestion++
        // printCurrentQuestion(currentQuestion);
        // showScoreboard();
        // initiateTimer();
    // }
    //initially unhides the hidden question div when user hits start game. Then used to update the question displayed.
    function printCurrentQuestion(currentQuestion) {
        $('#questionsdiv').removeClass("hidden");
        $('#questionsdiv').text(triviaQuestions[currentQuestion].question);
    }

    //function that prints answers on buttons. Takes argument 'indexOfQuestion'
    function printAnswerButtons(currentQuestion) {
        for (var i = 0; i < 4; i++) {
            var button = $("<button>");           
            button.addClass("button");
            button.addClass("choice-buttons");
            button.attr("data-index", i);
            button.text(triviaQuestions[currentQuestion].possibleAnswers[i]);
            $("#buttonsdiv").append(button);
        }
    };


//clears previous buttons
function buttonClear() {
    $("button").remove();
}
    //button on click functions.
    $(document).on("click", ".button", function () {
        var answerText = $(this).text();
        var answerDataValue = $(this).attr("data-index");
        var answerIndex = parseInt(answerDataValue)
        //control flow for answering questions
        if (triviaQuestions[currentQuestion].correct === answerIndex) {
            alert("right answer yadig");
            rightAnswers++
            currentQuestion++
            buttonClear();
            showScoreboard();
            printCurrentQuestion(currentQuestion);
            printAnswerButtons(currentQuestion);
            console.log({
                "right answers": rightAnswers
            }, {
                "wrong answers": wrongAnswers
            });
            return;
        }
        if (triviaQuestions[currentQuestion].correct !== answerIndex) {
            alert("WRONG!!");
            wrongAnswers++
            currentQuestion++
            buttonClear();
            showScoreboard();            
            printCurrentQuestion(currentQuestion);
            printAnswerButtons(currentQuestion);
            console.log({
                "right answers": rightAnswers
            }, {
                "wrong answers": wrongAnswers
            });
        }
        //console logs all info needed to write control flow.
        console.log({
            "users choice": answerText
        }, {
            "index Data Value assigned to choice": answerDataValue
        }, {
            "Correct answer's index": triviaQuestions[currentQuestion].correct
        }, {
            "users choice data attr string parsed to int": answerIndex
        });
    })    // End of onclick for buttons

});
