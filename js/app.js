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
function newQuestion() {
    if (currentQuestion <= questionsArray.length - 1) {
        $(".questiontext").text(questionsArray[currentQuestion].question);
        for (var i = 0; i < questionsArray[currentQuestion].choicesArray.length; i++) {
            $(".multiplechoices").append("<button>" + questionsArray[currentQuestion].choicesArray[i] + "</button>");
        }
    } else {
        endGame();
    }
}
/** Update question count, score, finalscore, and empty out choices */
function updateUi() {
    $(".questioncount").text("Questions left: " + questionsLeft);
    $(".score").text("Correct: " + currentScore + "/10");
    $(".finalscore").text(currentScore);
    $(".multiplechoices").empty();
}

/** Hide stats, show score, show new game button */
function endGame() {
    $(".overlayscore").css("display", "block");
    $(".statsboxinfo").css("display", "none");
    $(".newgame").css("display", "inline-block");
    $(".newgame").on("click", function () {
        $(this).css("display", "none");
        currentQuestion = 0;
        questionsLeft = questionsArray.length;
        currentScore = 0;
        $(".statsboxinfo").css('display', 'block');
        $(".multiplechoices".button).css("display", "inline-block");
        $("button").css("display", "inline-block");
        $(".overlayscore").css("display", "none");
        updateUi();
        newQuestion();
    });
}
function showHud() {
    $(".statsboxinfo").css("display", "block");
    $(".questioncount").text("Questions left: " + questionsLeft);
    $(".score").text("Correct: " + currentScore + "/10");
    $(".multiplechoices".button).css("display", "inline-block");
    $("button").css("display", "inline-block");
}
function progressThebar() { 
    var width = 1;
    var progress_num = setInterval(frame, 25);
    function frame() {
        if (width >= 100) {
            clearInterval(progress_num);
        } else {
            width++;
            $(".progress_bar").css("width", width + "%");
        }
    }
}
function resetProgressbar() {
    $(".progress_bar").css("width", "0%");
}
$(document).ready(function () {
    $(".progress_wrap").toggle();
    $(".questioncount").text(questionsLeft);
    $(".clicktobegin").css("display", "inline-block");
    $(".clicktobegin").on("click", function (event) {
        $(this).css("display", "none");
        $(".progress_wrap").toggle();
        showHud();
        newQuestion();
    });
    $(".multiplechoices").on("click", "button", function () {
        progressThebar();
        event.preventDefault();
        $("button").attr("disabled", true);
        if ($(this).text() === questionsArray[currentQuestion].correctAnswer) {
            $(".overlaycorrect").css("display", "block").fadeOut(2500);
            currentQuestion++;
            currentScore++;
            questionsLeft--;
            setTimeout(updateUi, 3000);
            setTimeout(newQuestion, 3000);
            setTimeout(resetProgressbar, 3000);
        } else {
            $(".overlayincorrect").css("display", "block").fadeOut(2500);
            currentQuestion++;
            questionsLeft--;
            setTimeout(updateUi, 3000);
            setTimeout(newQuestion, 3000);
            setTimeout(resetProgressbar, 3000);
        }
    });
});