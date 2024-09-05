const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

/* 
Mostramos por consola con el metodo some los elementos con longuitud menor de 6 caracteres recorridos por el elemento word
*/

// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});

/*
Almacenamos en una constante el recorrido de word con el metodo filter para guardarte los elementos de mayor longuitud que 5
*/

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {return word.length > 5}));

/*
Mostramos por consola con el metodo every, recorremos con word y verificamos si hay elementos que sean menor a la longuitud de 5 y devolvemos true o false.
*/

