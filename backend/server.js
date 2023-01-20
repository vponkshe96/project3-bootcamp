//IMPORTING PACKAGES
const express = require("express");
require("dotenv").config();
const meetingRoutes = require("./routes/meetings");
const db = require("./models/index");

///INITIALIZING VARIABLES
const app = express();
const PORT = process.env.PORT;

//USING IMPORTED DB CONNECTION IE. DB.SEQUELIZE - TO INSERT A TABLE/TABLES INTO THE DB THEN STARTING OUR SERVER
db.sequelize
  .sync({ alter: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(
        `DB connection established, Table created, and listening on port ${PORT}!`
      )
    )
  )
  .catch((err) => console.log(`ERROR- ${err}`));

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
