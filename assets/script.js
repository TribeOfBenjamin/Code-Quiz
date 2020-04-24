
var questionEl = document.querySelector(".question");
var choice1El = document.querySelector(".choice1");
var choice2El = document.querySelector(".choice2");
var choice3El = document.querySelector(".choice3");
var choice4El = document.querySelector(".choice4");
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

// Correct Answer array
var correctAnswer = ["1. dog",
                        "4. fish",
                        "3. zing"];

// Question Function which displays question, choices, and button for next
function codeQuestion() {
    // Question displayed
    var makeQuestion = document.createElement("h2");
    makeQuestion.textContent = questions[i];
    questionEl.append(makeQuestion);
        // 1st Choice displayed
        var makeChoice1 = document.createElement("p");
        makeChoice1.textContent = choices[u];
        choice1El.append(makeChoice1);
        choice1El.setAttribute("data-choice", choices[u]);
        // 2nd Choice displayed
        var makeChoice2 = document.createElement("p");
        makeChoice2.textContent = choices[u + 1];
        choice2El.append(makeChoice2);
        choice2El.setAttribute("data-choice", choices[u + 1]);
        // 3rd Choice displayed
        var makeChoice3 = document.createElement("p");
        makeChoice3.textContent = choices[u + 2];
        choice3El.append(makeChoice3);
        choice3El.setAttribute("data-choice", choices[u + 2]);
        // 4th Choice displayed
        var makeChoice4 = document.createElement("p");
        makeChoice4.textContent = choices[u + 3];
        choice4El.append(makeChoice4);
        choice4El.setAttribute("data-choice", choices[u + 3]);
        // Event Listeners on all choices listening for correct/wrong answers
        //makeChoice1.addEventListener("click", function(event) {
         //   var userChoice = event.target;

         //   if (userChoice.matches("p")) {
          //      var answerValue = userChoice.getAttribute("data-answer");

         //       if (answerValue === "correct") {}
        //    }
      //  })
    // Next Button displayed
    var makeNxtBtn = document.createElement("button");
    makeNxtBtn.textContent = "Next";
    buttonEl.append(makeNxtBtn);
    makeNxtBtn.setAttribute("style", "background-color: rgb(152, 51, 235); color: white; margin: 10px");
    // Function which removes the current question and button
    makeNxtBtn.addEventListener("click", function() {
    
        questionEl.removeChild(makeQuestion);
        choice1El.removeChild(makeChoice1);
        choice2El.removeChild(makeChoice2);
        choice3El.removeChild(makeChoice3);
        choice4El.removeChild(makeChoice4);
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






