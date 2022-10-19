let boxes = document.querySelectorAll(".box");
let player =[1, 2, 1, 2, 1, 2, 1, 2, 1];
let a = 0;
let result = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
let whichPlayer = document.querySelector(".whichplayer");
let countdown = document.querySelector(".roundleft");
let nbCountDown1 = 5;
let nbCountDown2 = 4;
countdown.innerHTML ="5 coup(s) restant(s)";
let tryAgain = document.querySelector(".tryagain");
let gameBox = document.querySelector(".game");
let whoWon = document.querySelector(".whowon");
let victoire = false;
let victoire1 = false;
let victoire2 = false;


let local = JSON.parse(localStorage.getItem("getParameters"));
let leftOf = document.querySelector(".leftof");
leftOf.innerHTML = localStorage.numberGamesLeft + "/" + local.numberGames;

whoWon.style.display = "none";


function oneWin() {
    setTimeout(function() {whoWon.style.display = "flex";}, 500 );
            setTimeout(function() {whoWon.innerHTML="Joueur 1 gagne !"}, 500 );
            setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
            setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
            setTimeout(function() {countdown.style.display = "none"}, 500 ); 
            localStorage.setItem("numberGamesLeft", JSON.parse(localStorage.numberGamesLeft) - 1);
            localStorage.setItem("winPlayer1", (JSON.parse(localStorage.winPlayer1) + 1))
            if (victoire === true) {
                for (let c = 0; c < boxes.length; c++) {
                    boxes[c].disabled = true;
                }
            }
            if (JSON.parse(localStorage.numberGamesLeft) === 0 ) {
                setTimeout(function () {window.location.replace("result.html"); }, 3000);
                
            }else{
              setTimeout(function () { location.reload()}, 3000);  
            }
}
function twoWin() {
    setTimeout(function() {whoWon.style.display = "flex";}, 500 );
            setTimeout(function() {whoWon.innerHTML="Joueur 2 gagne !"}, 500 );
            setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
            setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
            setTimeout(function() {countdown.style.display = "none"}, 500 ); 
            localStorage.setItem("numberGamesLeft", JSON.parse(localStorage.numberGamesLeft) - 1);
            localStorage.setItem("winPlayer2", (JSON.parse(localStorage.winPlayer2) + 1))
            if (JSON.parse(localStorage.numberGamesLeft) === 0 ) {
                for (let c = 0; c < boxes.length; c++) {
                    boxes[c].disabled = true;
                }
                setTimeout(function () {window.location.replace("result.html"); }, 3000);
                
            }else{
              setTimeout(function () { location.reload()}, 3000);  
            }
}

            
    for (let i = 0; i < boxes.length; i++) {
    //Quand on clique sur les boutons une croix se met pour J1 et un rond pour j2
    boxes[i].addEventListener("click", function boxBoxes(){
        if (player[a] === 1 && boxes[i].innerHTML === ""){
            boxes[i].innerText = "x";
            whichPlayer.innerHTML = "A toi joueur 2 !"
            nbCountDown1 = nbCountDown1 - 1;
            countdown.innerHTML = nbCountDown2 + " coup(s) restant(s)";
            console.log(i)
            result.splice(i, 1,"1")
            a++;
        }
        else if (player[a] === 2 && boxes[i].innerHTML === ""){
            boxes[i].innerText = "o";
            whichPlayer.innerHTML = "A toi joueur 1 !"
            nbCountDown2 = nbCountDown2 - 1;
            countdown.innerHTML = nbCountDown1 + " coup(s) restant(s)";
            result.splice(i, 1,"2");
            a++;
            
            };
            
      
                   
//Joueur gagne quand
if((result[0] === ("1") && result[1] === ("1") && result[2] === ("1"))||(result[0] === ( "2") && result[1] === ( "2") && result[2] === ("2")) ){
    victoire = true;

    boxes[0].style.background = "#C35D94";
    boxes[1].style.background = "#C35D94";
    boxes[2].style.background = "#C35D94";
        if(result[0] === "1"){
            oneWin();
        }
        else{
            twoWin()
        }
}

else if((result[3] === ("1") && result[4] === ("1") && result[5] === ("1"))||(result[3] === ("2") && result[4] === ("2") && result[5] === ("2"))){
    victoire = true;
    boxes[3].style.background = "#C35D94";
    boxes[4].style.background = "#C35D94";
    boxes[5].style.background = "#C35D94";
    if(result[3] === "1"){
        oneWin();
    }
    else{
        twoWin()
    }
}
else if((result[6] === ("1") && result[7] === ("1") && result[8] === ("1"))||(result[6] === ("2") && result[7] === ("2") && result[8] === ("2"))){
    victoire = true;
    boxes[6].style.background = "#C35D94";
    boxes[7].style.background = "#C35D94";
    boxes[8].style.background = "#C35D94";
    if(result[6] === "1"){
        oneWin();
    }
    else{
        twoWin()
    }

}
else if((result[0] === ("1") && result[3] === ("1") && result[6] === ("1"))||(result[0] === ("2") && result[3] === ("2") && result[6] === ("2"))){
    victoire = true;
    boxes[0].style.background = "#C35D94";
    boxes[3].style.background = "#C35D94";
    boxes[6].style.background = "#C35D94";
    if(result[0] === "1"){
        oneWin();
    }
    else{
        twoWin()
    }
}
else if((result[1] === ("1") && result[4] === ("1") && result[7] === ("1"))||(result[1] === ( "2") && result[4] === ("2") && result[7] === ("2"))){
    victoire = true;
    boxes[1].style.background = "#C35D94";
    boxes[4].style.background = "#C35D94";
    boxes[7].style.background = "#C35D94";
    if(result[1] === "1"){
        oneWin();
    }
    else{
        twoWin()
    }
}
else if((result[2] === ("1") && result[5] === ("1") && result[8] === ("1"))||(result[2] === ("2") && result[5] === ("2") && result[8] === ("2")) ){
    victoire = true;
    boxes[2].style.background = "#C35D94";
    boxes[5].style.background = "#C35D94";
    boxes[8].style.background = "#C35D94";
    if(result[2] === "1"){
        oneWin();
    }
    else{
        twoWin()
    }
}
else if((result[0] === ("1") && result[4] === ("1")&& result[8] === ("1"))||(result[0] === ("2") && result[4] === ( "2")&& result[8] === ( "2")) ){
    victoire = true;
    boxes[0].style.background = "#C35D94";
    boxes[4].style.background = "#C35D94";
    boxes[8].style.background = "#C35D94";
    if(result[0] === "1"){
        oneWin();
    }
    else{
        twoWin()
    }
}
else if((result[2] === ("1") && result[4] === ("1") && result[6] === ("1")) || (result[2] === ("2") && result[4] === ("2") && result[6] === ("2"))){
    victoire = true;
    boxes[2].style.background = "#C35D94";
    boxes[4].style.background = "#C35D94";
    boxes[6].style.background = "#C35D94";
    if(result[2] === "1"){
        oneWin();
    }
    else{
        twoWin()
    }
    
}
else if (result[0] != "0" &&result[1] != "0" &&result[2] != "0" &&result[3] != "0" &&result[4] != "0" &&result[5] != "0" &&result[6] != "0" &&result[7] != "0" &&result[8] != "0"  ) {
    setTimeout(function() {whoWon.style.display = "flex";}, 500 );
            setTimeout(function() {whoWon.innerHTML="Match Nul !"}, 500 );
             setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
            setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
              setTimeout(function() {countdown.style.display = "none"}, 500 );
              localStorage.setItem("numberGamesLeft", JSON.parse(localStorage.numberGamesLeft) - 1);
              if (JSON.parse(localStorage.numberGamesLeft) === 0 ) {
                for (let c = 0; c < boxes.length; c++) {
                    boxes[c].disabled = true;
                }
                setTimeout(function () {window.location.replace("result.html"); }, 3000);
                
            }else{
              setTimeout(function () { location.reload()}, 3000);  
            }  
         } 
})
}

//revenir au menu principal
let back = document.querySelector(".back");

back.addEventListener("click", function() {
    localStorage.clear();
    window.location.replace("index.html");
})

