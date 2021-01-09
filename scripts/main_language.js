// -------------- LANGUAGES AREA -------------- //

// Getting the languages area
let language = document.getElementById("languages")

// Getting the language buttons
//Portuguese
let portuguese = document.getElementById("pt-br");
//English
let english = document.getElementById("en");

// This is what will be put in localStorage
let chosenLanguage = "";

// To make sure the language area will only appear once
if(localStorage.language) {
    language.style.display="none";
}

// If the player selects Portuguese
portuguese.addEventListener("click", function() {
    chosenLanguage = "portuguese"
    language.style.display="none";
    setLanguage(chosenLanguage);

});

// If the player selects English
english.addEventListener("click", function() {
    chosenLanguage = "english"
    language.style.display="none";
    setLanguage(chosenLanguage);

});

// Updates the chosen language and puts it in localStorage
function setLanguage(chosenLanguage) {
    localStorage.getItem("language")? 0 : localStorage.setItem("language", JSON.stringify(chosenLanguage));
}
// -------------- END OF LANGUAGES AREA -------------- //