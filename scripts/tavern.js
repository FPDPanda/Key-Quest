// Importing stats from main_stats.js
let stats = JSON.parse(localStorage.getItem("stats"));

// --------------------------------- 2. GLOBAL FUNCTIONS --------------------------------- //
// Scroll Function - A basic function to scroll down and show all the text
function scroll() {
    bubble.scrollTop = bubble.scrollHeight;
  }
  // --------------------------------- END OF GLOBAL FUNCTIONS --------------------------------- //

// -------------- LANGUAGE AREA -------------- //
// Getting the speech from the storekeeper
const bubble = document.getElementById("bubble__text");

// Getting the SLEEP button
const sleepButton = document.getElementById("sleep");

// Getting the BUY HP button
const buyHealthButton = document.getElementById("hp-up");

// Getting the return button
const returnButton = document.getElementById("returnContainer__button__text");

//This is where the tavern message will be stored
let tavernText = {
    tavernFirstMessage: "",
    tavernMessages: [],
    sleepMessage: "",
    buyHPMessage1: "",
    buyHPMessage2: "",
    needOneCoin: "",
    needCoin1: "",
    needCoin2: "",
    returnButton: ""
};

// This is where the random number will be stored
let rand = 0;

window.addEventListener("load", function() {
    if(localStorage.language) {
        chosenLanguage = JSON.parse(localStorage.language);
    };

    $.getJSON("../language/"+chosenLanguage+".json", function(text){
        tavernText.tavernFirstMessage = text.tavernFirstMessage;
        tavernText.tavernMessages = text.tavernMessages;
        tavernText.sleepMessage = text.sleepMessage;
        tavernText.buyHPMessage1 = text.buyHPMessage1;
        tavernText.buyHPMessage2 = text.buyHPMessage2;
        tavernText.needOneCoin = text.needOneCoin;
        tavernText.needCoin1 = text.needCoin1;
        tavernText.needCoin2 = text.needCoin2;
        tavernText.returnButton = text.returnButton;

        setText();
    });

    localStorage.getItem("visitedTavern")? 0 : localStorage.setItem("visitedTavern", JSON.stringify("visited"));
});

function setText() {
    returnButton.textContent = tavernText.returnButton;
    if (!localStorage.getItem("visitedTavern")) {
        bubble.textContent = tavernText.tavernFirstMessage;
    } else {
        rand = Math.floor(Math.random()*7);
        bubble.textContent = tavernText.tavernMessages[rand];
    }
}
// -------------- END OF LANGUAGE AREA -------------- //

sleepButton.addEventListener("click", function() {
    // If you have enough coin
    if (stats.coins >= 5) {
        stats.health = stats.maxHealth;
        stats.coins -= 5
        
        bubble.innerHTML += "<p class='dark-blue'>" + tavernText.sleepMessage + "</p>";

    // If you have 9 coins (need 1 more)
    } else if(stats.coins === 4) {
        bubble.innerHTML += "<p>" + tavernText.needOneCoin + "</p>";

    // If you need more than 1 coin
    } else {
        bubble.innerHTML += "<p>" + tavernText.needCoin1 + (5-stats.coins) + tavernText.needCoin2 + "</p>";

    }

    scroll();
    updateStats(stats);
});

buyHealthButton.addEventListener("click", function() {
    // If you have enough coin
    if (stats.coins >= 10) {
        stats.maxHealth += 1;
        stats.coins -= 10

        bubble.innerHTML += "<p>" + tavernText.buyHPMessage1 + "</p>";
        bubble.innerHTML += "<p class='red'>" + tavernText.buyHPMessage2 + "</p>";

    // If you have 9 coins (need 1 more)
    } else if(stats.coins === 9) {
        bubble.innerHTML += "<p>" + tavernText.needOneCoin + "</p>";

    // If you need more than 1 coin
    } else {
        bubble.innerHTML += "<p>" + tavernText.needCoin1 + (10-stats.coins) + tavernText.needCoin2 + "</p>";

    }

    scroll();
    updateStats(stats);
});

// -------------- 6. STATUS UPDATE -------------- //
//Updates the status on the localStorage
function updateStats(stats) {
    localStorage.setItem("stats", JSON.stringify(stats));
}
// -------------- END OF STATUS UPDATE -------------- //