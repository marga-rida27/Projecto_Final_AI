var Sequelize = require('sequelize');
var sequelize = require('./database');
var AREA = require('./AREA');
var FUNCAO = require('./FUNCAO');
var IMAGENS = require('./IMAGENS');
var ESTADO = require('./ESTADO');

const UTILIZADOR = sequelize.define('UTILIZADOR', {
    id_utilizador: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nome_completo: {
        type: Sequelize.STRING
    },
    data_nascimento: {
        type: Sequelize.DATE
    },
    email: {
        type: Sequelize.STRING
    },
    AREAIdArea: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
            model: AREA,
            key: 'id_area'
        }
    },
    FUNCAOIdFuncao: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
            model: FUNCAO,
            key: 'id_funcao'
        }
    },
    IMAGENIdImagem: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
            model: IMAGENS,
            key: 'id_imagem'
        }
    },
    ESTADOIdEstado: {
        type: Sequelize.INTEGER,
        // referência a outro modelo
        references: {
            model: ESTADO_U,
            key: 'id_estado'
        }
    }
},
{
    timestamps: false,
});
UTILIZADOR.belongsTo(AREA)
UTILIZADOR.belongsTo(FUNCAO)
UTILIZADOR.belongsTo(IMAGENS)
UTILIZADOR.belongsTo(ESTADO)
module.exports = UTILIZADOR