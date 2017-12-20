$(document).ready(function() {

    var questionsData = ['How much wood would a woodchuck chuck if a woodchuck could chuck wood?'];
    var allAnswers = [5,7,9,10000];
    var correctAnswers = [7];

    $('#questions').html(questionsData);
    console.log(questionsData, allAnswers, correctAnswers);
});
