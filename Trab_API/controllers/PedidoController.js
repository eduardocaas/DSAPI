var knex = require('knex')({
  client: 'mysql',
  connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'loja_dsapi'
  }
});

function getPedidos(req, res, next) {
    knex('pedidos')
      .then(data => {
        res.send(data);
      });
  }
  
  module.exports = {
    getPedidos
  };