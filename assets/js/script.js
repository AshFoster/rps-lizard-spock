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
let afterTurnMessage = document.querySelector(".after-turn-message p");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let playerImage = document.getElementById("player-image");
let computerImage = document.getElementById("computer-image");

/* 
Once the DOM has finshed loading add 'click' event listeners to all buttons and 'animationend' event
listeners to game area images
*/
// CREDIT - the idea to add content loaded event listener came from Code Institue's Love Maths project
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    let images = document.querySelectorAll(".game-animation-area img");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let dataType = this.getAttribute("data-type");
            switch (dataType) {
                case "classic-version":
                    showClassic();
                    break;
                case "lizard-spock":
                    showLizardSpock();
                    break;
                case "rules":
                    showRules();
                    break;
                case "quit":
                    showEndModal("quit");
                    break;
                case "quit-yes":
                    document.querySelector(".end-modal-background").style.display = "none";
                    endGame();
                    break;
                case "quit-no":
                    document.querySelector(".end-modal-background").style.display = "none";
                    break;
                default:
                    let playerSelection = this.getAttribute("data-type");
                    let difficulty = document.querySelector('input[name="difficulty-radio"]:checked');

                    // reset font awesome icons
                    resetIcons();

                    // change selected font awesome icon 
                    this.firstElementChild.classList.remove("far");
                    this.firstElementChild.classList.add("fas");
                    
                    runGame(playerSelection, difficulty.value);
            }
        });
    }

    /* 
    CREDIT - the idea to reset animation came from Dev Ed's YouTube video
    - https://www.youtube.com/watch?v=qWPtKtYEsN4 - I amended to suit my preference 
    */
    for (let image of images) {
        image.addEventListener("animationend", function() {
            this.style.animation = "";
        });
    }

    // preload images to prevent any loading delay when playing game
    if (document.images) {
        // CREDIT - preloading image code was found on https://perishablepress.com/3-ways-preload-images-css-javascript-ajax/ 
        img1 = new Image();
        img2 = new Image();
        img3 = new Image();
        img4 = new Image();
        img5 = new Image();

        img1.src = "assets/images/rock.png";
        img2.src = "assets/images/paper.png";
        img3.src = "assets/images/scissors.png";
        img4.src = "assets/images/lizard.png";
        img5.src = "assets/images/spock.png";
        // END OF CREDIT
    }
});

/**
 * Show Classic is called when the user clicks on the play Classic Version
 * button. It makes the main area appear and hides the main menu area and any 
 * lizard game related elements.
 */
function showClassic() {
    document.getElementById("lizard-spock-h1").style.display = "none";
    document.getElementById("lizard-button").style.display = "none";
    document.getElementById("spock-button").style.display = "none";
    document.getElementById("lizard-rules").style.display = "none";
    document.getElementsByClassName("main-menu-area")[0].style.display = "none";
    document.getElementsByClassName("main-area")[0].style.display = "flex";
}

/**
 * Show Lizard Spock is called when the user clicks on the play Lizard Spock
 * button. It makes the main area appear and hides the main menu area and any 
 * classic game related elements.
 */
function showLizardSpock() {
    document.getElementById("rock-paper-scissors-h1").style.display = "none";
    document.getElementById("classic-rules").style.display = "none";
    document.getElementsByClassName("main-menu-area")[0].style.display = "none";
    document.getElementsByClassName("main-area")[0].style.display = "flex";
}

/**
 * Run Game is called when the user clicks on one of the rock, paper, scissors,
 * lizard, or spock icon buttons. It then runs the main game process based on
 * this selection and the current difficulty selection.
 */
function runGame(playerSelection, difficulty) {
    disableButtons();
    let computerSelection;

    // this is one of several methods that could be used to determine if classic or lizard is being played
    if (document.getElementById("classic-rules").style.display !== "none") {
        computerSelection = selectionGenerator("classic", playerSelection, difficulty);
    } else {
        computerSelection = selectionGenerator("lizard", playerSelection, difficulty);
    }

    playerImage.src = "assets/images/rock.png";
    computerImage.src = "assets/images/rock.png";
    playerImage.style.animation = "player-animation 2s ease";
    computerImage.style.animation = "computer-animation 2s ease";

    /* 
    CREDIT - the idea to use set timeout function to delay code from running during animation came
    from Dev Ed's YouTube video - https://www.youtube.com/watch?v=qWPtKtYEsN4 - I amended to fit this
    project.
    */
    setTimeout(function() {
        playerImage.src = `assets/images/${playerSelection}.png`;
        computerImage.src = `assets/images/${computerSelection}.png`;
        checkWinner(playerSelection, computerSelection);
        enableButtons();

        if (parseInt(playerScore.textContent) === 5 || parseInt(computerScore.textContent) === 5) {
            showEndModal("end");
        }
    }, 1800);
}

/**
 * Show Rules is called when the rules button is clicked. It simply makes the rules modal appear.
 */
