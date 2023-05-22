const restify = require("restify");
const errors = require("restify-errors");

const app = restify.createServer({
  name: 'loja_dsapi',
  version: '1.0.0'
});

app.use(restify.plugins.acceptParser(app.acceptable));
app.use(restify.plugins.queryParser());
app.use(restify.plugins.bodyParser());

app.listen(8001, function () {
  console.log("url: " + app.url);
});

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loja_dsapi'
  }
});

const produtoController = require('./controllers/ProdutoController');
const categoriaController = require('./controllers/CategoriaController');
const pedidoController = require('./controllers/PedidoController');
const cidadeController = require('./controllers/CidadeController');
const clienteController = require('./controllers/ClienteController');


app.get('/', (req, res, next) => {
  res.send("Página inicial");
});

app.get('/produtos', produtoController.getAll);
app.get('/produtos/:id', produtoController.getById);
app.post('/produtos', produtoController.save);
app.get('/categorias', categoriaController.getCategorias);
app.get('/pedidos', pedidoController.getPedidos);
app.get('/cidades', cidadeController.getCidades);
app.get('/clientes', clienteController.getClientes);


