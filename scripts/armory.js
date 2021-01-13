// Importing main stats from localStorage
stats = JSON.parse(localStorage.getItem("stats"));

let dagger = document.getElementById("dagger");
let axe = document.getElementById("axe");
let sword = document.getElementById("sword")

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
})

dagger.addEventListener("click", function() {
    stats.coins -= 5;
    alert("You bought a dagger!");
    dagger.style.display = 'none';
    stats.weapons.push("Dagger");
    updateStats(stats);
});

axe.addEventListener("click", function() {
    if (stats.coins >= 20) {
        stats.coins -= 20;
        axe.style.display = 'none';
        alert("You bought an axe!");
        stats.weapons.push("Axe");
        updateStats(stats);
    } else {
        alert("You need " + (20 - stats.coins) + " more coins to purchase this.")
    }
});

sword.addEventListener("click", function() {
    if (stats.coins >= 40) {
        stats.coins -= 40;
        sword.style.display = 'none';
        alert("You bought a sword!");
        stats.weapons.push("Sword");
        updateStats(stats);
    } else {
        alert("You need " + (40 - stats.coins) + " more coins to purchase this.")
    }
});

// -------------- 6. STATUS UPDATE -------------- //
//Updates the status on the localStorage
function updateStats(stats) {
    localStorage.setItem("stats", JSON.stringify(stats));
}
// -------------- END OF STATUS UPDATE -------------- //