var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato');

router.get('/', function(req, res, next) {
  Contrato.list(req.query)
    .then(data => res.status(201).jsonp(data))
    .catch(erro => res.status(523).jsonp(erro))
});

router.get('/entidades', function(req,res) {
  Contrato.findEntidades()
    .then(data => res.status(201).jsonp(data))
    .catch(erro => res.status(522).jsonp(erro))
});

router.get('/entidadeTotal/:id', function(req,res) {
  Contrato.findTotalContratosByEntidade(req.params.id)
    .then(data => res.status(201).jsonp(data))
    .catch(erro => res.status(526).jsonp(erro))
});

router.get('/tipos', function(req,res) {
  Contrato.findTipos()
    .then(data => res.status(201).jsonp(data))
    .catch(erro => res.status(526).jsonp(erro))
});


router.get('/:id', function(req,res) {
  Contrato.findById(req.params.id)
    .then(data => res.status(201).jsonp(data))
    .catch(erro => res.status(521).jsonp(erro))
});

router.post('/', function(req,res) {
  Contrato.insert(req.body)
  .then(data => res.status(201).jsonp(data))
  .catch(erro => res.status(527).jsonp(erro))
});

router.put('/:id', (req,res) => {
  Contrato.updateContrato(req.params.id, req.body)
  .then(data => res.status(201).jsonp(data))
  .catch(erro => res.status(528).jsonp(erro))
});

router.delete('/:id', (req,res) => {
  Contrato.deleteContratoById(req.params.id, req.body)
  .then(data => res.status(201).jsonp(data))
  .catch(erro => res.status(529).jsonp(erro))
});

module.exports = router;
