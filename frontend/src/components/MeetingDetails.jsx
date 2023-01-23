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
        <strong>Notes: </strong>
        {meeting.meeting_notes}
      </p>
      <p>{meeting.created_at}</p>
    </div>
  );
};

export default MeetingDetails;
