const express = require('express'); //import express

const router  = express.Router(); 

const perguntaController = require('../controllers/pergunta'); 
const respostaController = require('../controllers/resposta'); 

router.post('/pergunta', perguntaController.salvarPergunta); 
router.get('/', perguntaController.listarPergunta);
router.get('/pergunta/:id', perguntaController.buscarPergunta);
router.get('/pergunta', perguntaController.novaPergunta);

router.post('/resposta', respostaController.salvarResposta); 

module.exports = router;