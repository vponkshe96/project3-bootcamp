const MeetingDetails = (props) => {
  const { meeting } = props;

  return (
    <div className="meeting-details">
      <h4>{meeting.full_name}</h4>
      <p>
        <strong> Date: </strong>
        {meeting.meeting_date}
      </p>
      <p>
        <strong> Tag: </strong>
        {meeting.tag}
      </p>
      <p>
        <strong>Notes: </strong>
        {meeting.meeting_notes}
      </p>
      <p>{meeting.createdAt}</p>
    </div>
  );
};

export default MeetingDetails;
