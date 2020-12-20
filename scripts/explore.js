let health = localStorage.getItem('health');

const button__continue = document.getElementById("button__continue");

button__continue.addEventListener("click", function() {
    fight();
});

function fight() {
    health--;
    alert("Your health is now " + health);
    localStorage.setItem('health', health);
};