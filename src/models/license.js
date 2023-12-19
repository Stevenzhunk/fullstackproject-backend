const { DataTypes } = require('sequelize');
const sequelize = require('./connection');

const License = sequelize.define('License', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = License;
