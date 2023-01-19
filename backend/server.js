const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Listening for requests at ${PORT}!`));

app.get("/", (req, res) => res.send("Testing if base route works!"));
