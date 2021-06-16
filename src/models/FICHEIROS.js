var Sequelize = require('sequelize');
var sequelize = require('./database');
var SITUACOES_SECCAO = require('./SITUACOES_SECCAO');

const FICHEIROS = sequelize.define('FICHEIROS', {
    id_ficheiro: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    caminho:{
        type: Sequelize.STRING
    },
    id_situacao: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
            model: SITUACOES_SECCAO,
            key: 'id_situacao'
        }
    }     
},
{
    timestamps: false,
});

module.exports = FICHEIROS