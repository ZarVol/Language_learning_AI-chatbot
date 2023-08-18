const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: process.env.PGHOST,
  port: 5432,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

module.exports = db;
