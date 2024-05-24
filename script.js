const rockBtn = document.querySelector(".btn-rock");
const paperBtn = document.querySelector(".btn-paper");
const scissorsBtn = document.querySelector(".btn-scissors");

function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice(option) {
  switch (option) {
    case "rock":
      return "rock";
    case "paper":
      return "paper";
    case "scissors":
      return "scissors";
  }
}

rockBtn.addEventListener("click", () => getHumanChoice("rock"));
paperBtn.addEventListener("click", () => getHumanChoice("paper"));
scissorsBtn.addEventListener("click", () => getHumanChoice("scissors"));

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