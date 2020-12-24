// When the window loads this call the function "setStats"
window.addEventListener("load", setStats({
    health: 5,
    maxHealth: 5,
    bag: [],
    weapons: ['Dagger']
}));

// This is the function that will set all the stats once.
function setStats(stats) {
    localStorage.getItem("stats")? 0 : localStorage.setItem("stats", JSON.stringify(stats));
};