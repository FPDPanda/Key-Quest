/* AREA GUIDE :

1. IMPORT AREA
    - Importing stats
    - Importing language

2. GLOBAL FUNCTIONS
    - Scroll functions

3. LANGUAGE AREA - GETTING THE LANGUAGE PACKS
    - Importing the texts from the JSON files in the language folder

4. MONSTER AREA - THE MONSTER IS GENERATED
    - Encounter rates
        Goblin 70%
        Ogre 20%
        Orc 10%

5. BATTLE AREA - THE PLAYER FIGHTS THE MONSTER
    - Event 1 LOW HP - If HP is 1, player has to run
    - Event 2 FIGHT - If HP is higher than 1, player can battle
    - Event 3 VICTORY - If battle ends and player has more than 0 hp, he can get loot
    - Event 4 DEFEAT - If HP hits 0 (or lower) player loses half his coins

    - Damage rates
        Goblin hits for 1 hp
        Ogre hits for 1-2 hp
        Orc hits for 2-3 hp
6. LOOT AREA
    - Loot rates
        Goblin:
        Ogre:
        Orc:

7. STATUS UPDATE AREA
*/

// --------------------------------- 1. IMPORT AREA --------------------------------- //
// Importing main stats from localStorage
stats = JSON.parse(localStorage.getItem("stats"));

// Importing language from localStorage
mainLanguage = JSON.parse(localStorage.getItem("language"));
// --------------------------------- END OF IMPORT AREA --------------------------------- //

// --------------------------------- 2. GLOBAL FUNCTIONS --------------------------------- //
// Scroll Function - A basic function to scroll down and show all the text
function scroll() {
  boxText.scrollTop = boxText.scrollHeight;
}
// --------------------------------- END OF GLOBAL FUNCTIONS --------------------------------- //

// --------------------------------- 3. LANGUAGE AREA --------------------------------- //
// Getting the box__text where we display all the text
let boxText = document.getElementById("box__text");

// Getting the box__encounterText where we display the text for the encounter
let encounterText = document.getElementById("box__encounterText");

// Getting the text from the main button
const buttonContinue = document.getElementById("button__continue");

// Getting the text from the escape button
const escapeButton = document.getElementById("escape__button__text");

let exploreText = {
    goblin: "",
    goblins: "",
    goblinEncounter: "",
    goblinDescription: "",
    ogre: "",
    ogres: "",
    ogreEncounter: "",
    ogreDescription: "",
    orc: "",
    orcs: "",
    orcEncounter: "",
    orcDescription: "",
    lowHP: "",
    dagger: "",
    axe: "",
    sword: "",
    buttonFight: "",
    buttonContinue: "",
    buttonVictory: "",
    buttonGoBack: "",
    escapeButton: "",
    goblinAttack: "",
    ogreAttack: "",
    orcAttack: "",
    hurtMessage: "",
    updateHPMesage: "",
    playerAttackDagger: "",
    playerAttackAxe: "",
    playerAttackSword: "",
    coin: "",
    coins: "",
    dropNoLoot: "",
    dropCoins: "",
    pickUpCoin: "",
    pickUpCoins: ""
};

window.addEventListener("load", function() {
    if(localStorage.language) {
        chosenLanguage = JSON.parse(localStorage.language);
    };

    $.getJSON("../language/"+chosenLanguage+".json", function(text){
        exploreText.goblin = text.goblin;
        exploreText.goblins = text.goblins;
        exploreText.goblinEncounter = text.goblinEncounter;
        exploreText.goblinDescription = text.goblinDescription;
        exploreText.ogre = text.ogre;
        exploreText.ogres = text.ogres;
        exploreText.ogreEncounter = text.ogreEncounter;
        exploreText.ogreDescription = text.ogreDescription;
        exploreText.orc = text.orc;
        exploreText.orcs = text.orcs;
        exploreText.orcEncounter = text.orcEncounter;
        exploreText.orcDescription = text.orcDescription;
        exploreText.lowHP = text.lowHP;
        exploreText.dagger = text.dagger;
        exploreText.axe = text.axe;
        exploreText.sword = text.sword;
        exploreText.buttonFight = text.buttonFight;
        exploreText.buttonContinue = text.buttonContinue;
        exploreText.buttonVictory = text.buttonVictory;
        exploreText.buttonGoBack = text.buttonGoBack;
        exploreText.escapeButton = text.escapeButton;
        exploreText.goblinAttack = text.goblinAttack;
        exploreText.ogreAttack = text.ogreAttack;
        exploreText.orcAttack = text.orcAttack;
        exploreText.hurtMessage = text.hurtMessage;
        exploreText.updateHPMesage = text.updateHPMesage;
        exploreText.playerAttackDagger = text.playerAttackDagger;
        exploreText.playerAttackAxe = text.playerAttackAxe;
        exploreText.playerAttackSword = text.playerAttackSword;
        exploreText.coin = text.coin;
        exploreText.coins = text.coins;
        exploreText.dropNoLoot = text.dropNoLoot;
        exploreText.dropCoins = text.dropCoins;
        exploreText.pickUpCoin = text.pickUpCoin;
        exploreText.pickUpCoins = text.pickUpCoins;

    setText();

    escapeButton.textContent = exploreText.escapeButton;
    });
});
// --------------------------------- END OF LANGUAGE AREA --------------------------------- //

