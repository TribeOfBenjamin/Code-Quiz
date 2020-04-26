
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
var prevScoresEl = document.querySelector(".prevScores");
var prevScoresListEl = document.querySelector("#prevScoresList");

var countdown = 100;

var i = 0; // Iterates through the Question array
var u = 0; // Iterates through the Choice array
var y = 0; // Iterates through the Correct Answer array

// Question array, using i var
var questions = [
    "CSS is an acronym for what?",
    "HTML is an acronym for what?",
    "DOM is an acronym for what?",
    "What tag do you use to add pictures to HTML?",
    "What tag do you use to add a large title to HTML?"];

// Choice array, using u var
var choices = [
    "1. Cascading Style Sheets", "2. Cats Styling Sheiks", "3. Computer Style Shorthand", "4. Computers Sink Sand",
    "1. Hyperlink Text Markup Language", "2. Hyper Tech Manual Language", "3. Height Torture Mangled Looneys", "4. Hypertext Markup Language",
    "1. Direct Object Modeling", "2. Document Object Model", "3. Dominic Orientation Model", "4. Dangerous Order of Making",
    "1. <img>", "2. <src>", "3. <a>", "4. <h2>",
    "1. <a>", "2. <src>", "3. <h1>", "4. <img>"];

// Correct Answer array, using y var
var correctAnswer = [
    "1. Cascading Style Sheets",
    "4. Hypertext Markup Language",
    "2. Document Object Model",
    "1. <img>",
    "3. <h1>"];

// Previous Score array
var prevScores = [];




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
                // Changes text color depending on verity AND subtracts from timer if wrong
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
            resultPage(countdown);
        }
    })
}
// Score Page
function resultPage(c) {

    var makeFinishDisplay = document.createElement("h2");
    makeFinishDisplay.textContent = "Finished! Your score: " + c;
    questionEl.append(makeFinishDisplay);

    submitScoreEl.setAttribute("style", "display: block");

    submitScoreEl.addEventListener("submit", function(event) {
        event.preventDefault();

        localStorage.setItem("initials", initialsEl.value + " - " + c);
        prevScores.push(initialsEl.value + " - " + c);

        questionEl.removeChild(makeFinishDisplay);
        submitScoreEl.setAttribute("style", "display: none");
        viewScoresPage();
    })
}

// View Previous Scores Page
function viewScoresPage() {

    var makePrevScoreDisplay = document.createElement("h2");
    makePrevScoreDisplay.textContent = "High Scores";
    prevScoresEl.append(makePrevScoreDisplay);

    //Gets initials and scores from local storage and posts to the previous scores page
    var makeScoreList = document.createElement("div");
    makeScoreList.textContent = localStorage.getItem("initials");
    prevScoresEl.append(makeScoreList);

    var createHr = document.createElement("hr");
    prevScoresEl.append(createHr);

    var makeBkBtn = document.createElement("button");
    makeBkBtn.textContent = "Back";
    prevScoresEl.append(makeBkBtn);
    makeBkBtn.setAttribute("style", "background-color: rgb(152, 51, 235); color: white; margin: 10px;");

    makeBkBtn.addEventListener("click", function(event) {
        event.preventDefault();

        prevScoresEl.removeChild(makeScoreList);
        prevScoresEl.removeChild(makePrevScoreDisplay);
        prevScoresEl.removeChild(createHr);
        prevScoresEl.removeChild(makeBkBtn);

    
        alert("Thanks for playing! Refresh the page to try again!");
    })
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

          alert("Looks like your score went below zero. Yikes! You should probably try harder next time. Refresh the page and try again.");
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


    viewScoresEl.addEventListener("click", function(event) {
        event.preventDefault();

        introductionEl.removeChild(makeIntroduction);
        introductionEl.removeChild(makeStBtn);

        viewScoresPage();
    });

    makeStBtn.addEventListener("click", function(event) {
        event.preventDefault();

        introductionEl.removeChild(makeIntroduction);
        introductionEl.removeChild(makeStBtn);
    
        codeQuestion();
        timer();
    })
}

introStart();






