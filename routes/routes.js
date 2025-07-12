const express = require('express');
const router = express.Router();
const homePageController = require('../controllers/users/homePage');
const cadastroUsuario = require('../controllers/users/cadastroUsuario');    
router.get('/', homePageController.homePage);
router.post('/users', cadastroUsuario.cadastroUsuario);

module.exports = router;