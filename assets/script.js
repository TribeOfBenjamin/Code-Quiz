
var contentEl = document.querySelector(".content");
var questionEl = document.querySelector(".question");

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

    var makeBtn = document.createElement("button")
    makeBtn.textContent = "Next";
    questionEl.append(makeBtn);

    makeBtn.setAttribute("style", "background-color: rgb(152, 51, 235); color: white; margin: 10px")

    makeBtn.addEventListener("click", function() {
    
    questionEl.removeChild(makeQuestion);
    questionEl.removeChild(makeBtn);
    
    i++;
    console.log(i);
    codeQuestion();
})

}

codeQuestion();