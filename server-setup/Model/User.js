const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:1234@localhost:3306/backend_task');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;