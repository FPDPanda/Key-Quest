// Importing stats from main_stats.js
let stats = JSON.parse(localStorage.getItem("stats"));

// Getting the stats locations from the stats bar
let displayedHealth = document.getElementById("player__stats__health");
let displayedWeapon = document.getElementById("player__stats__weapon");
let displayedCoins = document.getElementById("player__stats__coins");

window.addEventListener("load", function() {
    if (stats.health < stats.maxHealth) {
        displayedHealth.classList.add('red');
    }

    displayedCoins.classList.add('gold')
    displayedWeapon.classList.add('grey')

    displayedHealth.textContent = stats.health;
    displayedCoins.textContent = stats.coins;
    displayedWeapon.textContent = stats.weapons[stats.weapons.length -1];
});