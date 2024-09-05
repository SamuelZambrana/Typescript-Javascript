const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10)
console.log(newSum);

/*
Almacenamos en una constante el recorrido de reduce sobre el array newNumbers y le pasamos dos parametros accumulator y 
currentValue al metodo reduce para que te vaya diciendo el indice del recorrido y lo que ha acomulado.
Lo imprimimos por pantalla y devolvemos la suma de estos dos.
Devolvemos por pantalla la constante newSum añadiendole al contador el agrumento 10.
*/
