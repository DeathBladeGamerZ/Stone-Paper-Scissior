let compshow = document.querySelector("#compshow");
let playershow = document.querySelector("#playershow");
let moveleft = document.querySelector("#moveleft");
let choices = document.querySelectorAll(".choice");
let compscore = document.querySelector(".compscore");
let userscore = document.querySelector(".userscore");
let msg = document.querySelector(".msg")

let move = 10;


const Playgame = (userchoice) => {
   let compchoice = gencompchoice();
   if (userchoice === compchoice) {
    gameDraw();
   }
   else {
    let userwin = true;
    if (userchoice === "stone"){
        userwin = compchoice === "paper"? false : true;
    }
    else if (userchoice === "paper"){
        userwin = compchoice === "stone" ? true : false ;
    }
    else if (userchoice === "scissors"){
        userwin = compchoice === "paper" ? true : false ;
    }
    showWinner(userchoice,userwin,compchoice);
   }
   
};

const gameDraw = () => {
    msg.innerHTML="Draw";
}
const showWinner = (userchoice,userwin,compchoice) => {
    if(userwin){
        msg.innerText="You Win";
    }
    else {
        msg.innerText="You Lose";
    }
};

const gencompchoice = () => {
    let options = ["stone","paper","scissors"];
    let random = Math.floor(Math.random()*3);
    return options[random];

};
choices.forEach((choice) => {
    choice.addEventListener("click", ()  => {
        const userchoice = choice.getAttribute("id");
        Playgame (userchoice);
    })
});