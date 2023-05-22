var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loja_dsapi'
  }
});

function getAll(req, res, next) {
  knex('produtos')
    .then(data => {
      res.send(data);
    });
}

function getById(req, res, next) {
  const id = req.params.id;
  knex('produtos')
    .where('id', id)
    .first()
    .then(data => {
      if(data) {
        res.send(200, data);
      }
      else {
        res.send(404, {message: 'Produto não encontrado'});
      }
      return next();
    })
    .catch((error) => {
      res.send(500, {message: 'Erro ao buscar produto', error: error});
      return next();
    })
}

function save(req, res, next) {
  knex('produtos')
    .insert(req.body)
    .then(() => {
        res.send("Produto " + req.body.nome + " adicionado");
    }, next);
};

module.exports = {
  getAll,
  getById,
  save
};