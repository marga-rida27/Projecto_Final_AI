var Sequelize = require('sequelize');
var sequelize = require('./database');

const ESTADO_U = sequelize.define('ESTADO_U', {
    id_estado: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nome_estado:{
        type: Sequelize.STRING
    } 
}, 
{
    timestamps: false,
});

module.exports = ESTADO_U