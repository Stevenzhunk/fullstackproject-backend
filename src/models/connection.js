const { Sequelize } = require("sequelize");

const sequelize = new Sequelize (
    process.env.LOCAL_DATABASE,
    process.env.LOCAL_USER,
    process.env.LOCAL_PASSWORD,
    {
        host:  process.env.LOCAL_HOST,
        dialect: "mysql",
    }
);

module.exports = sequelize;