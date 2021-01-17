let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.getElementById("result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUserWord = "user".fontsize(3).sub()
const smallCompWord = "comp".fontsize(3).sub()
const play_div = document.getElementById("play");
const userDecision = document.getElementById("user-decision");
const compDecision = document.getElementById("comp-decision");

//generate random move
function getComputerChoice(){
  const choices = ["r","p", "s"];
  const randomNumber = (Math.floor(Math.random() *3));
  return choices[randomNumber];
}

function convertNames(letter){
  if (letter === "r") return "Rock";
  if (letter === "s") return "Scissors"
  return "Paper";
}

//show the user's move and the computer's move
const bothDecisions_div = document.querySelector(".decisions");
bothDecisions_div.classList.add("decisions-hide")

function show_decisions(userChoice, computerChoice){
  //remove display none
  bothDecisions_div.classList.remove("decisions-hide")
  //add styles to decisions
  bothDecisions_div.classList.add("decisions-show")

  if (userChoice === "r"){
    console.log(userChoice)
    userDecision.src="rock.png";
  }

  else if (userChoice === "p"){
    console.log(userChoice)
    userDecision.src="paper.png";
  }
  else{
    console.log(userChoice)
    userDecision.src="scissors.png";
  }

  if (computerChoice === "r"){
    console.log(computerChoice)
    compDecision.src="rock.png";
  }

  else if (computerChoice === "p"){
    console.log(computerChoice)
    compDecision.src="paper.png";
  }
  else{
    console.log(computerChoice)
    compDecision.src="scissors.png";
  }



}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertNames(userChoice)} ${smallUserWord}  beats ${convertNames(computerChoice)}${smallCompWord} . You win!`
  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add("green-glow")
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 1000)
  show_decisions(userChoice, computerChoice)
}
function lose(userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `${convertNames(userChoice)} ${smallUserWord} loses against  ${convertNames(computerChoice)} ${smallCompWord} . You lose!`
  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add("red-glow")
  setTimeout(() =>userChoice_div.classList.remove("red-glow"), 1000)
  show_decisions(userChoice, computerChoice)
}
function tie(userChoice, computerChoice){
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = `It's a tie`
  const userChoice_div = document.getElementById(userChoice);
  userChoice_div.classList.add("gray-glow")
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 1000)
  show_decisions(userChoice, computerChoice)
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice)
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice)
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, computerChoice)
      break;

  }
}

function main(){
  var play;
  play = false;
  play_div.addEventListener("click",function() {
    rock_div.addEventListener("click", () => game("r"));

    paper_div.addEventListener("click", () => game("p"));

    scissors_div.addEventListener("click", () => game("s"));

  });


}
main();
