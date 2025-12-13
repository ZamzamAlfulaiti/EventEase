import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function EditEvent() {
  const [eventId, setEventId] = useState("");
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [maxParticipants, setMaxParticipants] = useState("");
  const [visibility, setVisibility] = useState("public");
  const [imageUrl, setImageUrl] = useState("");
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("");
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

  // Fetch events list
  const fetchEvents = async () => {
    try {
      const res = await axios.get("http://localhost:8000/showEvents");
      setEvents(res.data || []);
    } catch (err) {
      console.error("fetchEvents error:", err);
      setMessage("Failed to load events.");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Load a single event's details by its eventId
  const loadEventDetails = async (id) => {
    if (!id) return;
    try {
      const res = await axios.get("http://localhost:8000/getEvent/" + id);
      const ev = res.data;
      if (!ev || ev.message) {
        setMessage(ev?.message || "Event not found");
        return;
      }
      setEventId(ev._id);
      setTitle(ev.title || "");
      setDescription(ev.description || "");
      setCategory(ev.category || "");
      setDate(ev.date ? ev.date.split("T")[0] : "");
      setStartTime(ev.startTime || "");
      setEndTime(ev.endTime || "");
      setLocation(ev.location || "");
      setMaxParticipants(ev.maxParticipants || "");
      setVisibility(ev.visibility || "public");
      setImageUrl(ev.imageUrl || "");
    } catch (err) {
      console.log("loadEventDetails error:", err);
      setMessage("Failed to load event details.");
    }
  };

  // Submit updates
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!eventId) {
      setMessage("Please select an event first.");
      return;
    }

    try {
      setLoading(true);
      const url = "http://localhost:8000/updateEvent/" + eventId;
      const updateData = {
        title,
        description,
        category,
        date,
        startTime,
        endTime,
        location,
        maxParticipants: Number(maxParticipants) || 0,
        visibility,
        imageUrl: imageUrl || null,
      };
      const response = await axios.put(url, updateData);
      setMessage(response.data?.message || "Event updated successfully");
      await fetchEvents();
      await loadEventDetails(eventId);
    } catch (err) {
      console.error("Update event error:", err);
      setMessage("Failed to update event. See console for details.");
    } finally {
      setLoading(false);
    }
  };

  // Delete event
  const delEvent = async () => {
    if (!eventId) {
      setMessage("Please select an event to delete.");
      return;
    }

    try {
      setLoading(true);
      const url = "http://localhost:8000/deleteEvent/" + eventId;
      const res = await axios.delete(url);
      setMessage(res.data?.message || "Event deleted successfully");
    } catch (error) {
      console.log("Delete error:", error);
      setMessage("Failed to delete event. See console.");
    } finally {
      setLoading(false);
    }
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
              value={selectedEvent}
              onChange={(e) => {
                const id = e.target.value;
                setSelectedEvent(id);
                setEventId(id);
                loadEventDetails(id);
                console.log("Selected ID:", id);
              }}
            >
              <option value="">-- Choose an event --</option>
              {events
                .filter(ev => ev && ev._id)
                .map((ev) => (
                  <option key={ev._id.toString()} value={ev._id}>
                    {ev.title || "Untitled Event"} — {ev.date || ""}
                  </option>
                ))}
            </select>
          </div>

          <form onSubmit={onSubmit}>
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
                />
              </div>

              <div className="col-md-3">
                <input
                  type="time"
                  className="form-control"
                  style={textInput}
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>

              <div className="col-md-3">
                <input
                  type="time"
                  className="form-control"
                  style={textInput}
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>

            <div className="row g-3 mb-3 text-start">
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  style={textInput}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location"
                />
              </div>

              <div className="col-md-4">
                <input
                  type="number"
                  className="form-control"
                  style={textInput}
                  value={maxParticipants}
                  onChange={(e) => setMaxParticipants(e.target.value)}
                  placeholder="Max Participants"
                  min="0"
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
              <div className="col-md-4"></div>

              <div className="col-md-4 d-flex justify-content-end gap-2">
                <button type="submit" style={createBtn} disabled={loading}>
                  {loading ? "Saving..." : "Save Changes"}
                </button>
                <button type="button" onClick={delEvent} style={delBtn} disabled={loading}>
                  {loading ? "Working..." : "Delete Event"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}