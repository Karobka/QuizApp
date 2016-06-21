"use strict";
$(document).ready(function() {
/** Click to begin
 * Load Score, load first question, load choices from array,
 * load questions remaining number,
 * If user clicks on correct answer show correct! message.
 *  and increment score +5
 *      else show incorrect message
 *      and decrement score -5
 * Increment to next question and answer array until the end of the array.
 * Display final score and new game button.
 */
    var currentQuestion = 0;
    var currentScore = 0;
    
    var questionsArray = [
        {
            question: "Question #1: In which state is the Sequoia National Park?",
            choicesArray: ["Utah", "Arkansas", "California", "Idaho"],
            correctAnswer: "California"
        },
        {
            question: "Question #2: In which state is the Arches National Park?",
            choicesArray: ["Nevada", "Utah", "Arkansas", "California"],
            correctAnswer: "Utah"
        },
        {
            question: "Question #3: In which state is the Haleakala National Park?",
            choicesArray: ["Hawaii", "Texas", "Washington", "Montana"],
            correctAnswer: "Hawaii"
        },
         {
            question: "Question #4: In which state is the Badlands National Park?",
            choicesArray: ["South Dakota", "California", "Arizona", "Wyoming"],
            correctAnswer: "Arkansas"
        },
        {
            question: "Question #5: In which state is the Hot Springs National Park?",
            choicesArray: ["South Dakota", "California", "Montana", "Arkansas"],
            correctAnswer: "Arkansas"
        },
        {
            question: "Question #6: In which state is the Mount Rainier National Park?",
            choicesArray: ["Maine", "Washington", "Idaho", "South Dakota"],
            correctAnswer: "Washington"
        },
        {
            question: "Question #7: In which state is the Bryce Canyon National Park?",
            choicesArray: ["Montana", "Maine", "California", "Utah"],
            correctAnswer: "Utah"
        },
        {
            question: "Question #8: In which state is the Joshua Tree National Park?",
            choicesArray: ["California", "Nevada", "Idaho", "Hawaii"],
            correctAnswer: "California"
        },
        {
            question: "Question #9: In which state is the Acadia National Park?",
            choicesArray: ["Florida", "Idaho", "Maine", "Arizona"],
            correctAnswer: "Maine"
        },
        {
            question: "Question #10: In which state is the Glacier National Park?",
            choicesArray: ["Alaska", "Montana", "Oregon", "South Dakota"],
            correctAnswer: "Montana"
        },
    ]
    var questionsLeft = questionsArray.length;
    $("#questioncount").text(questionsLeft);
    
    $("#clicktobegin").css("display", "inline-block");
    $("#clicktobegin").on("click", function(event){
        $(this).css("display", "none");
        $("#statsboxinfo").css('display', 'block');
        $("#questioncount").text("Questions left: " + questionsLeft);
        $("#score").text("Score: " + currentScore);
        $("#multiplechoices".li).css("display", "inline-block");
        $("button").css("display", "inline-block");
        newQuestion();
    });

function newQuestion() {
    if (currentQuestion <= questionsArray.length - 1) {
        $("#questiontext").text(questionsArray[currentQuestion].question);
        for (var i=0; i<questionsArray[currentQuestion].choicesArray.length; i++){
            $("#multiplechoices").append("<li>" + questionsArray[currentQuestion].choicesArray[i] + "</li>");
        }
    } else {
        endGame();
    }
}

$("#multiplechoices").on("click", "li", function(event) {
    if ($(this).text() === questionsArray[currentQuestion].correctAnswer) {
        $("#overlaycorrect").css("display", "block").fadeOut(2000);
        currentQuestion++;
        currentScore++;
        questionsLeft--;
        updateUi();
        newQuestion();
    }else {
        $("#overlayincorrect").css("display", "block").fadeOut(2000);
        currentQuestion++;
        currentScore--;
        questionsLeft--;
        updateUi();
        newQuestion();
    }
});

function updateUi() {
        $("#questioncount").text("Questions left: " + questionsLeft);
        $("#score").text("Score: " + currentScore);
        $("#finalscore").text(currentScore);
        $("#multiplechoices").empty();
}

function endGame() {
        $("#overlayscore").css("display", "block");
        $("#statsboxinfo").css("display", "none");
        $("#newgame").css("display", "inline-block");
        $("#newgame").on("click", function(event){
            $(this).css("display", "none");
            currentQuestion = 0;
            questionsLeft = questionsArray.length;
            currentScore = 0;
            $("#statsboxinfo").css('display', 'block');
            $("#multiplechoices".li).css("display", "inline-block");
            $("button").css("display", "inline-block");
            $("#overlayscore").css("display", "none");
            updateUi();
            newQuestion();
        });
}
    /**If the user clicks on an li that matches correctAnswer
     * increment score by 5
     * display correct message
     * increment currentQuestion
     * load next question until the iteration # <= length of the question array
     * 
     * else decrement score by 5
     * diplay incorrect message
     * increment currentQuestion
     * load next question until the iteration # <= length of the question array
     */


});