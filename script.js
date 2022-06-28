//GLOBAL VARIABLES (LANDING PAGE)
var firstPage = document.getElementById("welcomeBox");
var letsBegin = document.getElementById("startButton");

//VARIABLES FOR AFTER "LET'S BEGIN" HAS BEEN CLICKED
var finalResult = document.getElementById("scoreAndTimer");
var questionBox = document.getElementById("questions")
var timer = document.getElementById("userTimer");
var highScore = document.getElementById("userHighScoreInfo");
var question = document.getElementById("quizQues");
var answerWindow = document.getElementById("bigQuizBox");

//QUIZ QUESTION AND ANSWER CHOICES
const testBank = ["What does HTML stand for?", "Which of the following is NOT an example of a common Javascript data type?", "What does CSS stand for?", "Javascript pages will be read in what direction?"];
const answerBank1 = ["High Tech Machine Language", "Hyper Tech Markup Language", "Hyper Text Markup Language", "Hyper Task Machine Language"];
const answerBank2 = ["String", "Boolean", "Numbers", "Hidden"];
const answerBank3 = ["Computer System Settings", "Cascading System Sheets", "Cascading Style System", "Cascading Style Sheets"];
const answerBank4 = ["Bottom to Top", "Top to Bottom", "Randomly as the system decides in what order to process by simplicity", "Javascript code is invoked and not read"];


var secondsLeft ;

var choiceA = document.getElementById("optionA");
var choiceB = document.getElementById("optionB");
var choiceC = document.getElementById("optionC");
var choiceD = document.getElementById("optionD");

function timeLoss() {
    secondsLeft = secondsLeft -10; 
}

function startOver() {
    setTimeout(completeQuiz, 100000);
}

var testTime = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time Remaining :  " + secondsLeft;
    // if(secondsLeft <= 0) {
    //     clearInterval(testTime);
    //     completeQuiz();}   
    },1000); 

    function timeClock () {
firstPage.setAttribute("style", "display:none");
scoreAndTimer.setAttribute("style", "display: block");
bigQuizBox.setAttribute("style", "display: center" );
    secondsLeft = 100;
    // var testTime = setInterval(function() {
    // secondsLeft--;
    // timer.textContent = "Time Remaining :  " + secondsLeft;
    // // if(secondsLeft <= 0) {
    // //     clearInterval(testTime);
    // //     completeQuiz();}   
    // },1000); }
    firstQuestion() }

function firstQuestion() {
    quizQues.textContent = testBank[0];
    optionA.textContent = answerBank1[0];
    optionB.textContent = answerBank1[1];
    optionC.textContent = answerBank1[2];
    optionD.textContent = answerBank1[3];
    answerWindow.addEventListener("click", buttonClick1);}
    

function buttonClick1(click) {
    var target = click.target;   
    if(target == choiceC) {
        secondQuestion(); }
    else if (target != choiceC) {
        timeLoss(); 
        secondQuestion();} 
        answerWindow.removeEventListener("click", buttonClick1);
    }    


function secondQuestion() {
    quizQues.textContent = testBank[1];
    optionA.textContent = answerBank2[0];
    optionB.textContent = answerBank2[1];
    optionC.textContent = answerBank2[2];
    optionD.textContent = answerBank2[3];
    answerWindow.addEventListener("click", buttonClick2); 
}  

function buttonClick2(click) {
    var target = click.target;
    if(target == choiceD) {
        thirdQuestion(); }
    else if (target != choiceD) {
        timeLoss();
        thirdQuestion();}
        answerWindow.removeEventListener("click", buttonClick2);
    }

function thirdQuestion() {
    quizQues.textContent = testBank[2];
    optionA.textContent = answerBank3[0];
    optionB.textContent = answerBank3[1];
    optionC.textContent = answerBank3[2];
    optionD.textContent = answerBank3[3];
    answerWindow.addEventListener("click", buttonClick3); 
}

function buttonClick3(click) {
    var target = click.target;
    if(target == choiceD) {
        fourthQuestion();}      
    else if (target != choiceD) {
        timeLoss();
        fourthQuestion();}
        answerWindow.removeEventListener("click", buttonClick3);
}


function fourthQuestion() {
    quizQues.textContent = testBank[3];
    optionA.textContent = answerBank4[0];
    optionB.textContent = answerBank4[1];
    optionC.textContent = answerBank4[2];
    optionD.textContent = answerBank4[3];   
    answerWindow.addEventListener("click", buttonClick4); 
}

function buttonClick4(click) {
    var target = click.target;
    if(target == choiceB) {
        completeQuiz();}
    else if (target != choiceB) {
        timeLoss();
        completeQuiz();}
        answerWindow.removeEventListener("click", buttonClick4);
}
        
function completeQuiz() {
    clearInterval(testTime);
    answerWindow.setAttribute("style", "display:none");
    resultsBox.setAttribute("style", "display:block");
    highScore.textContent = ("You scored a " + secondsLeft)
    localStorage.setItem("firstName"); 
}      
  
letsBegin.addEventListener("click", timeClock);
letsBegin.addEventListener("click", startOver);