function processChoice(num) {
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

function getComputerChoice() {
  let num = Math.ceil(Math.random() * 3);
  return processChoice(num);
}

function getHumanChoice() {
  let num = parseInt(
    prompt(`Select one of the options:
    1. Rock
    2. Paper
    3. Scissors
  `));

  return processChoice(num);
}

console.log(getHumanChoice());
