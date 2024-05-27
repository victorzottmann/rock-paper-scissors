const rockBtn = document.querySelector(".btn-rock");
const paperBtn = document.querySelector(".btn-paper");
const scissorsBtn = document.querySelector(".btn-scissors");
const playerSelection = document.querySelector(".player-selection");
const computerSelection = document.querySelector(".computer-selection");
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const roundNumber = document.querySelector(".round-number");

const rockIconClassName = "fa-solid fa-hand-fist icon-result";
const paperIconClassName = "fa-solid fa-hand icon-result";
const scissorsIconClassName = "fa-solid fa-hand-scissors icon-result";

let playerScore = 0;
let computerScore = 0;
let round = 0;

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
  const icons = [
    {
      name: "rock",
      className: rockIconClassName,
    },
    {
      name: "paper",
      className: paperIconClassName,
    },
    {
      name: "scissors",
      className: scissorsIconClassName,
    },
  ];

  let randomIcons = [];

  while (icons.length > 0) {
    const randomIndex = Math.floor(Math.random() * icons.length);
    randomIcons.push(icons.splice(randomIndex, 1)[0]);
  }

  randomIcons.forEach((icon, index) => {
    setTimeout(() => {
      const iconElement = document.createElement("i");
      iconElement.setAttribute("class", icon.className);
      iconElement.style.fontSize = "2.2rem";
      computerSelection.innerHTML = "";
      computerSelection.appendChild(iconElement);
    }, index * 300);
  });

  return new Promise(resolve => {
    setTimeout(() => {
      const chosenIcon = document.createElement("i");
      const chosenIconData = randomIcons[Math.floor(Math.random() * randomIcons.length)];
      chosenIcon.setAttribute("class", chosenIconData.className);
      chosenIcon.setAttribute("name", chosenIconData.name);
      computerSelection.innerHTML = "";
      computerSelection.appendChild(chosenIcon);

      resolve(chosenIconData.name);
    }, 1000);
  });
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

function updateScore(outcome) {
  if (outcome == "human wins") {
    playerScore++;
    playerScoreText.textContent = playerScore;
  } else if (outcome == "computer wins") {
    computerScore++;
    computerScoreText.textContent = computerScore;
  }
}

async function handleClick(option) {
  round++;
  if (round <= 5) {
    roundNumber.textContent = round;
  }

  const humanChoice = getHumanChoice(option);
  const computerChoice = await getComputerChoice();
  const result = playRound(humanChoice, computerChoice);
  updateScore(result);

  if (round == 5) {
    console.log("Game Over");
    [rockBtn, paperBtn, scissorsBtn].forEach(btn => {
      btn.disabled = true;
      btn.style.border = "none";
    });
  }
}

function playGame() {
  rockBtn.addEventListener("click", () => handleClick("rock"));
  paperBtn.addEventListener("click", () => handleClick("paper"));
  scissorsBtn.addEventListener("click", () => handleClick("scissors"));
}

playGame();
