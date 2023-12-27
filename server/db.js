const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "campusselection",
  password: "welcome!2345",
  port: 5432,
});

module.exports = pool;