// --------------------------------- 4. MONSTER AREA --------------------------------- //
// Getting the monster area
const monsterArea = document.getElementById("monster");

// Randomizing the encounter and checking it with this
let encounterChance = 0;

// The monster the player encountered will be saved here
let monster = "player encountered this monster";

// The monster and its respective size
let monsters = {
  goblin: "url(../images/monsters/goblin__idle.gif)",
  goblinSize: "20vh",
  ogre: "url(../images/monsters/ogre__idle.gif)",
  ogreSize: "25vh",
  orc: "url(../images/monsters/orc__idle.gif)",
  orcSize: "28vh",
};
// Generates a random number between 1 and 100
encounterChance = Math.floor(Math.random() * 100 + 1);

/* Monster encounter chances change depending on your weapon:
      Dagger - Goblin (80%), Ogre (19%), Orc (1%)  
      Axe - Goblin (55%), Ogre(35%), Orc (10%)
      Sword - Goblin (30%), Ogre (50%), Orc (20%)
*/
window.addEventListener("load", function() {  
  let chosenWeapon = stats.weapons[stats.weapons.length-1];

  if (chosenWeapon === "Dagger") {
    encounter('Dagger');
  } else if (chosenWeapon === "Axe") {
    encounter('Axe');
  } else if (chosenWeapon === "Sword") {
    encounter('Sword');
  }
});

function encounter(weapon) {
  let chances = {
    Dagger: [80,  19, 1],
    Axe: [55,  35, 10],
    Sword: [30,  50, 20],
  };

  // If smaller than the first value (80%, 55% or 30% depending on the weapon)
  if (encounterChance <= chances[weapon][0]) {

    monster = "goblin";
    monsterArea.style.backgroundImage = monsters.goblin;
    monsterArea.style.backgroundSize = monsters.goblinSize;

  // If smaller than the the sum of the first two values (99%, 90% or 80% depending on the weapon)
  } else if (encounterChance > chances[weapon][0] && encounterChance <= (chances[weapon][0]+chances[weapon][1])) {

    monster = "ogre";
    monsterArea.style.backgroundImage = monsters.ogre;
    monsterArea.style.backgroundSize = monsters.ogreSize;

  // If bigger than the the sum of the first two values (99%, 90% or 80% depending on the weapon)
  } else if (encounterChance > (chances[weapon][0]+chances[weapon][1])) {

    monster = "orc";
    monsterArea.style.backgroundImage = monsters.orc;
    monsterArea.style.backgroundSize = monsters.orcSize;

  }
}
// --------------------------------- END OF MONSTER AREA --------------------------------- //

// --------------------------------- 5. BATTLE AREA --------------------------------- //
// This counter will be used to control the button
let counter = 0;

function setText() {
  // Changes the text according to the monster
  if (monster === "goblin") {
    encounterText.innerHTML +=
      "<p>"+exploreText.goblinEncounter+"<span class='green'>"+exploreText.goblin+"!</span><p>";
    encounterText.innerHTML += "</br>";
    encounterText.innerHTML +=
      "<p><span class='green'>"+exploreText.goblins+"</span>"+exploreText.goblinDescription+"</p>";
    encounterText.innerHTML += "</br>";
  } else if (monster === "ogre") {
    encounterText.innerHTML +=
      "<p>"+exploreText.ogreEncounter+"<span class='dark-green big'>"+exploreText.ogre+"!</span><p>";
    encounterText.innerHTML += "</br>";
    encounterText.innerHTML +=
      "<p><span class='dark-green big'>"+exploreText.ogres+"</span>"+exploreText.ogreDescription+"</p>";
    encounterText.innerHTML += "</br>";
  } else {
    encounterText.innerHTML +=
      "<p>"+exploreText.orcEncounter+"<span class='white black-bg big'>"+exploreText.orc+"!</span><p>";
    encounterText.innerHTML += "</br>";
    encounterText.innerHTML +=
      "<p><span class='white black-bg big'>"+exploreText.orcs+"</span>"+exploreText.orcDescription+"</p>";
    encounterText.innerHTML += "</br>";
  }

  // Checks the HP of the player and flees (Event 1) or fights (Event 2)
  if (stats.health <= 1) {
    boxText.innerHTML +=
      "<p class ='red'>"+exploreText.lowHP+"</p>";
    boxText.innerHTML += "<br>";
    buttonContinue.style.display = "none";
    scroll();
    return;
  } else {
    document.getElementById("text").textContent = exploreText.buttonFight;
  }
};

