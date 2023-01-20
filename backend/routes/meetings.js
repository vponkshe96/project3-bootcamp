const express = require("express");
const router = express.Router();
const {
  models: { user },
} = require("../models/index");
//doing db.models.user double destructuring to import user model

//GET all meetings
router.get("/", (req, res) => res.json({ mssg: "GET all workouts" }));

//GET a single workout
router.get("/:id", (req, res) => res.json({ mssg: "GET a single workout" }));

//POST a new workout
router.post("/", async (req, res) => {
  const { username, password, age, isStudent } = req.body;
  try {
    const userData = await user.create({ username, password, age, isStudent });
    //inserting userData into db table via create sequelize method that takes in object
    //using object notation shorthand since key and value are same
    res.status(200).json(userData);
    //gives back our userData in json format with success status code
  } catch (error) {
    res.status(400).json({ error: error.message });
    //gives us error message with bad request status code
  }
});

//DELETE a workout
router.delete("/:id", (req, res) =>
  res.json({ mssg: "DELETE a single workout" })
);

//UPDATE a workout
router.patch("/:id", (req, res) =>
  res.json({ mssg: "UPDATE a single workout" })
);

module.exports = router;
