"use strict";

let async =  require('async');

console.log('Empiezo');

function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000);
}

// bucle asincrono en serie

// llamar a una funcion con array en serie y al finalizar llamar al callback de finalizacion

let lista = [1, 2, 'tres', 4, 5];

async.eachSeries(lista, escribeTras2Segundos, function() {
    console.log('He terminado');
});
