var http = require('http'); 
const express = require('express') 
const app = express() 
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser'); 
var jwt = require('jsonwebtoken');
require("dotenv-safe").config();
 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser()); 
 
app.get('/clientes', verifyJWT, (req, res, next) => { 
    console.log("Retornou todos clientes!");
    res.status(200).json([{id:1, nome:'fulano'}]);
}) 
 
app.post('/login', (req, res, next) => { 
    if(req.body.user === 'fulano' && req.body.pwd === '123'){ 
        const id = 1; 
        const token = jwt.sign({ id }, process.env.SECRET, { 
            expiresIn: 300 // 5min 
        }); 
        
        console.log("Fez login e gerou token!");
        return res.status(200).send({ auth: true, token: token }); 
    }
    
    return res.status(401).send('Login inválido!'); 
})    
 
app.post('/logout', function(req, res) { 
    console.log("Fez logout e cancelou o token!");
    res.status(200).send({ auth: false, token: null }); 
});

function verifyJWT(req, res, next){ 
    const token = req.headers['x-access-token']; 
    if (!token) 
        return res.status(401).send({ auth: false, message: 'Token não informado.' }); 
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) { 
        if (err) 
            return res.status(500).send({ auth: false, message: 'Token inválido.' }); 
        
        req.userId = decoded.id; 
        console.log("User Id: " + decoded.id);
        next(); 
    }); 
}    
 
var server = http.createServer(app); 
server.listen(3000);
console.log("Servidor escutando na porta 3000...");