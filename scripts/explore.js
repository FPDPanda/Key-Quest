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
        boxText.innerHTML += "<br><p class ='red'> You're hurt pretty bad! You need to run away from the monster!</p>";
        buttonContinue.style.display = 'none';
        return
    } else {
        fight();
        document.getElementById("text").textContent = "Fight!"
    }
});

buttonContinue.addEventListener("click", function(){    
    fight();
})

function fight() {

    // Changes button from "FIGHT" to "CONTINUE"
    document.getElementById("text").textContent = "Continue"

    // Button sequence: will do first then second
    if (counter === 0) {
        monsterAttack();
        counter++
    } else if (counter === 1) {
        playerAttack();
        counter++
        lootDrop();
    }
    localStorage.setItem("stats", JSON.stringify(stats));
};

function monsterAttack() {
    boxText.innerHTML += "<br><p>The small monster swiftly attacks and you get hit!</p>";
    stats.health--;
    boxText.innerHTML += "<br><p class='red'> You were hurt!!</p>";
    boxText.innerHTML += "<br><p>Your health is now <span class='red'>" + stats.health + "</span></p>";
}

function playerAttack() {
    boxText.innerHTML += "<br><p> You swing your <span class='grey'>" + stats.weapons[stats.weapons.length-1] + "</span> and beat the monster!";

    // Changes button from "CONTINUE" to "VICTORY!"
    document.getElementById("text").textContent = "Victory!"

    // Button now sends you back to the main page
    buttonContinue.addEventListener("click", function() {
        window.location.replace("../index.html");
    });
}

function lootDrop() {
    // Random number between 1 and 10
    let droppedLoot = Math.floor(Math.random()*10+1)

    // Coin drops (50% chance)
    if (droppedLoot > 4) {        
        boxText.innerHTML += "<br><p>The monster was holding some <span class='gold' style='font-size:20px'>coins!</span></p>"
        // random number of coins from 1 to 3
        let droppedCoins = Math.floor(Math.random() * 3 + 1);
    

        if (droppedCoins === 1) {
            boxText.innerHTML += "<br><p>You pick up <span class='gold' style='font-size:20px'>" + droppedCoins + "</span> coin!</p>"
        } else if (droppedCoins > 1) {
            boxText.innerHTML += "<br><p>You pick up <span class='gold' style='font-size:20px'>" + droppedCoins + "</span> coins!</p>"
        }

    stats.coins += droppedCoins;
    }
}