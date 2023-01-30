import axios from "axios";
import {formatDistanceToNow} from "date-fns";

const MeetingDetails = (props) => {
  const { meeting } = props;
  const handleClick = async () => {
    const response = await axios.delete(
      `http://localhost:4444/api/meetings/${meeting.id}`
    );

    if (response.status === 200)
      alert("Meeting has been successfully DELETED!");
    //refresing page
    window.location.reload(false);
  };
  return (
    <div className="meeting-details">
      <h4>{meeting.full_name}</h4>
      <p>
        <strong> Date: </strong>
        {meeting.meeting_date}
      </p>
      <br/>
      <p>
        <strong> Tag: </strong>
        {meeting.tag}
      </p>
      <br/>
      <p>
        <strong>Notes: </strong>
        {meeting.meeting_notes}
      </p>
      <br/>
      <p>
        {formatDistanceToNow(new Date(meeting.createdAt),
          { addSuffix: true })
        }
      </p> 
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default MeetingDetails;
