function getPedidos(req, res, next) {
    knex('pedidos')
      .then(data => {
        res.send(data);
      });
  }
  
  module.exports = {
    getPedidos
  };