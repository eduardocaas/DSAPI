var knex = require('knex')({
  client: 'mysql',
  connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'loja_dsapi'
  }
});

function getClientes(req, res, next) {
    knex('clientes')
      .then(data => {
        res.send(data);
      });
  }
  
  module.exports = {
    getClientes
  };