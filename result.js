let whoWon = document.querySelector(".whowon");

//revenir au menu principal
let back = document.querySelector(".back");

back.addEventListener("click", function() {
    localStorage.clear();
    window.location.replace("index.html");
})


if ((JSON.parse(localStorage.winPlayer1) > JSON.parse(localStorage.winPlayer2)) ) {  
    whoWon.innerHTML = "Joueur 1 !"
}
else if ((JSON.parse(localStorage.winPlayer1) < JSON.parse(localStorage.winPlayer2)) ) {   
    whoWon.innerHTML = "Joueur 2 !"
}    
else if ((JSON.parse(localStorage.winPlayer1) === JSON.parse(localStorage.winPlayer2)) ) {
    whoWon.innerHTML = "Personne !"
}