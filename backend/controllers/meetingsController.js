//IMPORTING MODEL
//MOVING IT FROM ROUTES AS CONTROLLERS WOULD HANDLE LOGIC FOR INTERACTIONS WITH DB
const {
  models: { meetings },
} = require("../models/index");
//double destructuring syntax, doesn't work if I change it
//Find out more

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
//could consider optimizing it later by manipulating how results are displayed

//get single meeting
const getMeeting = async (req, res) => {
  try {
    const { id } = req.params;
    const allMeetings = await meetings.findByPk(id);
    res.status(200).json(allMeetings);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
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

//update meeting

module.exports = { getAllMeetings, getMeeting, createMeeting };
