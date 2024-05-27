const rockBtn = document.querySelector(".btn-rock");
const paperBtn = document.querySelector(".btn-paper");
const scissorsBtn = document.querySelector(".btn-scissors");
const playerSelection = document.querySelector(".player-selection");
const computerSelection = document.querySelector(".computer-selection");
const rockIconClassName = "fa-solid fa-hand-fist icon-result";
const paperIconClassName = "fa-solid fa-hand icon-result";
const scissorsIconClassName = "fa-solid fa-hand-scissors icon-result";

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
  const iconClasses = [
    rockIconClassName,
    paperIconClassName,
    scissorsIconClassName,
  ];

  let randomIcons = [];

  while (iconClasses.length > 0) {
    const randomIndex = Math.floor(Math.random() * iconClasses.length);
    randomIcons.push(iconClasses.splice(randomIndex, 1)[0]);
  }

  randomIcons.forEach((className, index) => {
    setTimeout(() => {
      const icon = document.createElement("i");
      icon.setAttribute("class", className);
      icon.style.fontSize = "2.2rem";
      computerSelection.innerHTML = "";
      computerSelection.appendChild(icon);
    }, index * 300);
  });

  setTimeout(() => {
    const chosenIcon = document.createElement("i");
    const chosenClassName = randomIcons[Math.floor(Math.random() * randomIcons.length)];
    chosenIcon.setAttribute("class", chosenClassName);
    computerSelection.innerHTML = "";
    computerSelection.appendChild(chosenIcon);
  }, 1000);
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