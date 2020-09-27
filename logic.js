// header will contain "View Highscore" aligned to the left and a timer aligned to the right.

//universal vars
var highscore = document.querySelector(".highscore");
var timer = document.querySelector(".timer");
var wholeBox = document.querySelector(".container");
var questionsText = document.querySelector(".question");
var buttons = document. querySelector("#buttons");
var startButton = document.getElementById("startButton");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var allButtons = document.querySelectorAll("button[class^=button]");


var quizIndex = 0;
var timeLeft = 75;

//h1 will display the questions
var quiz = [
    //quiz questions and potential answers here in this array
    Question1 = {
        question: "this is question 1",
        //these will probably be changed into buttons
        answer1: "wrong answer",
        answer2: "another wrong answer",
        answer3: "right answer",
        answer4: "yet another wrong answer",
        correct: "answer3"
        
    },
    Question2 = {
        question: "this is question 2",
        //these will probably be changed into buttons
        answer1: "wrong answer",
        answer2: "right answer",
        answer3: "another wrong answer",
        answer4: "yet another wrong answer",
        correct: "2"
    },
    Question3 = {
        question: "this is question 3",
        //these will probably be changed into buttons
        answer1: "right answer",
        answer2: "wrong answer",
        answer3: "wrong answer",
        answer4: "wrong answer",
        correct: "1"
        
    },
    Question4 = {
        question: "this is question 4",
        //these will probably be changed into buttons
        answer1: "wrong answer",
        answer2: "right answer",
        answer3: "wrong answer",
        answer4: "wrong answer",
        correct: "2"


    },
];

function displayQuestion(index){
    question.textContent = quiz[index].question;
    answer1.textContent = quiz[index].answer1;
    answer2.textContent =quiz[index].answer2;
    answer3.textContent =quiz[index].answer3;
    answer4.textContent =quiz[index].answer4;
    if (index >= quiz.length) {
        alert("Test finished.  Endgame here.");
        //display high score and save to local storage
    }
    else {
        //questionsText.textContent = quiz[index].question; doesn't work
        question.textContent=quiz[index].question;

        //generate buttons
        // var answer = document.createElement("button");
        // answer.setAttribute("id", "1");
        // answer.setAttribute("class", "button")
        // answer.textContent = quiz[index].answer1;
        // buttons.append(answer);

        // answer = document.createElement("button");
        // answer.setAttribute("id", "2");
        // answer.setAttribute("class", "button")
        // answer.textContent = quiz[index].answer2;
        // buttons.append(answer);

        // answer = document.createElement("button");
        // answer.setAttribute("id", "3");
        // answer.setAttribute("class", "button")
        // answer.textContent = quiz[index].answer3;
        // buttons.append(answer);

        // answer = document.createElement("button");
        // answer.setAttribute("id", "4");
        // answer.setAttribute("class", "button")
        // answer.textContent = quiz[index].answer4;
        // buttons.append(answer);
    }


};

function begin() {
    startButton.parentNode.removeChild(startButton);
    timer.textcontent = timeLeft; //countdown
    
    var countdown = setInterval(function(){ //telling countdown to go down from starting point and stop at zero
        timeLeft--;
        timer.textContent = timeLeft;
        if (timeLeft ==0){
            clearInterval(countdown);
        };
        //recognition of which button is pressed
        for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].addEventListener("click", function() {
                console.clear();
                console.log("you clicked: ", this.innerHTML);
            });
        };
        //if else statements regarding which button is clicked
        
        //if the ID of the button clicked != .correct, subtract 10 seconds from timer and move to next question in index
            //else move to next question in index

    }, 1000);
};



startButton.addEventListener("click", begin);
displayQuestion(quizIndex);




// questions div will display 4 buttons witnh the potential answers on them

//any button click will trigger the next question along with a "correct" or "incorrect" at the bottom, but wrong answers will drain the timer.

//at the end, a text box will allow a person to input their initials.  Will save to local storage.