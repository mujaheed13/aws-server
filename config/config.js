const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("rdsTest", "admin", "mujaheed13", {
  host: "database-2.cwzgmiuut3dz.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
});

module.exports = { sequelize };
