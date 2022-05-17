const Sequelize = require('sequelize');

const con = new Sequelize('guiaperguntas', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'  
});

module.exports = con;