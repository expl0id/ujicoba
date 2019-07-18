const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Orders extends Sequelize.Model {}

Orders.init({
  bookTitle:Sequelize.STRING,
  orderDate: Sequelize.DATE,
  quantity: Sequelize.INTEGER,
  total: Sequelize.INTEGER
  
}, { sequelize, modelName: 'orders' });

module.exports = Orders;