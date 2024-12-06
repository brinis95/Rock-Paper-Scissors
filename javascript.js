console.log("Hello, World");

const GetComupterChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = Math.random();

  if (computerChoice <= 0.33) {
    return choices[0];
  } else if (computerChoice <= 0.66) {
    return choices[1];
  } else {
    return choices[2];
  }
};

const HumanChoice = () => {
  const choice = prompt("Take your pick").toLowerCase();
  return choice;
};

let humanScore = 0;
let ComputerScore = 0;

const playRound = (playerChoice, ComputerChoice) => {
  console.log(playerChoice);
  console.log(ComputerChoice);
  if (playerChoice == ComputerChoice) {
    console.log("Result Is a Draw");
  } else if ((playerChoice == "rock") & (ComputerChoice == "scissors")) {
    humanScore++;
    console.log("You Win");
  } else if ((playerChoice == "paper") & (ComputerChoice == "scissors")) {
    ComputerScore++;
    console.log("Computer Wins");
  } else if ((playerChoice == "scissors") & (ComputerChoice == "rock")) {
    ComputerScore++;
    console.log("Computer Wins");
  } else if ((playerChoice == "paper") & (ComputerChoice == "rock")) {
    humanScore++;
    console.log("You Win");
  } else if ((playerChoice == "rock") & (ComputerChoice == "paper")) {
    ComputerScore++;
    console.log("Computer Wins");
  } else if ((playerChoice == "scissors") & (ComputerChoice == "paper")) {
    humanScore++;
    console.log("You Win");
  }

  console.log(humanScore);
  console.log(ComputerScore);
};

const playGame = () => {
  for (i = 1; i < 6; i++) {
    const HumanSelection = HumanChoice();
    const ComputerSelection = GetComupterChoice();
    playRound(HumanSelection, ComputerSelection);
  }
  if (humanScore > ComputerScore) {
    console.log("You Won the Game");
  } else if (humanScore < ComputerScore) {
    console.log("Computer Wins the Game");
  } else if (humanScore == ComputerScore) {
    console.log("Its a Draw");
  }
};
playGame();
