const Sequelize = require('sequelize');

const sequelize = new Sequelize('bukukita', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;