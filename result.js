let whoWon = document.querySelector(".whowon");
let local = JSON.parse(localStorage.getItem("getParameters"));
let announce = document.querySelector(".announce");
//revenir au menu principal
let back = document.querySelector(".back");

back.addEventListener("click", function() {
    localStorage.clear();
    window.location.replace("index.html");
})


if ((JSON.parse(localStorage.winPlayer1) > JSON.parse(localStorage.winPlayer2)) ) {  
    whoWon.innerHTML = "Bravo Joueur 1 ! " 
    announce.innerHTML = localStorage.winPlayer1 + " victoire sur " + local.numberGames;
}
else if ((JSON.parse(localStorage.winPlayer1) < JSON.parse(localStorage.winPlayer2)) ) {   
    whoWon.innerHTML = "Joueur 2 !"
    announce.innerHTML = localStorage.winPlayer2 + " victoire sur " + local.numberGames;
}    
else if ((JSON.parse(localStorage.winPlayer1) === JSON.parse(localStorage.winPlayer2)) ) {
    whoWon.innerHTML = "Personne !"
}