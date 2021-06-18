const controller = {}
var FUNCAO = require('../models/FUNCAO');
var AREA = require('../models/AREA');
var UTILIZADOR = require('../models/UTILIZADOR');
var LOGIN = require('../models/LOGIN');
var REGISTO_EMOCAO = require('../models/REGISTO_EMOCAO');
var REGISTO_INTERACAO = require('../models/REGISTO_INTERACAO');
var IMAGENS = require('../models/IMAGENS');
var ESTADO = require('../models/ESTADO');
var SITUACOES_SECCAO = require('../models/SITUACOES_SECCAO');
var FICHEIROS = require('../models/FICHEIROS');
var sequelize = require('../models/database');
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

    res.json({ success: true, data: data});

}

controller.funcao = async (req, res) => {
    FUNCAO.findAll()
        .then(fUNCAO => {
            console.log(fUNCAO);
            res.sendStatus(200);
        })
        .catch(err => console.log(err));
}

controller.delete = async (req, res) => {
    // parâmetros por post
    const { id } = req.body;
    const { id2 } = req.body;
    // delete por sequelize
    const del = await LOGIN.destroy({
        where: { id_login: id }
    })

    const del2 = await UTILIZADOR.destroy({
        where: { id_utilizador: id2 }
    })

    res.json({ success: true, deleted: del, deleted: del2, message: "Deleted successful" });
    console.log("controlador delete")
}

controller.update = async (req, res) => {
    // parameter get id
    const { _id_utilizador } = req.params;
    // parameter POST
    const {_fotografia, _nome_completo, _data_nascimento, _email, _AREAIdArea, _FUNCAOIdFuncao, _nome_utilizador} = req.body;
    // Update data
    const data = await UTILIZADOR.update({
        fotografia: _fotografia,
        nome_completo: _nome_completo,
        data_nascimento: _data_nascimento,
        email: _email,
        AREAIdArea: _AREAIdArea,
        FUNCAOIdFuncao: _FUNCAOIdFuncao,
    },
    {
        where: { id_utilizador: _id_utilizador }
    })
    .then(function (data) {
        return data;
    })
    .catch(error => {
        return error;
    })

    const data_x = await LOGIN.update({
        nome_utilizador: _nome_utilizador
    },
    {
        where: { UTILIZADORIdUtilizador: _id_utilizador }
    })
    .then(function (data_x) {
        return data_x;
    })
    .catch(error => {
        return error;
    })

    res.json({ success: true, data: data, data_x: data_x, message: "Updated successful" });
}

controller.get = async (req, res) => {
    const { id } = req.params;
    const data = await LOGIN.findAll({
        where: { UTILIZADORIdUtilizador: id },
        include: [{
            model: UTILIZADOR,
            include: [AREA, FUNCAO, IMAGENS, ESTADO_U]
        }]
    })
    .then(function (data) {
        return data;
    })
    .catch(error => {
        return error;
    })

    const lista_area = await AREA.findAll();

    const lista_funcao = await FUNCAO.findAll();

    res.json({ success: true, data: data, lista_area: lista_area, lista_funcao: lista_funcao}); 
}

controller.create = async (req, res) => {
    const _fotografia = req.body.fotografia;
    const _nome_completo = req.body.nome_completo;
    const _data_nascimento = req.body.data_nascimento;
    const _email = req.body.email;
    const _AREAIdArea = req.body.AREAIdArea;
    const _FUNCAOIdFuncao = req.body.FUNCAOIdFuncao;
    const _nome_utilizador = req.body.nome_utilizador;

    // create
    const data = await UTILIZADOR.create({
        fotografia: _fotografia,
        nome_completo: _nome_completo,
        data_nascimento: _data_nascimento,
        email: _email,
        AREAIdArea: _AREAIdArea,
        FUNCAOIdFuncao: _FUNCAOIdFuncao
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            console.log("Error " + error)
            return error;
        })

    const data_x = await LOGIN.create({
        nome_utilizador: _nome_utilizador
    })
        .then(function (data) {
            return data;
        })
        .catch(error => {
            console.log("Error " + error)
            return error;
        })
    // return res
    res.status(200).json({
        success: true,
        message: "Salvo com sucesso",
        data: data
    });
}

controller.listtest = async (req, res) =>{
    const data = await REGISTO_INTERACAO.findAll({
        include: [{
            model: UTILIZADOR,
            include: [AREA, FUNCAO]
        }]
    })
        .then(function (data) {
            return data
        })
        .catch(error => {
            return error;
        });

    res.json({ success: true, data: data});
}

module.exports = controller;