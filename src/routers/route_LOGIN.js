const express = require('express');
const router = express.Router();
const middleware = require('../middleware');

//importer os controladores [2]
const controller = require('../controllers/controller_LOGIN')

router.get('/list', middleware(), controller.list);
router.post('/register',controller.register);
router.post('/login',controller.login);

module.exports = router;
