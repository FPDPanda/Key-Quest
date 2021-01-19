// --------------------------------- 2. GLOBAL FUNCTIONS --------------------------------- //
// Scroll Function - A basic function to scroll down and show all the text
function scroll() {
    bubble.scrollTop = bubble.scrollHeight;
  }
// --------------------------------- END OF GLOBAL FUNCTIONS --------------------------------- //

// -------------- LANGUAGE AREA -------------- //
// Getting the speech from the storekeeper
const bubble = document.getElementById("bubble__text");

// Getting the return button
const returnButton = document.getElementById("returnContainer__button__text");

// Where the text will be stored
let armoryText = {
    armoryMessages: [],
    boughtDagger: "",
    boughtAxe: "",
    boughtSword: "",
    needOneCoin: "",
    needCoin1: "",
    needCoin2: "",

    escapeButton: "",
};

window.addEventListener("load", function() {
    if(localStorage.language) {
        chosenLanguage = JSON.parse(localStorage.language);
    }

    $.getJSON("../language/"+chosenLanguage+".json", function(text){
        armoryText.armoryMessages = text.armoryMessages;
        armoryText.boughtDagger = text.armoryBoughtDagger;
        armoryText.boughtAxe    = text.armoryBoughtAxe;
        armoryText.boughtSword  = text.armoryBoughtSword;
        armoryText.needOneCoin  = text.needOneCoin;
        armoryText.needCoin1    = text.needCoin1;
        armoryText.needCoin2    = text.needCoin2;

        armoryText.escapeButton = text.returnButton;

        setText()
    });
});

function setText() {
    rand = Math.floor(Math.random()*5);
    bubble.textContent = armoryText.armoryMessages[rand];

    returnButton.textContent = armoryText.escapeButton;
}
// -------------- END OF LANGUAGE AREA -------------- //

// This is where the random number will be stored
let rand = 0;

// Importing main stats from localStorage
stats = JSON.parse(localStorage.getItem("stats"));

// Getting the weapons and weapons space from the DOM
let weaponsSpace = document.getElementsByClassName("weapons");
let dagger = document.getElementById("dagger");
let axe = document.getElementById("axe");
let sword = document.getElementById("sword");

// Removes the weapons that were already bought
window.addEventListener("load", function() {
    if (stats.weapons.includes('Dagger')) {
        dagger.style.display = 'none';
    }
    if (stats.weapons.includes('Axe')) {
        axe.style.display = 'none';
    }
    if (stats.weapons.includes('Sword')) {
        sword.style.display = 'none';
    }
});

// Buying the Dagger
dagger.addEventListener("click", function() {
    // Purchase succeeded (Mandatory to begin the game)
    stats.coins -= 5;
    bubble.innerHTML += "<p>" + armoryText.boughtDagger + "</p>";
    dagger.style.display = 'none';
    stats.weapons.push("Dagger");

    // Reduces the rows in the grid after buying the dagger
    for (let i = 0; i < weaponsSpace.length; i++) {
        weaponsSpace[i].style.gridTemplateRows = '1fr';
    }

    scroll();
    updateStats(stats);
});

// Buying the Axe
axe.addEventListener("click", function() {
    // Purchase succeeded
    if (stats.coins >= 20) {
        stats.coins -= 20;
        axe.style.display = 'none';
        bubble.innerHTML += "<p>" + armoryText.boughtAxe + "</p>";
        stats.weapons.push("Axe");
        updateStats(stats);
    // Player needs one coin
    } else if (stats.coins === 19) {
        bubble.innerHTML += "<p>" + armoryText.needOneCoin + "</p>";
    // Player needs more than one coin
    } else {
        bubble.innerHTML += "<p>" + armoryText.needCoin1 + (20 - stats.coins) + armoryText.needCoin2 + "</p>";
    }
    
    scroll();
    updateStats(stats);
});

// Buying the Sword
sword.addEventListener("click", function() {
    // Purchase succeeded
    if (stats.coins >= 40) {
        stats.coins -= 40;
        sword.style.display = 'none';
        bubble.innerHTML += "<p>" + armoryText.boughtSword + "</p>";
        stats.weapons.push("Sword");
    // Player needs one coin
    } else if (stats.coins === 39) {
        bubble.innerHTML += "<p>" + armoryText.needOneCoin + "</p>";
    // Player needs more than one coin
    } else {
        bubble.innerHTML += "<p>" + armoryText.needCoin1 + (40 - stats.coins) + armoryText.needCoin2 + "</p>";
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