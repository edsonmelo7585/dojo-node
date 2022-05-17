const Pergunta = require("../model/Pergunta");
const Resposta = require("../model/Resposta");

const novaPergunta = (req, res, next) => {
    res.render('pergunta/pergunta');
};

const salvarPergunta = (req, res, next) => {
    console.log("Pergunta salva com sucesso!");
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {        
        console.log("Pergunta salva com sucesso!");
        res.redirect("/");
    });
};

const listarPergunta = (req, res, next) => {
    Pergunta.findAll({raw: true, order: [
        ['id', 'desc']
    ]}).then(perguntas => {
        res.render('pergunta/index', {
            perguntas: perguntas
        });
    });    
};

const buscarPergunta = (req, res, next) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if (pergunta != undefined){
            Resposta.findAll({
                where: {perguntaId: pergunta.id}
            }).then(respostas => {
                res.render("resposta/index", {
                    pergunta: pergunta, 
                    respostas: respostas,
                });
            })
        } else {
            res.redirect("/");
        }
    });    
};

module.exports = {
    novaPergunta,
    listarPergunta, 
    salvarPergunta,
    buscarPergunta,
};