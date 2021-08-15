// Add event listeners to all buttons after the DOM has finshed loading
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "classic-version") {
                showClassic();
                alert("this will show classic");
            } else if (this.getAttribute("data-type") === "lizard-spock") {
                alert("this will show lizard spock");
            } else if (this.getAttribute("data-type") === "rules") {
                alert("this will show rules modal");
            } else {
                let playerSelection = this.getAttribute("data-type");
                alert(`You clicked ${playerSelection}`);
            }
        });
    }
});

function showClassic() {
    document.getElementById("lizard-button").style.display = "none";
    document.getElementById("spock-button").style.display = "none";
    document.getElementById("lizard-rules").style.display = "none";
    document.getElementsByClassName("main-menu-area")[0].style.display = "none";
    document.getElementsByClassName("main-area")[0].style.display = "flex";
}

function showLizardSpock() {

}

function runGame() {

}

function playClassic() {

}

function playLizardSpock() {

}

function showRules() {

}

function incrementPlayerScore() {

}

function incrementComputerScore() {

}

function checkWinner() {

}

function endGame() {

}