// una funcion basica

function funcionBasica () {
    console.log('funcion basica se ejecuto');
}
funcionBasica();

// funcion como declaracion, con agrumentos y retorno

function sum(a, b) {
    return a + b;
}
console.log(sum(10, 15));

// funcion como expresion

let multiplicar = function (a, b) {
    return a * b;
};
console.log(multiplicar(10, 15));

let lang = 'hola';

function accesoContexto() {
    console.log('en el contexto superior:', lang);
}

accesoContexto();

// metodo de un objeto

let agente = {
    nombre: 'Samuel',
    saluda: function() {
        console.log('Hola, soy el agente' + this.nombre);
    }
};

agente.saluda();

// constructor de objetos

function Fruta(nombre) {
    this.getNombre = function () {
        return nombre;
    };
    this.setNombre = function (valor) {
        nombre = valor;
    };
}

//  crear objeto fruta

let limon = new Fruta('Citrus limon');

console.log(limon);

console.log(limon.getNombre());

limon.setNombre('Manzana');

console.log(limon.getNombre());



