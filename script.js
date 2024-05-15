function getComputerChoice() {
  let num = Math.ceil(Math.random() * 3);

  let choice = "";

  switch (num) {
    case 1:
      choice = "Rock";
      break;
    case 2:
      choice = "Paper";
      break;
    case 3:
      choice = "Scissors";
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

console.log(getHumanChoice());
