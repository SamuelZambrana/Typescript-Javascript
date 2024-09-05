"use strict";

console.log('Empiezo');

function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 5000);
}

// bucle asincrono en paralelo
let acabados = 0

for(let i= 0; i< 5; i++) {
    escribeTras2Segundos('texto' + i, function() {
        acabados++;
        if (acabados >= 5) {
            console.log('fin');
        }
    });
}
