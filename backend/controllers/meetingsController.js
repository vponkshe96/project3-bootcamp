//IMPORTING MODEL
const {
  models: { meetings },
} = require("../models/index");
//double destructuring syntax, doesn't work if I change it --> find out more

//DEFINING MIDDLEWARE FOR ROUTES

//get all meetings
const getAllMeetings = async (req, res) => {
  try {
    const allMeetings = await meetings.findAll();
    res.status(200).json(allMeetings);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

//get single meeting
const getMeeting = async (req, res) => {
  const { id } = req.params;
  const meeting = await meetings.findByPk(id);
  if (!meeting) {
    return res.status(404).json({ error: "No such meeting" });
  }
  res.status(200).json(meeting);
};

//create new meeting
const createMeeting = async (req, res) => {
  const { full_name, tag, meeting_date, meeting_notes } = req.body;
  try {
    const meeting = await meetings.create({
      full_name,
      tag,
      meeting_date,
      meeting_notes,
    });
    //inserting meeting data into db table via create sequelize method that takes in object
    //using object notation shorthand since key and value are same
    res.status(200).json(meeting);
    //gives back our userData in json format with success status code
  } catch (err) {
    res.status(400).json({ err: err.message });
    //gives us error message with bad request status code
  }
};

//delete meeting
const deleteMeeting = async (req, res) => {
  const { id } = req.params;
  const meeting = await meetings.findByPk(id);
  if (!meeting) {
    return res
      .status(404)
      .json({ error: "Cannot delete meeting as no such meeting exists!" });
  }
  try {
    await meetings.destroy({
      where: { id: id },
    });
    res.status(200).json(`Deleted meeting with id ${id}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update meeting
const updateMeeting = async (req, res) => {
  const { id } = req.params;
  const meeting = await meetings.findByPk(id);
  if (!meeting) {
    return res
      .status(404)
      .json({ error: "Cannot edit meeting as no such meeting exists!" });
  }
  try {
    //code for updating meeting
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllMeetings,
  getMeeting,
  createMeeting,
  deleteMeeting,
  updateMeeting,
};
