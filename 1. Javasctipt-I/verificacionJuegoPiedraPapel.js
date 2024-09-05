// ¡Hola! Gracias por compartir tu código. Parece que hay algunos errores en el código que compartiste. Aquí está el código corregido:

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
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
    if (computerChoice === 'paper') {
      return 'La computadora gana';
    } else {
      return 'El usuario gana';
    }
  } if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'La computadora gana';
    } else {
      return 'El usuario gana';
    }
  } if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'La computadora gana';
    } else {
      return 'El usuario gana';
    }
  }
}

function playGame() {
  const userChoice = getUserChoice('rock');
  console.log(userChoice);
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
}

playGame();

/*En la función `getUserChoice`, he agregado una línea para convertir la entrada del usuario a minúsculas. En la función `determineWinner`, he corregido la lógica para que el resultado sea correcto. Además, he eliminado las líneas innecesarias de código.

Espero que esto te ayude. ¡Que tengas un buen día!

Origen: Conversación con Bing, 27/12/2023
(1) github.com. https://github.com/lizhstr/Rock_Paper_Scissors/tree/c4010dcf978301f6989946438846a8db717ae43f/script.js.
(2) github.com. https://github.com/qoowka/Rock-Paper-or-Scissors/tree/3d44ada6c5566fd55e12b2a166a2d77ef3cd1e36/Rock%2C%20Paper%2C%20or%20Scissors.js.
(3) github.com. https://github.com/Dragontalker/BootCamp_Activities/tree/60505e86af78e5edaa3c55a7ff6cad2d14e00065/Day_006%2FCodecademyProject_RockPaperScissors%2Fmain.js.
(4) github.com. https://github.com/sahilcodes/codecademy/tree/5043fbe44cde56d757251987cb67f58f165201a9/rockPaperScissors.js.
(5) github.com. https://github.com/sdelorme/deliberate_practice_js/tree/ca4737567d551a459f4c623f9e8a104b603184a3/rps.js.
(6) github.com. https://github.com/RenukaMano/rockpaperscissors/tree/569588055df71d962531055086d0e91534c0dc6d/index.js.
*/