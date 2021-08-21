// Global Variables
let gameChoices = ["rock", "paper", "scissors", "lizard", "spock"];
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
let previousWinner = "";
let previousPlayerSelection = "";
let previousComputerSelection = "";

/* 
Once the DOM has finshed loading add 'click' event listeners to all buttons and 'animationend' event
listeners to game area images
*/
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    let images = document.querySelectorAll(".game-animation-area img");

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

    for (image of images) {
        image.addEventListener("animationend", function() {
            this.style.animation = "";
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
    let playerImage = document.getElementById("player-image");
    let computerImage = document.getElementById("computer-image");
    let computerSelection;

    if (document.getElementById("classic-rules").style.display !== "none") {
        computerSelection = selectionGenerator("classic", playerSelection, difficulty);
    } else {
        computerSelection = selectionGenerator("lizard", playerSelection, difficulty);
    }

    playerImage.src = "assets/images/rock.png"
    computerImage.src = "assets/images/rock.png"
    playerImage.style.animation = "player-animation 2s ease";
    computerImage.style.animation = "computer-animation 2s ease";

    setTimeout(function() {
        playerImage.src = `assets/images/${playerSelection}.png`
        computerImage.src = `assets/images/${computerSelection}.png`
        checkWinner(playerSelection, computerSelection);
    }, 1800);
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

function selectionGenerator(gameType, playerSelection, difficulty) {
    let numberOfChoices = (gameType === "classic") ? 3 : 5; // 3 for classic and 5 for lizard spock

    if (difficulty === "easy") {
        return gameChoices[Math.floor(Math.random() * numberOfChoices)];
    } else if (difficulty === "hard") {
        let newChoices = [...gameChoices]; // Create new array of choices to splice below
        let removedChoices = 0;

        if (previousWinner === "player" || previousWinner === "computer") {
            let random = Math.floor(Math.random() * 3) + 1; // Random integer from 1 to 3 

            if (random === 1 || random === 2) {
            // run this section 2/3rds of the time
                for (i = 0; i < numberOfChoices; i++) {
                    // remove previous player and computer selections from new array
                    if (newChoices[i] === previousPlayerSelection || newChoices[i] === previousComputerSelection) {
                        newChoices.splice(i, 1);
                        i--; // Used to account for removed value by going one iteration back
                        removedChoices++; // Counts number of removed choices
                    }
                }
                return newChoices[Math.floor(Math.random() * (numberOfChoices - removedChoices))];
            } else if (random === 3) { 
            // run this section 1/3rd of the time
                for (i = 0; i < rules.length; i++) {
                    // checks which hand(s) beat player's selection and adds to array to increase odds
                    if (rules[i].toLowerCase().indexOf(playerSelection) > 0) {
                        let beatsPlayer = rules[i].split(" ")[0].toLowerCase();
                        newChoices.unshift(beatsPlayer);
                    }
                }

                if (gameType === "classic") {
                    return newChoices[Math.floor(Math.random() * (numberOfChoices + 1)) + 1];
                } else if (gameType === "lizard") {
                    return newChoices[Math.floor(Math.random() * (numberOfChoices + 2))];
                }
            } 
        } else { // used for the first turn of match, or when the previous turn was a draw 
            return gameChoices[Math.floor(Math.random() * numberOfChoices)];
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
        for (i = 0; i < rules.length; i++) {
            // check which rule contains both player hand and computer hand
            if (rules[i].toLowerCase().indexOf(playerSelection) >= 0 && rules[i].toLowerCase().indexOf(computerSelection) >= 0) {
                // when rule begins with player hand then player wins
                if (rules[i].toLowerCase().indexOf(playerSelection) === 0) {
                    afterTurnMessage.textContent = `Player wins! ${rules[i]}`
                    incrementPlayerScore();
                    previousWinner = "player";
                    previousPlayerSelection = playerSelection;
                } else { // when rule doesn't begin with player hand then computer wins
                    afterTurnMessage.textContent = `Computer wins! ${rules[i]}`;
                    incrementComputerScore();
                    previousWinner = "computer";
                    previousComputerSelection = computerSelection;
                }
            }
        }
    } else { // if player and computer have the same hand
        afterTurnMessage.textContent = "It's a draw!";
        previousWinner = "draw";
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