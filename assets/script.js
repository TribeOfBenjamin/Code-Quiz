
var questionEl = document.querySelector(".question");
var choicesEl = document.querySelector(".choices");
var buttonEl = document.querySelector(".button");
var introductionEl = document.querySelector(".introduction");
var timerEl = document.querySelector(".timer");

var i = 0;
var u = 0;

// Question array
var questions = ["What is a noun?",
                "What is a pronoun?",
                "What is a verb?"]

// Choice array
var choices = ["1. dog",
                "2. cat",
                "3. duck",
                "4. horse",
                "1. apple",
                "2. orange",
                "3. blue",
                "4. fish"]

// Function which displays question, choices, and button for next
function codeQuestion() {
    // Question displayed
    var makeQuestion = document.createElement("h2");
    makeQuestion.textContent = questions[i];
    questionEl.append(makeQuestion);
    // Choices displayed
    var makeChoice = document.createElement("p");
    makeChoice.textContent = choices[u];
    choicesEl.append(makeChoice);
    
    // Next Button displayed
    var makeNxtBtn = document.createElement("button");
    makeNxtBtn.textContent = "Next";
    buttonEl.append(makeNxtBtn);
    makeNxtBtn.setAttribute("style", "background-color: rgb(152, 51, 235); color: white; margin: 10px");
    // Function which removes the current question and button
    makeNxtBtn.addEventListener("click", function() {
    
        questionEl.removeChild(makeQuestion);
        choicesEl.removeChild(makeChoice);
        buttonEl.removeChild(makeNxtBtn);
    
        i++;
        u++;
        console.log(i);
        
        codeQuestion();
    })
}

function timer() {

    var countdown = 60;
  
    var timeInterval = setInterval(function() {
  
        countdown--;
        timerEl.textContent = " " + countdown;
  
        if (countdown === 0) {
          timerEl.textContent = "";
          clearInterval(timeInterval);
        }
    }, 1000);
  }

function introStart() {

    var makeIntroduction = document.createElement("h2");
    makeIntroduction.textContent = "Ready to test your knowledge of coding? Then let's go!";
    introductionEl.append(makeIntroduction);

    var makeStBtn = document.createElement("button");
    makeStBtn.textContent = "Start";
    introductionEl.append(makeStBtn);
    makeStBtn.setAttribute("style", "background-color: rgb(152, 51, 235); color: white; margin: 10px");

    makeStBtn.addEventListener("click", function() {

        introductionEl.removeChild(makeIntroduction);
        introductionEl.removeChild(makeStBtn);
    
        codeQuestion();
        timer();
    })
}

introStart();






