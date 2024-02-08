const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:1234@localhost:3306/backend_task');

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