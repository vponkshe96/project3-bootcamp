//IMPORTING PACKAGES
const express = require("express");
require("dotenv").config();
const meetingsRoutes = require("./routes/meetingsRoutes");
const db = require("./models/index");

//INITIALIZING VARIABLES
const app = express();
const PORT = process.env.PORT;

//CONNECTING TO DB, INSERTING TABLE, STARTING OUR SERVER
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

//GLOBAL MIDDLEWARE ie.applied on every route
app.use(express.json());
//For handling POST and PUT request scenario
//checks to see if any incoming request has a body ie. data which it wants to send to server
//passes that info to request object so we can access it in the request handler
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//ROUTES
app.use("/api/meetings", meetingsRoutes);
