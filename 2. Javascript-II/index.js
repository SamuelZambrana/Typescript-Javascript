"use strict";

let fs = require('fs');
let path = require('path');

let versionModulo = function(moduleName, callBack) {
    let fichero = path.join('./node_modules', moduleName, 'package.json');
    fs.readFile(fichero, 'utf8', function(err, data) {
        if (err) {
            callBack(err);
            return;
        }

        // si no ha habido error, convertir contenido en objeto

        let packageJson = JSON.parse(data);

        if (!packageJson.version) {
            callBack('No se encuentra la etiqueta  "version" en ' + fichero);
            return;
        }

        //llamamos al callback de finalizacion
        callBack(null, packageJson.version);
    });

};

// uso de la funcion

let modulo = 'chance';

versionModulo(modulo, function(err, version) {
    if (err) {
        console.log('Hubo un error:', err);
        return;
    }
    console.log('La version del modulo ' + modulo + 'es:' + version);
});
