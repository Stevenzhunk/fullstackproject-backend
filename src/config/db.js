const mysql = require("mysql2/promise");
const colors = require("colors");

const connectDB = async () => {
  try {
    // create the connection
    const connection = await mysql.createPool({
      host: process.env.ALWAYS_HOST,
      user: process.env.ALWAYS_USER,
      database: process.env.ALWAYS_DATABASE,
      password: process.env.ALWAYS_PASSWORD,
    });

    if (connection) {
      console.log(`Connected successfully to MySQL`.bgMagenta.white);

      const [rows, fields] = await connection.execute(
        "SELECT * FROM Prueba_table"
      );
      console.log("Rows:", rows);
    }
    // Cierra la conexión.
    await connection.end();
  } catch (error) {
    console.log(`Error in connexion MySQL: ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
