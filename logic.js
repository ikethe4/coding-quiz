// header will contain "View Highscore" aligned to the left and a timer aligned to the right.

//universal vars
var highscore = document.querySelector(".highscore");
var timer = document.querySelector(".timer");
var wholeBox = document.querySelector(".container");
var questionsText = document.querySelector(".question");
var buttons = document. querySelector("#buttons");
var startButton = document.getElementById("startButton");
// var answer1 = document.getElementById("answer1");
// var answer2 = document.getElementById("answer2");
// var answer3 = document.getElementById("answer3");
// var answer4 = document.getElementById("answer4");
var allButtons = document.querySelectorAll("button");


var quizIndex = 0;
var timeLeft = 75;

//h1 will display the questions
var quiz = [
    //quiz questions and potential answers here in this array
    {
        question: "this is question 1",
        answers: ["wrong answer", "wrong answer", "right answer", "wrong answer"],
        correct: "right answer"
        
    },
    {
        question: "this is question 2",
        answers: ["wrong answer", "wrong answer", "right answer", "wrong answer",],
        correct: "right answer"
    },
    {
        question: "this is question 3",
        answers: ["wrong answer", "wrong answer", "right answer", "wrong answer"],
        correct: "right answer"
    },
    {
        question: "this is question 4",
        answers: ["wrong answer", "wrong answer", "right answer", "wrong answer"],
        correct: "right answer"

    },
];


startButton.addEventListener("click", function (event){
    startButton.parentNode.removeChild(startButton);
    begin();
});

function nextQuestion(){

}


function displayQuestion(index){
    question.textContent = quiz[index].question;

    if (index >= quiz.length) {
        alert("Test finished.  Endgame here.");
        //display high score and save to local storage
    }
    else {
        //questionsText.textContent = quiz[index].question; doesn't work
        question.textContent=quiz[index].question;

        // generate buttons
        var i=0
        for (i=0; i <quiz[0].answers.length; i++){

        var answerBtn = document.createElement("button");
        answerBtn.textContent = quiz[0].answers[i];
        buttons.append(answerBtn);
        //register clicks on answer buttons
        answerBtn.addEventListener("click", function() {
            console.log("you clicked: ", this.innerHTML);
            if (this.innerHTML===quiz[0].correct){// THIS IS WHERE I AM STUCK
                console.log("good guess!");
            }
            else {
                console.log("try again")
            }
        });

        //mapping the button press to the correct answer

        //if correct button is clicked, move on, else deduct 10 seconds and move on
        if (quiz[0].answers[i] === quiz[0].correct){
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
    
    var countdown = setInterval(function(){ //telling countdown to go down from starting point and stop at zero
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft ==0){
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