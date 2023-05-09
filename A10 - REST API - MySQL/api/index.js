const restify = require("restify");
const errors = require("restify-errors");

const app = restify.createServer({
    name : 'loja',
    version : '1.0.0'
});

app.use(restify.plugins.acceptParser(app.acceptable));
app.use(restify.plugins.queryParser());
app.use(restify.plugins.bodyParser());

app.listen(8001, function(){
    console.log('app %s running in %s', app.name, app.url);
});

var knex = require("knex")({
    client : 'mysql',
    connection : {
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'loja'
    }
});

app.get( '/', (req, res, next) => {
    res.send("Bem vindo a API Loja");
});

app.get( '/produtos', (req, res, next) => {
    knex('produto').then((data) => {
        res.send(data);
    }, next);
});

app.get( '/produtos/:id', (req, res, next) => {
    const id = req.params.id;
    knex('produto')
    .where('id', id)
    .first()
    .then((data) => {
        if(!data){
            return res.send(new errors.BadRequestError('Product not found'));
        }
        res.send(data);
    }, next);
});

app.post('/produtos', (req, res, next) => {
    knex('produto')
    .insert(req.body)
    .then(() => {
        res.send("Product " + req.body.nome + " added");
    }, next);
});

app.put( '/produtos/:id', (req, res, next) => {
    const id = req.params.id;
    knex('produto')
    .where('id', id)
    .update(req.body)
    .then((data) => {
        if(!data){
            return res.send(new errors.BadRequestError('Product not found'));
        }
        res.send("Product updated");
    }, next);
});

app.del( '/produtos/:id', (req, res, next) => {
    const id = req.params.id;
    knex('produto')
    .where('id', id)
    .delete()
    .then((data) => {
        if(!data){
            return res.send(new errors.BadRequestError('Product not found'));
        }
        res.send(data);
    }, next);
});

