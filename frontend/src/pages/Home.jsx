import { useState, useEffect } from "react";
import axios from "axios";
import MeetingDetails from "../components/MeetingDetails";
import MeetingForm from "../components/MeetingForm";

const Home = () => {
  const [meetings, setMeetings] = useState(null);
  useEffect(() => {
    const fetchMeetings = async () => {
      const rawResponse = await axios.get("http://localhost:4444/api/meetings");
      //receive in json format coz that's the format the backend sends us the data, array of objects
      const response = rawResponse.data;
      setMeetings(response);
    };
    fetchMeetings();
  }, []);
  return (
    <div className="home">
      <div className="meetings">
        {meetings &&
          meetings.map((meeting) => (
            <MeetingDetails key={meeting.id} meeting={meeting} />
          ))}
      </div>
      <MeetingForm />
    </div>
  );
};

export default Home;
