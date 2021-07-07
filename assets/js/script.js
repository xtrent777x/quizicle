//VAR called out elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");



// 5 JavaScript questions multiple choice with answer

let questions = [
    {
        question : "Which built in method returns the calling string value converted to upper case?",
        choiceA : "toUpperCase()",
        choiceB : "toUpper",
        choiceC : "changeCase(case)",
        choiceD : "None of the above",
        correct : "A"

    },
    {
        question : "Which built in method returns the character at specified index?",
        choiceA : "characterAt()",
        choiceB : "getChar()",
        choiceC : "charAt()",
        choiceD : "None of the above",
        correct : "A"

    },
    {
        question : "Which of the following is a valid type of function javascript supports?",
        choiceA : "named function",
        choiceB : "anonymous function",
        choiceC : "both of the above",
        choiceD : "none of the above",
        correct : "C"

    },
    {
        question : "commonly used data types do not use?",
        choiceA : "strings",
        choiceB : "booleans",
        choiceC : "alerts",
        choiceD : "numbers",
        correct : "B"

    },
    {
        question : "Using _______ statement is how you test for a specific condition?",
        choiceA : "select",
        choiceB : "If",
        choiceC : "switch",
        choiceD : "For",
        correct : "B"

    }

];


//start score and timer at 0 timer will count up to 10
var lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
var questionTime = 10; 
let TIMER;
let score = 0;

//function to generate questions

function generateQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    

}


start.addEventListener("click",startQuiz);

// on click quiz will begin
function startQuiz(){
    start.style.display = "none";
    generateQuestion();
    quiz.style.display = "block";
    taskProgress();
    scoreCounter();
    TIMER = setInterval(scoreCounter,1000); 
}


function taskProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}


// tally of correct/wrong answers

function scoreCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        count++
    }else{
        count = 0;
        
        answerIsWrong(); // will be red 
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            generateQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            endOfQuiz();
        }
    }
}



function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
       
        score++;
        
        answerIsCorrect(); // will be green
    }else{
        
        answerIsWrong(); // will be red
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        generateQuestion();
    }else{
        
        clearInterval(TIMER);
        endOfQuiz();
    }
}


function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "green";
}


function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "red";
}


function endOfQuiz(){
    scoreDiv.style.display = "block";
    
    
    const finalScore = Math.round(5 * score/questions.length);

    scoreDiv.innerHTML += "<p>"+ finalScore +"</p>";

}
