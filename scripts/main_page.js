// Importing stats from main_stats.js
let stats = JSON.parse(localStorage.getItem("stats"));

// Getting the stats from the stats bar
let displayedHealth = document.getElementById("player__stats__health");

window.addEventListener("load", function() {
    if (stats.health < stats.maxHealth) {
        displayedHealth.classList.add('red');
    }
    displayedHealth.textContent = stats.health;
});