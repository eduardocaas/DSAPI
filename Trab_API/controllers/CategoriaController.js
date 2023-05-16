var knex = require('knex')({
  client: 'mysql',
  connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'loja_dsapi'
  }
});

function getCategorias(req, res, next) {
  knex('categorias')
     .then(data => {
      res.send(data);
    });
}
  
module.exports = {
  getCategorias
};