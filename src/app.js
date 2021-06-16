const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//configurações
app.set('port', process.env.port || 3000);
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado na porta: ' + app.get('port'));
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
}); 


// importação de rotas [1]
const route = require('./routers/route.js')

//Rotas do route
app.use('/emotion', route)

//Rotas
app.use('/teste', (req, res) => {
    res.send("Rota TESTE.");
});
