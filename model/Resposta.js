const { Sequelize, Model, DataTypes } = require("sequelize");
const connection = require("../db/database");

const Resposta = connection.define('Resposta', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    perguntaId: {
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: {
            model: 'pergunta', 
            key: 'id', 
         }        
    },
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

Resposta.sync({force: false}).then(() => {
    console.log("Tabela Resposta criada com sucesso!");
});

module.exports = Resposta;