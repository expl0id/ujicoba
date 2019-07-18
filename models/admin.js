const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Admins extends Sequelize.Model {}

Admins.init({
  name: Sequelize.STRING,
  username : Sequelize.STRING,
  password: Sequelize.STRING,
  level : Sequelize.STRING

}, { sequelize, modelName: 'admins' });

module.exports = Admins;