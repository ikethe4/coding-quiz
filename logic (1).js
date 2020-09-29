// header will contain "View Highscore" aligned to the left and a timer aligned to the right.

//universal vars
var highscore = document.querySelector(".highscore");
var timer = document.querySelector(".timer");
var wholeBox = document.querySelector(".container");
var questionsText = document.querySelector(".question");
var buttons = document.querySelector("#buttons");
var startButton = document.getElementById("startButton");
// var answer1 = document.getElementById("answer1");
// var answer2 = document.getElementById("answer2");
// var answer3 = document.getElementById("answer3");
// var answer4 = document.getElementById("answer4");
var allButtons = document.querySelectorAll("button");
var resultText = document.querySelector(".result");



var quizIndex = 0;
var timeLeft = 75;

//h1 will display the questions
var quiz = [
    //quiz questions and potential answers here in this array
    {
        question: "An array uses which symbol?",
        answers: ["parenthases ()", "squiggly brackets {}", "brackets []", "double quotes \"\""],
        correct: "brackets []"

    },
    {
        question: "When would you use an object?",
        answers: ["To list unrelated items", "to execute a function", "to append an element", "to list related items",],
        correct: "to list related items"
    },
    {
        question: "What does DOM stand for?",
        answers: ["Document Object Model", "Digital Only Media", "Digital Offline Modeling", "Document Object Maker"],
        correct: "Document Object Model"
    },
    {
        question: "Javascript is primarily used for...",
        answers: ["Providing the text for Java", "Adding dynamic functions to a webpage", "Styling HTML", "Spellchecking names on coffee cups"],
        correct: "Adding dynamic functions to a webpage"

    },
];


startButton.addEventListener("click", function (event) {
    startButton.parentNode.removeChild(startButton);
    begin();
});

function nextQuestion(quizIndex) {
    quizIndex++;
    clearButtons();
    displayQuestion(quizIndex);

}

function clearButtons() {
    buttons.innerHTML = "";
};

function displayQuestion(index) {
    question.textContent = quiz[index].question;

    if (index >= quiz.length) {
        alert("Test finished.  Endgame here.");
        //display high score and save to local storage
    }
    else {
        //questionsText.textContent = quiz[index].question; doesn't work
        question.textContent = quiz[index].question;

        // generate buttons
        for (var i = 0; i < 4; i++) {

            var answerBtn = document.createElement("button");
            answerBtn.textContent = quiz[index].answers[i];
            buttons.append(answerBtn);
            //register clicks on answer buttons
            answerBtn.addEventListener("click", function () {
                console.log("you clicked: ", this.innerHTML);
                if (this.innerHTML === quiz[index].correct) {
                    console.log("good guess!");
                    question.textContent = quiz[index].question;
                    resultText.textContent = "Correct!";
                    //buttons need to clear/cycle
                    //question 1 currently requires 2 clicks
                    nextQuestion(quizIndex);

                }
                else {
                    console.log("try again");
                    question.textContent = quiz[index].question;
                    timeLeft = timeLeft - 10;
                    resultText.textContent = "Incorrect!"
                    nextQuestion(quizIndex);


                }
            });

            // nextQuestion();


            //mapping the button press to the correct answer

            //if correct button is clicked, move on, else deduct 10 seconds and move on
            if (quiz[0].answers[i] === quiz[0].correct) {
                answerBtn.setAttribute("data-correct", true);



            }


        }

    }

    // document.body.addEventListener("click", function(event){
    //     var target = event.target
    //     if(target.answerBtn) {
    //         var isCorrect = target.getAttribute("data-correct");
    //         if (isCorrect){
    //             console.log("Yes!")
    //         }
    //     }
    // })


};

function begin() {
    //     startButton.parentNode.removeChild(startButton);
    //     timer.textcontent = timeLeft; //countdown

    var countdown = setInterval(function () { //telling countdown to go down from starting point and stop at zero
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft == 0) {
            clearInterval(countdown);
        };
        // //recognition of which button is pressed

        //if else statements regarding which button is clicked

        //if the ID of the button clicked != .correct, subtract 10 seconds from timer and move to next question in index
        //else move to next question in index

    }, 1000);
};




// startButton.addEventListener("click", function (event){
//     startButton.parentNode.removeChild(startButton);
//     timer.textcontent = timeLeft;
// });
displayQuestion(quizIndex);




// // questions div will display 4 buttons witnh the potential answers on them

// //any button click will trigger the next question along with a "correct" or "incorrect" at the bottom, but wrong answers will drain the timer.

// //at the end, a text box will allow a person to input their initials.  Will save to local storage.