// Importing stats from main_stats.js
stats = JSON.parse(localStorage.getItem("stats"));

// Getting the box__text where we display all the text
let boxText = document.getElementById("box__text");

// Getting the button CONTINUE from the HTML
const buttonContinue = document.getElementById("button__continue");

// Initializing a counter as 0
let counter = 0;


buttonContinue.addEventListener("click", function() {

    // Checks the HP of the player
    if (stats.health <= 1 ) {
        boxText.innerHTML += "<br><p class ='red'> You're hurt pretty bad! You need to run away from the monster!</p>";
        buttonContinue.style.display = 'none';
        return
    } else {
        fight();
    }
});

function fight( ) {
    document.getElementById("text").textContent = "Continue"
    if (counter === 0) {
        monsterAttack();
        counter++
    } else if (counter === 1) {
        playerAttack();
        counter++
    }
    localStorage.setItem("stats", JSON.stringify(stats));
};

function monsterAttack() {
    boxText.innerHTML += "<br><p>The small monster swiftly attacks and you get hit!</p>";
    stats.health--;
    boxText.innerHTML += "<br><p class='red'> You were hurt!";
    boxText.innerHTML += "<br><p>Your health is now " + stats.health;
}

function playerAttack() {
    boxText.innerHTML += "<br><p> You swing your <span class='grey'>" + stats.weapons[stats.weapons.length-1] + "</span> and beat the monster!";
    document.getElementById("text").textContent = "Victory!"
    buttonContinue.addEventListener("click", function() {
        window.location.replace("../index.html");
    });
}