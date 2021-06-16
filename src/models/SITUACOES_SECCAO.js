var Sequelize = require('sequelize');
var sequelize = require('./database');
var UTILIZADOR = require('./UTILIZADOR');

const SITUACOES_SECCAO = sequelize.define('SITUACOES_SECCAO', {
    id_situacao: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    texto:{
        type: Sequelize.STRING
    },
    data:{
        type: Sequelize.DATE
    },
    id_utilizador: {
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

module.exports =  SITUACOES_SECCAO