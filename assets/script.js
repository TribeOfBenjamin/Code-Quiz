
var questionEl = document.querySelector(".question");
var choicesEl = document.querySelector(".choices");
var buttonEl = document.querySelector(".button");
var introductionEl = document.querySelector(".introduction");
var timerEl = document.querySelector(".timer");

var countdown = 60;

var i = 0;
var u = 0;

// Question array
var questions = ["What is a noun?",
                "What is a pronoun?",
                "What is a verb?"];

// Choice array
var choices = ["1. dog", "2. cat", "3. duck", "4. horse",
                "1. apple", "2. orange", "3. blue", "4. fish",
                "1. boom", "2. clap", "3. zing", "4. slap"];

// Question Function which displays question, choices, and button for next
function codeQuestion() {
    // Question displayed
    var makeQuestion = document.createElement("h2");
    makeQuestion.textContent = questions[i];
    questionEl.append(makeQuestion);
        // 1st Choice displayed
        var makeChoice1 = document.createElement("p");
        makeChoice1.textContent = choices[u];
        choicesEl.append(makeChoice1);
        // 2nd Choice displayed
        var makeChoice2 = document.createElement("p");
        makeChoice2.textContent = choices[u + 1];
        choicesEl.append(makeChoice2);
        // 3rd Choice displayed
        var makeChoice3 = document.createElement("p");
        makeChoice3.textContent = choices[u + 2];
        choicesEl.append(makeChoice3);
        // 4th Choice displayed
        var makeChoice4 = document.createElement("p");
        makeChoice4.textContent = choices[u + 3];
        choicesEl.append(makeChoice4);
    // Next Button displayed
    var makeNxtBtn = document.createElement("button");
    makeNxtBtn.textContent = "Next";
    buttonEl.append(makeNxtBtn);
    makeNxtBtn.setAttribute("style", "background-color: rgb(152, 51, 235); color: white; margin: 10px");
    // Function which removes the current question and button
    makeNxtBtn.addEventListener("click", function() {
    
        questionEl.removeChild(makeQuestion);
        choicesEl.removeChild(makeChoice1);
        choicesEl.removeChild(makeChoice2);
        choicesEl.removeChild(makeChoice3);
        choicesEl.removeChild(makeChoice4);
        buttonEl.removeChild(makeNxtBtn);
    
        i++;
        u = u + 4;
        console.log(i);
        
        if (i < questions.length) {
            codeQuestion();
        }
    })
}
// Timer Function 
function timer() {

    var timeInterval = setInterval(function() {
  
        countdown--;
        timerEl.textContent = " " + countdown;
  
        if (countdown === 0) {
          timerEl.textContent = "";
          clearInterval(timeInterval);
        }
    }, 1000);
  }
// Start Function which starts quiz when button is clicked
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






