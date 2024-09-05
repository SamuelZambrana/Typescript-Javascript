const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
})
console.log(foundAnimal);

/*
Almacenamos en una constante el recorrido de findindex sobre la array animals
y le decimos que nos devuelva el indice del elemento 'elephant'
*/

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
})
console.log(startsWithS);

/*
Almacenamos en una constante el recorrido de findindex sobre la array animals
y le decimos que nos devuelva el indice si es true que un elemento empieze por el caracter 's'
*/