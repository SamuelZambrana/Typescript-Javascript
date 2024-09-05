let number = 1;
console.log(number);
console.log(typeof(number));
number = 'Hola';
console.log(typeof(number));

// Strings
console.log('Texto de prueba'.split(' '));

let textoLargo = [
    'linea1',
    'linea2'
].join('\n');

console.log(textoLargo);

let objeto = {
    numero: 1,
    texto: 'hola',
    sumaDos: function(v) {
        return v+2;
    }
};

console.log(objeto.numero);
console.log(objeto.texto);
console.log(objeto.sumaDos(5));
 
// Arrays

let array = [
    1,
    'hola',
    function(v) {return v+2},
    {valor: 'hola'}
];
console.log(array);
console.log(array[2]);
console.log(array[2](500));

// Hoisting

let x = 100;

function y() {
    if (y==20) {
        x = 30
    }
    return x;
}
console.log(y(20));