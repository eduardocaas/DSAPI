var knex = require('knex')({
  client: 'mysql',
  connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'loja_dsapi'
  }
});

function getCidades(req, res, next) {
    knex('cidades')
      .then(data => {
        res.send(data);
      });
  }
  
  module.exports = {
    getCidades
  };