var Sequelize = require('sequelize');
var sequelize = require('./database');
var UTILIZADOR = require('./UTILIZADOR');

const REGISTO_EMOCAO = sequelize.define('REGISTO_EMOCAO', {
    id_registo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    data:{
        type: Sequelize.DATE
    },
    felicidade:{
        type: Sequelize.INTEGER
    },
    otimismo:{
        type: Sequelize.INTEGER
    },
    motivacao:{
        type: Sequelize.INTEGER
    },    
    determinacao:{
        type: Sequelize.INTEGER
    },
    empatia:{
        type: Sequelize.INTEGER
    },
    capacibilidade:{
        type: Sequelize.INTEGER
    },
    stress:{
        type: Sequelize.INTEGER
    },
    cansaco:{
        type: Sequelize.INTEGER
    },
    ansiedade:{
        type: Sequelize.INTEGER
    },
    situacao_incomoda:{
        type: Sequelize.STRING
    },
    situacao_injusta:{
        type: Sequelize.STRING
    },
    situacao_inferioridade:{
        type: Sequelize.STRING
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

module.exports = REGISTO_EMOCAO 