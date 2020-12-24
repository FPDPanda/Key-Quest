// Importing stats from main_stats.js
stats = JSON.parse(localStorage.getItem("stats"));

// Getting the button TAVERN from the HTML
const buttonTavern = document.getElementById("button__tavern");

buttonTavern.addEventListener("click", function() {
    stats.health = stats.maxHealth;
    localStorage.setItem('stats', JSON.stringify(stats));
    alert("You restored your HP to MAX!");
    
    displayedHealth.classList.remove('red');
    // ERASE THIS WHEN YOU CREATE A SEPARATE PAGE FOR THE TAVERN
    displayedHealth.textContent = stats.health;
});