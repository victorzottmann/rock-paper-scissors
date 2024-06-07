export const outcomes = {
  rock: {
    rock: {
      outcome: "draw",
      message: "It's a draw!",
    },
    paper: {
      outcome: "computer wins",
      message: "Paper beats rock!",
    },
    scissors: {
      outcome: "human wins",
      message: "Rock beats scissors!",
    },
  },
  paper: {
    rock: {
      outcome: "human wins",
      message: "Paper beats rock!",
    },
    paper: {
      outcome: "draw",
      message: "It's a draw!",
    },
    scissors: {
      outcome: "computer wins",
      message: "Scissors beat paper!",
    },
  },
  scissors: {
    rock: {
      outcome: "computer wins",
      message: "Rock beats scissors!",
    },
    paper: {
      outcome: "human wins",
      message: "Scissors beat paper!"
    },
    scissors: {
      outcome: "draw",
      message: "It's a draw!",
    },
  },
};
