const { DataTypes } = require("sequelize");
const sequelize = require("./connection");
const bcryptjs = require("bcryptjs");

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    create_time: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false, // Esto desactivará automáticamente los campos createdAt y updatedAt
  }
);

User.beforeSave(async (user, options) => {
  const { password } = user;
  const hash = await bcryptjs.hash(password, 12);
  user.password = hash;
});

// (async () => {
//   await sequelize.sync();
//   //await sequelize.sync({ alter: true });
//   //await sequelize.sync({ force: true });
// })();

module.exports = User;
