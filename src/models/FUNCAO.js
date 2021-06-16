var Sequelize = require('sequelize');
var sequelize = require('./database');

const FUNCAO = sequelize.define('FUNCAO', {
    id_funcao: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nome_funcao:{
        type: Sequelize.STRING
    }  
},
{
    timestamps: false,
});

module.exports = FUNCAO