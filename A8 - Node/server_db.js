var mysql = require('mysql'); // Executar -> npm install mysql

var conn = mysql.createConnection({ // DB Loja -> tem "produto" com id(int), nome(varchar), preco(double)
    host: "localhost",
    user: "root",
    password: "",
    database: "loja"
});

conn.connect(function(error){
    if(!error){
        sql = "SELECT * FROM produto ORDER BY preco ASC";
        conn.query(sql, function(err, result, fields){
            if(!err){
                console.log(result);
                console.log(fields);
            } 
            else {
                console.log(err);
            }
        });
    }
});