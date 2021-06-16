var Sequelize = require('sequelize');
var sequelize = require('./database');

const AREA = sequelize.define('AREA', {
    id_area: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nome_area:{
        type: Sequelize.STRING
    } 
}, 
{
    timestamps: false,
});

module.exports = AREA