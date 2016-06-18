"use strict"
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
});