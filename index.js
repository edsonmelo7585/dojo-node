const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./db/database");
const routes = require('./routes/routes');

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
// app.use(express.json());

app.use('/', routes);

const listener = app.listen(process.env.PORT || 8080, () => {
    console.log('App rodando na porta: ' + listener.address().port)
})