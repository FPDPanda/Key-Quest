// When the window loads this call the function "setStats"
window.addEventListener("load", setStats({
    health: 5,
    maxHealth: 5,
    bag: [],
    weapons: ['dagger']
}));

// This is the function that will set all the stats, then it turns this function into an empty function NOOP, making it so the main stats will only be set once.
function setStats(stats) {
    localStorage.setItem("stats", JSON.stringify(stats));
    setStats = noop;
};

// This is an empty function (NO OPERATION)
function noop() {};