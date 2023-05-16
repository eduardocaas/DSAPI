function getCategorias(req, res, next) {
  knex('categorias')
     .then(data => {
      res.send(data);
    });
}
  
module.exports = {
  getCategorias
};