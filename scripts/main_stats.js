// When the window loads this call the function "setStats"
window.addEventListener("load", setStats({
    health: 5,
    maxHealth: 5,
    bag: [],
    weapons: ['Dagger'],
    coins: 5
}));

// This is the function that will set all the stats (ONLY ONCE)
function setStats(stats) {
    localStorage.getItem("stats")? 0 : localStorage.setItem("stats", JSON.stringify(stats));
};