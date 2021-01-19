// -------------- LANGUAGE AREA -------------- //
// Getting the text in the explore button
const exploreText = document.getElementById("button__explore__text");
// Getting the text in the tavern button
const tavernText = document.getElementById("button__tavern__text");
// Getting the text in the armory button
const armoryText = document.getElementById("button__armory__text");
// Getting the text in the stats title
const statsTitle = document.getElementById("stats__title__text");

//This is where the warning texts will be stored (for new players)
let exploreWarning = "";
let tavernWarning = "";

window.addEventListener("load", function() {
    if(localStorage.language) {
        chosenLanguage = JSON.parse(localStorage.language);
    };

    $.getJSON("./language/"+chosenLanguage+".json", function(text){
        tavernWarning = text.tavernWarning;
        exploreWarning = text.exploreWarning;
        exploreText.textContent = text.exploreBtn;
        tavernText.textContent = text.tavernBtn;
        armoryText.textContent = text.armoryBtn;
        statsTitle.textContent = text.statsTitle;
    });
});
// -------------- END OF LANGUAGE AREA -------------- //

// -------------- STATUS AREA -------------- //
// Importing stats from main_stats.js
let stats = JSON.parse(localStorage.getItem("stats"));

// Getting the stats locations from the stats bar
let displayedHealth = document.getElementById("stats__health");
let displayedWeapon = document.getElementById("stats__weapon");
let displayedCoins = document.getElementById("stats__coins");

// Updating the stats
window.addEventListener("load", function() {
    if (stats.health < stats.maxHealth) {
        displayedHealth.classList.add('red');
    }

    displayedCoins.classList.add('gold');
    displayedWeapon.classList.add('grey');

    displayedHealth.textContent = stats.health;
    displayedCoins.textContent = stats.coins;
    displayedWeapon.textContent = stats.weapons[stats.weapons.length -1];
});
// -------------- END OF STATUS AREA -------------- //

// -------------- NEW PLAYER AREA ----------------- //
// Getting the explore button
let explore = document.getElementById("button__explore");

// Getting the tavern button
let tavern = document.getElementById("button__tavern");

// When the player clicks on the explore button before buying a weapon.
explore.addEventListener("click", function() {
    if (stats.weapons.includes('Dagger')) {
        // If the player has a weapon
        window.location.replace("./pages/explore.html");
    } else {
        // If the player doesn't have a weapon
        window.location.replace("javascript:alert('"+exploreWarning+"')");
    }
});

// When the player clicks on the tavern button before buying a weapon.
tavern.addEventListener("click", function() {
    if (stats.weapons.includes('Dagger')) {
        // If the player has a weapon
        window.location.replace("./pages/tavern.html");
    } else {
        // If the player doesn't have a weapon
        window.location.replace("javascript:alert('"+tavernWarning+"')");
    }
});
// -------------- END OF NEW PLAYER AREA ----------------- //