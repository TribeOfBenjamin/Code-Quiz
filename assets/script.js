
var questionEl = document.querySelector(".question");
var introductionEl = document.querySelector(".introduction");

var i = 0

//Question Array
var questions = ["What is a noun?",
                "What is a pronoun?",
                "What is a verb?"]

//Choice Array
var choices = ["dog",
                "cat",
                "duck",
                "horse",
                "apple",
                "orange",
                "blue",
                "fish"]


//Function which displays question, choices, and button for next

function codeQuestion() {

    var makeQuestion = document.createElement("h2");
    makeQuestion.textContent = questions[i];
    questionEl.append(makeQuestion);

    var makeNxtBtn = document.createElement("button");
    makeNxtBtn.textContent = "Next";
    questionEl.append(makeNxtBtn);
    makeNxtBtn.setAttribute("style", "background-color: rgb(152, 51, 235); color: white; margin: 10px");

    makeNxtBtn.addEventListener("click", function() {
    
        questionEl.removeChild(makeQuestion);
        questionEl.removeChild(makeNxtBtn);
    
        i++;
        console.log(i);
        
        codeQuestion();
    })
}

function introStart() {

    var makeIntroduction = document.createElement("h2");
    makeIntroduction.textContent = "Hello";
    introductionEl.append(makeIntroduction);

    var makeStBtn = document.createElement("button");
    makeStBtn.textContent = "Start";
    introductionEl.append(makeStBtn);
    makeStBtn.setAttribute("style", "background-color: rgb(152, 51, 235); color: white; margin: 10px");

    makeStBtn.addEventListener("click", function() {

        introductionEl.removeChild(makeIntroduction);
        introductionEl.removeChild(makeStBtn);
    
        codeQuestion();
    })
}

introStart();






