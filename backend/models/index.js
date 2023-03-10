const dbConfig = require("../config/db-config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    dialect: dbConfig.dialect,
  }
);
//Sequelize refers to the library/constructor function, sequelize is an instance of the object representing one connection to a db

//EXPORTING DB, which has our sequelize connection ie. db connection + models
const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.meetings = require("./meetingsModel")(sequelize, Sequelize.DataTypes);
//passing arguments down to meetings model's anonymous function
module.exports = db;
