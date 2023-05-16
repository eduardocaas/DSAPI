function getProdutos(req, res, next) {
  knex('produtos')
    .then(data => {
      res.send(data);
    });
}

module.exports = {
  getProdutos
};