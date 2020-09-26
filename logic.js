// header will contain "View Highscore" aligned to the left and a timer aligned to the right.

//universal vars
var highscore = document.querySelector(".highscore");
var timer = document.querySelector(".timer");
var wholeBox = document.querySelector(".container");
var questions = document.querySelector(".question");
var buttons = document. querySelector("#buttons");
var startButton = document.getElementById("startButton");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer1 = document.getElementById("answer3");
var answer1 = document.getElementById("answer4");


var quizIndex = 0;
var timeLeft = 75;

//h1 will display the questions
var quiz = [
    //quiz questions and potential answers here in this array
    Question1 = {
        question: "this is a test of the question",
        //these will probably be changed into buttons
        answer1: "wrong answer",
        answer2: "wrong anser",
        answer3: "right answer",
        answer4: "wrong answer"
        
    },
    Question2 = {
        question: "this is a test of the question",
        //these will probably be changed into buttons
        answer1: "wrong answer",
        answer2: "wrong anser",
        answer3: "right answer",
        answer4: "wrong answer"
        
    },
    Question3 = {
        question: "this is a test of the question",
        //these will probably be changed into buttons
        answer1: "wrong answer",
        answer2: "wrong anser",
        answer3: "right answer",
        answer4: "wrong answer"
        
    },
    Question4 = {
        question: "this is a test of the question",
        //these will probably be changed into buttons
        answer1: "wrong answer",
        answer2: "wrong anser",
        answer3: "right answer",
        answer4: "wrong answer"
        
    },
];

function displayQuestion(index){
    question.textContent = quiz[index].question;
};

function begin() {
    startButton.parentNode.removeChild(startButton);
    timer.textcontent = timeLeft; //countdown
    
    var countdown = setInterval(function(){ //telling countdown to go down from starting point
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft ==0){
            clearInterval(countdown);
        }



    }, 1000);
};

startButton.addEventListener("click", begin);
displayQuestion(quizIndex);


// questions div will display 4 buttons witnh the potential answers on them

//any button click will trigger the next question along with a "correct" or "incorrect" at the bottom, but wrong answers will drain the timer.

//at the end, a text box will allow a person to input their initials.  Will save to local storage.