// If the player has enough HP he can choose to fight (Event 2)
buttonContinue.addEventListener("click", function () {
  fight();
});

// - Event 2 FIGHT - If HP is higher than 1, player can battle
function fight() {
  // Changes button from "FIGHT" to "CONTINUE"
  document.getElementById("text").textContent = exploreText.buttonContinue;

  // All of these will only happen once, because of the counter
  if (counter === 0) {
    // The monster attacks first
    monsterAttack();
    scroll();
    counter++;
  } else if (counter === 1) {
    // The player attacks
    playerAttack();
    scroll();
    counter++;
  } else if (counter === 2) {
    // After the battle the monster has a chance to drop loot (Event 3)
    lootDrop();
    scroll();
    counter++;
  }

  // Updates the stats
  updateStats(stats);
}

function monsterAttack() {
  if (monster === "goblin") {
    boxText.innerHTML += "<p>"+exploreText.goblinAttack+"</p>"
  } else if (monster === "ogre") {
    boxText.innerHTML += "<p>"+exploreText.ogreAttack+"</p>"
  } else if (monster === "orc") {
    boxText.innerHTML += "<p>"+exploreText.orcAttack+"</p>"
  }
  
  stats.health--;
  boxText.innerHTML += "<br><p class='red'>"+exploreText.hurtMessage+"</p>";
  boxText.innerHTML +=
    "<br><p>"+exploreText.updateHPMesage+" <span class='red'>" +
    stats.health + "</span></p>";
  boxText.innerHTML += "<br>";
}

function playerAttack() {
  let chosenWeapon = stats.weapons[stats.weapons.length-1];
  if (chosenWeapon === 'Dagger') {
    boxText.innerHTML +=
      "<p>"+exploreText.playerAttackDagger+"<span class='grey'>"+exploreText.dagger+"!</span></p>";
    boxText.innerHTML += "<br>";
  }
  else if (chosenWeapon === 'Axe') {
    boxText.innerHTML +=
      "<p>"+exploreText.playerAttackAxe+"<span class='dark-blue'>"+exploreText.axe+"!</span></p>";
    boxText.innerHTML += "<br>";
  }
  else if (chosenWeapon === 'Sword') {
    boxText.innerHTML +=
      "<p>"+exploreText.playerAttackSword+"<span class='purple'>"+exploreText.sword+"!</span></p>";
    boxText.innerHTML += "<br>";
  }

  // Changes button from "CONTINUE" to "VICTORY!"
  document.getElementById("text").textContent = exploreText.buttonVictory;
}
// --------------------------------- END OF BATTLE AREA --------------------------------- //

// --------------------------------- 6. LOOT AREA --------------------------------- //
// Event 3 VICTORY - If battle ends and player has more than 0 hp, he can get loot

//Function to randomly drop loot
function lootDrop() {
  // Random number between 1 and 10
  let droppedLoot = Math.floor(Math.random() * 10 + 1);

  if (droppedLoot <= 4) {
    boxText.innerHTML += "<p>"+exploreText.dropNoLoot+"</p>";
    boxText.innerHTML += "<br>";
  }

  // Coin drops (70% chance)
  if (droppedLoot > 3) {
    boxText.innerHTML +=
      "<p>"+exploreText.dropCoins+"<span class='gold' style='font-size:20px'> "+exploreText.coins+"!</span></p>";
    boxText.innerHTML += "<br>";

    // random number of coins from 1 to 3
    let droppedCoins = Math.floor(Math.random() * 3 + 1);

    if (droppedCoins === 1) {
      boxText.innerHTML +=
        "<p>"+exploreText.pickUpCoin+"<span class='gold' style='font-size:20px'>" +
        droppedCoins +
        "</span> "+exploreText.coin+"!</p>";
      boxText.innerHTML += "<br>";
    } else if (droppedCoins > 1) {
      boxText.innerHTML +=
        "<p>"+exploreText.pickUpCoins+"<span class='gold' style='font-size:20px'>" +
        droppedCoins +
        "</span> "+exploreText.coins+"!</p>";
      boxText.innerHTML += "<br>";
    }

    stats.coins += droppedCoins;
  }

  // Changes button from "Victory!" to "Head back"
  document.getElementById("text").textContent = exploreText.buttonGoBack;

  // Button now sends you back to the main page
  buttonContinue.addEventListener("click", function () {
    window.location.replace("../index.html");
  });
};
// --------------------------------- END OF LOOT AREA --------------------------------- //

// --------------------------------- 7. STATUS UPDATE --------------------------------- //
//Updates the status on the localStorage
function updateStats(stats) {
  localStorage.setItem("stats", JSON.stringify(stats));
};
// --------------------------------- END OF STATUS UPDATE --------------------------------- //