function showRules() {
    // CREDIT - Code for showing modal was taken from W3 Schools and adapted to fit this project
    let modal = document.getElementsByClassName("rules-modal-background")[0];
    let closeSpan = document.getElementsByClassName("rules-close")[0];
    modal.style.display = "flex";

    closeSpan.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

/**
 * Show End Modal is called either when a game has been finished or when the quit
 * button is clicked. Its action varies depending on why it's been called.
 */
function showEndModal(showType) {
    // CREDIT - Code for showing modal was taken from W3 Schools and adapted to fit this project
    let modal = document.getElementsByClassName("end-modal-background")[0];
    let closeSpan = document.getElementsByClassName("end-close")[0];
    modal.style.display = "flex";

    closeSpan.onclick = function() {
        modal.style.display = "none";

        if (showType === "end") {
            endGame();
        }
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";

            if (showType === "end") {
                endGame();
            }
        }
    };

    if (showType === "quit") {
        document.getElementsByClassName("end-game")[0].style.display = "none";
        document.getElementsByClassName("quit-game")[0].style.display = "block";
    } else if (showType === "end") {
        document.getElementsByClassName("quit-game")[0].style.display = "none";
        document.getElementsByClassName("end-game")[0].style.display = "block";

        if (previousWinner === "player") {
            document.getElementById("end-lose").style.display = "none";
            document.getElementById("end-win").style.display = "block";
            let endScore = document.getElementById("end-score-win");
            endScore.textContent = `${playerScore.textContent} - ${computerScore.textContent}`;
        } else if (previousWinner === "computer") {
            document.getElementById("end-win").style.display = "none";
            document.getElementById("end-lose").style.display = "block";
            let endScore = document.getElementById("end-score-lose");
            endScore.textContent = `${playerScore.textContent} - ${computerScore.textContent}`;
        }
    }
}

/**
 * Selection Generator is called to generate the computers hand for each turn. Its calculation
 * method is different depending on which difficulty level has been selected.
 */
function selectionGenerator(gameType, playerSelection, difficulty) {
    let numberOfChoices = (gameType === "classic") ? 3 : 5; // 3 for classic and 5 for lizard spock

    if (difficulty === "easy") {
        return gameChoices[Math.floor(Math.random() * numberOfChoices)];
    } else if (difficulty === "hard") {
        let newChoices = [...gameChoices]; // Create new array of choices to splice below
        let removedChoices = 0;

        if (previousWinner === "player" || previousWinner === "computer") {
            let random = Math.floor(Math.random() * 3) + 1;

            if (random === 1) {
            // run this section 1/3rd of the time
                for (i = 0; i < numberOfChoices; i++) {
                    // remove previous player and computer selections from new array
                    if (newChoices[i] === previousPlayerSelection || newChoices[i] === previousComputerSelection) {
                        newChoices.splice(i, 1);
                        i--; // Used to account for removed value by going one iteration back
                        removedChoices++; // Counts number of removed choices
                    }
                }
                return newChoices[Math.floor(Math.random() * (numberOfChoices - removedChoices))];
            } else if (random === 2 || random === 3) { 
            // run this section 2/3rds of the time
                for (i = 0; i < rules.length; i++) {
                    /* 
                    Checks which hand(s) beat player's selection and adds to array to increase 
                    computers odds
                     */
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
    let currentScore = parseInt(playerScore.textContent);
    playerScore.textContent = ++currentScore;
}

function incrementComputerScore() {
    // CREDIT - increment score code is similar to code used in Code Institue's Love Maths project
    let currentScore = parseInt(computerScore.textContent);
    computerScore.textContent = ++currentScore;
}

/**
 * Check Winner compares the player's and computer's hands to see who wins or if it's a draw.
 * It then updates the after turn message and the relevant score on the screen.
 */
function checkWinner(playerSelection, computerSelection) {
    if (playerSelection !== computerSelection) {
        for (i = 0; i < rules.length; i++) {
            // check which rule contains both player hand and computer hand
            if (rules[i].toLowerCase().indexOf(playerSelection) >= 0 && rules[i].toLowerCase().indexOf(computerSelection) >= 0) {
                // when rule begins with player hand then player wins
                if (rules[i].toLowerCase().indexOf(playerSelection) === 0) {
                    afterTurnMessage.innerHTML = `Player wins! ${rules[i]}`;
                    previousWinner = "player";
                    previousPlayerSelection = playerSelection;
                    incrementPlayerScore();
                } else { // when rule doesn't begin with player hand then computer wins
                    afterTurnMessage.innerHTML = `Computer wins! ${rules[i]}`;
                    previousWinner = "computer";
                    previousComputerSelection = computerSelection;
                    incrementComputerScore();
                }
            }
        }
    } else { // if player and computer have the same hand
        afterTurnMessage.innerHTML= "It's a draw!";
        previousWinner = "draw";
    }
}

/**
 * Reset Icons resets the rock, paper, scissors, lizard, and spock icons to their original state.
 */
function resetIcons() {
    let icons = document.querySelectorAll(".icon-selection-area i");

    for (let icon of icons) {
        icon.classList.remove("fas");
        icon.classList.add("far");
    }
}

function disableButtons() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.disabled = true;
    }
}

function enableButtons() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.disabled = false;
    }
}

/**
 * End Game is called either when a game has finished or when the player has quit. It 
 * resets all relevant variables and elements to their original state ready for the 
 * game to be played again.  
 */
function endGame() {
    previousWinner = "";
    previousPlayerSelection = "";
    previousComputerSelection = "";
    afterTurnMessage.innerHTML = "Let's go!";
    playerImage.src = "assets/images/rock.png";
    computerImage.src = "assets/images/rock.png";
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    document.getElementsByClassName("main-area")[0].style.display = "none";
    document.getElementsByClassName("main-menu-area")[0].style.display = "flex";
    document.getElementById("lizard-spock-h1").style.display = "inline";
    document.getElementById("rock-paper-scissors-h1").style.display = "inline";
    document.getElementById("lizard-button").style.display = "inline-block";
    document.getElementById("spock-button").style.display = "inline-block";
    document.getElementById("classic-rules").style.display = "block";
    document.getElementById("lizard-rules").style.display = "block";
    resetIcons();
}