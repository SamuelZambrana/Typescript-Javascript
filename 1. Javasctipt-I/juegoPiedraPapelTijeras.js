// userInput = userInput.toLowerCase()
const getUserChoice = userInput => {
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  return userInput;
  } else {
  console.log('Error: Por favor, ingrese una opción válida: "piedra", "papel" o "tijeras".');
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'Se ha empatado'
  } if (userChoice === 'rock') {
    computerChoice = 'scissors'
    return 'El usuario gano'
  } if (userChoice === 'paper') {
    computerChoice = 'rock'
    return 'El usuario gano'
  } if (userChoice === 'scissors') {
    computerChoice = 'paper'
    return 'El usuario gano'
  }
}

function playGame() {
  userChoice = userChoice('rock', 'paper', 'scissors');
  console.log(userChoice);
  computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
}

console.log(getUserChoice('rock'))
console.log(getComputerChoice())
console.log(determineWinner())
playGame()