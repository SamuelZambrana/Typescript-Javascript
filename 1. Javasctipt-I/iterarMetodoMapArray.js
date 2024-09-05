const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage);
console.log(secretMessage.join(''));

/* 
Almacenamos en una constante el recorrido de map sobre la array animals y le decimos que nos guarde la primera palabra de cada elemento.
Despues lo imprimimo sin comillas y con el metodo .join
*/

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => number / 100);
console.log(smallNumbers);

/* 
Almacenamos en una constante el recorrido de map sobre la array smallNumbers 
y le decimos que divida cada numero que va reccorriendo entre 100 y nos lo guarde en la constante.
*/
