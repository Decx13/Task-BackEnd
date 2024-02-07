const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('backend_task', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

const Products = sequelize.define('Product', {
  Productname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  PValue: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }


});

module.exports = Products;