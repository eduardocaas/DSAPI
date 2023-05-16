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

function postProdutos(req, res, next) {
  knex('produtos')
    .insert(req.body)
    .then(() => {
        res.send("Produto " + req.body.nome + " adicionado");
    }, next);
};

module.exports = {
  getProdutos,
  postProdutos
};