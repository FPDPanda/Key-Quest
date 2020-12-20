let stats = JSON.parse(localStorage.getItem("stats"));

const button__continue = document.getElementById("button__continue");

button__continue.addEventListener("click", function() {
    fight();
});

function fight() {
    stats.health--;
    alert("Your health is now " + stats.health);
    localStorage.setItem("stats", JSON.stringify(stats));
};