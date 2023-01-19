//IMPORTING PACKAGES
const express = require("express");
require("dotenv").config();
const meetingRoutes = require("./routes/meetings");

//SETTING UP DB CONNECTION AND SERVER TO LISTEN FOR REQUESTS
const app = express();
const PORT = process.env.PORT;
const db = require("./models/index");

//CREATING TABLE IN DB VIA IIFE
(async () => await db.sequelize.sync())();

//GLOBAL MIDDLEWARE IE. APPLIED ON EVERY ROUTE
app.use(express.json());
//For handling POST and PUT request scenario
//checks to see if any incoming request has a body ie. data which it wants to send to server
//passes that info to request object so we can access it in the request handler
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//ROUTES
app.use("/api/meetings", meetingRoutes);
