// Add event listeners to all buttons after the DOM has finshed loading
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "classic-version") {
                showClassic();
            } else if (this.getAttribute("data-type") === "lizard-spock") {
                showLizardSpock();
            } else if (this.getAttribute("data-type") === "rules") {
                showRules();
            } else if (this.getAttribute("data-type") === "quit") {
                endGame();
            } else {
                let playerSelection = this.getAttribute("data-type");
                let difficulty = document.querySelector('input[name="difficulty-radio"]:checked');
                runGame(playerSelection, difficulty.value);
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
    document.getElementById("classic-rules").style.display = "none";
    document.getElementsByClassName("main-menu-area")[0].style.display = "none";
    document.getElementsByClassName("main-area")[0].style.display = "flex";
}

function runGame(playerSelection, difficulty) {
    if (document.getElementById("classic-rules").style.display !== "none") {
        playClassic(playerSelection, difficulty);
    } else {
        playLizardSpock(playerSelection, difficulty);
    }
}

function playClassic(playerSelection, difficulty) {
    let classicChoices = ["rock", "paper", "scissors"];
    if (difficulty === "easy") {
        let computerSelection = classicChoices[Math.floor(Math.random() * 3)];
        document.getElementById("player-image").src = `assets/images/${playerSelection}.png`
        document.getElementById("computer-image").src = `assets/images/${computerSelection}.png`
        checkWinner(playerSelection, computerSelection);
    } else {
        alert(`Difficulty: ${difficulty}`);
    }
}

function playLizardSpock(playerSelection, difficulty) {
    let lizardChoices = ["rock", "paper", "scissors", "lizard", "spock"];
    if (difficulty === "easy") {
        let computerSelection = lizardChoices[Math.floor(Math.random() * 5)];
        document.getElementById("player-image").src = `assets/images/${playerSelection}.png`
        document.getElementById("computer-image").src = `assets/images/${computerSelection}.png`
        checkWinner(playerSelection, computerSelection);
    } else {
        alert(`Difficulty: ${difficulty}`);
    }
}

function showRules() {
    // CREDIT - Code for showing modal was taken from W3 Schools and adapted to fit this project
    let modal = document.getElementsByClassName("rules-modal-background")[0];
    var span = document.getElementsByClassName("rules-close")[0];
    modal.style.display = "flex";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function incrementPlayerScore() {
    // CREDIT - increment score code is similar to code used in Code Institue's Love Maths project
    let currentScore = parseInt(document.getElementById("player-score").textContent);
    document.getElementById("player-score").textContent = ++currentScore;
}

function incrementComputerScore() {
    // CREDIT - increment score code is similar to code used in Code Institue's Love Maths project
    let currentScore = parseInt(document.getElementById("computer-score").textContent);
    document.getElementById("computer-score").textContent = ++currentScore;
}

function checkWinner(playerSelection, computerSelection) {
    let afterTurnMessage = document.getElementsByClassName("after-turn-message")[0];
    if (playerSelection !== computerSelection) {
        let rules = [
            "Rock crushes Scissors",
            "Rock crushes Lizard",
            "Paper covers Rock",
            "Paper disproves Spock",
            "Scissors cuts Paper",
            "Scissors decapitate Lizard",
            "Lizard eats Paper",
            "Lizard poisons Spock",
            "Spock vaporises Rock",
            "Spock smashes Scissors"
        ];
        for (i = 0; i < rules.length; i++) {
            if (rules[i].toLowerCase().indexOf(playerSelection) >= 0 && rules[i].toLowerCase().indexOf(computerSelection) >= 0) {
                if (rules[i].toLowerCase().indexOf(playerSelection) === 0) {
                    afterTurnMessage.textContent = `Player wins! ${rules[i]}`
                    incrementPlayerScore();
                } else {
                    afterTurnMessage.textContent = `Computer wins! ${rules[i]}`;
                    incrementComputerScore();
                }
            }
        }
    } else {
        afterTurnMessage.textContent = "It's a draw!";
    }
}

function endGame() {
    document.getElementsByClassName("main-area")[0].style.display = "none";
    document.getElementsByClassName("main-menu-area")[0].style.display = "flex";
    document.getElementById("lizard-button").style.display = "inline-block";
    document.getElementById("spock-button").style.display = "inline-block";
    document.getElementById("classic-rules").style.display = "block";
    document.getElementById("lizard-rules").style.display = "block";
}