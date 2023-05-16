var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loja_dsapi'
  }
});

function getProdutos(req, res, next) {
  knex('produtos')
    .then(data => {
      res.send(data);
    });
}

module.exports = {
  getProdutos
};