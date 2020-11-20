const Sequelize = require('sequelize');
//Criando a conexão com o banco MySql // Banco, Usuario, Senha, Objeto Json
const sequelize = new Sequelize('postapp', 'root', '1804', {
 host: "localhost",
 dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};
