var Sequelize = require('sequelize');
var sequelize = require('./database');
var UTILIZADOR = require('./UTILIZADOR');

const LOGIN = sequelize.define('LOGIN', {
    id_login: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nome_utilizador:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    },
    UTILIZADORIdUtilizador: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
            model: UTILIZADOR,
            key: 'id_utilizador'
        }
    }  
},
{
    timestamps: false,
});
LOGIN.belongsTo(UTILIZADOR)
module.exports = LOGIN