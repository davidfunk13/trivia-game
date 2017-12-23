//Remaining Tasks:

//Time Consuming tasks//
//----------------------//
// - Fix all bugs with timer.
//      - "staggered" timer when user clicks an answer and next question displays.
//      - same with incorrect answers
// Easy Fixes //
//---------------//

// - Add instructions.
// - Add actual questions and change correct answer index'
// - Add instructions
// - remove alerts, add actual conformation divs and hide/unhide toggle them for right and wrong answers etc.
//      - If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//      - If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
//      - If the player chooses the right answer, tell the player they selected the correct answer on the page. Wait a few seconds, show the next question.
        
// - Add a div with hidden toggles to show when out of questions showing score, and offering a reset.




$(document).ready(function () {
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var noAnswer = 0;



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
        printAnswerButtons(currentQuestion);
        showScoreboard();
        $('.start-game').addClass("hidden");
        $('#buttonsdiv').removeClass("hidden");
        initiateTimer();
    })

    function showScoreboard() {
        $('.scoreboard').removeClass("hidden");
        $('#rightanswers').html("Correct answers: " + rightAnswers);
        $('#wronganswers').html("Incorrect answers: " + wrongAnswers);
        $('#noanswer').html("Questions Timed Out: " + noAnswer);
        $('#questionsremaining').html();
    }
    var timeRemaining = 10;
    var intervalVar
//this variable is wrapped in a function to give us a function to call to start the timer, and to prevent it from just running on load.
    function theTimer() {
        intervalVar = setInterval(countDown, 1000);
    }

    function countDown() {
        timeRemaining--;
        $('#timer').html(timeRemaining);
        if (timeRemaining === 0) {
            // stop();      
            timeOut();
        }
    }
    function initiateTimer(){
        $('#timer').html(theTimer);        
    }
    // function stop() {
    //     clearInterval(intervalVar);
    //     timeRemaining =10;
        
    // }
    function timeOut() {
        clearInterval(intervalVar);
        timeRemaining =10;
        alert("Time has run out.");            
        noAnswer++
        currentQuestion++     
        printCurrentQuestion(currentQuestion);        
        showScoreboard();
        initiateTimer();
    }

    function printCurrentQuestion(currentQuestion) {
        $('#questionsdiv').removeClass("hidden");
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
    function dataAssign() {
        
    }
    $(document).on("click", ".button", function () {
        var answerText = $(this).text();
        var answerDataValue = $(this).attr("data-index");
        var answerIndex = parseInt(answerDataValue)
        if (triviaQuestions[currentQuestion].correct === answerIndex) {
            alert("right answer yadig");
            rightAnswers++
            currentQuestion++
            // $('#rightanswers').html("Correct answers: " + rightAnswers);
            showScoreboard();
            printCurrentQuestion(currentQuestion);
            console.log({
                "right answers": rightAnswers
            }, {
                "wrong answers": wrongAnswers
            });
        }
        if (triviaQuestions[currentQuestion].correct !== answerIndex) {
            alert("WRONG!!");
            wrongAnswers++
            showScoreboard();
            currentQuestion++
            printCurrentQuestion(currentQuestion);
            // $('#wronganswers').html("Incorrect answers: " + wrongAnswers);

            console.log({
                "right answers": rightAnswers
            }, {
                "wrong answers": wrongAnswers
            });
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
