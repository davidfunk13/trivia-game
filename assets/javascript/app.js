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
    var questionIndex = 0;
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
        {
            question: "In the episode 'The Gang Gets Analyzed, Who has to do the dishes?",
            possibleAnswers: ["Mac","Dennis","Charlie","Dee"],
            correct: 3,
            correctScreen: "Correct! Well, Charlie Work is, like, you know... like basement stuff, cleaning urinals, uh, blood stuff, your basic slimes, your sludges, anything dead or decay, you know - I'm on it, I'm dealing with it!",
            incorrectScreen: "Incorrect! DEE DO THE DAMN DISHES",
        },
        {
            question: "In the episode 'Sweet Dee has a Heart Attack', What does Dee accidentally inject Dennis with?",
            possibleAnswers: ["Mexican Collagen","Mexican Botox", "Mexican Ephedra", "Whiskey"],
            correct: 0,
            correctScreen: "Correct! Come to think of it, I do feel a bit of pain coming on.",
            incorrectScreen: "Incorrect! YOU INJECTED ME WITH MEXICAN COLLAGEN?",
        },
        {
            question: "What do Pepperjack Love?",
            possibleAnswers: ["Sweet Dee", "Chocolate", "Fraggle Rock", "Expensive Canes"],
            correct: 2,
            correctScreen: "Correct! PepperJack LOVES Fraggle Rock",
            incorrectScreen:"Incorrect! Do PepperJack LOOK like he playin?",
        },
        {
            question: "What did Mac instruct Dennis to burn in his will when faking his own death?",
            possibleAnswers: ["Trenchcoat","Duster","Hoodie", "Favorite shoes"],
            correct: 1,
            correctScreen: "Correct! Hey, I'm not burning the duster! Okay, I'm not burning the duster. Alright. That's crazy. That's like...that's insane. Why would I ever burn...heh...I mean c'mon...I will continue to wear it in his honor and I will burn some other things. You know, maybe like these stupid god damn sleeveless t-shirts that he wants retired and hung up in the bar. I'll burn these, but I am not burning the duster. Okay? So forget it. It probably won't even burn anyway. It's not supposed to, it's flame retardant. That's like the whole point. It's like a shield of armor. So stop asking me to burn the duster! I'm not going to burn it! So...end of story, you know? Let's just move on. Okay? So...yeah, alright, well uh thank you",
            incorrectScreen: "Incorrect! We should've got beans, dude."
        },
        {
            question: "What is the preferred drink of the McPoyle family?",
            possibleAnswers: ["Orange Juice", "Warm soda", "Moonshine", "Milk"],
            correct: 3,
            correctScreen: "I spiked the milk with Methylenedioxypyrovalerone. It’s bath salts. Yeah, it’s like coke and acid and, like, meth all combined. It's awesome.",
            incorrectScreen: "Incorrect! How is a glass of milk gonna loosen me up, Bill?",
        },
        {
            question: "Philly's Annual Flipcup Tournament",
            possibleAnswers: ["Philly Phlip Cup", "Flipadelphia", "Philadelphia Beer Games", "Liberty Bell Games"],
            correct: 1,
            correctScreen:"Correct! Fliiip fliip fliiipadelphia.",
            incorrectScreen:"Incorrect! Weeelllll THAT's becuase you just drank a big cup of POISON.",
        },
        {
            question: "Who died in Mac and Charlie's Childhood pool?",
            possibleAnswers: ["Gail the Snail", "Schmitty", "Tim Murphy", "Jamie Nelson"],
            correct: 3,
            correctScreen: "Correct! Ugh! Gross, dude. I will not go to that disgusting public pool. ... 'Cause Jamie Nelson drowned in it.",
            incorrectScreen:"Incorrect!Just accept the fact that youre white trash, dude. Look at yourself. You can't do backflips, you DON'T know karate, you're white trash!",
        },
    ];
    // variable with value = to index of triviaQuestions.question (ie Q1, Q2, Q3, Q4)
    //will be incremented (++) to display a new question.

    //function that prints the current question to the page, takes an argument of "current question"
    $('.start-game').on("click", function () {
        printCurrentQuestion(questionIndex);
        printAnswerButtons(questionIndex);
        showScoreboard();
        $('.start-game').addClass("hidden");
        $('#buttonsdiv').removeClass("hidden");
    })
    //unhides scoreboard initially, but also used as sort of a "refresh" function.
    function showScoreboard() {
        $('.scoreboard').removeClass("hidden");
        $('#rightanswers').html("Correct answers: " + rightAnswers);
        $('#wronganswers').html("Incorrect answers: " + wrongAnswers);
    }
    //initially unhides the hidden question div when user hits start game. Then used to update the question displayed.
    function printCurrentQuestion(questionIndex) {
        $('#questionsdiv').removeClass("hidden");
        $('#questionsdiv').text(triviaQuestions[questionIndex].question);
        callTimer();
    }

    //function that prints answers on buttons. 
    function printAnswerButtons(questionIndex) {
        for (var i = 0; i < triviaQuestions[questionIndex].possibleAnswers.length; i++) {
            var button = $("<button>");
            button.addClass("button");
            button.addClass("choice-buttons");
            button.attr("data-index", i);
            button.text(triviaQuestions[questionIndex].possibleAnswers[i]);
            $("#buttonsdiv").append(button);
        }
    };

    function textShownAfterAnsweringCorrect() {
        $('#questionsdiv').html(triviaQuestions[questionIndex].correctScreen);
    }

    function textShownAfterAnsweringIncorrect() {
        $('#questionsdiv').html(triviaQuestions[questionIndex].incorrectScreen);
    }

    function textShownAfterTimeOut() {
        $('#questionsdiv').html("<p>Out of Time! Wrong answer +1</p><img src='./assets/images/timeoutgif.gif' alt='You're so stupid.'>");
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
        if (triviaQuestions[questionIndex].correct === answerIndex) {
            textShownAfterAnsweringCorrect();
            buttonClear();
            rightAnswers++
            showScoreboard();
            if (questionIndex + 1 === triviaQuestions.length) {
                winCheck();
            }
            if (questionIndex + 1 < triviaQuestions.length) {
                setTimeout(function () {
                    buttonClear();
                    showScoreboard();
                    printCurrentQuestion(questionIndex);
                    printAnswerButtons(questionIndex);
                }, 5000);
            }
        }
        if (triviaQuestions[questionIndex].correct !== answerIndex) {
            textShownAfterAnsweringIncorrect();
            buttonClear();
            wrongAnswers++
            showScoreboard();
            if (questionIndex + 1 === triviaQuestions.length) {
                winCheck();
            }
            if (questionIndex + 1 < triviaQuestions.length) {
                setTimeout(function () {
                    buttonClear();
                    showScoreboard();
                    printCurrentQuestion(questionIndex);
                    printAnswerButtons(questionIndex);
                }, 5000);
            }
        }
        questionIndex++
    });

    function winCheck() {
        var scoreCalc = Math.floor(rightAnswers / (rightAnswers + wrongAnswers) * 100)
        var totalScore = scoreCalc + "%";
        if (scoreCalc >= 70) {
            console.log({
                "Total Score": totalScore
            });
            $('#questionsdiv').html("YOU WIN WITH AN AMAZING " + totalScore);
            $('#questionsdiv').append("<button class='resetbutton'>Reset Game</button>")
            $('.resetbutton').on("click", function () {
                location.reload();
            });             
        }
        if (scoreCalc < 70) {
            console.log({
                "Total Score": totalScore
            });
            $('#questionsdiv').html("YOU LOSE WITH A TERRIBLE " + totalScore);
            $('#questionsdiv').append("<div class='resetdiv'><button class='resetbutton'>Reset Game</button></div>")
            $('.resetbutton').on("click", function () {
                location.reload();
            });
        }
    }

    function callTimer() {
        if (questionIndex <= triviaQuestions.length) {
            runTimer();
        }
        if (questionIndex === triviaQuestions.length) {
            console.log("no question to time");
        }
    }

    function runTimer() {
        var timerSeconds = 10;
        var timerInterval = setInterval(function () {
            timerSeconds--;
            $('#timer').html("Time Remaining: " + timerSeconds);
            if (timerSeconds === 0) {
                wrongAnswers++
                showScoreboard();
                textShownAfterTimeOut();
                buttonClear();
                clearInterval(timerInterval);
                timerSeconds = 10;
                $('#timer').html("Time Remaining: " + timerSeconds);
                setTimeout(function () {
                    showScoreboard();
                    console.log(questionIndex, triviaQuestions.length)
                    if (questionIndex +1 < triviaQuestions.length) {
                        questionIndex++
                        printCurrentQuestion(questionIndex);
                        printAnswerButtons(questionIndex);
                    }
                    if (questionIndex + 1 === triviaQuestions.length) {
                        winCheck();
                    }
                }, 5000);
            }
        }, 1000)

        $(document).on("click", ".button", function () {
            clearInterval(timerInterval);
            timerSeconds = 10;
            $('#timer').html("Time Remaining: " + timerSeconds);
        });

    }
});
