var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', function(req, res) {
  var d = new Date().toISOString().substring(0, 16)
  axios.get('http://localhost:16000/contratos')
    .then( resposta => {
      res.render('contratosList', { data: resposta.data, date: d, titulo: "Gestão contratos"});
  })
  .catch( erro => {
    res.render('contratosError', {error: erro, date: d ,message: "Erro ao obter contratos"})
    })
  });

router.get('/entidades/:id', function(req, res) {
  const d = new Date().toISOString().substring(0, 16);

 // obter entradas de contratos dessa entidade
  axios.get('http://localhost:16000/contratos?entidade=' + req.params.id)
    .then(resposta => {
      const contratosData = resposta.data;

      // ir buscar somatorio de contratos dessa entidade (construí na API uma rota nova para isso)
      return axios.get('http://localhost:16000/contratos/entidadeTotal/' + req.params.id)
        .then(totalResposta => {

          const totalContratos = totalResposta.data[0].totalContratos;

          res.render('entidade', { 
            data: contratosData, 
            date: d, 
            titulo: "Consultar informação contratos",
            totalContratos: totalContratos
          });
        });
    })
    .catch(erro => {
      res.render('contratosError', {error: erro, date: d, message: "Erro ao obter contratos"})
    });
});

router.get('/:id', function(req, res) {
  var d = new Date().toISOString().substring(0, 16)
  axios.get('http://localhost:16000/contratos/' + req.params.id)
    .then( resposta => {
      res.render('contrato', { data: resposta.data, date: d, titulo: "Consultar informação contrato"});
    })
    .catch( erro => {
      res.render('contratosError', {error: erro, date: d, message: "Erro ao obter contrato"})
    })
});

module.exports = router;