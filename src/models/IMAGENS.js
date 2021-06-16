var Sequelize = require('sequelize');
var sequelize = require('./database');

const IMAGENS = sequelize.define('IMAGENS', {
    id_imagem: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    caminho:{
        type: Sequelize.STRING
    }
},
{
    timestamps: false,
});

module.exports = IMAGENS