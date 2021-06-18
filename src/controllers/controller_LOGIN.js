const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config');

const controller = {}

var FUNCAO = require('../models/FUNCAO');
var AREA = require('../models/AREA');
var UTILIZADOR = require('../models/UTILIZADOR');
var LOGIN = require('../models/LOGIN');
var IMAGENS = require('../models/IMAGENS');
var sequelize = require('../models/database');
var ESTADO = require('../models/ESTADO');

const { Op, where } = require("sequelize");

sequelize.sync();

controller.test = (req, res) => {
    console.log("Controlador teste.");
};

controller.list = async (req, res) => {
    const data = await LOGIN.findAll({
        include: [{
            model: UTILIZADOR,
            include: [AREA, FUNCAO, IMAGENS, ESTADO]
        }]
    })
        .then(function (data) {
            return data
        })
        .catch(error => {
            return error;
        });

    res.json({ success: true, data: data });

}


controller.register = async (req, res) => {

    const { username, email, password, nomecomplet, datanasciment, area, funcao } = req.body;

    const data = await UTILIZADOR.create({
        username: username,
        email: email,
        password: password
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            console.log("Erro: " + error);
            return error;
        })
    res.status(200).json({
        success: true,
        message: "Registado",
        data: data
    });
}

controller.login = async (req, res) => {

    if (req.body.nome_utilizador && req.body.password) {
        var nome_utilizador = req.body.nome_utilizador;
        var password = req.body.password;
    }
    var LOGIN = await LOGIN.findOne({ where: { nome_utilizador: nome_utilizador } })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            console.log("Erro: " + error);
            return error;
        })
    if (password === null || typeof password === "undefined") {
        res.status(403).json({
            success: false,
            message: 'Campos em Branco'
        });
    } else {
        if (req.body.nome_utilizador && req.body.password && LOGIN) {
            const isMatch = bcrypt.compareSync(password, LOGIN.password);
            if (req.body.nome_utilizador === LOGIN.nome_utilizador && isMatch) {
                let token = jwt.sign({ nome_utilizador: req.body.nome_utilizador }, config.secret,
                    {
                        expiresIn: '1h' //expira em 1 hora
                    });
                res.json({ success: true, message: 'Autenticação realizada com sucesso!', token: token });
            } else {
                res.status(403).json({ success: false, message: 'Dados de autenticação inválidos.' });
            }
        } else {
            res.status(400).json({ success: false, message: 'Erro no processo de autenticação. Tente de novo mais tarde.' });
        }
    }
}

module.exports = controller;