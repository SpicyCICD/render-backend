require('dotenv').config();

module.exports = {
  HOST: process.env.dbendpoint,
  USER: process.env.dbusername,
  PASSWORD: process.env.dbpassword,
  DB: process.env.database_name,
  PORT: process.env.database_port,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false,
  logger: false
};
