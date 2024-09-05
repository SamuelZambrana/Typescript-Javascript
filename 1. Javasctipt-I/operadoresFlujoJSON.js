let empleado = {
    nombre: 'Samuel',
    profesion: 'Agente',
    edad: 42,
    armas: ['pistola', 'rifle', 'kungfu']

};
console.log(empleado);

let serializado = JSON.stringify(empleado);
console.log(serializado);

//des-serializar el objeto

serializado = serializado + '}';

let leido;

try {
    leido = JSON.parse(serializado);
} catch (err) {
    console.log('No se puede leer "serializado')
}

if (typeof leido != 'undefined') {
    console.log('Hay algo leido');
} else {
    console.log('No hay nada leido');
}

for (let i = 0; i < empleado.armas.length; i++) {
    let arma = empleado.armas[i];
    console.log(empleado.nombre + ' tiene ' + arma);
}