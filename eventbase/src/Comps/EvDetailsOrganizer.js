import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function EvDetailsOrganizer({ selectedEvent }) {
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);

  // 🔹 Fetch event details
  const showEventData = async () => {
    try {
      // setEvent(selectedEvent);
      let url = "http://localhost:8000/getEvent/" + selectedEvent._id;
      const res = await axios.get(url);
      setEvent(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedEvent) {
      showEventData();
    }
  }, [selectedEvent]);

  // ✅ Early return AFTER hooks
  if (!event) {
    return <p style={{ padding: "40px" }}>No event data found.</p>;
  }

  // ---------- STYLES ----------
  const page = {
    backgroundColor: "#ffffff",
    padding: "24px 40px 60px",
  };

  const container = {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "minmax(0, 2.3fr) minmax(0, 1fr)",
    gap: "24px",
  };

  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
    padding: "24px 28px",
  };

  const title = { fontSize: "22px", fontWeight: 700 };
  const label = { fontWeight: 600 };
  const row = { fontSize: "14px", marginBottom: "4px" };

  // ---------- UI ----------
  return (
    <div style={page}>
      <div style={container}>
        <div style={card}>
          <h2 style={title}>{event.title}</h2>

          <p style={row}><span style={label}>Date:</span> {event.date}</p>
          <p style={row}><span style={label}>Time:</span> {event.startTime} – {event.endTime}</p>
          <p style={row}><span style={label}>Location:</span> {event.location}</p>
          <p style={row}><span style={label}>Category:</span> {event.category}</p>
          <p style={row}><span style={label}>Visibility:</span> {event.visibility}</p>

          <p><span style={label}>Description:</span> {event.description}</p>
          <p><span style={label}>Max Participants:</span> {event.maxParticipants}</p>
        </div>

        <div>
          <button
            className="btn btn-success w-100 mb-2"
            onClick={() => navigate("/edit-event", { state: { event } })}
          >
            Edit Event
          </button>

          <button className="btn btn-danger w-100">
            Delete Event
          </button>
        </div>
      </div>
    </div>
  );
}
