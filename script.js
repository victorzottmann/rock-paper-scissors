const button = document.querySelector('button');
let humanScore = 0;
let computerScore = 0;
let round = 0;

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

  let option = prompt(`Round ${round}\n
  Enter one of the options:
    - Rock
    - Paper
    - Scissors
  `);

  if (option === null) {
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

  /**
   * The logic for this uses a nested object with key maps.
   * outcomes["rock"] maps to the first rock
   * outcomes["rock"]["rock"] maps to the nested rock value inside of rock.
   * 
   * Essentially, this is how it reads:
   * outcomes["rock"]["rock"]     -> draw
   * outcomes["rock"]["paper"]    -> computer wins
   * outcomes["rock"]["scissors"] -> human wins
   */
  const result = outcomes[humanChoice][computerChoice];
  return result;
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    round++;
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (humanSelection == null) {
      round = 0;
      break;
    }
    
    const result = playRound(humanSelection, computerSelection);

    if (result === "human wins") {
      humanScore++;
    } else if (result === "computer wins") {
      computerScore++;
    }
  }

  if (humanScore != null) {
    if (humanScore > computerScore) {
      console.log("You won!");
    } else if (humanScore < computerScore) {
      console.log("You lost!");
    } else {
      console.log("Draw!");
    }
  }

  console.log("Your score:", humanScore);
  console.log("Computer score:", computerScore);
}

button.addEventListener('click', playGame);
