require("dotenv").config();
const { Sequelize } = require("sequelize");

const Database = process.env.LOCAL_DATABASE;
const localUser = process.env.LOCAL_USER;
const passwordData = process.env.LOCAL_PASSWORD;
const host = process.env.LOCAL_HOST;

const sequelize = new Sequelize(Database, localUser, passwordData, {
  host: host,
  dialect: 'mysql',
  dialectModule: require('mysql2'),
});

console.log(`variables: Database - ${Database}`);
console.log(`variables: localUser - ${localUser}`);
console.log(`variables: passwordData - ${passwordData}`);
console.log(`variables: host - ${host}`);

module.exports = sequelize;
