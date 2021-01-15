/* AREA GUIDE :

1. IMPORT AREA
    - Importing stats
    - Importing language

2. GLOBAL FUNCTIONS
    - Scroll functions

1. MONSTER AREA - THE MONSTER IS GENERATED
    - Encounter rates
        Goblin 70%
        Ogre 20%
        Orc 10%

3. TEXT AREA - NARRATING TO THE PLAYER
    - Event 1 LOW HP - If HP is 1, player has to run
    - Event 2 FIGHT - If HP is higher than 1, player can battle

4. BATTLE AREA - THE PLAYER FIGHTS THE MONSTER
    - Event 3 VICTORY - If battle ends and player has more than 0 hp, he can get loot
    - Event 4 DEFEAT - If HP hits 0 (or lower) player loses half his coins

    - Damage rates
        Goblin hits for 1 hp
        Ogre hits for 1-2 hp
        Orc hits for 2-3 hp

5. LOOT AREA
    - Loot rates
        Goblin:
        Ogre:
        Orc:

6. STATUS UPDATE AREA
*/

// -------------- 1. IMPORT AREA -------------- //
// Importing main stats from localStorage
let stats = JSON.parse(localStorage.getItem("stats"));

// Importing language from localStorage
mainLanguage = JSON.parse(localStorage.getItem("language"));
// -------------- END OF IMPORT AREA -------------- //

// -------------- 2. GLOBAL FUNCTIONS -------------- //
// Scroll Function - A basic function to scroll down and show all the text
function scroll() {    
    boxText.scrollTop = boxText.scrollHeight
}
// -------------- END OF GLOBAL FUNCTIONS -------------- //

// -------------- 3. MONSTER AREA -------------- //
// Getting the monster area
const monsterArea = document.getElementById("monster");

// Randomizing the encounter and checking it with this
let encounterChance = 0;

// The monster the player encountered will be saved here
let monster = "player encountered this monster"

// The monster and its respective size
let monsters = {
    goblin: "url(../images/monsters/goblin__idle.gif)",
    goblinSize: "20vh",
    ogre: "url(../images/monsters/ogre__idle.gif)",
    ogreSize: "25vh",
    orc: "url(../images/monsters/orc__idle.gif)",
    orcSize: "28vh",
};

window.addEventListener("load", function() {
    // Generates a random number between 1 and 100
    encounterChance = Math.floor(Math.random()*100+1);

    // 70% chance
    if (encounterChance <= 70) {
        monster = 'goblin';
        monsterArea.style.backgroundImage = monsters.goblin;
        monsterArea.style.backgroundSize = monsters.goblinSize;

    // 20% chance
    } else if (encounterChance > 70 && encounterChance <= 90) {
        monster = 'ogre';
        monsterArea.style.backgroundImage = monsters.ogre;
        monsterArea.style.backgroundSize = monsters.ogreSize;

    // 10% chance
    } else if (encounterChance > 90) {
        monster = 'orc';
        monsterArea.style.backgroundImage = monsters.orc;
        monsterArea.style.backgroundSize = monsters.orcSize;
    }
});
// -------------- END OF MONSTER AREA -------------- //

// -------------- 4. TEXT AREA -------------- //
// Getting the box__text where we display all the text
let boxText = document.getElementById("box__text");

// Getting the box__encounterText where we display the text for the encounter
let encounterText = document.getElementById("box__encounterText");

// Getting the button CONTINUE from the HTML
const buttonContinue = document.getElementById("button__continue");

// This counter will be used to control the button
let counter = 0;

window.addEventListener("load", function() {
    // Changes the text according to the monster
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

    // Checks the HP of the player and flees (Event 1) or fights (Event 2)
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

// If the player has enough HP he can choose to fight (Event 2)
buttonContinue.addEventListener("click", function(){    
    fight();
})

// - Event 2 FIGHT - If HP is higher than 1, player can battle
function fight() {

    // Changes button from "FIGHT" to "CONTINUE"
    document.getElementById("text").textContent = "Continue"

    // All of these will only happen once, because of the counter
    if (counter === 0) {
        // The monster attacks first
        monsterAttack();        
        scroll()
        counter++
    } else if (counter === 1){
        // The player attacks
        playerAttack();        
        scroll()
        counter++
    } else if (counter === 2) {
        // After the battle the monster has a chance to drop loot (Event 3)
        lootDrop();
        scroll()
        counter++
    }

    // Updates the stats
    updateStats(stats)
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
}
// -------------- END OF TEXT AREA -------------- //

// -------------- 5. LOOT AREA -------------- //
// Event 3 VICTORY - If battle ends and player has more than 0 hp, he can get loot

//Function to randomly drop loot
function lootDrop() {
    // Random number between 1 and 10
    let droppedLoot = Math.floor(Math.random()*10+1);

    if (droppedLoot <= 4) {
        boxText.innerHTML += "<p>The monster had nothing.</p>"
        boxText.innerHTML += "<br>"
    };

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
    };
    
    // Changes button from "Victory!" to "Head back"
    document.getElementById("text").textContent = "Go back"
        

    // Button now sends you back to the main page
    buttonContinue.addEventListener("click", function() {
    window.location.replace("../index.html");
    });
}
// -------------- END OF LOOT AREA -------------- //

// -------------- 6. STATUS UPDATE -------------- //
//Updates the status on the localStorage
function updateStats(stats) {
    localStorage.setItem("stats", JSON.stringify(stats));
}
// -------------- END OF STATUS UPDATE -------------- //