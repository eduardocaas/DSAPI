var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'loja_dsapi'
    }
  });
  
  function savePedido(req, res, next) {
    const cliente_id = Number(req.params.cliente_id);
    const endereco = req.params.endereco;
    const produto_id = req.params.produto_id;
    const quantidade = req.params.quantidade;

    knex.insert(
        {cliente_id: cliente_id},
        {endereco: endereco}
    ).into('pedidos');
    
  }

  
  module.exports = {
    savePedido
  };