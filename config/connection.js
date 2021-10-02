require('dotenv').config();

const Sequelize = require('sequelize');

let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      //Instead of 'local host' we'll be using the link below to connect to the deloyed site
      host: 'td5l74lo6615qq42.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      dialect: 'mysql',
      port: 3306,
    },
  );
}

module.exports = sequelize;