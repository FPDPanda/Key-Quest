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

    displayedCoins.classList.add('gold')
    displayedWeapon.classList.add('grey')

    displayedHealth.textContent = stats.health;
    displayedCoins.textContent = stats.coins;
    displayedWeapon.textContent = stats.weapons[stats.weapons.length -1];
});
// -------------- END OF STATUS AREA -------------- //

// -------------- NEW PLAYER AREA ----------------- //
// Getting the explore button
let explore = document.getElementById("button__explore");

// When the player clicks on the explore button
explore.addEventListener("click", function() {
    if (stats.weapons.length === 0) {
        // If the weapons array (located on stats) is empty
        window.location.replace("javascript:alert('You need a weapon! Visit the armory.')");
    } else {
        // If the player has a weapon
        window.location.replace("./pages/explore.html")
    }
});
// -------------- END OF NEW PLAYER AREA ----------------- //