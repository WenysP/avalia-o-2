const express = require('express');
const router = express.Router();

const FuncController = require('./controllers/FuncController');

router.get('/cadastro', FuncController.buscarTodos);
router.get('/cadastro/:nome', FuncController.buscarUm);
router.post('/cadastro', FuncController.inserir);
router.put('/cadastro/:nome', FuncController.alterar);
router.delete('/cadastro/:nome', FuncController.excluir);


module.exports = router;