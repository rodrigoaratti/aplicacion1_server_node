const express = require('express');
const hbs = require('hbs');

require('./hbs/helpers');

const app = express()

const puerto = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

/*app.get('/', (req, res) => {
    res.send('Hola Mundo!! ');
})*/
hbs.registerPartials(__dirname + '/views/parciales')

app.set('view engine', 'hbs');
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Rodrigo'

    });
});
app.get('/pagina2', (req, res) => {
    res.render('pagina2', {
        nombre: 'Rodrigo'

    });

})

app.get('/JSON', (req, res) => {
    let salida = {
        nombre: 'Rodrigo',
        apellido: 'Aratti',
        cedula: '29361257'
    }
    res.send(salida);
})

app.listen(puerto, () => {
    console.log(`Escuchando en el puerto ${puerto}`)
})