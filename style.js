let boxes = document.querySelectorAll(".box");
let player = 1 | 2;
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

console.log(gameBox);

whoWon.style.display = "none";
player=1;
for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function(){
           if( player === 1 && boxes[i].innerHTML === "" && victoire === false){
          boxes[i].innerHTML = "x";  
          result[i] = "1";
          whichPlayer.innerHTML = "A toi joueur 2 !"
            nbCountDown1 = nbCountDown1 - 1;
            countdown.innerHTML = nbCountDown2 + " coup(s) restant(s)";
          player = 2
          if(nbCountDown1 >= 1){
            setTimeout(function () {boxes[i].click()}, 500);
          }
          
          
        }  
        else if(player === 2 && victoire === false){
            let numberRandom = Math.floor(Math.random() * 9);
             while (result[numberRandom] != "0"){
             numberRandom = Math.floor(Math.random() * 9);
            
              } 
              console.log(numberRandom);
              console.log(result);
              
            result[numberRandom] = "2";
            boxes[numberRandom].innerHTML = "o";
            
            whichPlayer.innerHTML = "A toi joueur 1 !"
            nbCountDown2 = nbCountDown2 - 1;
            countdown.innerHTML = nbCountDown1 + " coup(s) restant(s)";
           
            player = 1;
        }

        //Joueur gagne quand
if((result[0] === ("1"|| "2") && result[1] === ("1"|| "2") && result[2] === ("1"|| "2")) ){
    victoire = true;
    boxes[0].style.background = "#C35D94";
    boxes[1].style.background = "#C35D94";
    boxes[2].style.background = "#C35D94";
        if(result[0] === "1"){
            setTimeout(function() {whoWon.style.display = "flex";}, 500 );
            setTimeout(function() {whoWon.innerHTML="Joueur 1 gagne !"}, 500 );
            setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
            setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
            setTimeout(function() {countdown.style.display = "none"}, 500 );  
        }
        else{
            setTimeout(function() {whoWon.style.display = "flex";}, 500 );
            setTimeout(function() {whoWon.innerHTML="Joueur 2 gagne !"}, 500 );
            setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
            setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
            setTimeout(function() {countdown.style.display = "none"}, 500 ); 
        }
}
else if((result[3] === ("1"|| "2") && result[4] === ("1"|| "2") && result[5] === ("1"|| "2"))){
    victoire = true;
    boxes[3].style.background = "#C35D94";
    boxes[4].style.background = "#C35D94";
    boxes[5].style.background = "#C35D94";
    if(result[3] === "1"){
        setTimeout(function() {whoWon.style.display = "flex";}, 500 );
        setTimeout(function() {whoWon.innerHTML="Joueur 1 gagne !"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {countdown.style.display = "none"}, 500 );  
    }
    else{
        setTimeout(function() {whoWon.style.display = "flex";}, 500 );
        setTimeout(function() {whoWon.innerHTML="Joueur 2 gagne !"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {countdown.style.display = "none"}, 500 ); 
    }
}
else if((result[6] === ("1"|| "2") && result[7] === ("1"|| "2") && result[8] === ("1"|| "2"))){
    victoire = true;
    boxes[6].style.background = "#C35D94";
    boxes[7].style.background = "#C35D94";
    boxes[8].style.background = "#C35D94";
    if(result[6] === "1"){
        setTimeout(function() {whoWon.style.display = "flex";}, 500 );
        setTimeout(function() {whoWon.innerHTML="Joueur 1 gagne !"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {countdown.style.display = "none"}, 500 );  
    }
    else{
        setTimeout(function() {whoWon.style.display = "flex";}, 500 );
        setTimeout(function() {whoWon.innerHTML="Joueur 2 gagne !"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {countdown.style.display = "none"}, 500 ); 
    }

}
else if((result[0] === ("1"|| "2") && result[3] === ("1"|| "2") && result[6] === ("1"|| "2"))){
    victoire = true;
    boxes[0].style.background = "#C35D94";
    boxes[3].style.background = "#C35D94";
    boxes[6].style.background = "#C35D94";
    if(result[0] === "1"){
        setTimeout(function() {whoWon.style.display = "flex";}, 500 );
        setTimeout(function() {whoWon.innerHTML="Joueur 1 gagne !"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {countdown.style.display = "none"}, 500 );  
    }
    else{
        setTimeout(function() {whoWon.style.display = "flex";}, 500 );
        setTimeout(function() {whoWon.innerHTML="Joueur 2 gagne !"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {countdown.style.display = "none"}, 500 ); 
    }
}
else if((result[1] === ("1"|| "2") && result[4] === ("1"|| "2") && result[7] === ("1"|| "2"))){
    victoire = true;
    boxes[1].style.background = "#C35D94";
    boxes[4].style.background = "#C35D94";
    boxes[7].style.background = "#C35D94";
    if(result[1] === "1"){
        setTimeout(function() {whoWon.style.display = "flex";}, 500 );
        setTimeout(function() {whoWon.innerHTML="Joueur 1 gagne !"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {countdown.style.display = "none"}, 500 );  
    }
    else{
        setTimeout(function() {whoWon.style.display = "flex";}, 500 );
        setTimeout(function() {whoWon.innerHTML="Joueur 2 gagne !"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {countdown.style.display = "none"}, 500 ); 
    }
}
else if((result[2] === ("1"|| "2") && result[5] === ("1"|| "2") && result[8] === ("1"|| "2")) ){
    victoire = true;
    boxes[2].style.background = "#C35D94";
    boxes[5].style.background = "#C35D94";
    boxes[8].style.background = "#C35D94";
    if(result[2] === "1"){
        setTimeout(function() {whoWon.style.display = "flex";}, 500 );
        setTimeout(function() {whoWon.innerHTML="Joueur 1 gagne !"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {countdown.style.display = "none"}, 500 );  
    }
    else{
        setTimeout(function() {whoWon.style.display = "flex";}, 500 );
        setTimeout(function() {whoWon.innerHTML="Joueur 2 gagne !"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {countdown.style.display = "none"}, 500 ); 
    }
}
else if((result[0] === ("1"|| "2") && result[4] === ("1"|| "2")&& result[8] === ("1"|| "2")) ){
    victoire = true;
    boxes[0].style.background = "#C35D94";
    boxes[4].style.background = "#C35D94";
    boxes[8].style.background = "#C35D94";
    if(result[0] === "1"){
        setTimeout(function() {whoWon.style.display = "flex";}, 500 );
        setTimeout(function() {whoWon.innerHTML="Joueur 1 gagne !"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {countdown.style.display = "none"}, 500 );  
    }
    else{
        setTimeout(function() {whoWon.style.display = "flex";}, 500 );
        setTimeout(function() {whoWon.innerHTML="Joueur 2 gagne !"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {countdown.style.display = "none"}, 500 ); 
    }
}
else if((result[2] === ("1"|| "2") && result[4] === ("1"|| "2") && result[6] === ("1"|| "2"))){
    victoire = true;
    boxes[2].style.background = "#C35D94";
    boxes[4].style.background = "#C35D94";
    boxes[6].style.background = "#C35D94";
    if(result[2] === "1"){
        setTimeout(function() {whoWon.style.display = "flex";}, 500 );
        setTimeout(function() {whoWon.innerHTML="Joueur 1 gagne !"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {countdown.style.display = "none"}, 500 );  
    }
    else{
        setTimeout(function() {whoWon.style.display = "flex";}, 500 );
        setTimeout(function() {whoWon.innerHTML="Joueur 2 gagne !"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
        setTimeout(function() {countdown.style.display = "none"}, 500 ); 
    }
}
else if (result[0] != "0" &&result[1] != "0" &&result[2] != "0" &&result[3] != "0" &&result[4] != "0" &&result[5] != "0" &&result[6] != "0" &&result[7] != "0" &&result[8] != "0"  ) {
    setTimeout(function() {whoWon.style.display = "flex";}, 500 );
            setTimeout(function() {whoWon.innerHTML="Match Nul !"}, 500 );
             setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
            setTimeout(function() {whichPlayer.style.display = "none"}, 500 );
              setTimeout(function() {countdown.style.display = "none"}, 500 );  
         }

        }) 
         }




         let back = document.querySelector(".back");

         back.addEventListener("click", function() {
             localStorage.clear();
             window.location.replace("index.html");
         })











