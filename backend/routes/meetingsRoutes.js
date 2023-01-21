const express = require("express");
const router = express.Router();
const {
  getAllMeetings,
  getMeeting,
  createMeeting,
} = require("../controllers/meetingsController");

//GET all meetings
router.get("/", getAllMeetings);

//GET a single meeting
router.get("/:id", getMeeting);

//CREATE a single meeting
router.post("/", createMeeting);

//DELETE a meeting
router.delete("/:id", (req, res) =>
  res.json({ mssg: "DELETE a single meeting" })
);

//UPDATE a meeting
router.patch("/:id", (req, res) =>
  res.json({ mssg: "UPDATE a single meeting" })
);

module.exports = router;
