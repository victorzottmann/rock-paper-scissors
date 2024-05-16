let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let num = Math.ceil(Math.random() * 3);

  let choice = "";

  switch (num) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
  }

  return choice;
}

function getHumanChoice() {
  let choice;

  let option = prompt(`Enter one of the options:
    - Rock
    - Paper
    - Scissors
  `);

  if (option == null) {
    console.log("Invalid input. Please enter either Rock, Paper, or Scissors");
    return null;
  }

  option = option.toLowerCase();

  switch (option) {
    case "rock":
    case "paper":
    case "scissors":
      choice = option;
      break;
    default:
      console.log("Invalid input. Please enter either Rock, Paper, or Scissors");
  }

  return choice;
}

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

  const result = outcomes[humanChoice][computerChoice];

  if (result == "human wins") {
    humanScore++;
  } else if (result == "computer wins") {
    computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
