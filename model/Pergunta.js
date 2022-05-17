const { Sequelize, Model, DataTypes } = require("sequelize");
const connection = require("../db/database");

const Pergunta = connection.define('pergunta', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    titulo: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

Pergunta.sync({force: false}).then(() => {
    console.log("Tabela pergunta criada com sucesso!");
});

module.exports = Pergunta;