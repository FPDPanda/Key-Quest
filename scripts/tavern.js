// Importing stats from main_stats.js
/* *** DO LET STATS WHEN YOU CREATE A SEPARATE PAGE FOR THE TAVERN */
stats = JSON.parse(localStorage.getItem("stats"));

// -------------- LANGUAGE AREA -------------- //
//This is where the tavern message will be stored
let tavernMessage = "";

window.addEventListener("load", function() {
    if(localStorage.language) {
        chosenLanguage = JSON.parse(localStorage.language);
    };

    $.getJSON("./language/"+chosenLanguage+".json", function(text){
        tavernMessage = text.tavernMessage;
    });
});
// -------------- END OF LANGUAGE AREA -------------- //

// Getting the button TAVERN from the HTML
const buttonTavern = document.getElementById("button__tavern");

buttonTavern.addEventListener("click", function() {
    stats.health = stats.maxHealth;
    localStorage.setItem('stats', JSON.stringify(stats));
    alert(tavernMessage);
    
    displayedHealth.classList.remove('red');
    /* *** ERASE THIS WHEN YOU CREATE A SEPARATE PAGE FOR THE TAVERN *** */
    displayedHealth.textContent = stats.health;
});