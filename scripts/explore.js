// Importing stats from main_stats.js
let stats = JSON.parse(localStorage.getItem("stats"));

// Creating the variables used in the functions fight() and addText()
let boxText = document.getElementById("box__text");
let addHurt = document.createElement("p");
addHurt.classList.add('red');
let addHealth = document.createElement("p");

// Initializing a counter as 0
let counter = 0;

// Getting the button from the HTML
const buttonContinue = document.getElementById("button__continue");

buttonContinue.addEventListener("click", function() {

    // This happens on the first time user clicks the button
    if (counter === 0) {
        fight();
        counter++
    }   

    // This happens on the second time user clicks the button
    else if (counter === 1) {
        fight_result();
        counter++
    }
});

function fight() {
    stats.health--;
    addHurt.textContent = "You were hurt!";
    addtext(addHurt);
    addHealth.textContent = "Your health is now " + stats.health;
    addtext(addHealth);
    localStorage.setItem("stats", JSON.stringify(stats));
};

function addText(text) {
    boxText.appendChild(document.createElement("br"));
    boxText.appendChild(text);
}

function fightResult(){


}