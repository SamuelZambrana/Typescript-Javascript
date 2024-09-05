// Pronostico de hoy en grados kelvin
const kelvin = 293;
// los grados celsius se calculan restandole 273 a los grados kelvin
let celsius = kelvin - 273;
// Formula para convertir celsius en Newton
let newton = Math.floor(celsius * (33/100));
// Formula para calculr fahrenheit y redondeamos hacia abajo con el metodo floor
let fahrenheit = Math.floor(celsius *(9/5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${newton} degrees Newton.`)
