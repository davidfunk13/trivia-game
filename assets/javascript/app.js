//Remaining Tasks:

//Time Consuming tasks//
//----------------------//
// - Fix all bugs with timer.
//      - "staggered" timer when user clicks an answer and next question displays.
//      - same with incorrect answers
// - If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// - Add a div with hidden toggles to show when out of questions showing score, and offering a reset.
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
        correctScreen: "Okay, yeah, you know what? A lot of the questions are opinion-based. Heads up. Ah.",
        incorrectScreen: "Incorrect. Okay, yeah, you know what? A lot of the questions are opinion-based. Heads up. Ah.",
    },
    {
        question: "Dennis is asshole. Why Charlie Hate?",
        possibleAnswers: ["Little green ghouls, man.", "Charlie-work", "Made him do the dishes.", "BECAUSE DENNIS IS A BASTARD MAN."],
        correct: 3,
        correctScreen: "Correct! I have contained my rage for as long as possible, but I shall unleash my fury upon you like THE CRASHING OF A THOUSAND WAVES.",
        incorrectScreen: "Incorrect! I AM THE GOLDEN GOD",
    },
    {
        question: "What is the 'S' in the D.E.N.N.I.S. System?",
        possibleAnswers: ["Shenanigans", "Seperate Entirely", "Sensual Energy", "Signal Break Up"],
        correct: 1,
        correctScreen: "Correct! Smooth! Very- Very smooth stuff. Very classy. I'm learning a lot from you right now, dude.",
        incorrectScreen: "Incorrect! Okay, CLEARLY none of you have ANY idea how to run my system. My system of seduction that i used to win your heart, that these IDIOTS are RUINING right now!",
    },
    {
        question: "How much cheese is too much cheese?",
        possibleAnswers: ["One brick", "Three bricks", "Two bricks", "Any cheese before a date is too much cheese."],
        correct: 3,
        correctScreen: "Correct! I was eating the old cheese to test it. To see why the rats weren't eating it.",
        incorrectScreen: "Incorrect! Cottage cheese? Like...cheese from some cottage? Whose cottage? Well, like, what is that, exactly?",
    },
    {
        question: "What is Frank and Charlie's unique grooming tool?",
        possibleAnswers: ["Back scratcher", "Toe Knife", "Pimple Popper", "Kitten Mittens"],
        correct: 1,
        correctScreen: "Correct! I uhhhh, use a sharp blade, to..... to dig the scum out of my toenails. Once in a while, I cut myself, but it pusses up and in a few days, good as new!",
        incorrectScreen: "Incorrect! Ah! Botched toe! I botched that one! That's a botch job. That's bleeding, I need some trash to plug up the cut.",
    },
    {
        question: "When the gang threw a wrestling match in honor of the troops, what did they call their 3 man wrestling team?",
        possibleAnswers: ["Chickenmen", "Crows of War", "Birds of War", "Eagles of War"],
        correct: 2,
        correctScreen: "Correct! Yes we have feathers, ahhhhhh ahh ahhhh but the muscles of men.",
        incorrectScreen: "Incorrect! I'm getting more of a chicken vibe.",
    },
    {
        question: "What was Dee's nickname in highschool?",
        possibleAnswers: ["Fatty Magoo", "Big Dumb Bird", "The Aluminum Monster", "Sweet Dee"],
        correct: 2,
        correctScreen: "Correct! Sir Mix-A-Lot was not talking about women whose backs have recovered from horrific spinal disorders.",
        incorrectScreen: "Incorrect! I could see it in ya eyes and I could see it in ya thighs, Still fat to me still fat to you, Fatty Magoo Fatty Magoo",
    },
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
        timerFunction()
    })
    //unhides scoreboard initially, but also used as sort of a "refresh" function.
    function showScoreboard() {
        $('.scoreboard').removeClass("hidden");
        $('#rightanswers').html("Correct answers: " + rightAnswers);
        $('#wronganswers').html("Incorrect answers: " + wrongAnswers);
        $('#noanswer').html("Questions Timed Out: " + noAnswer);
        $('#questionsremaining').html();
    }

    function timerFunction() {
        var timerSeconds = 20;
        var timerInterval = setInterval(function() {
            timerSeconds--;
            $('#timer').html("Time Remaining: " + timerSeconds);
            if (timerSeconds === 0) {
                clearInterval(timerInterval);
                textShownAfterTimeOut();
                setTimeout(function () {
                    wrongAnswers++
                    currentQuestion++
                    buttonClear();
                    showScoreboard();
                    printCurrentQuestion(currentQuestion);
                    printAnswerButtons(currentQuestion);
                    timerFunction();
                    console.log({
                        "right answers": rightAnswers
                    }, {
                            "wrong answers": wrongAnswers
                        });
                }, 5000);
            }
        }, 1000)
    }

    //initially unhides the hidden question div when user hits start game. Then used to update the question displayed.
    function printCurrentQuestion(currentQuestion) {
        $('#questionsdiv').removeClass("hidden");
        $('#questionsdiv').text(triviaQuestions[currentQuestion].question);
    }

    //function that prints answers on buttons. 
    function printAnswerButtons(currentQuestion) {
        for (var i = 0; i < triviaQuestions[currentQuestion].possibleAnswers.length; i++) {
            var button = $("<button>");
            button.addClass("button");
            button.addClass("choice-buttons");
            button.attr("data-index", i);
            button.text(triviaQuestions[currentQuestion].possibleAnswers[i]);
            $("#buttonsdiv").append(button);
        }
    };

    function textShownAfterAnsweringCorrect() {
        $('#questionsdiv').html(triviaQuestions[currentQuestion].correctScreen);
    }
    function textShownAfterAnsweringIncorrect() {
        $('#questionsdiv').html(triviaQuestions[currentQuestion].incorrectScreen);        
    }
    function textShownAfterTimeOut() {
        $('#questionsdiv').html("timeout")
    }
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
            textShownAfterAnsweringCorrect();
            setTimeout(function() {
                rightAnswers++
                currentQuestion++
                buttonClear();
                showScoreboard();
                printCurrentQuestion(currentQuestion)
                printAnswerButtons(currentQuestion);
                console.log({
                    "right answers": rightAnswers
                }, {
                        "wrong answers": wrongAnswers
                    });
                return;
            }, 5000);            
            
        }
        if (triviaQuestions[currentQuestion].correct !== answerIndex) {
            textShownAfterAnsweringIncorrect();
            clearInterval(timerInterval);            
            setTimeout(function () {
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
            }, 5000);

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
