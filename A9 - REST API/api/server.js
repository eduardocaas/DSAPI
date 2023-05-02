const { json } = require("body-parser");
var express = require("express");
var http = require("http");
var app = express();

var produtos = ["Coca-Cola", "Pepsi", "Fanta"];

app.get('/', (req, res) => {
    res.status(200).send("Hello World!");
});

app.get('/produtos', (req, res) => {
    res.status(200).send(produtos);
});

app.get('/produtos/:posicao', (req, res) => {
    const linha = parseInt(req.params.posicao);
    res.status(200).send(produtos[linha]);
});

app.post('/produtos', (req, res) => {
    var nome = "Nome " + produtos.length;
    produtos.push(nome);
    res.status(200).send("Produto adicionado");
});

http.createServer(app).listen(8001, () => {
    console.log("Servidor iniciado na porta 8001 - http://localhost:8001");
});