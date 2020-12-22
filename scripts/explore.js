let stats = JSON.parse(localStorage.getItem("stats"));
let boxText = document.getElementById("box__text");
let addP = document.createElement("p");
addP.setAttribute("style", "color: red");
let addedText = "";


const buttonContinue = document.getElementById("button__continue");

buttonContinue.addEventListener("click", function() {
    fight();
});

function fight() {
    stats.health--;
    addedText = document.createTextNode("You were hurt!");
    console.log(addP.classList);
    addtext();
    addedText = document.createTextNode("Your health is now " + stats.health);
    addtext();
    localStorage.setItem("stats", JSON.stringify(stats));
};

function addtext() {
    boxText.appendChild(addP.appendChild(addedText));
    boxText.appendChild(document.createElement("br"));
}