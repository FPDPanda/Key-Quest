let language = document.getElementById("languages")
let portuguese = document.getElementById("pt-br");
let english = document.getElementById("en");
let chosenLanguage = "";

if(localStorage.language) {
    language.style.display="none";
}

portuguese.addEventListener("click", function() {
    chosenLanguage = "portuguese"
    language.style.display="none";
    setLanguage(chosenLanguage);

});

english.addEventListener("click", function() {
    chosenLanguage = "english"
    language.style.display="none";
    setLanguage(chosenLanguage);

});

function setLanguage(chosenLanguage) {
    localStorage.getItem("language")? 0 : localStorage.setItem("language", JSON.stringify(chosenLanguage));
}
