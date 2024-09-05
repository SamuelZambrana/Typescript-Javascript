var http = require('http');

var server = http.createServer(function(resquest, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Wake up, Neo...\n');
});

// arrancamos el servidor

server.listen(1337, '127.0.0.1');
console.log('Servidor arrancado en 127.0.0.1');
