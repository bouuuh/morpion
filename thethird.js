let buttonSubmit = document.querySelector("#submitTheForm");
let computer = document.querySelector("#thecomputer");
const local = JSON.parse(localStorage.getItem("getParameters"));
let thescript = document.querySelector("script");

localStorage.setItem("winPlayer1", 0);
localStorage.setItem("winPlayer2", 0);     



buttonSubmit.addEventListener("click", function(){
    const getParameters = {
        computer: computer.checked,
        thePlayer: theplayer.checked,
        numberGames: numberparty.selectedIndex + 1 
    };
localStorage.setItem("getParameters",JSON.stringify(getParameters))
JSON.parse(localStorage.getItem("getParameters"));

});
localStorage.setItem("numberGamesLeft", local.numberGames);
if(local.computer === true){
    window.location.replace("gamepage.html");
}
else if(local.thePlayer === true){
    window.location.replace("gamepagecomputer.html");
}






