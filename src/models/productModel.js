const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Product = sequelize.define("Product", {
  product_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  product_description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  discount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sku: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  dues: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  image_front: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  image_back: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  create_time: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  license_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },

  // agregar foreign key, etc
});

// (async () => {
//   await sequelize.sync();
//   //await sequelize.sync({ force: true });
//   // await sequelize.sync({ alter: true });
// })();

module.exports = Product;
