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

if(a < 8){
for (let i = 0; i < boxes.length; i++) {
    //Quand on clique sur les boutons une croix se met pour J1 et un rond pour j2
    boxes[i].addEventListener("click", function(){
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
            result.push(a);
            whichPlayer.innerHTML = "A toi joueur 1 !"
            nbCountDown2 = nbCountDown2 - 1;
            countdown.innerHTML = nbCountDown1 + " coup(s) restant(s)";
            result.splice(i, 1,"2");
            a++;
            
            };
            
//Joueur 1 gagne quand
            if(result[0] === "1" && result[1] === "1" && result[2] === "1"){
                boxes[0].style.background = "#C35D94";
                boxes[1].style.background = "#C35D94";
                boxes[2].style.background = "#C35D94";
            }
            else if(result[3] === "1" && result[4] === "1" && result[5] === "1"){
                boxes[3].style.background = "#C35D94";
                boxes[4].style.background = "#C35D94";
                boxes[5].style.background = "#C35D94";
            }
            else if(result[6] === "1" && result[7] === "1" && result[8] === "1"){
                boxes[6].style.background = "#C35D94";
                boxes[7].style.background = "#C35D94";
                boxes[8].style.background = "#C35D94";
            }
            else if(result[0] === "1" && result[3] === "1" && result[6] === "1"){
                boxes[0].style.background = "#C35D94";
                boxes[3].style.background = "#C35D94";
                boxes[6].style.background = "#C35D94";
            }
            else if(result[1] === "1" && result[4] === "1" && result[7] === "1"){
                boxes[1].style.background = "#C35D94";
                boxes[4].style.background = "#C35D94";
                boxes[7].style.background = "#C35D94";
            }
            else if(result[2] === "1" && result[5] === "1" && result[8] === "1"){
                boxes[2].style.background = "#C35D94";
                boxes[5].style.background = "#C35D94";
                boxes[8].style.background = "#C35D94";
            }
            else if(result[0] === "1" && result[4] === "1" && result[8] === "1"){
                boxes[0].style.background = "#C35D94";
                boxes[4].style.background = "#C35D94";
                boxes[8].style.background = "#C35D94";
            }
            else if(result[2] === "1" && result[4] === "1" && result[6] === "1"){
                boxes[2].style.background = "#C35D94";
                boxes[4].style.background = "#C35D94";
                boxes[6].style.background = "#C35D94";
            };

//Joueur 2 gagne quand
            if(result[0] === "2" && result[1] === "2" && result[2] === "2"){
                boxes[0].style.background = "#a3a2f1";
                boxes[1].style.background = "#a3a2f1";
                boxes[2].style.background = "#a3a2f1";
            }
            else if(result[3] === "2" && result[4] === "2" && result[5] === "2"){
                boxes[3].style.background = "#a3a2f1";
                boxes[4].style.background = "#a3a2f1";
                boxes[5].style.background = "#a3a2f1";
            }
            else if(result[6] === "2" && result[7] === "2" && result[8] === "2"){
                boxes[6].style.background = "#a3a2f1";
                boxes[7].style.background = "#a3a2f1";
                boxes[8].style.background = "#a3a2f1";
            }
            else if(result[0] === "2" && result[3] === "2" && result[6] === "2"){
                boxes[0].style.background = "#a3a2f1";
                boxes[3].style.background = "#a3a2f1";
                boxes[6].style.background = "#a3a2f1";
            }
            else if(result[1] === "2" && result[4] === "2" && result[7] === "2"){
                boxes[1].style.background = "#a3a2f1";
                boxes[4].style.background = "#a3a2f1";
                boxes[7].style.background = "#a3a2f1";
            }
            else if(result[2] === "2" && result[5] === "2" && result[8] === "2"){
                boxes[2].style.background = "#a3a2f1";
                boxes[5].style.background = "#a3a2f1";
                boxes[8].style.background = "#a3a2f1";
            }
            else if(result[0] === "2" && result[4] === "2" && result[8] === "2"){
                boxes[0].style.background = "#a3a2f1";
                boxes[4].style.background = "#a3a2f1";
                boxes[8].style.background = "#a3a2f1";
            }
            else if(result[2] === "2" && result[4] === "2" && result[6] === "2"){
                boxes[2].style.background = "#a3a2f1";
                boxes[4].style.background = "#a3a2f1";
                boxes[6].style.background = "#a3a2f1";
            }
        })}
      
}

tryAgain.addEventListener("click", () => {
    nbCountDown1 = 5;
    nbCountDown2 = 4;
    for (let i = 0; i < boxes.length; i++) {
        boxes[i] = 0;
        boxes[i].innerHTML = "";
        boxes[i].style.background = "";
        countdown.innerHTML ="5 coup(s) restant(s)";
        whichPlayer.innerHTML = "A toi joueur 1 !"
        result = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
    }
})

