function getClientes(req, res, next) {
    knex('clientes')
      .then(data => {
        res.send(data);
      });
  }
  
  module.exports = {
    getClientes
  };