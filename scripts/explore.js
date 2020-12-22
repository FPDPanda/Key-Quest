let stats = JSON.parse(localStorage.getItem("stats"));

let boxText = document.getElementById("box__text");
let addHurt = document.createElement("p");
addHurt.classList.add('red');
let addHealth = document.createElement("p");

let counter = 0;


const buttonContinue = document.getElementById("button__continue");

buttonContinue.addEventListener("click", function() {
    if (counter === 0) {
        fight();
        counter++
    }   
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

function addtext(text) {
    boxText.appendChild(document.createElement("br"));
    boxText.appendChild(text);
}

function fight_result(){


}