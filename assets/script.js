
var contentEl = document.querySelector(".content");

function introPage() {

var words = ["Code Quiz", "Hello there!", "This is a test..."];

for (var i = 0; i < 3; i++) {
    var makeDiv = document.createElement("div");

    makeDiv.textContent = words[i];
    contentEl.append(makeDiv);
}

var makeBtn = document.createElement("button")

makeBtn.textContent = "Start";

contentEl.append(makeBtn);

makeBtn.setAttribute("style", "background-color: rgb(152, 51, 235); color: white; margin: 10px")

makeBtn.addEventListener("click", Q1);

}

function Q1() {

    introPage === null;

    var words = ["This is the first question", "What color is my shirt?", "Uh oh!"];
    
    for (var i = 0; i < 3; i++) {
        var makeDiv = document.createElement("div");
    
        makeDiv.textContent = words[i];
        contentEl.append(makeDiv);
    }
    
    var makeBtn = document.createElement("button")
    
    makeBtn.textContent = "Next";
    
    contentEl.append(makeBtn);
    
    makeBtn.setAttribute("style", "background-color: rgb(152, 51, 235); color: white; margin: 10px")
    
    }

introPage();