let compshow = document.querySelector("#compshow");
let playershow = document.querySelector("#playershow");
let moveleft = document.querySelector("#moveleft");
let choices = document.querySelectorAll(".choice");
let compscore = document.querySelector(".compscore");
let userscore = document.querySelector(".userscore");
let msg = document.querySelector(".msg");
let winmsgdiv = document.querySelector(".winmsgdiv");
let winmsg1 = document.querySelector(".winmsg1");
let winmsg2 = document.querySelector(".winmsg2");

let move = 10;
let users = 0;
let compsc = 0;

choices.forEach((choice) => {
    choice.addEventListener("click", ()  => {
        const userchoice = choice.getAttribute("id");
        if (userchoice === "stone"){
            playershow.src = "rock.png";
        }
        else if (userchoice === "paper"){
            playershow.src = "paper.png";
        }
        else if (userchoice === "scissors"){
            playershow.src = "scissors.png";
        }
        move--;
        moveleft.innerHTML = move;
        Playgame (userchoice);
        
    })
});

const Playgame = (userchoice) => {
   let compchoice = gencompchoice();
    if (compchoice === "stone"){
        compshow.src ="rock.png";
    }
    else  if (compchoice === "paper"){
        compshow.src ="paper.png";
    }
    else  if (compchoice === "scissors"){
        compshow.src ="scissors.png";
    }
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

const showWinner = (userchoice,userwin,compchoice) => {
    if(userwin){
        msg.innerText="You Win";
        users++;
        userscore.innerHTML=users;

    }
    else {
        msg.innerText="You Lose";
        compsc++;
        compscore.innerHTML = compsc;
    }
    checkwinner(compsc,users);
 }; 

const gameDraw = () => {
    msg.innerHTML="Draw";
    checkwinner(compsc,users);
}

const gencompchoice = () => {
    let options = ["stone","paper","scissors"];
    let random = Math.floor(Math.random()*3);
    return options[random];
};

const checkwinner = (compscore,userscore) => {
    console.log("checkked")
    if (move == 0){
        if (compscore>userscore){
            console.log("compwin");
            winmsgdiv.classList.remove("hide");
            winmsg1.innerHTML = "You Lose";
            winmsg2.innerText = "Better Luck Next Time";
            
            
        }
        else if (userscore>compscore){
            console.log("userwin");
            winmsgdiv.classList.remove("hide");
            winmsg1.innerHTML = "Congratulation";
            winmsg2.innerHTML = "!!You Win!!";
            
            
        }
        else if (userscore === compscore){
            console.log("draw");
            winmsgdiv.classList.remove("hide");
            winmsg1.innerHTML = "!!Draw!!";
            winmsg2.innerHTML = "Game was Draw";
            
         
        }
    }
};
const newGame = () => {
    console.log("new game")
    move = 10;
    users = 0;
    compsc =0;
    userscore.innerHTML = users;
    compscore.innerText = compsc;
    moveleft.innerText = move;
    winmsgdiv.classList.add("hide");
}