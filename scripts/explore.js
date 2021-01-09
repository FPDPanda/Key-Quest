// Importing stats from main_stats.js
let stats = JSON.parse(localStorage.getItem("stats"));

function scroll() {    
    boxText.scrollTop = boxText.scrollHeight
}

let monsterArea = document.getElementById("monster");

let encounterChance = 0;
let monster = "player encountered this monster"
let monsters = {
    goblin: "url(../images/monsters/goblin__idle.gif)",
    goblinSize: "20vh",
    ogre: "url(../images/monsters/ogre__idle.gif)",
    ogreSize: "25vh",
    orc: "url(../images/monsters/orc__idle.gif)",
    orcSize: "28vh",
};

window.addEventListener("load", function() {
    encounterChance = Math.floor(Math.random()*100+1);

    if (encounterChance <= 70) {
        monster = 'goblin';
        monsterArea.style.backgroundImage = monsters.goblin;
        monsterArea.style.backgroundSize = monsters.goblinSize;

    } else if (encounterChance > 70 && encounterChance <= 90) {
        monster = 'ogre';
        monsterArea.style.backgroundImage = monsters.ogre;
        monsterArea.style.backgroundSize = monsters.ogreSize;

    } else if (encounterChance > 90) {
        monster = 'orc';
        monsterArea.style.backgroundImage = monsters.orc;
        monsterArea.style.backgroundSize = monsters.orcSize;
    }
});

// Getting the box__text where we display all the text
let boxText = document.getElementById("box__text");

let encounterText = document.getElementById("box__encounterText");

// Getting the button CONTINUE from the HTML
const buttonContinue = document.getElementById("button__continue");

// Initializing a counter as 0
let counter = 0;

window.addEventListener("load", function() {
    if (monster === "goblin") {
        encounterText.innerHTML += "<p>You see a small green monster, it is a <span class='green'>Goblin!</span><p>"
        encounterText.innerHTML += "</br>"
        encounterText.innerHTML += "<p><span class='green'>Goblins</span> are weak monsters, you can take care of it.</p>"
        encounterText.innerHTML += "</br>"

    } else if (monster === "ogre") {
        encounterText.innerHTML += "<p>You see a large green monster, it is an <span class='dark-green big'>Ogre!</span><p>"
        encounterText.innerHTML += "</br>"
        encounterText.innerHTML += "<p><span class='dark-green big'>Ogres</span> are ferocious monsters that can kill experienced adventurers, be very careful.</p>"
        encounterText.innerHTML += "</br>"

    } else {
        encounterText.innerHTML += "<p>You see a towering monster boasting twice your size, it is an <span class='white black-bg big'>Orc!</span><p>"
        encounterText.innerHTML += "</br>"
        encounterText.innerHTML += "<p><span class='white black-bg big'>Orcs</span> are the bosses around these woods, there are few who rival them in power, run away as quick as you can.</p>"
        encounterText.innerHTML += "</br>"
    }

    // Checks the HP of the player
    if (stats.health <= 1 ) {
        boxText.innerHTML += "<p class ='red'> You're hurt pretty bad! You need to run away from the monster!</p>";
        boxText.innerHTML += "<br>";
        buttonContinue.style.display = 'none';
        scroll()
        return
    } else {
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
        scroll()
        counter++
    } else {
        playerAttack();        
        scroll()
        counter++
        lootDrop();        
        scroll()
    }
    localStorage.setItem("stats", JSON.stringify(stats));
};

function monsterAttack() {
    boxText.innerHTML += "<p>The monster attacks and you get hit!</p>";
    stats.health--;
    boxText.innerHTML += "<br><p class='red'> You were hurt!!</p>";
    boxText.innerHTML += "<br><p>Your health is now <span class='red'>" + stats.health + "</span></p>";
    boxText.innerHTML += "<br>";
}

function playerAttack() {
    boxText.innerHTML += "<p> You swing your <span class='grey'>" + stats.weapons[stats.weapons.length-1] + "</span> and beat the monster!</p>";
    boxText.innerHTML += "<br>";

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
        boxText.innerHTML += "<p>The monster was holding some <span class='gold' style='font-size:20px'>coins!</span></p>"
        boxText.innerHTML += "<br>"
        // random number of coins from 1 to 3
        let droppedCoins = Math.floor(Math.random() * 3 + 1);
    

        if (droppedCoins === 1) {
            boxText.innerHTML += "<br><p>You pick up <span class='gold' style='font-size:20px'>" + droppedCoins + "</span> coin!</p>"        
            boxText.innerHTML += "<br>"
        } else if (droppedCoins > 1) {
            boxText.innerHTML += "<br><p>You pick up <span class='gold' style='font-size:20px'>" + droppedCoins + "</span> coins!</p>"
            boxText.innerHTML += "<br>"
        }

    stats.coins += droppedCoins;
    }
}
