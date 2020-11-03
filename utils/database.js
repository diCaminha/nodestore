const Sequelize = require('sequelize');

const sequelize = new Sequelize('projnodedb', 'root', 'nodecomplete', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;