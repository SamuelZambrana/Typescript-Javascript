// Esta seria mi edad actual humana
let myAge = 29;
// Esta sera la edad perruna que ira cambiando
let earlyYears = 2;
earlyYears *= 10.5;
myAge -= 2;
// Creamos una nueva variable y la igualamos al calor de myAge
let laterYears = myAge;
// Calculamos la cantidad de edad de un perro posterior en sus años multiplicando por 4
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
// Sumamos la variable earlyYearsy laterYears y la almacenamos en una variable
let myAgeInDogYears = earlyYears + laterYears
// Almacenamos mi nombre en una variable y usamos este metodo para devolver el string en minuscula
let myName = 'Samuel';
// Ahora mostramos todo nuestro programa con un string interporaleando cadenas
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in doy years.`);
