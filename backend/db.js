const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5111,
  password: "123456",
  database: "perntodo",
});

pool.connect().then(() => console.log("database connected"));

module.exports = pool;
