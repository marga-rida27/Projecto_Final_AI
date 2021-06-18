const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const middleware = require('./middleware');
const jwt = require('jsonwebtoken')
const config = require('./config')

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
const route_l = require('./routers/route_LOGIN.js')


//Rotas do route

app.get('/token', (req, res)=>{
    const payload ={
        nome_funcao: ["admin", "chefe", "utilizador"]
    }

    const token = jwt.sign(payload, config.jwtSecret)
    res.send(token);
})

app.use('/emotion', middleware("admin"), route)
app.use('/chefe', middleware("chefe"), route)
app.use('/utilizador', middleware("utilizador"), route)
app.use('/login', route_l);

//Rotas
app.use('/teste', (req, res) => {
    res.send("Rota TESTE.");
});
