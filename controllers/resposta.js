const Resposta = require("../model/Resposta");

const salvarResposta = (req, res, next) => {
    console.log("Resposta salva com sucesso!");
    var perguntaId = req.body.perguntaId;
    var corpo = req.body.corpo;
    Resposta.create({
        perguntaId: perguntaId,
        corpo: corpo
    }).then(() => {        
        console.log("Resposta salva com sucesso!");
        res.redirect("/");
    });
};

module.exports = {
    salvarResposta,
};