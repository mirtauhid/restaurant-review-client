require('dotenv').config();

const { DB_URI, PORT } = process.env;

module.exports = {
  DB_URI,
  PORT,
};
