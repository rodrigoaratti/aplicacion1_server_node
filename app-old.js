const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Rodrigo',
        apellido: 'Aratti',
        cedula: '29361257'
    }
    res.write(JSON.stringify(salida));
    res.end();

}).listen(9090)