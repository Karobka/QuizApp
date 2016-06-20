"use strict";
$(document).ready(function() {
    $("#clicktobegin").css("display", "inline-block");
    $("#clicktobegin").on("click", function(event){
        $(this).css("display", "none");
        $("#statsquestionslist").css('display', 'block');
        $("#choice1").css("display", "inline-block");
        $("#choice2").css("display", "inline-block");
        $("#choice3").css("display", "inline-block");
        $("#choice4").css("display", "inline-block");
        $("button").css("display", "inline-block");
        $(".instructions").css("sidplay", "inline-block");
    });

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
            question: "Question #5: In which state is the Hot Springs National Park?",
            choicesArray: ["South Dakota", "California", "Montana", "Arkansas"],
            correctAnswer: "Arkansas"
        },
        {
            question: "Question #6: In which state is the Mount Rainier National Park?",
            choicesArray: ["Maine", "Washington", "Idaho", "South Dakota"],
            correctAnswer: "Washinton"
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
        }
    ]
});