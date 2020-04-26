
var questionEl = document.querySelector(".question");
var choicesAllEl = document.querySelector(".choicesAll");
var choice1El = document.querySelector(".choice1");
var choice2El = document.querySelector(".choice2");
var choice3El = document.querySelector(".choice3");
var choice4El = document.querySelector(".choice4");
var buttonEl = document.querySelector(".button");
var introductionEl = document.querySelector(".introduction");
var timerEl = document.querySelector(".timer");
var viewScoresEl = document.querySelector(".viewScores");
var submitScoreEl = document.querySelector(".submitScore");
var initialsEl = document.querySelector("#initials");
var highScoresEl = document.querySelector(".highScores");
var highScoresListEl = document.querySelector("#highScoresList");

var countdown = 60;

var i = 0; // Iterates through the Question array
var u = 0; // Iterates through the Choice array
var y = 0; // Iterates through the Correct Answer array

// Question array, using i var
var questions = [
                "What is a noun?",
                "What is a pronoun?",
                "What is a verb?"];

// Choice array, using u var
var choices = [
                "1. dog", "2. cat", "3. duck", "4. horse",
                "1. apple", "2. orange", "3. blue", "4. fish",
                "1. boom", "2. clap", "3. zing", "4. slap"];

// Correct Answer array, using y var
var correctAnswer = [
                    "1. dog",
                    "4. fish",
                    "3. zing"];

// High Score array
var highScores = [];




// Question Function which displays question, choices, and button for next

// If it becomes a problem to just append the divs already there and not create my own tags in JS,
// try creating and appending the tags and then doing the same with the data attributes; the probl-
// em might have been that the data attributes need to be attached to the specific element and not
// its parent.
function codeQuestion() {
    // Question displayed
    var makeQuestion = document.createElement("h2");
    makeQuestion.textContent = questions[i];
    questionEl.append(makeQuestion);
        // 1st Choice displayed
        choice1El.setAttribute("data-choice", choices[u]);
        choice1El.append(choices[u]);
        // 2nd Choice displayed
        choice2El.setAttribute("data-choice", choices[u + 1]);
        choice2El.append(choices[u + 1]);
        // 3rd Choice displayed
        choice3El.setAttribute("data-choice", choices[u + 2]);
        choice3El.append(choices[u + 2]);
        // 4th Choice displayed
        choice4El.setAttribute("data-choice", choices[u + 3]);
        choice4El.append(choices[u + 3]);
        // Event Listeners on all choices listening for correct/wrong answers
        choicesAllEl.addEventListener("click", function(event) {
            event.preventDefault();

            var userChoice = event.target;

            if (userChoice.matches("div")) {
                var answerVerity = userChoice.getAttribute("data-choice");
                // Changes text color depending on verity
                if (answerVerity === correctAnswer[y]) {
                    userChoice.setAttribute("style", "color: green");
                } else {
                    userChoice.setAttribute("style", "color: red");
                    countdown = countdown - 5;
                }
            }
        })
    // Next Button displayed
    var makeNxtBtn = document.createElement("button");
    makeNxtBtn.textContent = "Next";
    buttonEl.append(makeNxtBtn);
    makeNxtBtn.setAttribute("style", "background-color: rgb(152, 51, 235); color: white; margin: 10px");
    // Function which removes the current question, choices, text colors, and button. Also iterates vars.
    makeNxtBtn.addEventListener("click", function(event) {
        event.preventDefault();
    
        questionEl.removeChild(makeQuestion);
        choice1El.textContent = "";
        choice2El.textContent = "";
        choice3El.textContent = "";
        choice4El.textContent = "";
        buttonEl.removeChild(makeNxtBtn);

        choice1El.removeAttribute("style");
        choice2El.removeAttribute("style");
        choice3El.removeAttribute("style");
        choice4El.removeAttribute("style");
    
        i++;
        u = u + 4;
        y++;
        
        if (i < questions.length) {
            codeQuestion();
        } else if (i === questions.length) {
            scorePage(countdown);
        }
    })
}
// Score Page
function scorePage(c) {

    var makeFinishDisplay = document.createElement("h2");
    makeFinishDisplay.textContent = "Finished! Your score: " + c;
    questionEl.append(makeFinishDisplay);

    submitScoreEl.setAttribute("style", "display: block");

    submitScoreEl.addEventListener("submit", function(event) {
        event.preventDefault();

        localStorage.setItem("initials", initialsEl.value);
        highScores.push(initialsEl.value + " - " + c);

        questionEl.removeChild(makeFinishDisplay);
        submitScoreEl.setAttribute("style", "display: none");
        highScoresPage();
    })
}

// High Scores Page
function highScoresPage() {

    var makeHighScoreDisplay = document.createElement("h2");
    makeHighScoreDisplay.textContent = "High Scores";
    highScoresEl.append(makeHighScoreDisplay);

    //localStorage.getItem("initials").push

    //var makeScore = document.createElement("li");
    //makeScore.textContent = highScore;
    //highScoresListEl.firstElement.append(makeScore);
}

// Timer Function 
function timer() {

    var timeInterval = setInterval(function() {
  
        countdown--;
        timerEl.textContent = " " + countdown;
  
        if (countdown <= 0) {
          timerEl.textContent = "";

          questionEl.setAttribute("style", "display: none");
          choicesAllEl.setAttribute("style", "display: none");
          buttonEl.setAttribute("style", "display: none");

          clearInterval(timeInterval);

          scorePage();
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

    makeStBtn.addEventListener("click", function(event) {
        event.preventDefault();

        introductionEl.removeChild(makeIntroduction);
        introductionEl.removeChild(makeStBtn);
    
        codeQuestion();
        timer();
    })
}

introStart();






