// Junção de server.js e server_db.js

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

var mysql = require('mysql'); // Executar -> npm install mysql
var conn = mysql.createConnection({ // DB Loja -> tem "produto" com id(int), nome(varchar), preco(double)
    host: "localhost",
    user: "root",
    password: "",
    database: "loja"
});

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); // Se não for -> application/json
    conn.connect(function(error){
        if(!error){
            sql = "SELECT * FROM produto ORDER BY preco ASC";
            conn.query(sql, function(err, result, fields){
                if(!err){
                    //console.log(result);
                    res.end(JSON.stringify(result));
                } 
                else {
                    //console.log(err);
                    res.end(err);
                }
            });
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Servidor executando em: http://${hostname}:${port}/`);
});
