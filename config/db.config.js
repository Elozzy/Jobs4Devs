const { Sequelize } = require('sequelize');

module.exports = new Sequelize('database', 'root', 'password', {
    host: 'localhost',
    dialect:  'mysql' 
 
});
