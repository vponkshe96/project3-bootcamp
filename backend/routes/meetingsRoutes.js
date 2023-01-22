const express = require("express");
const router = express.Router();
const {
  getAllMeetings,
  getMeeting,
  createMeeting,
  deleteMeeting,
  updateMeeting,
} = require("../controllers/meetingsController");

//GET all meetings
router.get("/", getAllMeetings);

//GET a single meeting
router.get("/:id", getMeeting);

//CREATE a single meeting
router.post("/", createMeeting);

//DELETE a meeting
router.delete("/:id", deleteMeeting);

//UPDATE a meeting
router.patch("/:id", updateMeeting);

module.exports = router;
