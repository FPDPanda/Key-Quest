// Importing stats from main_stats.js
let stats = JSON.parse(localStorage.getItem("stats"));

// Getting the stats locations from the stats bar
let displayedHealth = document.getElementById("player__stats__health");
let displayedWeapon = document.getElementById("player__stats__weapon");

window.addEventListener("load", function() {
    if (stats.health < stats.maxHealth) {
        displayedHealth.classList.add('red');
    }

    displayedWeapon.classList.add('grey')

    displayedHealth.textContent = stats.health;
    displayedWeapon.textContent = stats.weapons[stats.weapons.length -1];
});