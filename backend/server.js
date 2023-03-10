//IMPORTING PACKAGES
const express = require("express");
const cors = require("cors");
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
app.use(cors());
app.use(express.json());
//For handling POST and PUT request scenario where data is send in request body
//middleware function allows to access this data 
//specifically parses POST requests that has json data in their body
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
}); 

//ROUTES
app.use("/api/meetings", meetingsRoutes);
