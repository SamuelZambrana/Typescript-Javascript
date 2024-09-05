"use strict";

console.log('Empiezo');

function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000);
}

// bucle asincrono en serie

// llamar a una funcion con array en serie y al finalizar llamar al callback de finalizacion
function serie(lista, func, callbackFin) {
    if (lista.length ==0) {
        callbackFin();
        return;
    }
    func(lista.shift(), function() {
        serie(lista, func, callbackFin);
    })
}

let lista = [1, 2, 'tres', 4, 5];

serie(lista, escribeTras2Segundos, function() {
    console.log('He terminado');
});
