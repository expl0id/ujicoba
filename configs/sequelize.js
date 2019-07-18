const Sequelize = require('sequelize');

const sequelize = new Sequelize('BukuKita', 'root', '', {
  host: 'root',
  dialect: 'mysql'
});

module.exports = sequelize;