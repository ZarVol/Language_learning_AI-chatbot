// const { Model } = require('sequelize');
const db = require('../ORM/db');
// User model
const User = db.define('User', {
  id: {
    type: Number,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

module.exports = User;
