const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
  return number < 250
});
console.log(smallNumbers);

/*
Almacenamos en una constante el recorrido de filter sobre la array smallNumbers 
y le decimos que nos devuelva en una array nueva los numeros que sean
menores que 250.
*/

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})
console.log(longFavoriteWords);

/*
Almacenamos en una constante el recorrido de filter sobre la array favoriteWords
y le decimos que nos devuelva en una array nueva los elementos que sean mayor a 7 de longuitud.
*/
