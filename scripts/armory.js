// -------------- LANGUAGE AREA -------------- //
// Getting the speech from the storekeeper
const bubble = document.getElementById("bubble__text");

// Getting the return button
const returnButton = document.getElementById("returnContainer__button__text");

// Where the text will be stored
let armoryText = {
    bubble1: "",
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
        armoryText.bubble1      = text.armoryBubble1;
        armoryText.boughtDagger = text.armoryBoughtDagger;
        armoryText.boughtAxe    = text.armoryBoughtAxe;
        armoryText.boughtSword  = text.armoryBoughtSword;
        armoryText.needOneCoin  = text.armoryNeedOneCoin;
        armoryText.needCoin1    = text.armoryNeedCoin1;
        armoryText.needCoin2    = text.armoryNeedCoin2;

        armoryText.escapeButton    = text.returnButton;

        setText()
    });
});

function setText() {
    bubble.textContent = armoryText.bubble1;
    returnButton.textContent = armoryText.escapeButton;
}
// -------------- END OF LANGUAGE AREA -------------- //

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
    alert(armoryText.boughtDagger);
    dagger.style.display = 'none';
    stats.weapons.push("Dagger");

    // Reduces the rows in the grid after buying the dagger
    for (let i = 0; i < weaponsSpace.length; i++) {
        weaponsSpace[i].style.gridTemplateRows = '1fr';
    }
    
    updateStats(stats);
});

// Buying the Axe
axe.addEventListener("click", function() {
    // Purchase succeeded
    if (stats.coins >= 20) {
        stats.coins -= 20;
        axe.style.display = 'none';
        alert(armoryText.boughtAxe);
        stats.weapons.push("Axe");
        updateStats(stats);
    // Player needs one coin
    } else if (stats.coins === 19) {
        alert(armoryText.needOneCoin);
    // Player needs more than one coin
    } else {
        alert(armoryText.needCoin1 + (20 - stats.coins) + armoryText.needCoin2);
    }
});

// Buying the Sword
sword.addEventListener("click", function() {
    // Purchase succeeded
    if (stats.coins >= 40) {
        stats.coins -= 40;
        sword.style.display = 'none';
        alert(armoryText.boughtSword);
        stats.weapons.push("Sword");
        updateStats(stats);
    // Player needs one coin
    } else if (stats.coins === 39) {
        alert(armoryText.needOneCoin);
    // Player needs more than one coin
    } else {
        alert(armoryText.needCoin1 + (40 - stats.coins) + armoryText.needCoin2);
    }
});

// -------------- 6. STATUS UPDATE -------------- //
//Updates the status on the localStorage
function updateStats(stats) {
    localStorage.setItem("stats", JSON.stringify(stats));
}
// -------------- END OF STATUS UPDATE -------------- //