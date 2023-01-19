//importing packages
const express = require("express");
require("dotenv").config();
const meetingRoutes = require("./routes/meetings");

//setting up db and server connection to listen for requests
const app = express();
const PORT = process.env.PORT;
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DB_DIALECT,
  }
);
sequelize
  .authenticate()
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Connected to db and listening on port ${PORT}!`)
    )
  )
  .catch((err) => console.log(`Error connecting to db - ${err}`));

//global middleware
app.use(express.json());
//For handling POST and PUT request scenario
//checks to see if any incoming request has a body ie. data which it wants to send to server
//passes that info to request object so we can access it in the request handler

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/meetings", meetingRoutes);
