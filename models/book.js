const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Book extends Sequelize.Model {}

Book.init({
  title: Sequelize.STRING,
  author : Sequelize.STRING,
  genre: Sequelize.STRING,
  price: Sequelize.FLOAT,
  descriptions : Sequelize.TEXT,
  condition: Sequelize.STRING
  
}, { sequelize, modelName: 'book' });

module.exports = Book;