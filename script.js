const rockBtn = document.querySelector(".btn-rock");
const paperBtn = document.querySelector(".btn-paper");
const scissorsBtn = document.querySelector(".btn-scissors");
const playerSelection = document.querySelector(".player-selection");
const computerSelection = document.querySelector(".computer-selection");
const rockIconClassName = "fa-solid fa-hand-fist";
const paperIconClassName = "fa-solid fa-hand";
const scissorsIconClassName = "fa-solid fa-hand-scissors";

function insertIcon(selection, className) {
  const childExists = selection.hasChildNodes();
  
  if (childExists) {
    selection.removeChild(selection.firstChild);
  }
  
  const icon = document.createElement("i");
  icon.setAttribute("class", className);
  selection.appendChild(icon);
}

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);

  switch (number) {
    case 0:
      insertIcon(computerSelection, rockIconClassName);
      return "rock";
    case 1:
      insertIcon(computerSelection, paperIconClassName);
      return "paper";
    case 2:
      insertIcon(computerSelection, scissorsIconClassName);
      return "scissors";
  }
}

function getHumanChoice(option) {
  switch (option) {
    case "rock":
      insertIcon(playerSelection, rockIconClassName);
      return "rock";
    case "paper":
      insertIcon(playerSelection, paperIconClassName);
      return "paper";
    case "scissors":
      insertIcon(playerSelection, scissorsIconClassName);
      return "scissors";
  }
}

rockBtn.addEventListener("click", () => {
  getHumanChoice("rock");
  setTimeout(getComputerChoice, 500);
});

paperBtn.addEventListener("click", () => {
  getHumanChoice("paper");
  setTimeout(getComputerChoice, 500);
});

scissorsBtn.addEventListener("click", () => {
  getHumanChoice("scissors");
  setTimeout(getComputerChoice, 500);
});

function playRound(humanChoice, computerChoice) {
  const outcomes = {
    rock: {
      rock: "draw",
      paper: "computer wins",
      scissors: "human wins",
    },
    paper: {
      rock: "human wins",
      paper: "draw",
      scissors: "computer wins",
    },
    scissors: {
      rock: "computer wins",
      paper: "human wins",
      scissors: "draw",
    },
  };

  return outcomes[humanChoice][computerChoice];
}

function playGame() {}