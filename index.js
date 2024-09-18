"use strict"

let randomNumber = Math.floor(Math.random()*3);

document.addEventListener("DOMContentLoaded", beginGame);

function beginGame(){


 document.querySelector(".rock").addEventListener("click", function(){
 makeMove(0)
});

document.querySelector(".paper").addEventListener("click", function(){
  makeMove(1)   

});

document.querySelector(".scissors").addEventListener("click", function(){
    makeMove(2)
});
}


function makeMove(move){
    document.querySelector("#draw").classList.add("hidden");
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");

    if(move == 0){
        document.querySelector("#player1").classList="";
        document.querySelector("#player1").classList.add("player")
        document.querySelector("#player1").classList.add("rock")
    }
    else if(move == 1){
        document.querySelector("#player1").classList="";
        document.querySelector("#player1").classList.add("player");
        document.querySelector("#player1").classList.add("paper");
    }
    else{
        document.querySelector("#player1").classList="";
        document.querySelector("#player1").classList.add("player");
        document.querySelector("#player1").classList.add("scissors");
    }
    const computerMove= player2();

    checkScore(move, computerMove);
}

function player2(){
    document.querySelector("#player2").classList="";
    const randomNumber = Math.floor(Math.random()*3);

    if(randomNumber == 0){
        document.querySelector("#player2").classList.add("player");
        document.querySelector("#player2").classList.add("rock")
        }
    else if (randomNumber == 1){
        document.querySelector("#player2").classList.add("player");
        document.querySelector("#player2").classList.add("paper")
    }

    else{
        document.querySelector("#player2").classList.add("player");
        document.querySelector("#player2").classList.add("scissors")
    }

    return randomNumber;
 
    }

function checkScore(move, computerMove){
    console.log("dit træk er :" + move);
    console.log(computerMove)
    if(computerMove == move ){
        document.querySelector("#draw").classList.remove("hidden");

    }

    else if(move === 1 && computerMove === 0){
        document.querySelector("#win").classList.remove("hidden");

    }
     else if(move === 2 && computerMove === 1){
        document.querySelector("#win").classList.remove("hidden");
    }
      
    else {
        document.querySelector("#lose").classList.remove("hidden");
    }

}



// "use strict";

// document.querySelector(".rock").addEventListener("click", makeRock)
// document.querySelector(".scissors").addEventListener("click", makeScissor)
// document.querySelector(".paper").addEventListener("click", makePaper)

// let randomNumber = Math.floor(Math.random()*3);
// let moveNumber 


// function makeRock(){
    
//     document.querySelector("#player1").classList="";
//     document.querySelector("#player1").classList.add("player")
//     document.querySelector("#player1").classList.add("rock")
//     let  moveNumber= 0
 

//     player2();


// }

// function makeScissor(){
//     document.querySelector("#player1").classList="";
//     document.querySelector("#player1").classList.add("player");
//     document.querySelector("#player1").classList.add("scissors");
//     let  moveNumber= 1

//       player2();


// }

// function makePaper(){
//     document.querySelector("#player1").classList="";
//     document.querySelector("#player1").classList.add("player");
//     document.querySelector("#player1").classList.add("paper");
//         let  moveNumber= 2

//     player2();
    
  


// }

// function player2(){
//     document.querySelector("#player2").classList="";
//     let randomNumber = Math.floor(Math.random()*3);
//     console.log(randomNumber)

//     if(randomNumber == 0){
//         document.querySelector("#player2").classList.add("player");
//         document.querySelector("#player2").classList.add("rock")
//         }
//     else if (randomNumber == 1){
//         document.querySelector("#player2").classList.add("player");
//         document.querySelector("#player2").classList.add("paper")
//     }

//     else{
//         document.querySelector("#player2").classList.add("player");
//         document.querySelector("#player2").classList.add("scissors")
//     }
//     checkScore();
// }

// function checkScore(choice){
//     if(randomNumber == moveNumber ){
//         document.querySelector("#draw").classList.remove("hidden");

//     }
//       if(randomNumber == moveNumber ){
//         document.querySelector("#draw").classList.remove("hidden");

        
//     }
//        if(randomNumber == moveNumber ){
//         document.querySelector("#draw").classList.remove("hidden");

        
//     }
//     else {

//     }
// }
