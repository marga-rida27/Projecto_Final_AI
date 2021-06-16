var Sequelize = require('sequelize');
var sequelize = require('./database');
var UTILIZADOR = require('./UTILIZADOR');
var IMAGENS = require('./IMAGENS');

const REGISTO_INTERACAO = sequelize.define('REGISTO_INTERACAO', {
    id_interacao: {
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
    },
    id_imagem: {
        type: Sequelize.INTEGER,
        references: {
            model: IMAGENS,
            key: 'id_imagem'
        }
    }    
},
{
    timestamps: false,
});

module.exports = REGISTO_INTERACAO