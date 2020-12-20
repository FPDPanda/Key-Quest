let stats = {
    health: 5,
    maxHealth: 5,
    bag: [],
    weapons: ['dagger']
};

// When the window loads this call the function "setStats"
window.addEventListener("load", setStats(stats));

// This is the function that will set all the stats, then it turn this function into the empty function, making it so it will only be called ONCE
function setStats(stats) {
    localStorage.setItem("stats", JSON.stringify(stats));
    setStats = noop;
};

// This is an empty function (NO OPERATION)
function noop() {};