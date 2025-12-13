import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function EditEvent() {
  let [eventId, setEventId] = useState();
  let [message, setMessage] = useState("");
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [category, setCategory] = useState("");
  let [date, setDate] = useState("");
  let [startTime, setStartTime] = useState("");
  let [endTime, setEndTime] = useState("");
  let [location, setLocation] = useState("");
  let [maxParticipants, setMaxParticipants] = useState(0);
  let [visibility, setVisibility] = useState("public");
  let [imageUrl, setImageUrl] = useState("");
  let [events, setEvents] = useState([]);
  let [selectedEvent, setSelectedEvent] = useState("");
  const [loading, setLoading] = useState(false);

  const page = { backgroundColor: "#ffffff", padding: "40px 40px 80px" };
  const cardWrap = { maxWidth: "900px", margin: "0 auto" };
  const card = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
    padding: "32px 40px 36px",
    textAlign: "center",
  };
  const titlesty = { fontSize: "24px", fontWeight: 700, marginBottom: "24px" };
  const textInput = {
    height: "40px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
  };
  const textarea = {
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
    minHeight: "140px",
    resize: "vertical",
  };
  const selectStyle = { ...textInput, paddingRight: "30px" };
  const radioRow = {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    fontSize: "14px",
    marginTop: "4px",
  };
  const createBtn = {
    backgroundColor: "#2B7A78",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 24px",
    fontWeight: 600,
    fontSize: "14px",
    marginTop: "12px",
  };
  const delBtn = {
    backgroundColor: "#c93030",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 24px",
    fontWeight: 600,
    fontSize: "14px",
    marginTop: "12px",
  };

  const deleteEvent = async (e) => {
  try {
    await axios.delete("http://localhost:8000/deleteEvent/" + eventId);
    setMessage("Event deleted successfully");
    fetchEvents();
    setEventId(null);
  } catch (error) {
    console.log(error);
  }
};

  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:8000/showEvents");
      setEvents(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);

  const loadEventDetails = async (id) => {
    try {
      const res = await axios.get("http://localhost:8000/getEvent/" + id);
      const ev = res.data;

      setEventId(ev.eventId);
      setTitle(ev.title);
      setDescription(ev.description);
      setCategory(ev.category);
      setDate(ev.date);
      setStartTime(ev.startTime);
      setEndTime(ev.endTime);
      setLocation(ev.location);
      setMaxParticipants(ev.maxParticipants);
      setVisibility(ev.visibility);
      setImageUrl(ev.imageUrl || "");
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async (e) => {
    try {
      let url = "http://localhost:8000/updateEvent/" + eventId;
      let updateData = {
        title: title,
        description: description,
        category: category,
        date: date,
        startTime: startTime,
        endTime: endTime,
        location: location,
        maxParticipants: maxParticipants,
        visibility: visibility,
        imageUrl: imageUrl
      };
      const response = await axios.put(url, updateData);
      setMessage(response.data);
    } catch (err) { console.log(err); }
  };

  return (
    <div style={page}>
      <div style={cardWrap}>
        <div style={card}>
          <h1 style={titlesty}>Edit Event</h1>
          {message && <p>{message}</p>}
          <div className="mb-4 text-start">
            <label className="form-label fw-bold">Select Event to Edit</label>
            <select
              className="form-select"
              value={selectedEventId}
              onChange={(e) => {
                setSelectedEventId(e.target.value);
                loadEventDetails(e.target.value);
              }}
              required
            >
              <option value="">-- Choose an event --</option>
              {events.map((ev) => (
                <option key={ev.eventId} value={ev.eventId}>
                  {ev.title} — {ev.date}
                </option>
              ))}
            </select>
          </div>

          <form onSubmit={onSubmit} encType="multipart/form-data">
            <div className="mb-3 text-start">
              <input
                type="text"
                name="name"
                placeholder="Event Name"
                className="form-control"
                style={textInput}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 text-start">
              <textarea
                name="description"
                placeholder="Description"
                className="form-control"
                style={textarea}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="row g-3 mb-3 text-start">
              <div className="col-md-3">
                <select
                  name="category"
                  className="form-select"
                  style={selectStyle}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Conference">Conference</option>
                  <option value="Meetup">Meetup</option>
                </select>
              </div>

              <div className="col-md-3">
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  style={textInput}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-3">
                <input
                  type="time"
                  name="startTime"
                  className="form-control"
                  style={textInput}
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-3">
                <input
                  type="time"
                  name="endTime"
                  className="form-control"
                  style={textInput}
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row g-3 mb-3 text-start">
              <div className="col-md-4">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="form-control"
                  style={textInput}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-4">
                <input
                  type="number"
                  name="maxParticipants"
                  placeholder="Max Participants"
                  className="form-control"
                  style={textInput}
                  value={maxParticipants}
                  onChange={(e) => setMaxParticipants(e.target.value)}
                  min="1"
                  required
                />
              </div>

              <div className="col-md-4">
                <div style={radioRow}>
                  <label>
                    <input
                      type="radio"
                      name="visibility"
                      value="public"
                      checked={visibility === "public"}
                      onChange={(e) => setVisibility(e.target.value)}
                    />{" "}
                    Public
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="visibility"
                      value="private"
                      checked={visibility === "private"}
                      onChange={(e) => setVisibility(e.target.value)}
                    />{" "}
                    Private
                  </label>
                </div>
              </div>
            </div>

            <div className="row g-3 align-items-center text-start">
              <div className="col-md-4">
                <input
                  type="file"
                  name="photo"
                  className="form-control"
                  style={textInput}
                  onChange={(e) => setImageUrl(e.target.files[0])}
                  accept="image/*"
                />
              </div>

              <div className="col-md-4"></div>

              <div className="col-md-4 d-flex justify-content-end">
                <button type="submit" style={createBtn} disabled={loading}>
                  {loading ? "Creating..." : "Create Event"}
                </button>
                <button onClick={deleteEvent} style={delBtn} disabled={loading}>
                  {loading ? "Deleting..." : "Delete Event"}
                </button>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}