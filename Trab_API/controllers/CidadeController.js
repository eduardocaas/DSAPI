function getCidades(req, res, next) {
    knex('cidades')
      .then(data => {
        res.send(data);
      });
  }
  
  module.exports = {
    getCidades
  };