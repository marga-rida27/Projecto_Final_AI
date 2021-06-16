const express = require('express');
const router = express.Router();

//importer os controladores [2]
const controller = require('../controllers/controller')

router.get('/test', controller.test);
router.get('/listtest', controller.listtest);
router.get('/list',controller.list);
router.get('/funcao', controller.funcao);
router.get('/get/:id', controller.get);
router.post('/delete', controller.delete);
router.post('/update/:id', controller.update);
module.exports = router;

