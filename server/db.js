const { Pool } = require('pg')

const pool = new Pool({
  user: "jesus",
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "pern_todo"
})

module.exports = pool;