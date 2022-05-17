const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./db/database");
const Pergunta = require("./db/model/Pergunta");

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso com o Banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });


//Estou dizendo para o Express usar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rotas
app.get('/', (req, res) =>{    
    res.render('index');
});

app.get('/perguntar', (req, res) =>{
    res.render('perguntar/perguntar');
});

app.post('/salvarpergunta', (req, res) =>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {        
        console.log("Pergunta salva com sucesso!");
        res.redirect("/perguntar");
    });
    //res.send("<h1>Formulário recibido!</h1><p>Título:"+ titulo + "</p><p>Descrição:"+ descricao + "</p>");
})

app.listen(8080, () =>{
    console.log("App rodando!");
});