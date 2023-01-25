import { useState } from "react";
import axios from "axios";

const MeetingForm = () => {
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [tag, setTag] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const meeting = { fullName, date, tag, notes };
    const response = await axios.post(
      `http://localhost:4444/api/meetings`,
      meeting
    );
    if (response.status === 200)
      alert("New meeting has been successfully added!");
    setFullName("");
    setDate("");
    setTag("");
    setNotes("");
  };

  return (
    <div>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Meeting</h3>

        <label>Full Name: </label>
        <input
          type="text"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          required
        />
        <label>Date: </label>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          required
        />
        <label>Tag: </label>
        <input
          type="text"
          onChange={(e) => setTag(e.target.value)}
          value={tag}
          required
        />
        <label>Notes: </label>
        <input
          type="text"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          required
        />
        <button>Add Meeting</button>
      </form>
    </div>
  );
};

export default MeetingForm;
