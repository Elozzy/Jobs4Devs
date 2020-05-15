const { Sequelize } = require('sequelize');

module.exports = new Sequelize('codegig', 'root', 'password', {
    host: 'localhost',
    dialect:  'mysql' 
 
});
