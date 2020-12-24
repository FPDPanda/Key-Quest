// Importing stats from main_stats.js
let stats = JSON.parse(localStorage.getItem("stats"));

// Getting the box__text where we display all the text
let boxText = document.getElementById("box__text");

// Getting the button CONTINUE from the HTML
const buttonContinue = document.getElementById("button__continue");

// Initializing a counter as 0
let counter = 0;


buttonContinue.addEventListener("click", function() {

    // Checks the HP of the player
    if (stats.health <= 1 ) {
        addHurt.textContent = "Your HP is too low! You need to run and sleep at the tavern!";
        addText(addHurt);
        buttonContinue.style.display = 'none';
        return
    } else {
        fight();
    }
});

function fight( ) {
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

}